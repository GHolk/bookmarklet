// ==UserScript==
// @name     google search unredirect android firefox
// @namespace http://gholk.github.io
// @description remove redirect link in google search result page
// @version  0.2
// @match    https://www.google.com/search?*
// @grant    none
// @license GPLv3
// ==/UserScript==

function unRedirect(a) {
    const attr = a.getAttribute('href')
    if (attr.slice(0, 5) != '/url?') return
    const u = new URL(a.href)
    const o = u.searchParams.get('q')
    a.href = o
}

void function tryUnRedirect () {
    const allAnchor = document.querySelectorAll('a[href^= "/url?"')
    if (allAnchor.length > 0) allAnchor.forEach(unRedirect)
    else setTimeout(tryUnRedirect, 500)
}()
