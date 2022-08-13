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
        let scan
        // z-10-4-4
        if (scan = path.match(/^z-?(\d+(-\d+)+)/)) {
            this.assert(path.slice(0, 2) == 'z-')
            const list = scan[0].split('-').slice(1).map(x => Number(x))
            this.assert(!list.some(x => Number.isNaN(x)))
            return list
        }
        // 5. 20.  8.
        else if (scan = path.match(/^(\s*\d+\s*\.?)+/)) {
            return scan[0].match(/\d+/g).map(x => Number(x))
        }
        else throw new Error('unknown man path')
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
    parseFullPath(string) {
        /* 8. 8. 2 (PttNewhand)
           z-8-8-2 (PttNewhand) */
        const regexpTail = /\s*\(([\w-]+)\)\s*$/
        const scanTail = string.match(regexpTail)
        if (scanTail) {
            const board = scanTail[1]
            const path = string.replace(regexpTail, '')
            return [board, path]
        }

        /* PttNewhand. 8. 8. 2
           PttNewhand 8. 8. 2
           PttNewhand z-8-8-2 */
        const regexpLead = /^\s*([\w-]{2,})\s*(\.|\s)\s*/
        const scanLead = string.match(regexpLead)
        if (scanLead && scanLead[1] != 'z' && !/^\d+$/.test(scanLead)) {
            const board = scanLead[1]
            let path = string.replace(regexpLead, '')
            if (scanLead[2] == '-z-') path = 'z-' + path
            return [board, path]
        }
        throw new Error('unknown board format')
    }
    static async browserUi() {
        const o = new this()
        const input = prompt('please input board name and path')
        let board
        let path

        try {
            [board, path] = o.parseFullPath(input)
        }
        catch (formatError) {
            board = null
        }

        if (!board) {
            const urlRegexp = /https:..www.ptt.cc.(?:man|bbs).([\w-]+)/
            let scan
            if (scan = window.location.href.match(urlRegexp)) {
                board = scan[1]
                path = input
            }
        }

        if (!board) {
            alert(`format error, the path should be one of following:
PttNewhand z-8-8-2
PttNewhand-z-8-8-2
PttNewhand 8. 8. 2
PttNewhand. 8. 8. 2
8. 8. 2 (PttNewhand)
z-8-8-2 (PttNewhand)
`)
            return
        }

        const url = await o.lookup(board, path)
        window.open(url)
    }
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
