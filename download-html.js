function doctypeToString(node = document.doctype) {
    return '<!DOCTYPE ' + node.name
        + (node.publicId ? ` PUBLIC "${node.publicId}"` : '')
        + (!node.publicId && node.systemId ? ' SYSTEM' : '') 
        + (node.systemId ? ` "${node.systemId}"` : '')
        + '>'
}
const html = doctypeToString() + '\n' + document.documentElement.outerHTML
const blob = new Blob([html])
const download = document.createElement('a')
download.download = document.title + '.html'
download.href = URL.createObjectURL(blob)
document.body.appendChild(download)
download.click()
download.remove()
alert('cleaning blob?')
URL.revokeObjectURL(blob)
