// ==UserScript==
// @name hackmd scroll flip
// @namespace http://gholk.github.io/
// @version 6
// @description make mouse scroll flip page in hackmd slide mode.
// @match https://hackmd.io/*/*
// @grant none
// ==/UserScript==

if (document.querySelector('.reveal .slides')) {
    const option = {}
    option.pageup = {charCode:0,keyCode:33,altKey:false,ctrlKey:false,shiftKey:false,metaKey:false,repeat:false,isComposing:false,key:"PageUp",code:"PageUp",type:"keydown",composed:true}
    option.pagedown = {charCode:0,keyCode:34,altKey:false,ctrlKey:false,shiftKey:false,metaKey:false,repeat:false,isComposing:false,key:"PageDown",code:"PageDown",type:"keydown",composed:true}

    window.addEventListener(
        'wheel',
        function (scroll) {
            scroll.preventDefault()
            let keyOption
            if (scroll.deltaY > 0) keyOption = option.pagedown
            else keyOption = option.pageup
            const key = new KeyboardEvent('keydown', keyOption)
            document.dispatchEvent(key)
        },
        {passive: false}
    )
}
