// ==UserScript==
// @name  happy html keyboard player
// @namespace  http://gholk.github.io
// @description  allow forward video with keyboard
// @match https://www.ptsplus.tv/season/*
// @match https://ecollege.elearn.hrd.gov.tw/learn/path/player.php?*
// @match https://lcms.elearn.hrd.gov.tw/asset/play/*
// @version  2.0.0
// @grant  none
// ==/UserScript==

const config = {
    '公視勇者動畫系列': {
        regexp: /4b572dd5-bdc7-45a6-ba35-accfe9cda3df/,
        callback() {
            const list = document.querySelectorAll(
                'li.vjs-menu-item[role=menuitemradio]'
            )
            const button = Array.from(list).find(
                node => node.children[0]?.textContent == '480p'
            )
            if (button) {
                button.click()
                console.debug('click 480p')
                return 'done'
            }
        }
    },
    jquery_player: {
        regexp: /./,
        callback() {
            if (document.querySelector('.jp-jplayer')) {
                config.current.disable.space = true
                config.current.disable.click = false
                config.current.whole_page = true
            }
            return 'done'
        }
    },
    global: {
        disable: {
            click: true
        },
        stepSecond: 5,
        getVideo() {
            return document.querySelector('video')
        }
    },
    current: {
        set regexp(value) {
            console.log(`config.current does not accept setting value ${value}`)
        }
    },
    retryInterval: 200
}

function sleep(second) {
    return new Promise(wake => setTimeout(wake, second*1000))
}
function keepTry(callback) {
    let handleId
    handleId = setInterval(() => {
        if (callback() == 'done') clearInterval(handleId)
    }, config.retryInterval)
}
function configSet() {
    Object.assign(config.current, config.global)
    for (const key in config) {
        const option = config[key]
        if (typeof option == 'object' && option.regexp &&
            window.location.href.match(option.regexp)) {
            if (option.callback) keepTry(option.callback)
            Object.assign(config.current, option)
        }
    }
}


configSet()
let urlOld = window.location.href
keepTry(() => {
    const urlCurrent = window.location.href
    if (urlCurrent != urlOld) {
        urlOld = urlCurrent
        configSet()
    }
})
function togglePlay(video = config.current.getVideo()) {
    if (video.paused) video.play()
    else video.pause()
}
window.addEventListener('keydown', event => {
    const video = config.current.getVideo()
    const step = config.current.stepSecond
    switch (event.key) {
    case 'ArrowRight':
    case 'Right':
        video.currentTime += step
        break
    case 'ArrowLeft':
    case 'Left':
        video.currentTime -= step
        break
    case ' ':
        console.debug('space get')
        if (config.current.disable.space) break
        event.preventDefault()
        togglePlay(video)
        break
    }
})
function isVideoEvent(event) {
    if (config.current.whole_page) return true
    else return event.target.nodeName == 'VIDEO'
}
window.addEventListener('click', event => {
    if (config.current.disable.click || config.current.getVideo().currentTime == 0) return
    console.debug('get click')
    if (isVideoEvent(event)) togglePlay()
})
window.addEventListener('wheel', event => {
    if (config.current.disable.wheel) return
    console.debug('get wheel')
    if (isVideoEvent(event)) {
        config.current.getVideo().currentTime += event.deltaY / 100 * config.current.stepSecond
    }
})
