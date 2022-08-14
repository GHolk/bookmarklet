class PttManUrl {
    constructor() {
        return this._constructor(...arguments)
    }
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
        return doc.querySelectorAll('.m-ent a')[n - 1].href
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
            url = await this.nthInUrl(n, url)
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
    static async browserUi() {
        const o = new this()

        if (!o.checkCors()) {
            alert(`you need to run this bookmarklet under
https://www.ptt.cc/`)
            return
        }

        const input = prompt('please input board name and path')
        let board
        let path

        try {
            [board, path] = o.parseBoardManPath(input)
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
            alert(`format error, the path should be one of following:
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

        return o.showLoadEffect(async () => {
            let url
            try {
                url = await o.lookup(board, path)
            }
            catch (error) {
                url = null
                alert(error)
            }
            if (url) return window.open(url)
        })
    }
    checkCors() {
        const ptt = /^https:..www.ptt.cc(\/|$)/
        return ptt.test(window.location.href)
    }
    async showLoadEffect(todo) {
        const body = document.body
        const {cursor, filter} = body.style
        Object.assign(body.style, {
            cursor: 'progress',
            filter: 'brightness(0.8)'
        })
        const result = await todo()
        Object.assign(body.style, {cursor, filter})
        return result
    }
}
if (typeof window == 'object' && typeof GM == 'undefined') {
    PttManUrl.browserUi()
}

/*
key-C-w
【精華文章】     ◆  │ 　　　　│ 看板相關│ 　　　　│ 　　　　│                  
我在哪？z-8-8-2
PttNewhand
  8. ◆  ║ │ 【常見問題】             問題/答案│ ║ 
   8. ◆  │ 　　　　│ 看板相關│ 　　　　│ 　　　　│ 
    2. ◇  『黑洞處理方式』

index
  8.  8.  2. ◇  『黑洞處理方式』

article
│  文章代碼(AID): #1YxpVlsV (PttNewhand) [ptt.cc] [問題] 美國申請帳號       │ 

PttNewhand. 8. 8. 2
PttNewhand 8. 8. 2
PttNewhand-z-8-8-2
8. 8. 2 (PttNewhand)
z-8-8-2 (PttNewhand)
*/
