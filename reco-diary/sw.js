const cacheVersion = 'v1'
self.addEventListener('install', e => e.waitUntil(cacheAll()))
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()))
self.addEventListener('fetch', e => {
    const f = async () => {
        const ch = await caches.open(cacheVersion)
        let r = await ch.match(e.request)
        if (r) return r

        r = await fetch(e.request.clone())
        if (r.status < 400) ch.put(e.request, r.clone())
        return r
    }
    e.respondWith(f())
})
self.addEventListener('message', async e => {
    const d = e.data
    let r
    switch (d.action) {
    case 'cache-refresh':
        await caches.delete(cacheVersion)
        await cacheAll()
        r = 'ok'
        break
    default:
        return
    }
    if (r) self.postMessage(r)
})

async function cacheAll() {
    const ch = await caches.open(cacheVersion)
    await ch.addAll(`
. index.html
lib/dexie.js          lib/overlayscrollbars.browser.es5.min.js
lib/FileSaver.min.js  lib/overlayscrollbars.scriptingenabled.min.css
lib/jszip.min.js      lib/Sortable.min.js
`.trim().split(/\s+/))
}
