
var jumperTranslator = {
    urlScheme: null,
    decode: decodeURIComponent,
    translate: function (url) {
        const scan
        if (scan = url.match(this.urlScheme)) {
            return this.decode(scan[1])
        }
        else return null
    },
    modifyAnchor: function (anchor) {
        const newUrl = this.translate(anchor.href)
        if (typeof newUrl == 'string') anchor.href = newUrl
        return anchor
    },
    modifyAllAnchor: function () {
        for (const anchor of document.querySelectorAll('a')) {
            this.modifyAnchor(anchor)
        }
    },
    promptUrlScheme: function () {
        const urlRegexpString = prompt('url scheme regexp')
        this.urlScheme = new RegExp(urlRegexpString)
    }
}

jumperTranslator.promptUrlScheme()
