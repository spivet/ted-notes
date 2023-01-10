import fs from 'node:fs/promises';
import path from 'node:path';
import {
    isEnglishTxt,
    isChineseTxt,
    getContents,
    replaceContent,
} from './util.js'
import {
    deleteLineBreak,
    refactorChLineForHtml,
    refactorChLineForMd,
    refactorEnLine,
    formatLines,
} from './refactor.js'

const reg = /\{\{content\}\}/gi

export async function genHtml(dir, files) {
    let enLines = []
    let chLines = []
    for (const file of files) {
        if (isEnglishTxt(file)) {
            const contents = await getContents(dir, file);
            const lines = deleteLineBreak(contents)
            enLines = refactorEnLine(lines)
        }
        if (isChineseTxt(file)) {
            const contents = await getContents(dir, file);
            const lines = deleteLineBreak(contents)
            chLines = refactorChLineForHtml(lines)
        }
    }
    const result = formatLines(enLines, chLines).join('\n\n')
    const newContents = await replaceContent(path.resolve('src/demo.html'), reg, result)
    fs.writeFile('output/output.html', newContents)
}

export async function genMarkdown(dir, files) {
    let enLines = []
    let chLines = []
    for (const file of files) {
        if (isEnglishTxt(file)) {
            const contents = await getContents(dir, file);
            enLines = deleteLineBreak(contents)
        }
        if (isChineseTxt(file)) {
            const contents = await getContents(dir, file);
            const lines = deleteLineBreak(contents)
            chLines = refactorChLineForMd(lines)
        }
    }
    const result = formatLines(enLines, chLines).join('\n\n')
    const newContents = await replaceContent(path.resolve('src/demo.md'), reg, result)
    fs.writeFile('output/output.md', newContents)
}
