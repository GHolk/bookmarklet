const url = window.location.href
const qrcodeUrl = `http://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${url}`
window.open(qrcodeUrl)
