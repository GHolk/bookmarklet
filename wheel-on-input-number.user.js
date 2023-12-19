// ==UserScript==
// @name        wheel on input number
// @namespace   http://gholk.github.io
// @match       https://gholk.github.io/pdf-js-tool/pdf-js-tool.html
// @grant       GM.getValue
// @version     1.6
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


    let labele = input
    if (input.nodeName == 'LABEL' && input.control) {
      labele = input.control
    }
    if (labele.type == 'radio') {
      return wheelOnRadioHandler(labele, event)
    }
    if (labele.nodeName == 'SELECT') {
      return moveStepOnSelect(labele, event)
    }
    if (allowRangeSet(input)) {
      return moveStepOnNode(input, event)
    }
    if (!isTextBox(input)) return
    const content = Number(input.value)
    if (Number.isNaN(content)) return
    nop(event)
    input.value = padTo((event.deltaY > 0) ? content-1 : content+1, input.value)
    eventSendAuto(input)
  }, {passive: false})
})

function nop(e) {
  e.preventDefault()
}

function isTextBox(e) {
  const n = e.nodeName
    // if scrollable
    if (e.scrollHeight > e.offsetHeight) return false
    if (n == 'TEXTAREA') return true
    if (n != 'INPUT') return false
    switch (e.type) {
        case 'search':
        case 'tel':
        case 'search':
        case 'text':
        case 'email':
        return true
    }
    return false
}

function wheelOnRadioHandler(e, event) {
    const step = event.deltaY > 0 ? 1 : -1
    const name = e.name
    if (e.disabled || e.hidden) return
    nop(event)
    let l = Array.from(document.getElementsByName(name))
    l = l.filter(e => !e.disabled && !e.hidden)
    let i = l.findIndex(e => e.checked)
    if (i == -1) i = step > 0 ? 0 : -1
    else i += step
    l.at(i % l.length).click()
}

// todo: single digit move 9-0, prevent negative
function allowRangeSet(e) {
  return e.type != 'number' && // number has built-in wheel event support
    e.selectionStart != null && // a text field element
      // user does not need scrolling
      e.scrollHeight <= e.offsetHeight &&
      // detect number on cursor only when focus
      (e == document.activeElement ||
      // always detect number if any text selected
      e.selectionStart != e.selectionEnd)
}
function eventSend(e, ...arg) {
  return e.dispatchEvent(new Event(...arg))
}
function isFocus(e) {
  return e == document.activeElement
}
function eventSendAuto(e) {
  eventSend(e, 'input')
  if (!isFocus(e)) eventSend(e, 'change')
}
function moveStepOnNode(e, event) {
  const step = event.deltaY>0 ? -1 : 1
  const [start, end] = [e.selectionStart, e.selectionEnd]
  if (start != end) {
    const scan = e.value.substring(start, end).match(/\d+/)
    if (!scan) return
    nop(event)
    e.setRangeText(moveStep2s(scan[0], step), start + scan.index, start + scan.index + scan[0].length)
    eventSendAuto(e)
    return
  }
  for (const scan of e.value.matchAll(/\d+/g)) {
    if (scan.index > end) break
    if (scan.index <= end && end <= scan.index + scan[0].length) {
      nop(event)
      e.setRangeText(moveStep2s(scan[0],step), scan.index, scan.index+scan[0].length, 'end')
      eventSendAuto(e)
      break
    }
  }
}
function moveStep2s(s, step) {
  const n = Number(s)
  let n2 = n + step
  if (n2 < 0) n2 = n
  return padTo(n2, s)
}

function moveStepOnSelect(e, event) {
  nop(event)
  const n = event.deltaY > 0 ? 1 : -1
  const index = e.selectedIndex + n
  if (index < 0 || e.length <= index) return null
  e.selectedIndex = index
  eventSend(e, 'input')
  eventSend(e, 'change')
  return index
}

function padTo(x, t) {
    let s = String(x)
    if (x < 0) return s
    while (s.length < t.length) s = '0' + s
    return s
}
