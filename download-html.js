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
    fixRelativeUrl(copy)
    return copy
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
const blob = new Blob([html])
const download = document.createElement('a')
download.download = document.title + '.html'
download.href = URL.createObjectURL(blob)
document.body.appendChild(download)
download.click()
download.remove()
alert('cleaning blob?')
URL.revokeObjectURL(blob)
