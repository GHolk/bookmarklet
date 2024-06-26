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
    var o = {}
    if (typeof option != undefined && option && option != window.option) {
        o = option
    }
    if (!o['base-url-no']) fixRelativeUrl(copy)
    if (!o['script-keep']) disableScript(copy)
    fixEncode(copy)
    return copy
}
function disableScript(root) {
    const scriptList = root.querySelectorAll("script")
    for (const s of scriptList) {
        if (s.src) {
            const url = s.getAttribute("src")
            s.removeAttribute("src")
            s.dataset.gholkOriginalSrc = url
        }
        if (s.innerHTML) {
            const code = s.innerHTML
            s.innerHTML = ""
            s.dataset.gholkOriginalCode = "code-in-next-comment"
            const comment = document.createComment("")
            comment.data = code.replace(/&/g, "&amp;").replace(/-->/g, "&m2arr;")
            s.after(comment)
        }
    }
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
    const option = root.querySelector('meta[property="gholk:base"][content=nop]')
    if (option) {
        option.remove()
        return
    }
    let base = root.querySelector('base')
    if (base) {
        // base.href could be relative url. set it to absolute url.
        const relative = base.getAttribute('href')
        base.dataset.gholkOriginalHref = relative
        base.setAttribute('href', base.href)
    }
    else if (window.location.protocol == 'data:') true
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
const blob = new Blob([html], {type: 'text/html'})
const download = document.createElement('a')
download.download = document.title + '.html'
download.href = URL.createObjectURL(blob)
document.body.appendChild(download)
download.click()
download.remove()
alert('cleaning blob?')
URL.revokeObjectURL(blob)
