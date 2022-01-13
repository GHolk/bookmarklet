// ==UserScript==
// @name     press b to google
// @namespace https://gholk.github.io
// @description press b in duckduckgo result page to go to google
// @match https://duckduckgo.com/*
// @version  1.0.1
// @grant    none
// ==/UserScript==

function testModify(event, mods) {
  return mods.some(name => event.getModifierState(name))
}

window.addEventListener('keydown', event => {
  console.debug('press key:', event.key)
  if (event.key != 'b' ||
    testModify(event, 'Alt Shift OS Control'.split(/ /)) ||
    'value' in event.target) { // is <input> or <textarea>
    return
  }

  const field = document.getElementById('search_form_input')
  const query = field.value
  window.location = 'https://www.google.com/search?q=' + encodeURIComponent(query)
})
