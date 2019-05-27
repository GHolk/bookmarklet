document.querySelectorAll('div[role=presentation]')
    .forEach(present => {
        const container = present.parentNode
        if (container.querySelector('video')) {
            console.log('get video', container)
            const ratioOrigin = getRotateRatio(container.style.transform)
            const ratioNext = ratioOrigin - 0.25
            container.style.transform = `rotate(${ratioNext}turn)`
        }
    })

function getRotateRatio(cssString) {
    const scan = cssString.match(/rotate\((-?\d+(\.\d+)?)turn\)/)
    if (scan) {
        const ratio = Number(scan[1])
        return ratio
    }
    else return 0
}
