// book mark let

const urlToPlayer = {}
urlToPlayer.youtube = function (location) {
    const scan = location.search.match(/[&\/\?]v=([^&]*)/)
    const id = scan[1]
    return 'https://youtube.com/embed/' + id
}

function openCleanWindow(url) {
    window.open(url, 'clean youtube player', 'resizable')
}

function createButton() {
    const menuId = 'menu-container'
    const button = document.createElement('button')
    button.textContent = 'clean window'
    button.onclick = () => {
        const url = urlToPlayer.youtube(location)
        openCleanWindow(url)
    }
    document.getElementById(menuId).appendChild(button)
}

createButton()

