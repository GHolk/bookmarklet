function stopEvent(event) {
    event.stopImmediatePropagation()
}
const registFirst = {capture: true}
window.addEventListener('contextmenu', stopEvent, registFirst)
document.addEventListener('mousedown', stopEvent, registFirst)
