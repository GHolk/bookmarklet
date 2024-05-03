// ==UserScript==
// @name homeloader
// @namespace http://gholk.github.io
// @description download and archive webpage
// @match https://home.gamer.com.tw/*
// @version 0.6.0
// @license AGPLv3
// @grant GM_download
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_webextSendMessage
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
        })
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
    }
}
const gl = new GholkLib()

const toolboxId = 'gholk-homeloader-toolbox'

const config = {
    current: {},
load() {
    let match = GM_getValue('match', null)
    if (!match) {
        match =
  {
    "home.gamer.com.tw/artwork.php": {
      "image-selector": ";gl.$$('img.gallery-image, .reply-box article img, .image-setting img', root).filter(e=>!/https:.*.bahamut.com.tw.(editor.emotion|icon_videoplayer)/.test(e.src))",
      "hook-download-pre": "gl.$$('#reply_expand, .view-all-btn').forEach(e => e.click())",
      "hook-lazy-load": undefined,
      "hook-info": "const a=gl.$('.article-content.title a.caption-text',root);if(a){const js=a.getAttribute('onclick');const parm=js.match(/^.*\\((.*)\\).*$/)[1];const l=JSON.parse(`[${parm.replace(/'/g,'\"')}]`);[info.author,info.folder]=l}",
      "action": {
        "next": "gl.$$('[data-button=changePage]').slice(-1)[0].click()"
      },
      "wait-touch": true,
      "style": "#gholk-homeloader-toolbox button { border: 1px outset; padding: 0.2em; background: white; height:3em; display:block; margin-bottom:0.5em; margin-left:auto;} #gholk-homeloader-toolbox { bottom:8em; top: unset; } #gholk-homeloader-toolbox button[disabled] { color: gray; font-weight; bold; }"
    }
  }
        GM_setValue('match', match)
    }
    const u = window.location.href
    for (const re in match) {
        if (u.indexOf(re) == -1) continue
        this.current = match[re]
        this.currentKey = re
        this.data = GM_getValue(`data/${re}`, {})
        break
    }
}
}
config.load()

function addBox() {
    const aside = gl.create('aside')
    aside.id = toolboxId
    const style = gl.create('style', aside)
    style.textContent = `
#${toolboxId} {
position: fixed;
right: 1em;
top: 3em;
z-index: 120;
}
#${toolboxId}.download-already button.download {
background: lightgray;
}
`
    const c = config.current
    if (c.style) style.textContent += c.style
    if (c.action) {
        for (const n in c.action) {
            let s = c.action[n]
            action[n] = () => eval(s)
        }
    }
    const d = config.data; {
        let o = d[`download/${window.location.href}`]
        if (o && o.file) aside.classList.add('download-already')
    }
    for (const n in action) {
        const b = gl.create('button', aside)
        b.textContent = n
        b.onclick = action[n]
        b.classList.add(n)
    }
    document.body.appendChild(aside)
}

function waitTouch(x) {
    let event
    if (!x) {
        x = window
        event = 'touchend'
    }
    if (x.nodeName == 'BUTTON') event = 'click'
    return new Promise(ok => {
        x.addEventListener(event, e=>ok(), {once: true})
    })
}

const action = {
    async download(event) {
        const button = event.target
        button.disabled = true
        const imageList = []
        const basename = `hl-${Date.now()}`
        const c = config.current
        if (c['hook-download-pre']) eval(c['hook-download-pre'])
        let html = serializeHtml(edit)
        const blob = new Blob([html], {type: 'text/html'})
        const bu = URL.createObjectURL(blob)
        gl.download(bu, basename+'.html')
        for (let i=0; i<imageList.length; i+=2) {
            if (c['wait-touch']) await waitTouch()
            const [u, f] = [imageList[i], imageList[i+1]]
            await GmDownloadP(u, f)
        }
        if (c['wait-touch']) await waitTouch()
        button.disabled = false
        markDownload(window.location.href, {file: basename + '.html'})
        button.parentNode.classList.add('download-already')
        await gl.sleep(10)
        URL.revokeObjectURL(bu)

        async function edit(root) {
            const m = gl.create('meta')
            gl.$(`#${toolboxId}`, root).remove()
            m.setAttribute('property', 'gholk:info')
            gl.$('head', root).appendChild(m)

            if (c['hook-lazy-load']) eval(c['hook-lazy-load'])
            else gl.$$('img[data-src]', root).forEach(e => {
                if (!e.src) e.src = e.dataset.src
            })

            const q = c['image-selector']
            let images
            if (q.charAt(0) == ';') images = eval(q)
            else images = gl.$$(q, root)
            let i = 1
            for (const p of images) {
                imageList.push(...localizeImage(p, `${basename}-${i}`))
                i++
            }

            const info = {}
            info.url = String(window.location.href)
            info.image = imageList
            if (c['hook-info']) eval(c['hook-info'])
            m.content = dictToQs(info)
        }
        function localizeImage(e, uniq) {
            const f = uniq
            // move lazy logic to hook-download-post
            let src = e.src
            const u = new URL(src)
            const scan = u.pathname.match(/\.\w+$/)
            let sfx = scan ? scan[0] : '.jpg'
            e.src = f+sfx
            return [String(u), f+sfx]
        }
    }
}

