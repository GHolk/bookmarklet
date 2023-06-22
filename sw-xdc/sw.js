// service worker

// import './node_modules/jszip/dist/jszip.min.js'
// import * as idb from './node_modules/idb/build/index.js'
importScripts('./node_modules/jszip/dist/jszip.min.js')
importScripts('./node_modules/idb/build/umd.js')

self.addEventListener('activate', e =>
    e.waitUntil(self.clients.claim())
)

const xdcr = {
    async list() {
        const db = await this.dbConnect()
        const keyList = await db.getAllKeys(this.storeName)
        return keyList
    },
    async add(m) {
        const {file, name} = m
        const id = await this.idGen(file)
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
        const db = await this.dbConnect()
        await db.add(this.storeName, x, key)
        this.cache.set(key, x)
    },
    async getFromDb(key) {
        const c = this.cache
        if (c.has(key)) return c.get(key)
        const db = await this.dbConnect()
        return await this.db.get(this.storeName, key)
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
        has(id) {
            return this.map.has(id)
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
            xdc = await this.getFromDb(id)
            cache.set(id, xdc)
        }
        const zip = await JSZip.loadAsync(xdc.file)
        const blob = await zip.file(path).async('blob')
        if (!blob.name) blob.name = path
        return blob
    },
    db: null,
    dbVersion: 1,
    dbName: 'webxdc-lib',
    async dbConnect() {
        if (!this.db) {
            const store = this.storeName
            this.db = await idb.openDB(this.dbName, this.dbVersion, {
                upgrade(db, vold, vnew, tx, e) {
                    if (vold == 0) db.createObjectStore(store)
                }
            })
        }
        return this.db
    },
    storeName: 'xdc-zip-file',
    async *storeConnect(option = {}) {
        if (!this.db) await this.dbConnect()
        const mode = option.mode || 'readwrite'
        const tx = this.db.transaction(this.storeName, mode)
        const store = tx.objectStore(this.storeName)
        yield store
        await tx.done
    }
}

self.addEventListener('message', async e => {
    const m = e.data
    switch (m.type) {
    case 'xdc-add':
        const id = await xdcr.add(m)
        return reply(m, id)
    case 'xdc-list':
        const list = await xdcr.list()
        return reply(m, list)
    }
})

function reply() {
}

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
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url)
    let sub
    let result
    if (sub = path.match('fake/eval/', url.pathname)) {
        result = eval(decodeURIComponent(sub))
    }
    else if (sub = path.match('fake/webxdc/lib/by-id/', url.pathname)) {
        const id = sub.match(/^\w+/)[0]
        const path = sub.slice(id.length + 1)
        result = xdcr.getFileInside(id, path)
    }
    else return
    event.respondWith(toResponse(result))
})

async function toResponse(x) {
    if (x && x.then) x = await x
    let type = 'text/plain'
    if (x instanceof Object) {
        if (x.type) type = x.type
        else if (x.name) {
            switch (x.name.match(/\.(.{1,8}?$)/)[1].toLowerCase()) {
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
