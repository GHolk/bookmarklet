// ==UserScript==
// @name        map alpha to number pad
// @namespace   http://gholk.github.io
// @match       https://ecpa.dgpa.gov.tw/*
// @grant       GM.getValue
// @grant       GM_getValue
// @version     3.0
// @author      gholk
// @description Map `azxcsdfwer` to `0-9` in specified web page input field.
// ==/UserScript==

let config = {}
const urlMatchMapDefault = [
  [
    "https://ecpa.dgpa.gov.tw/webform/clogin.aspx.*|https://ecpa.dgpa.gov.tw/?$",
    "input#pinCode"
  ],
  ['gholk-enable-map-alpha-to-number-pad', 'input']
]
GM.getValue('url-match-map', urlMatchMapDefault).then(list => {
  const url = window.location.href
  for (const [regexp, selector] of list) {
    if (new RegExp(regexp).test(url)) {
      config.selector = selector
      return
    }
  }
  throw new Error('no url match')
})

window.addEventListener('input', event => {
  const node = event.target
  if (node.matches(config.selector)) {
    node.value = enNumber(node.value)
  }
})

const alphaMap = alphaMapCreate()
function alphaMapCreate() {
  const alphaMap = {}
  const alphaString = 'azxcsdfwer'
  for (let i=0; i<=9; i++) alphaMap[alphaString.charAt(i)] = String(i)
  alphaMap.q = '' // = alphaMap.z
  return alphaMap
}
function enNumber(string) {
  let r = ''
  for (let i=string.length-1; i>=0; i--) {
    const c = string.charAt(i)
    if (c in alphaMap) {
      if (c == 'q') i--
      else r = alphaMap[c] + r 
    }
    else {
      r = string.slice(0, i+1) + r
      break
    }
  }
  return r
 }
