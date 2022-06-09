// ==UserScript==
// @name facebook image downloader
// @namespace http://gholk.github.io
// @description download images on facebook when viewing them. when url change, this script will find the image and download it with timestamp filename. 
// @match https://nothing.example
// @version 1.0.0
// @license GPLv3
// @grant none
// @bookmarklet true
// ==/UserScript==

class GholkLib {
    constructor() {
        return this._constructor(...arguments)
    }
    _constructor() {}
    sleep(second) {
        return new Promise(wake => setTimeout(wake, second*1000))
    }
    $(q, root = document) {
        return root.querySelector(q)
    }
    $$(q, root = document) {
        return Array.from(root.querySelectorAll(q))
    }
    create(name, parent) {
        const node = document.createElement(name)
        if (parent) parent.appendChild(node)
        return node
    }
    pipe(value, ...fn) {
        return fn.reduce((v, f) => f(v), value)
    }
    bindr(object, thing, ...args) {
        return this.bind.call(object, thing, ...args)
    }
    bind(thing, ...args) {
        let f
        if (typeof thing == 'function') f = thing
        else f = object[thing]
        return f.bind(this, ...args)
    }
    async keepTry(fn, interval) {
        let result = fn()
        while (!result) {
            await this.sleep(interval)
            result = fn()
        }
        return result
    }
    defer() {
        const defer = {}
        defer.promise = new Promise((ok, reject) => {
            defer.ok = ok
            defer.reject = reject
        })
        return defer
    }
    defm(klass, name, fn) {
        Object.defineProperty(klass.prototype, name, {
            value: fn,
            writable: true,
            configurable: true,
            enumerable: false
        })
    }
    patch() {
        const {pipe, bindr} = this
        this.defm(Object, 'bind', this.bind)
        this.defm(Object, 'pipe', function pipe(...fn) {
            /* let value = this
            for (C of [String, Number, BigInt, Boolean, Symbol]) {
                if (this instanceof C) value = this.valueOf()
            } */
            let value
            switch (this.constructor) {
                case String:
                case Number:
                case window.BigInt:
                case Boolean:
                case window.Symbol:
                    value = this.valueOf()
                    break
                default:
                    value = this
            }
            return pipe(value, ...fn)
        })
        this.defm(Object, 'toArray', function toArray() {
            return Array.from(this)
        }
    }
    depatch() {
        for (const name of 'bind pipe toArray'.split(' ')) {
            delete Object.prototype[name]
        }
    }
    buttonClick({style, parent = document.body, text, click}) {
        const button = this.create('button', parent)
        button.textContent = text
        const styleDefault = {
            position: 'fixed',
            bottom: 0,
            right: 0,
            margin: '1em'
        }
        Object.assign(button.style, styleDefault, style)

        button.onclick = click
        return button
    }
    download(url, name = Date.now().toString()) {
        const a = this.create('a', document.body)
        a.href = url
        a.download = name
        a.click()
        a.remove()
    }
}

class FacebookImageDownloader extends GholkLib {
    static run() {
        const downloader = new this()
        downloader.init()
    }
    init() {
        this.end = false
        this.url = null
        this.showStopButton()
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
    downloadBookmarklet(...args) {
        super.download(...args)
    }
    showStopButton() {
        this.buttonClick({
            text: 'end image downloader',
            click: event => {
                this.end = true
                event.target.remove()
            }
        })
    }
    async watch() {
        await this.keepTry(() => {
            if (this.end) return true
            const url = window.location.href
            if (url != this.url) {
                this.url = url
                const image = this.$$('[role = main] img')
                if (image.length != 1) alert('find more than 1 image')
                else this.download(image[0].src)
            }
        }, 0.2)
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
