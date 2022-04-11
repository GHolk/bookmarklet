var d = document,
    b = d.body;

function $(selector, context) {
    return (context || d).querySelector(selector)
}
function $$(selector, context) {
    return (context || d).querySelectorAll(selector)
}

function create(tag, parent) {
    const elm = (parent || b).appendChild( d.createElement(tag) );
    return elm;
}

async function promptUi(title, text = '') {
    const dialog = document.createElement('div') // use <dialog> ?
    dialog.className = 'gholk-prompt-dialog'
    create('h2', dialog).textContent = title
    const textarea = create('textarea', dialog)
    textarea.value = text
    const ok = create('button', dialog)
    ok.textContent = 'ok'
    let confirm
    let reject
    const promise = new Promise((ok,no) => [confirm, reject] = [ok,no])
    ok.onclick = () => confirm()
    const cancel = create('button', dialog)
    cancel.textContent = 'cancel'
    cancel.onclick = () => reject()
    const download = create('button', dialog)
    download.onclick = () => {
        confirm()
        setTimeout(downloadHtml, 200)
    }
    download.textContent = 'download'
    // confirm when ctrl-enter
    textarea.addEventListener('keydown', e => {
        if (e.key == 'Enter' && e.ctrlKey) confirm()
        else if (e.key == 's' && e.ctrlKey) {
            e.preventDefault()
            download.click()
        }
    })
    create('style', dialog).textContent = `
.gholk-prompt-dialog {
        position: fixed;
        top: 30%;
        left: 30%;
        width: 40%;
        height: auto;
        background: white;
        padding: 1em;
        z-index: 9999;
}
.gholk-prompt-dialog textarea {
        display: block;
        width: 100%;
        height: 5em;
}
`
    b.appendChild(dialog)
    textarea.focus()
    try {
        await promise
    }
    catch (cancel) {
        return null
    }
    finally {
        dialog.remove()
    }
    return textarea.value
}
function appendAfter(newNode, refNode) {
    const parent = refNode.parentNode
    if (refNode.nextSibling) parent.insertBefore(newNode, refNode.nextSibling)
    else parent.appendChild(newNode)
}
function findDescription() {
    const icaseMatch = `
        property=gholk:annotate name=description
        property=og:description name=twitter:description
    `.trim().split(/\s+/).map(r => r.split('='))
    const metaList = Array.from($$('meta'))
    for (const [attr, value] of icaseMatch) {
        const match = metaList.find(
            e => (new RegExp(value, 'i')).test(e.getAttribute(attr))
        )
        if (match) return match.content
    }
    if ($('p')) return $('p').textContent
    else return ''
}
async function editDescription() {
    const description = findDescription()
    const result = await promptUi('description', description)
    if (result) {
        let annotate = $('meta[property="gholk:annotate"]')
        if (!annotate) {
            annotate = document.createElement('meta')
            annotate.setAttribute('property', 'gholk:annotate')
        }
        annotate.content = result
        // or just head.appendChild() ?
        const first = $('meta[charset]') ||
              $('meta[http-equiv = content-type]') ||
              $('meta[http-equiv = Content-Type]') ||
              d.head.firstChild || d.documentElement.firstChild
        appendAfter(annotate, first)
        const urlTag = createUrlTag()
        if (urlTag) appendAfter(urlTag, first)
    }
}
function createUrlTag(url = window.location.href) {
    if ($('meta[property="gholk:canonical"]')) return null
    const tag = document.createElement('meta')
    tag.setAttribute('property', 'gholk:canonical')
    tag.setAttribute('content', url)
    return tag
}
function downloadHtml() {
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
}

editDescription()
