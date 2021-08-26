// ==UserScript==
// @name     facebook notification sender
// @namespace http://gholk.github.io
// @description send browser notification when getting notification on facebook.
// @version  3.1.0
// @match    https://www.facebook.com/*
// @grant    GM.notification
// @grant    window.focus
// @license GPLv3
// ==/UserScript==

const iconFacebook = document.querySelector('link[rel~=icon]')?.href ||
      'https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico'

function findNotify(node = document.body) {
    for (const notify of node.querySelectorAll('[aria-atomic = true]')) {
        if (notify.textContent != '所有通知都已標示為已讀。') {
            return notify
        }
    }
}
function sendGmNotify(node) {
    const title = 'facebook notify'
    const message = node.textContent
    const image = iconFacebook
    GM.notification(message, title, image, () => {
        window.focus()
        const anchor = node.previousElementSibling.querySelector('a')
        anchor.click()
    })
}
function pageInBackGround() {
    return document.visibilityState != 'visible'
}
const observer = new MutationObserver(mulist => {
    for (const mutation of mulist) {
        if (mutation.type == 'childList') {
            const node = mutation.target
            const notify = findNotify(node)
            if (notify && pageInBackGround()) sendGmNotify(notify)
        }
    }
})
observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
})