function GmDownloadP(u, f) {
    return new Promise((ok,err) => {
        GM_download({
            url: u,
            name: f,
            onload: ok,
            onerror: err
        })
    })
}

function serializeHtml(edit) {
function doctypeToString(node = document.doctype) {
    if (!node) return ''
    return '<!DOCTYPE ' + node.name
        + (node.publicId ? ` PUBLIC "${node.publicId}"` : '')
        + (!node.publicId && node.systemId ? ' SYSTEM' : '')
        + (node.systemId ? ` "${node.systemId}"` : '')
        + '>' + '\n'
}
function cleanCopy(root) {
    const deep = true
    const copy = root.cloneNode(deep)
    copy.querySelectorAll('iframe[src ^= moz-extension')
        .forEach(e => e.remove())
    // fixRelativeUrl(copy)
    if (edit) edit(copy)
    return copy
}
function fixEncode(root) {
    if (document.characterSet == 'UTF-8') return
    const list = root.querySelectorAll(
        'meta[http-equiv=content-type],' +
        'meta[http-equiv=Content-Type],' +
        'meta[charset]'
    )
    if (list.length == 0) {
        if (!confirm('not UTF-8 and no charset tag found, add one?')) return
        const encodeNode = document.createElement('meta')
        encodeNode.setAttribute('charset', 'utf-8')
        encodeNode.dataset.gholkOriginalCharset = ''
        const head = root.querySelector('head')
        if (head) head.prepend(encodeNode)
        else root.prepend(encodeNode)
    }
    else {
        list.forEach(encodeNode => {
            if (encodeNode.hasAttribute('charset')) {
                const original = encodeNode.getAttribute('charset')
                encodeNode.dataset.gholkOriginalCharset = original
                encodeNode.setAttribute('charset', 'utf-8')
            }
            else if (encodeNode.hasAttribute('http-equiv')) {
                encodeNode.dataset.gholkOriginalContentType = encodeNode.content
                encodeNode.content = 'text/html; charset=UTF-8'
            }
            else alert(`unknown error while fix encode node: ${encodeNode.outerHTML}`)
        })
    }
}
function fixRelativeUrl(root) {
    let base = root.querySelector('base')
    if (base) {
        const relative = base.getAttribute('href')
        base.dataset.gholkOriginalHref = relative
        base.setAttribute('href', base.href)
    }
    else {
        base = document.createElement('base')
        base.href = root.baseURI
        base.dataset.gholkOriginalHref = ''
        let head = root.querySelector('head')
        if (head) head.prepend(base)
        else root.prepend(base)
    }
    /*
      copy.querySelectorAll('[href], [src]').forEach(e => {
      const abs = /^\w+:\/\//
      if ('href' in e && !abs.test(e.getAttribute('href'))) {
      e.setAttribute('href', e.href)
      }
      else if ('src' in e && !abs.test(e.getAttribute('src'))) {
      e.setAttribute('src', e.src)
      }
      })
    */
}
const html = doctypeToString() + cleanCopy(document.documentElement).outerHTML
    return html
}

function dictToQs(o) {
    const qs = new URLSearchParams()
    for (const k in o) {
        let v = o[k]
        if (Array.isArray(v)) v = v.join('\t')
        else v = String(v)
        qs.append(k, v)
    }
    return String(qs).replace(/&/g, ';')
}

async function markDownload(url, o) {
    config.data[`download/${url}`] = o
    GM_setValue(`data/${config.currentKey}`, config.data)
}

addBox()

function savez() {
    const c = config.current
    const root = document.documentElement
    {
        const e = c["hook-lazy-load"]
        if (e) eval(e)
        else gl.$$('img[data-src]').forEach(e => {
            if (!e.src) e.src = e.dataset.src
        })
    }
    eval(c['hook-download-pre'] || 'true')
    let img
    {
        const e = c['image-selector']
        if (e.charAt(0) == ';') img = eval(e)
        else img = gl.$$(e)
    }
    gl.$$('img').forEach(p => {
        if (img.indexOf(p) == -1) p.remove()
    })
    GM_webextSendMessage('{e4db92bc-3213-493d-bd9e-5ff2afc72da6}', 'save-page')
}

function markDownloadSavez() {
    markDownload(window.location.href, {
        type: 'single-file',
        file: true
    })
    gl.$('#gholk-homeloader-toolbox').classList.add('download-already')
}
