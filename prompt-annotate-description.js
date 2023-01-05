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
    const titleNode = create('h2', dialog)
    titleNode.textContent = title
    const textarea = create('textarea', dialog)
    textarea.value = text
    const docTitle = create('input', dialog)
    docTitle.type = 'text'
    docTitle.value = document.title
    const editable = createContentEditableCheckBox()
    dialog.appendChild(editable)
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
    dialog.addEventListener('keydown', e => {
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
    border: solid 1px;
    opacity: 0.7;
}
.gholk-prompt-dialog h2 {
    cursor: grab;
}
.gholk-prompt-dialog label {
    display: block;
}
.gholk-prompt-dialog textarea {
    display: block;
    width: 100%;
    height: 5em;
}
.gholk-prompt-dialog.drag-preview {
    border-width: 0.3em;
    opacity: 1;
}
.gholk-prompt-dialog.drag-source {
    opacity: 0.7;
}
`
    b.appendChild(dialog)

    enableDragMove(dialog, titleNode)
    dialog.contentEditable = false
    // make dragging editable content to textarea no removing it from page
    dialog.ondrop = e => e.dataTransfer.dropEffect = 'copy'

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
    return {annotate: textarea.value, title: docTitle.value}
    
    function createContentEditableCheckBox() {
        const field = d.createElement('label')
        field.innerHTML = '<input type="checkbox" name="content-editable-toggle" /> content editable'
        $('input', field).onchange = function () {
            d.body.contentEditable = this.checked
        }
        return field
    }
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
        if (match && match.content) return match.content
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
        annotate.content = result.annotate
        // or just head.appendChild() ?
        document.title = result.title
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
    let tag = $('meta[property="gholk:canonical"]')
    if (tag) {
        tag.content = url
        return null
    }
    else {
        tag = document.createElement('meta')
        tag.setAttribute('property', 'gholk:canonical')
        tag.setAttribute('content', url)
        return tag
    }
}

function enableDragMove(container, handle) {
    handle.draggable = true
    const allowGlobalDrop = drag => {
        drag.preventDefault()
        drag.dataTransfer.dropEffect = 'move'
    }
    handle.ondragstart = start => {
        const node = container
        const box = node.getBoundingClientRect()
        start.dataTransfer.setDragImage(
            node,
            start.clientX - box.x,
            start.clientY - box.y
        )
        start.dataTransfer.effectAllowed = 'move'
        window.addEventListener('dragover', allowGlobalDrop)
        window.addEventListener('drop', dropOnWindow)
        node.classList.add('drag-preview')
        node.dataset.dragStartClientXY = `${start.clientX} ${start.clientY}`
        setTimeout(() => {
            node.classList.add('drag-source')
        }, 100)
    }
    function dropOnWindow(drop) {
        const node = container
        const box = node.getBoundingClientRect()
        const dragStartClientXY =
            node.dataset.dragStartClientXY.split(' ').map(x => Number(x))
        delete node.dataset.dragStartClientXY
        node.style.top = (drop.clientY - dragStartClientXY[1] + box.y) + 'px'
        node.style.left = (drop.clientX - dragStartClientXY[0] + box.x) + 'px'
        node.classList.remove('drag-preview')
        node.classList.remove('drag-source')
    }
    handle.ondragend = () => {
        window.removeEventListener('drop', dropOnWindow)
        window.removeEventListener('dragover', allowGlobalDrop)
    }
}

// :r download-html.js
// (execute-kbd-macro [?0 ?j ?j ?j ?d ?i ?\{ ?k ?: ?r ?  ?d ?o ?w ?n ?l ?o ?a ?d ?- ?h ?t ?m ?l ?. ?j ?s return ])
function downloadHtml() {
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
        fixEncode(copy)
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
    const blob = new Blob([html], {type: 'text/html'})
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
