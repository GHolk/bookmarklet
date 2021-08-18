// ==UserScript==
// @name  paste to form file field
// @namespace  http://gholk.github.io/
// @description  ctrl-v to paste clipboard file into file form field
// @match https://www.google.com/imghp
// @version  2
// @grant  none
// ==/UserScript==

document.body.addEventListener('paste', (paste) => {
    if (paste.clipboardData.files.length == 0) return
    console.debug(paste.clipboardData.files)
    const input = document.querySelector('input[type = "file"]')
    input.files = paste.clipboardData.files
    const change = new Event('change', {bubbles: true, cancelable: false})
    input.dispatchEvent(change)
})
