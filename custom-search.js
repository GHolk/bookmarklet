
const map = {}
map.set = function (alias, url, name) {
    this[alias] = {url, name}
}
map.createForm = function (key) {
    const form = document.createElement('form')
    const search = this[key]
    form.action = search.url
    form.target = '_blank'

    const input = document.createElement('input')
    input.name = search.name
    form.appendChild(input)

    return form
}
map.search = function (key, string) {
    const form = this.createForm(key)
    form.querySelector('input').value = string
    document.documentElement.appendChild(form)
    form.submit()
}

map.set('pttpedia', 'http://zh.pttpedia.wikia.com/wiki/特殊:搜索', 'query')

function promptSearch(string) {
    if (!string) string = prompt('custom search')
    const scan = string.match(/([^\s]+)\s(.*)$/)
    const key = scan[1]
    const value = scan[2]
    map.search(key, value)
}

promptSearch()
