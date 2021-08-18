document.querySelectorAll('input[type = "file"]').forEach(input => {
    const node = input.form || input
    node.addEventListener('paste', (paste) => {
        console.debug(paste.clipboardData.files)
        input.files = paste.clipboardData.files
        const change = new Event('change', {bubbles: true, cancelable: false})
        input.dispatchEvent(change)
    })
})
