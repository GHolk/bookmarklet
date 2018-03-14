// ==UserScript==
// @name  chrome bbs javascript executor
// @namespace  http://gholk.github.io/
// @description  press J in term.ptt.cc can run JavaScript
// @match https://term.ptt.cc/*
// @match https://www.clam.ml/*
// @match https://www.ptt.cc/bbs/*
// @version  9
// @grant  none
// ==/UserScript==

// const output = 'hello world'
// const output = 'bookmarklet'
const output = 'user.js'

class FakePrint {
    constructor(string) {
        if (string) this.data = string
        else this.data = ''
    }
    print(string) {
        this.data += string
    }
    println(string) {
        this.print(string + '\n')
    }
}

class JavascriptEvalator {
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
        return $('#main-container').text()
    }
    getPttChromeArticle() {
        return $('#mainContainer')
            .children().get()
            .map(row => $(row).text())
            .join('\n')
    }
    getScript() {
        const article = this.getArticle()
        const html = article.match(/<html[\S\s]*?<\/html>/)
        const script = article.match(/<script[\S\s]*?<\/script>/)
        return html || script
    }
    execute(script) {
        return this.iframeExecute(script)
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
        $('#bbsjs-container').addClass('show')
        const iframe = $('#bbsjs-container iframe').get(0)
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
            catch (evalError) {
                throw evalError
            }
        }
    })
}

if ($('#bbsjs-container').length == 0) initBbsjsFrame()

switch (output) {
case 'hello world':
    alert('hello world!')
    break
case 'bookmarklet':
    promptJe()
    break
case 'user.js':
    registJe((keydown) => keydown.key == 'J')
    break
}

function initBbsjsFrame() {
    const $div = $('<div id="bbsjs-container">')
    $('<button>').text('move').appendTo($div).click((click) => {
        const $container = $(click.target).parent()
        $container.toggleClass('show')
    })
    $div.append('<iframe>')
    const cssText = `
#bbsjs-container {
  transition: 0.5s;
  position: fixed;
  top: 1em;
  left: 1em;
  z-index: 2;
  background: white;
}
#bbsjs-container button {
  float: right;
  margin: 0.5em;
  color: black;
}
#bbsjs-container iframe {
  border: none;
  display: none;
}
#bbsjs-container.show iframe {
  clear: both;
  display: block;
  width: 100%;
  height: 25em;
}
#bbsjs-container.show {
  transition: 0.5s;
  width: 40%;
  top: 2em;
  left: 30%;
  z-index: 2;
}
`
    $('<style>').text(cssText).appendTo($div)
    $div.appendTo('body')
}
