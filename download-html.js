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
    return copy
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
