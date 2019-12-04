// ==UserScript==
// @name     e3new entitle
// @namespace http://gholk.github.io/
// @description change e3new website title to represent page content, so it could be search in history.
// @version  3
// @match    *://e3new.nctu.edu.tw/*
// @grant    none
// ==/UserScript==

const urlTitleMap = {
    grade: '成績',
    quiz: '試卷',
    forum: '討論區',
    assign: '作業',
    mail: '郵件',
    theme: '公告',
    user: '成員',
    timetable: '課程綱要'
}

const title = document.title
const url = window.location.href
const newTitle = determineTitle(url, title, document)
document.title = newTitle

function determineTitle(url, title, document) {
    const suffix = 'New e3'
    const course = determineCourse(document)
    const tabe = determineTabe(url)

    let newTitle = course
    if (tabe) newTitle += ` - ${tabe}`
    newTitle += ` | ${suffix}`
    return newTitle

}

function determineCourse(document) {
    const h1 = document.querySelector('h1')
    if (h1) return h1.textContent
    else return 'unknown course'
}

function determineTabe(url) {
    for (const keyword in urlTitleMap) {
        if (url.match(keyword)) return urlTitleMap[keyword]
    }
}
