// ==UserScript==
// @name name
// @namespace http://gholk.github.io
// @description description
// @match *
// @version 0.0.0
// @license GPLv3
// @grant none
// ==/UserScript==

class GholkLib {
    sleep(second) {
        return new Promise(wake => setTimeout(wake, second*1000))
    }
    $(q, root = document) {
        return root.querySelector(q)
    }
    $$(q, root = document) {
        return root.querySelectorAll(q)
    }
    create(name, parent) {
        const node = document.createElement(name)
        if (parent) parent.appendChild(node)
        return node
    }
    pipe(value, list) {
        return list.reduce((v, f) => f(v), value)
    }
    bindr(object, thing) {
        let f
        if (typeof thing == 'string') f = object[thing]
        else f = thing
        return f.bind(object)
    }
}
