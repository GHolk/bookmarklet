// ==UserScript==
// @name  chrome bbs javascript executor
// @namespace  http://gholk.github.io/
// @description  press J in term.ptt.cc to run JavaScript
// @match https://term.ptt.cc/*
// @match https://www.clam.ml/*
// @match https://www.ptt.cc/bbs/*
// @version  17
// @grant  none
// ==/UserScript==

const $ = e => document.querySelector(e)

class JavascriptEvalator {
    constructor() {
        assureBbsjsFrame()
    }
    prompt() {
        const script = this.getScript()
        this.execute(script)
    }
    getArticle() {
        if (location.href.match('www.ptt.cc')) {
            return this.getPttWebArticle()
        }
        else return this.getPttChromeArticle()
    }
    getPttWebArticle() {
        return $('#main-container').textContent
    }
    getPttChromeArticle() {
        return Array.from($('#mainContainer').children)
            .map(row => row.textContent)
            .join('\n')
    }
    getScript() {
        const article = this.getArticle()
        const html = article.match(/<html[\S\s]*?<\/html>/)
        const script = article.match(/<script[\S\s]*?<\/script>/)
        if (html) return html[0]
        else if (script) return script[0]
        else throw new Error('no bbsjs script found')
    }
    execute(script) {
        return this.iframeObjectUrlExecute(script)
    }
    iframeObjectUrlExecute(script) {
        const htmlHeader = {type: 'text/html'}
        const scriptFile = new File([script], 'bbsjs-frame.html', htmlHeader)
        const scriptUrl = URL.createObjectURL(scriptFile)
        $('#bbsjs-container iframe').src = scriptUrl
        URL.revokeObjectURL(scriptFile)
        $('#bbsjs-container').classList.add('show')
    }
    evalExecute(script) {
        const cleanScript = script
              .replace(/^<script[\S\s]*?>/, '')
              .replace(/<\/script>$/, '')
        return eval(cleanScript)
    }
    windowExecute(script) {
        const scriptWindow = window.open('about:blank')
        const scriptDocument = scriptWindow.document
        scriptDocument.write(script)
        scriptDocument.close()
        return scriptWindow
    }
    iframeExecute(script) {
        $('#bbsjs-container').classList.add('show')
        const iframe = $('#bbsjs-container iframe')
        iframe.contentDocument.write(script)
        iframe.contentDocument.close()
        return iframe
    }
}

function promptJe() {
    const je = new JavascriptEvalator()
    je.prompt()
}

function registJe(listen) {
    window.addEventListener('keydown', (down) => {
        if (listen(down)) {
            try {
                promptJe()
            }
            catch (bbsjsError) {
                console.error(bbsjsError)
            }
        }
    })
}



if (typeof GM != 'undefined') registJe((keydown) => keydown.key == 'J')
else promptJe()

assureBbsjsFrame()

function assureBbsjsFrame() {
    if (!$('#bbsjs-container')) initBbsjsFrame()
}

function initBbsjsFrame() {
    const div = document.createElement('div')
    div.id = 'bbsjs-container'
    //$('<div>').attr('id', 'bbsjs-container')
    const homePageUrl = 'https://gholk.github.io/bbsjs.html'
    div.innerHTML = `
<button>move</button>
<button>execute</button>
<a href="${homePageUrl}" target="bbsjs-iframe">help</a>
<iframe name="bbsjs-iframe" src="${homePageUrl}"></iframe>
<style>

#bbsjs-container {
  transition: 0.5s;
  position: fixed;
  top: 1em;
  left: 1em;
  z-index: 2;
  background: white;
}
#bbsjs-container * {
  display: none;
}
#bbsjs-container button {
  display: inline;
  margin: 0.5em;
  color: black;
}
#bbsjs-container.show iframe {
  border: none;
  clear: both;
  display: block;
  width: 100%;
  height: 25em;
}
#bbsjs-container.show a {
  display: inline;
}
#bbsjs-container.show {
  transition: 0.5s;
  width: 40%;
  top: 2em;
  left: 30%;
  z-index: 2;
}
</style>
`
    // todo: prevent mouse browse event
    window.addEventListener('click', (click) => {
        const button = click.target
        if (!button.matches('#bbsjs-container button')) return

        if (button.textContent == 'move') {
            const container = button.parentNode
            container.classList.toggle('show')
        }
        else if (button.textContent == 'execute') {
            try {
                promptJe()
            }
            catch (bbsjsError) {
                console.error(bbsjsError)
            }
        }
    })
    document.body.append(div)
}
