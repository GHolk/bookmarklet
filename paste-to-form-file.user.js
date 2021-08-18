// ==UserScript==
// @name  paste to form file field
// @namespace  http://gholk.github.io/
// @description  ctrl-v to paste clipboard file into file form field
// @match https://www.google.com/imghp
// @version  3
// @grant  none
// ==/UserScript==

document.body.addEventListener('paste', (paste) => {
    if (paste.clipboardData.files.length == 0) return
    const input = document.querySelector('input[type = "file"]')
    if (!input) return
    console.debug(...paste.clipboardData.files)
    // attribute to https://stackoverflow.com/a/50427897/8362703
    input.files = paste.clipboardData.files
    const change = new Event('change', {bubbles: true, cancelable: false})
    input.dispatchEvent(change)
})
