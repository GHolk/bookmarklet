var d = document,
    b = d.body;

function $(selector, context) {
    return (context || d).querySelector(selector)
}

function create(tag, parent) {
    const elm = (parent || b).appendChild( d.createElement(tag) );
    return elm;
}

async function promptUi(title, text = '') {
    const dialog = document.createElement('div')
    dialog.className = 'gholk-prompt-dialog'
    create('h2', dialog).textContent = title
    const textarea = create('textarea', dialog)
    textarea.value = text
    // confirm when ctrl-enter
    const ok = create('button', dialog)
    ok.textContent = 'ok'
    let confirm
    let reject
    const promise = new Promise((ok,no) => [confirm, reject] = [ok,no])
    ok.onclick = () => confirm()
    const cancel = create('button', dialog)
    cancel.textContent = 'cancel'
    cancel.onclick = () => reject()
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
    console.log(refNode)
    const parent = refNode.parentNode
    if (refNode.nextSibling) parent.insertBefore(newNode, refNode.nextSibling)
    else parent.appendChild(newNode)
}
async function editDescription() {
    const q = $('meta[name=description], meta[property="og:description"], meta[property="gholk:annotate"]')
    let description = ''
    if (q) {
        description = q.content
    }

    const result = await promptUi('description', description)
    if (result) {
        let annotate = $('meta[property="gholk:annotate"]')
        if (!annotate) {
            annotate = document.createElement('meta')
            annotate.setAttribute('property', 'gholk:annotate')
        }
        annotate.content = result
        const first = $('meta[charset]') || d.head.firstChild || d.documentElement.firstChild
        appendAfter(annotate, first)
    }
}

editDescription()
