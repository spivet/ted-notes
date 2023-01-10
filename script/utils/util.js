import fs from 'node:fs/promises';
import path from 'node:path';

export function isEnglishTxt(filename) {
    return filename.includes('English') && filename.endsWith('\.txt')
}
export function isChineseTxt(filename) {
    return filename.includes('Chinese') && filename.endsWith('\.txt')
}
export async function getContents(dir, file) {
    return await fs.readFile(path.resolve(dir, file), { encoding: 'utf8' })
}
export async function replaceContent(file, reg, content) {
    const source = await fs.readFile(file, { encoding: 'utf8' })
    return source.replace(reg, content)
}