const url = window.location.href
const qrcodeUrl = `chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${url}`
window.open(qrcodeUrl)
