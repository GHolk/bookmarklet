
class MoodleCrawler {
    constructor() {
        this.sleepInterval = 3
        this.domParser = new DOMParser()
        this.textDecoder = new TextDecoder('UTF-8')
    }
    async fetch(url) {
        return await fetch(url, {credentials: 'same-origin'})
    }
    async $fetch(url) {
        const response = await this.fetch(url)
        const html = await response.text()
        const dom = this.domParser.parseFromString(html, 'text/html')
        return dom
    }
    *extractAllCourseId(document) {
        const anchorList = document.querySelectorAll('.block_course_list a')
        for (const anchor of anchorList) {
            const url = new URL(anchor.href)
            yield url.searchParams.get('id')
        }
    }
    extractTitle(document) {
        return document.getElementById('logobox').textContent.trim()
    }
    *extractFolder(url) {
        const folder = this.$fetch(url)
        const fileList = folder.then(dom => {
            return dom.querySelectorAll('.fp-filename-icon a')
        })
        let finish = false
        let index = 0
        while (!finish) {
            yield fileList.then(anchorList => {
                let anchor = null
                if (index < anchorList.length) {
                    anchor = anchorList[index]
                    index++
                }
                if (index >= anchorList.length) finish = true
                return {url: anchor.href}
            })
        }
    }
    *extractByType(tr) {
        const url = tr.querySelector('a').href
        let description = tr.querySelector('td:last-child').textContent
        description = description.trim()
        if (url.includes('/mod/resource/view.php')) {
            yield {url,description}
        }
        else if (url.includes('/mod/folder/view.php')) {
            yield* this.extractFolder(url)
        }
        else if (url.includes('/mod/page/view.php') ||
                 url.includes('/mod/url/view.php')) {
            yield {url, description}
        }
        else console.error(`unknown file type: ${url}`)
    }
    *extractAllFile(document) {
        const tableRowNonEmptySelector = '#region-main-box tr[class]'
        for (const tr of document.querySelectorAll(tableRowNonEmptySelector)) {
            yield* this.extractByType(tr)
        }
    }
    async $fetchCourseResource(id) {
        const url = `https://moodle.ncku.edu.tw/course/resources.php?id=${id}`
        return await this.$fetch(url)
    }
    sleep(second = this.sleepInterval) {
        return new Promise(wake => setTimeout(wake, second*1000))
    }
    getLastCourseId() {
        return localStorage.getItem('moodle-backup-current-id')
    }
    setLastCourseId(id) {
        localStorage.setItem('moodle-backup-current-id', id)
    }
    removeLastCourseId() {
        localStorage.removeItem('moodle-backup-current-id')
    }
    async run() {
        this.runInit()

        let lastCourseId = this.getLastCourseId()
        let alreadyDownload
        if (lastCourseId) alreadyDownload = true
        else alreadyDownload = false

        for (const id of this.extractAllCourseId(document)) {
            if (alreadyDownload) {
                if (lastCourseId == id) alreadyDownload = false
                else continue
            }
            this.setLastCourseId(id)
            const resource = await this.$fetchCourseResource(id)
            const title = this.extractTitle(resource)
            await this.sleep()
            for (let file of this.extractAllFile(resource)) {
                if (file && file.then) file = await file
                if (file) {
                    this.download(file.url)
                    await this.sleep()
                }
            }
        }
        this.removeLastCourseId()
        this.runDestruct()
    }
    runInit() {
        this.downloadInit()
        this.preventExitInit()
    }
    runDestruct() {
        this.downloadDestruct()
        this.preventExitDestruct()
    }
    isFirefox() {
        return navigator.userAgent.match(/firefox/i)
    }
    downloadInit() {
        const anchor = document.createElement('a')
        if (!this.isFirefox()) anchor.setAttribute('download', '')
        anchor.setAttribute('target', '_blank')
        document.body.appendChild(anchor)
        this.downloadNode = anchor
    }
    download(url) {
        this.downloadNode.href = url
        this.downloadNode.click()
    }
    downloadDestruct() {
        this.downloadNode.remove()
        this.downloadNode = null
    }
    preventExitInit() {
        window.onbeforeunload = this.preventExit
    }
    preventExit(closeEvent) {
        return 'moodle backup is not finish, do you want to exit?'
    }
    preventExitDestruct() {
        window.onbeforeunload = null
    }
    async bookmarkletPrompt() {
        let second = prompt('download file interval second:')
        this.assert(typeof second == 'string', 'user abrupt')
        second = Number(second)
        this.assert(second > 0, 'second should be positive')
        this.sleepInterval = Number(second)
        await this.run()
        alert('download finish')
    }
    assert(test, errorMessage, CustomError = Error) {
        if (!test) throw new CustomError(errorMessage)
    }
}

class MoodleCrawlerDebug extends MoodleCrawler {
    constructor() {
        super()
        this.sleepInterval = 0.5
    }
    extractTitle(document) {
        const title = super.extractTitle(document)
        this.currentCourseTitle = title
    }
    download(url) {
        console.log(this.currentCourseTitle, url)
    }
}
const moodleCrawler = new MoodleCrawler()
moodleCrawler.bookmarkletPrompt()
