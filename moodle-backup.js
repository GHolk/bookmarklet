
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
        this.downloadInit()
        for (const id of this.extractAllCourseId(document)) {
            const resource = await this.$fetchCourseResource(id)
            const title = this.extractTitle(resource)
            for (const file of this.extractAllFile(resource)) {
                this.downloadBlob(file.url)
                await this.sleep()
            }
        }
        this.downloadDestruct()
    }
    downloadInit() {
        const iframe = document.createElement('iframe')
        iframe.name = 'moodle-crawler-download-frame'
        iframe.style.display = 'none'
        document.body.appendChild(iframe)
        this.downloadFrame = iframe

        const anchor = document.createElement('a')
        anchor.id = 'moodle-crawler-download'
        anchor.setAttribute('download', '')
        anchor.target = 'moodle-crawler-download-frame'
        document.body.appendChild(anchor)
        this.downloadNode = anchor
    }
    async downloadBlob(url) {
        const response = await this.fetch(url)
        const disposition = response.headers.get('content-disposition')

        // fetch api decode http header as ascii, convert to utf8
        let filename = disposition.match(/filename="(.*)"/)[1]
        filename = this.binaryStringToUtf8(filename)

        const blob = await response.blob()
        const file = new File([blob], filename)
        const blobUrl = URL.createObjectURL(file)
        this.download(blobUrl, filename)
        this.sleep().then(() => URL.revokeObjectURL(file))
    }
    binaryStringToUtf8(raw) {
        const u8 = this.binaryStringToUint8Array(raw)
        return this.textDecoder.decode(u8)
    }
    binaryStringToUint8Array(raw) {
        const rawLength = raw.length
        const array = new Uint8Array(new ArrayBuffer(rawLength))
        for (let i=0; i<rawLength; i++) {
            array[i] = raw.charCodeAt(i)
        }
        return array
    }
    downloadPopup(url) {
        return window.open(url)
    }
    download(url, name) {
        this.downloadNode.href = url
        this.downloadNode.download = name
        this.downloadNode.click()
    }
    downloadDestruct() {
        this.downloadNode.remove()
        this.downloadNode = null

        this.downloadFrame.remove()
        this.downloadFrame = null
    }
    bookmarkletPrompt() {
        this.sleepInterval = Number(prompt('download file interval second:'))
        this.run()
    }
}

const moodleCrawler = new MoodleCrawler()
moodleCrawler.bookmarkletPrompt()

