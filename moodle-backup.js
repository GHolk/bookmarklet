
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
        return document.getElementById('logobox').textContent
    }
    *extractAllFile(document) {
        const tableRowNonEmptySelector = '#region-main-box tr[class]'
        for (const tr of document.querySelectorAll(tableRowNonEmptySelector)) {
            const url = tr.querySelector('a').href
            let description = tr.querySelector('td:last-child').textContent
            description = description.trim()
            yield {url, description}
        }
    }
    async $fetchCourseResource(id) {
        const url = `https://moodle.ncku.edu.tw/course/resources.php?id=${id}`
        return await this.$fetch(url)
    }
    sleep(second = this.sleepInterval) {
        return new Promise(wake => setTimeout(wake, second*1000))
    }
    async run() {
        this.runInit()
        for (const id of this.extractAllCourseId(document)) {
            const resource = await this.$fetchCourseResource(id)
            const title = this.extractTitle(resource)
            await this.sleep()
            for (const file of this.extractAllFile(resource)) {
                this.download(file.url)
                await this.sleep()
            }
        }
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
    downloadInit() {
        const anchor = document.createElement('a')
        anchor.id = 'moodle-crawler-download'
        anchor.setAttribute('download', '')
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
    bookmarkletPrompt() {
        let second = prompt('download file interval second:')
        this.assert(typeof second == 'string', 'user abrupt')
        second = Number(second)
        this.assert(second > 0, 'second should be positive')
        this.sleepInterval = Number(second)
        this.run()
    }
    assert(test, errorMessage, CustomError = Error) {
        if (!test) throw new CustomError(errorMessage)
    }
}

const moodleCrawler = new MoodleCrawler()
moodleCrawler.bookmarkletPrompt()

