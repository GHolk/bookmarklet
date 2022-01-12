// ==UserScript==
// @name  enable text selection and context menu
// @namespace  http://gholk.github.io
// @description  enable text selection and context menu, like in disney plus
// @match https://www.disneyplus.com/*
// @version  1.1.0
// @grant  none
// ==/UserScript==

function stopEvent(event) {
    event.stopImmediatePropagation()
}
const registFirst = {capture: true}
window.addEventListener('contextmenu', stopEvent, registFirst)
document.addEventListener('mousedown', stopEvent, registFirst)

document.body.style.userSelect = 'text'
