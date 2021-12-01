const fs = require('fs').promises;
const path = require('path');

async function readDir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

//caminha recursivamente pelos diretórios filhos e lista os html
async function walk(files, rootDir) {
    for (const file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue; //pula pastas .git
        if (/node_modules/g.test(fileFullPath)) continue; //pula pastas node_module

        if (stats.isDirectory()) {
            readDir(fileFullPath);
            continue;
        }
        if (!/\.html$/g.test(fileFullPath)) continue; //pega só html

        console.log(fileFullPath);
    }
}


readDir(path.resolve('__dirname', '..'));