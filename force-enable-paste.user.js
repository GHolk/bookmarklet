// ==UserScript==
// @name  force enable paste
// @namespace  http://gholk.github.io
// @description  allow paste in paste forbidden website like credit card
// @match https://nccnet-ec.nccc.com.tw/merchant/HPPRequest*
// @version  1.0.1
// @grant  none
// ==/UserScript==

setInterval(() => {
    document.querySelectorAll('[onpaste]').forEach(node => {
        node.onpaste = null
    })
    if (document.body.onpaste) {
        document.body.onpaste = null
    }
}, 1000)
