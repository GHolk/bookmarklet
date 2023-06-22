// service worker
const path = {
    cwd: '/bookmarklet/sw-xdc',
    match(expect, x) {
        if  (x.startWith(`${this.cwd}/${expect}`)) {
            return x.slice(`${this.cwd}/${expect}`.length)
        }
        else return null
    }
}
self.addEventListener('fetch', async event => {
    const url = new URL(event.request.url)
    const sub = path.match('fake/eval/', url.pathname)
    if (sub == null) return
    let result = eval(sub)
    if (result instanceof Object && result.then) result = await result
    event.respondWith(toResponse(result))
})

function toResponse(x) {
    let type = 'text/plain'
    if (x instanceof Object) {
        type = x.type
    }
    else x = String(x)
    const r = new Response(x, {headers: {'Contnet-Type': type}})
    return r
}
