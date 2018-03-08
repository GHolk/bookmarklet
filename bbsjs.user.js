// ==UserScript==
// @name  chrome bbs javascript executor
// @namespace  http://gholk.github.io/
// @description  press J in term.ptt.cc can run JavaScript
// @match https://term.ptt.cc/*
// @version  5
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
        return this.windowExecute(script)
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
