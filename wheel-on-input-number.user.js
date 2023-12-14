// ==UserScript==
// @name        wheel on input number
// @namespace   http://gholk.github.io
// @match       https://gholk.github.io/pdf-js-tool/pdf-js-tool.html
// @grant       GM.getValue
// @version     1.1
// @author      gholk
// @description make mouse wheel increment or decrement number in form input field
// ==/UserScript==

GM.getValue('url-map').then(list => {
  const config = list.find(c => new RegExp(c.regexp).test(window.location.href))
  
  window.addEventListener('wheel', event => {
    console.debug('get wheel event')
    const input = event.target
    if (!input.matches(config.selector)) return
    const content = Number(input.value)
    if (Number.isNaN(content)) return
    input.value = (event.deltaY > 0) ? content-1 : content+1
  })
})
