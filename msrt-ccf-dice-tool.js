const dicer = window['msrt-ccf-dicer'] = {
    init() {
        this.inputId = 'downshift-0-input'
        this.messageSelector = '.MuiListItem-root.MuiListItem-gutters p'
        this.diceResultSelector = 'span.MuiTypography-colorTextSecondary, span'
        this.helpText = `
example:
2D6+3 2D6+1 2D6-3 1D6+2
alice bob   chard denis
staff before last line will be ignored
...
#sort

and click \`msrt\` button
`
        this.addButton()
    },
    getText() {
        const text = document.getElementById(this.inputId).value
        return text
    },
    checkFormat(s) {
        const line = s.split(/\n/)
        return (line.length >= 3) && line.some(l => /^#sort/.test(l))
    },
    dispatch(node, name) {
        const event = new Event(name, {bubbles: true})
        event.isTrust = true
        node.dispatchEvent(event)
    },
    setNativeValue(element, value) {
        const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
        const prototype = Object.getPrototypeOf(element);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
      
        if (valueSetter && valueSetter !== prototypeValueSetter) {
            prototypeValueSetter.call(element, value);
        }
        else {
            valueSetter.call(element, value);
        }
    },
    putText(s) {
        const node = document.getElementById(this.inputId)
        this.setNativeValue(node, s)
        this.dispatch(node, 'change')
    },
    send() {
        document.querySelector('button[type=submit]').click()
    },
    sleep(second) {
        return new Promise(wake => setTimeout(wake, second*1000))
    },
    getLastMessage() {
        const list = document.querySelectorAll(this.messageSelector)
        const last = list[list.length - 1]
        return last
    },
    async waitRoll() {
        const lastOrigin = this.getLastMessage()
        while (true) {
            await this.sleep(1)
            const last = this.getLastMessage()
            if (last != lastOrigin && this.checkFormat(last.textContent)) {
                return last
            }
        }
    },
    parseDiceBracket(node) {
        const text = node.querySelector(this.diceResultSelector).textContent
        const scan = text.match(/\([\d,+\[\]\-]+\)/g)
        if (scan) {
            return scan.map(s => s.replace(/\[.*\]/, ''))
                .map(s => eval(s))
        }
        else return null
    },
    normalizeLine(text) {
        const line = text.split('\n').map(s => s.trim())
        let hide = ''
        if (line[line.length - 1].match('#hide')) hide = 'S'
        if (line[0].match(' ')) {
            const diceCode = line[0].split(/\s+/).map(d => `(${d})`).join('+')
            line.unshift(hide + diceCode)
        }
        return line
    },
    handleError() {
        alert('format wrong\n' + this.helpText)
    },
    async run() {
        const text = this.getText().trim()
        if (!text) throw new Error('empty input')
        if (!this.checkFormat(text)) throw new Error('format wrong')
        const line = this.normalizeLine(text)
        const unitList = line[2].split(/\s+/).map(u => [u])

        this.putText(line.join('\n') + '\n')
        this.send()

        const roll = await this.waitRoll()
        const diceResult = this.parseDiceBracket(roll)
        unitList.forEach((a, i) => a.push(diceResult[i]))
        unitList.sort((x, y) => y[1] - x[1])
        this.putText(
            unitList.map(([n, v]) => `${n}(${n.match('#S') ? '#' : v})`)
                .join(' > ') +
                '\n' + line.slice(3, -1).join('\n')
        )
    },
    addButton() {
        const b = document.createElement('button')
        b.type = 'button'
        b.textContent = 'msrt'
        b.className = 'MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSizeSmall MuiButton-sizeSmall'
        b.onclick = () => this.run().catch(error => {
            alert(String(error))
            this.handleError()
        })
        document.querySelector('button[type=submit]').parentNode.appendChild(b)
    }
}
dicer.init()
