function isAppendScriptTag(root = document) {
    if (root.currentScript) {
        return root.currentScript.textContent.match('isAppendScriptTag')
    }
    else return false
}
if (isAppendScriptTag()) {
    const script = document.currentScript
    setTimeout(() => {
        script.remove()
        main()
    }, 800)
}
else main()
