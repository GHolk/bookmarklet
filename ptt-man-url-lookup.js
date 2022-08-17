class PttManUrl {
    constructor() {
        return this._constructor(...arguments)
    }
    // use dom parser api
    _constructor() {
        this.domParser = new DOMParser()
    }
    assert() {
        return console.assert(...arguments)
    }
    parseHtml(html) {
        return this.domParser.parseFromString(html, 'text/html')
    }
    parseManPath(path) {
        const list = path.match(/\d+/g).map(x => Number(x))
        this.assert(list.length > 0 && !list.some(x => Number.isNaN(x)))
        return list
    }
    // use fetch api
    async fetchDoc(url) {
        const response = await fetch(url)
        const html = await response.text()
        return this.parseHtml(html)
    }
    // use dom parser api
    async nthInUrl(n, url) {
        const doc = await this.fetchDoc(url)
        const anchor = doc.querySelectorAll('.m-ent a')[n - 1]
        return anchor.getAttribute('href')
    }
    boardToUrl(board) {
        return `https://www.ptt.cc/man/${board}/index.html`
    }
    static async lookup(board, path) {
        const o = new this()
        return await o.lookup(board, path)
    }
    async lookup(board, pathString) {
        const path = this.parseManPath(pathString)
        const base = this.boardToUrl(board)
        let url = base
        for (const n of path) {
            const relative = await this.nthInUrl(n, url)
            const u = new URL(relative, url)
            url = u.href
        }
        return url
    }
    parseBoardManPath(string) {
        /* 8. 8. 2 (PttNewhand)
           z-8-8-2 (PttNewhand)
           z-8-8-2 PttNewhand */
        const regexpTail = /\s*\(?([\w-]+)\)?\s*$/
        const scanTail = string.match(regexpTail)
        if (scanTail) {
            const board = scanTail[1]
            const path = string.replace(regexpTail, '')
            if (!board.slice(1).match(/^[\d-]*$/)) return [board, path]
        }

        /* PttNewhand. 8. 8. 2
           PttNewhand 8. 8. 2
           PttNewhand z-8-8-2 */
        const regexpLead = /^\s*([\w-]{2,})\s*(\.|\s)\s*/
        const scanLead = string.match(regexpLead)
        if (scanLead && scanLead[1] != 'z' && !/^\d+$/.test(scanLead)) {
            const board = scanLead[1]
            const path = string.replace(regexpLead, '')
            if (!board.match(/^\d+$/)) return [board, path]
        }
        throw new Error('unknown board format')
    }
    async browserUi() {
        if (!this.checkCors()) {
            this.alert(`you need to run this bookmarklet under
https://www.ptt.cc/`)
            return
        }
        const input = await this.prompt('please input board name and path')
        let board
        let path
        try {
            [board, path] = this.parseBoardManPath(input)
        }
        catch (formatError) {
            board = null
        }
        if (!board) {
            const urlRegexp = /^https:..www.ptt.cc.(?:man|bbs).([\w-]+)/
            let scan
            if (scan = window.location.href.match(urlRegexp)) {
                board = scan[1]
                path = input
            }
        }
        if (!board) {
            await this.alert(`format error, the path should be one of following:
8. 8. 2 (PttNewhand)
z-8-8-2 (PttNewhand)
z-8-8-2 PttNewhand
PttNewhand. 8. 8. 2
PttNewhand 8. 8. 2
PttNewhand z-8-8-2
z-8-8-2
8. 8. 2
`)
            return
        }
        let url
        for (const done of this.showLoadEffect()) {
            try {
                url = await this.lookup(board, path)
            }
            catch (error) {
                url = null
                this.alert(error)
            }
        }
        if (url) return this.open(url)
    }
    checkCors() {
        const ptt = /^https:..www.ptt.cc(\/|$)/
        return ptt.test(window.location.href)
    }
    open(url) {
        return window.open(url)
    }
    *showLoadEffect() {
        const body = document.body
        const {cursor, filter} = body.style
        Object.assign(body.style, {
            cursor: 'progress',
            filter: 'brightness(0.8)'
        })
        yield
        Object.assign(body.style, {cursor, filter})
    }
    async prompt(question) {
        return prompt(question)
    }
    async alert(message) {
        alert(message)
    }
    static run(withThis) {
        const o = new this()
        return withThis(o)
    }
}

if (typeof tri == 'object') {
    tri.PttManUrl = class extends PttManUrl {
        async triUi(input) {
            this.inputFullPath = input
            return await this.browserUi()
        }
        async prompt(question) {
            return this.inputFullPath
        }
        async alert(message) {
            await tri.controller.acceptExCmd('m ' + message)
        }
        open(url) {
            return url
        }
        checkCors(url) {
            return true
        }
    }
} else if (typeof window == 'object' && typeof GM == 'undefined') {
    PttManUrl.run(o => o.browserUi())
}
