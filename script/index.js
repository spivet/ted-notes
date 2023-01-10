import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { genHtml, genMarkdown } from './utils/genFile.js';

const homedir = os.homedir()
const tedDir = path.join(homedir, 'Documents/ted-ed-elementary')
const dir = path.join(tedDir, "The myth of Anansi, the trickster spider")
const files = await fs.readdir(dir);

genHtml(dir, files)
genMarkdown(dir, files)