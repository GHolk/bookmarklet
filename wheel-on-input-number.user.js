// ==UserScript==
// @name        wheel on input number
// @namespace   http://gholk.github.io
// @match       https://gholk.github.io/pdf-js-tool/pdf-js-tool.html
// @grant       GM.getValue
// @version     1.3
// @author      gholk
// @description make mouse wheel increment or decrement number in text field or textarea.
// ==/UserScript==

GM.getValue('url-map').then(list => {
  if (!list) list = []
  const config = list.find(c => new RegExp(c.regexp).test(window.location.href))

  window.addEventListener('wheel', event => {
    console.debug('get wheel event')
    const input = event.target
    if (config && !input.matches(config.selector)) return

    if (allowRangeSet(input)) {
      return moveStepOnNode(input, event)
    }
    const content = Number(input.value)
    if (Number.isNaN(content)) return
    input.value = (event.deltaY > 0) ? content-1 : content+1
    event.preventDefault()
  }, {passive: false})
})

// todo: single digit move 9-0, prevent negative
function allowRangeSet(e) {
  return e.type != 'number' && // number has built-in wheel event support
    e.selectionStart != null && // a text field element
      // detect number on cursor only when focus
      (e == document.activeElement ||
      // always detect number if any text selected
      e.selectionStart != e.selectionEnd)
}
function moveStepOnNode(e, event) {
  const step = event.deltaY>0 ? -1 : 1
  const [start, end] = [e.selectionStart, e.selectionEnd]
  if (start != end) {
    const scan = e.value.substring(start, end).match(/\d+/)
    if (!scan) return
    const n = Number(scan[0])
    e.setRangeText(moveStep2s(n, step), start + scan.index, start + scan.index + scan[0].length)
    event.preventDefault()
    return
  }
  for (const scan of e.value.matchAll(/\d+/g)) {
    if (scan.index > end) break
    if (scan.index <= end && end <= scan.index + scan[0].length) {
      const n = Number(scan[0])
      e.setRangeText(moveStep2s(n,step), scan.index, scan.index+scan[0].length, 'end')
      event.preventDefault()
      break
    }
  }
}
function moveStep2s(n, step) {
  let n2 = n + step
  if (n2 < 0) n2 = n
  return String(n2)
}
