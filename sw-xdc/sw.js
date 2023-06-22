// service worker

import './node_modules/jszip/dist/jszip.min.js'
import * as idb from './node_modules/idb/build/index.js'

self.addEventListener('activate', e =>
    e.waitUntil(self.clients.claim())
)

const xdcr = {
    async add(m) {
        const {file, name} = m
        const id = this.idGen(file)
        await this.addToDb({file, name, id}, id)
        return id
    },
    async idGen(blob) {
        const buf = await blob.arrayBuffer()
        const hash = await crypto.subtle.digest('SHA-256', buf)
        const u8 = new Uint8Array(hash)
        let s = ''
        for (const u of u8) s += ('0' + u.toString(16)).slice(-2)
        return s
    },
    async addToDb(x, key) {
        for await (const store of this.storeConnect()) {
            await store.add(x, key)
        }
    },
    async getFromDb(key) {
        let x
        for await (const store of this.storeConnect()) {
            x = store.get(key)
        }
        return x
    },
    cache: {
        map: new Map(),
        interval: 15 * 60, // 15m
        timeout: 10,
        async touch(id, second = this.interval) {
            const o = this.map.get(id)
            o.time += second
            await sleep(second)
            o.time -= second
            if (o.time <= this.timeout) {
                this.map.delete(id)
            }
        },
        get(id) {
            const m = this.map
            let o = null
            if (m.has(id)) {
                o = m.get(id).value
                this.touch(id)
            }
            return o
        },
        set(id, x) {
            const m = this.map
            m.set(id, {time: 0, value: x})
            this.touch(id)
        }
    },
    async getFileInside(id, path) {
        const cache = this.cache
        let xdc = cache.get(id)
        if (!xdc) {
            xdc = this.getFromDb(id)
            cache.set(id, xdc)
        }
        const zip = await JSZip.loadAsync(xdc)
        const blob = await zip.file(path).async('blob')
        if (!blob.name) blob.name = path
        return blob
    },
    db: null,
    dbVersion: 1,
    dbName: 'webxdc-lib',
    async dbConnect() {
        const store = this.storeName
        this.db = await idb.openDB(this.dbName, this.dbVersion, {
            upgrade(db, vold, vnew, tx, e) {
                db.createObjectStore(store)
            }
        })
    },
    storeName: 'xdc-zip-file',
    async *storeConnect(option = {}) {
        if (!this.db) await this.dbConnect()
        const mode = option.mode || 'readwrite'
        const tx = await this.db.transaction(this.storeName)
        const store = tx.objectStore(this.storeName)
        yield store
        await tx.done
    }
}

self.addEventListener('message', async e => {
    const m = e.data
    if (m.type == 'xdc-add') {
        const id = await xdcr.add(m)
        // e.response(id)
    }
})

const path = {
    cwd: '/bookmarklet/sw-xdc',
    match(expect, x) {
        if  (x.startsWith(`${this.cwd}/${expect}`)) {
            return x.slice(`${this.cwd}/${expect}`.length)
        }
        else return null
    }
}

// fake/webxdc/by-id/%s/index.html
// fake/webxdc/%s/index.html
self.addEventListener('fetch', async event => {
    const url = new URL(event.request.url)
    let sub
    let result
    if (sub = path.match('fake/eval/', url.pathname)) {
        result = eval(decodeURIComponent(sub))
        if (result instanceof Object && result.then) result = await result
    }
    else if (sub = path.match('fake/webxdc/lib/by-id/', url.pathname)) {
        const id = sub.match(/^\w+/)[0]
        const path = sub.slice(id.length + 1)
        result = await xdcr.getFileInside(id, path)
    }
    else return
    event.respondWith(toResponse(result))
})

function toResponse(x) {
    let type = 'text/plain'
    if (x instanceof Object) {
        if (x.type) type = x.type
        else if (x.name) {
            switch (x.name.match(/\.(.{1,8}?$)/).toLowerCase()) {
            case 'js':
                type = 'application/javascript'
                break
            case 'html':
                type = 'text/html'
                break
            case 'css':
                type = 'text/css'
                break
            }
        }
    }
    else x = String(x)
    const r = new Response(x, {headers: {'Contnet-Type': type}})
    return r
}

function html(h) {
    return new File([h], 'x.html', {type: 'text/html'})
}
function script(s) {
    return new File([s], 'x.js', {type: 'application/javascript'})
}

function sleep(s) {
    return new Promise(wake => setTimeout(wake, s*1000))
}
