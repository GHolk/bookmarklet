// ==UserScript==
// @name     google search unredirect
// @namespace http://gholk.github.io/
// @version  7
// @match    https://www.google.com/search?*
// @grant    none
// ==/UserScript==

function unlistenClick() {
  for (const a of document.querySelectorAll('a[onmousedown]')) {
    a.removeAttribute('onmousedown')
    a.removeAttribute('onclick')
  }
}

const observer = new MutationObserver(mulist => {
    for (const mutation of mulist) {
        if (mutation.type == 'childList') {
            const node = mutation.target
            if (node.matches('#taw *, #res *, #rhs *')) {
                unlistenClick()
            }
        }
    }
})
observer.observe(document.getElementById('rcnt'), {
    childList: true,
    subtree: true
})
unlistenClick()
