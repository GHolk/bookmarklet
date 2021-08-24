// ==UserScript==
// @name     facebook notification sender
// @namespace http://gholk.github.io/
// @description send browser notification when getting notification on facebook.
// @version  2
// @match    https://www.facebook.com/*
// @grant    GM.notification
// @grant    window.focus
// ==/UserScript==

const iconFacebook = document.querySelector('link[rel~=icon]').href

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

