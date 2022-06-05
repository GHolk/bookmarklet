class FacebookImageDownloader {
    static run() {
        const downloader = new this()
        downloader.init()
    }
    init() {
        this.end = false
        this.url = null
        this.watch()
    }
    download(...args) {
        return this.downloadFetch(...args)
    }
    async downloadFetch(url) {
        const res = await fetch(url)
        const blob = await res.blob()
        const blobUrl = URL.createObjectURL(blob)
        this.downloadBookmarklet(blobUrl)
        await this.sleep(0.2)
        URL.revokeObjectURL(blobUrl)
    }
    downloadTridactyl(url) {
        this.tri.messaging.message(
            'download_background', 'downloadUrl', url , false
        )
    }
    downloadBookmarklet(url, name = Date.now().toString()) {
        const a = document.createElement('a')
        a.href = url
        a.download = name
        document.body.appendChild(a)
        a.click()
        a.remove()
    }
    sleep(second) {
        return new Promise(wake => setTimeout(wake, second*1000))
    }
    async watch() {
        while (!this.end) {
            await this.sleep(0.2)
            const url = window.location.href
            if (url == this.url) continue

            this.url = url
            const image = document.querySelectorAll('[role = main] img')
            if (image.length != 1) alert('find more than 1 image')
            else this.download(image[0].src)
        }
    }
    static runTridactyl() {
        if (!tri.FacebookImageDownloader) {
            tri.FacebookImageDownloader = FacebookImageDownloader
        }
        if (tri.FacebookImageDownloader.instance) {
            tri.FacebookImageDownloader.instance.end = true
            tri.FacebookImageDownloader.instance = null
        }
        else {
            tri.FacebookImageDownloader.instance = new tri.FacebookImageDownloader()
            tri.FacebookImageDownloader.instance.init()
        }
    }
}
FacebookImageDownloader.run()
