// ==UserScript==
// @name name
// @namespace http://gholk.github.io
// @description description
// @match *
// @version 0.0.0
// @license GPLv3
// @grant none
// @bookmarklet false
// ==/UserScript==

class GholkLib {
    constructor() {
        return this._constructor(...arguments)
    }
    _constructor() {}
    sleep(second) {
        return new Promise(wake => setTimeout(wake, second*1000))
    }
    $(q, root = document) {
        return root.querySelector(q)
    }
    $$(q, root = document) {
        return Array.from(root.querySelectorAll(q))
    }
    create(name, parent) {
        const node = document.createElement(name)
        if (parent) parent.appendChild(node)
        return node
    }
    pipe(value, ...fn) {
        return fn.reduce((v, f) => f(v), value)
    }
    bindr(object, thing, ...args) {
        return this.bind.call(object, thing, ...args)
    }
    bind(thing, ...args) {
        let f
        if (typeof thing == 'function') f = thing
        else f = object[thing]
        return f.bind(this, ...args)
    }
    async keepTry(fn, interval) {
        let result = fn()
        while (!result) {
            await this.sleep(interval)
            result = fn()
        }
        return result
    }
    defer() {
        const defer = {}
        defer.promise = new Promise((ok, reject) => {
            defer.ok = ok
            defer.reject = reject
        })
        return defer
    }
    defm(klass, name, fn) {
        Object.defineProperty(klass.prototype, name, {
            value: fn,
            writable: true,
            configurable: true,
            enumerable: false
        })
    }
    patch() {
        const {pipe, bindr} = this
        this.defm(Object, 'bind', this.bind)
        this.defm(Object, 'pipe', function pipe(...fn) {
            /* let value = this
            for (C of [String, Number, BigInt, Boolean, Symbol]) {
                if (this instanceof C) value = this.valueOf()
            } */
            let value
            switch (this.constructor) {
                case String:
                case Number:
                case window.BigInt:
                case Boolean:
                case window.Symbol:
                    value = this.valueOf()
                    break
                default:
                    value = this
            }
            return pipe(value, ...fn)
        })
        this.defm(Object, 'toArray', function toArray() {
            return Array.from(this)
        }
    }
    depatch() {
        for (const name of 'bind pipe toArray'.split(' ')) {
            delete Object.prototype[name]
        }
    }
    buttonClick({style, parent = document.body, text, click}) {
        const button = this.create('button', parent)
        button.textContent = text
        const styleDefault = {
            position: 'fixed',
            bottom: 0,
            right: 0,
            margin: '1em'
        }
        Object.assign(button.style, styleDefault, style)

        button.onclick = click
        return button
    }
    download(url, name = Date.now().toString()) {
        const a = this.create('a', document.body)
        a.href = url
        a.download = name
        a.click()
        a.remove()
    }
}
