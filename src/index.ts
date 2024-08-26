import fs from 'fs';
import path from 'path';

function getDirectoryFiles(dirPath: string, spaceLevel: number = 0): void {
    const absolutePath = path.resolve(dirPath);

    const folder: string[] = fs.readdirSync(absolutePath);
    for (const file of folder) {
        const itemPath = path.join(absolutePath, file);
        const filePathInfo = fs.statSync(itemPath);
        if (filePathInfo.isDirectory()) {
            console.log('');
            console.log(`Directory: ${file}/`);
            getDirectoryFiles(itemPath, spaceLevel + 1);
        } else {
            console.log('      ' + file);
        }
    }
}

getDirectoryFiles('./');
