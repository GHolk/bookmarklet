// ==UserScript==
// @name  chrome bbs javascript executor
// @namespace  http://gholk.github.io/
// @description  press J in term.ptt.cc can run JavaScript
// @match https://term.ptt.cc/*
// @match https://www.clam.ml/*
// @match https://www.ptt.cc/bbs/*
// @version  8
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
        const iframe = $('#bbsjs-frame').get(0) ||
            $('<iframe id="bbsjs-frame">').appendTo('body').get(0)
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

addBbsFrameStyle()

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

function addBbsFrameStyle() {
    let style = $('#bbsjs-style').get(0)
    if (style) return style
    else {
        const CssText = `
#bbsjs-frame {
  width: 40%;
  height: 30em;
  display: block;
  position: relative;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 2;
}
#BBSWindow:hover ~ #bbsjs-frame {
  left: -30%;
}
`
        const $style = $('<style id="bbsjs-style">')
        $style.text(CssText)
        $style.appendTo('body')
        style = $style.get(0)
        return style
    }
}
