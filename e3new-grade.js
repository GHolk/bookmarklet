function userClick() {
    alert('please click the column you want to grade')
    return new Promise(resolve => {
        window.addEventListener(
            'click',
            click => resolve(click.target),
            {once: true}
        )
    })
}

function findAcient(node, testSelector) {
    let test
    if (typeof testSelector == 'string') {
        test = node => node.matches(testSelector)
    }
    else test = testSelector
    while (node) {
        if (test(node)) return node
        node = node.parentNode
    }
    return null
}

function getScoreList() {
    return prompt('please input score seperated by space').split(/\s/g)
}

async function main() {
    const target = await userClick()
    const cell = findAcient(target, 'td')
    const column = cell.cellIndex
    const table = findAcient(cell, 'table')
    const inputSelector = `td:nth-child(${column+1}) input`
    const inputList = table.querySelectorAll(inputSelector)
    const scoreList = await getScoreList()
    for (let i=0; i<inputList.length; i++) {
        const input = inputList[i]
        input.value = scoreList[i]
    }
}

main()
