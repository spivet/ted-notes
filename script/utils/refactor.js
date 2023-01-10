export function deleteLineBreak(contents) {
    return contents.split('\n\n').map(line => line.replace('\n', '')).filter(item => item !== '')
}
export function refactorChLineForHtml(lines) {
    return lines.map(item => `
<details open>
    <summary>翻译</summary>
    <p class="chinese">${item}</p>
</details>
    `)
}
export function refactorChLineForMd(lines) {
    return lines.map(item => `
<div class="cn-transcript">
    ${item}
</div>
    `)
}
export function refactorEnLine(lines) {
    return lines.map(item => `<p class="english">${item}</p>`)
}
export function formatLines(enlines, chlines) {
    let lines = []
    enlines.forEach((item, index) => {
        const newLine = item + chlines[index]
        lines.push(newLine)
    })
    if (chlines.length > enlines.length) {
        lines.push(...chlines.slice(enlines.length))
    }
    return lines
}