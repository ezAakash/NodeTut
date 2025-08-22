const currDirPath = process.cwd();

const path = require('path');

const fileName = path.basename(currDirPath);
console.log(fileName);

console.log(process.version);
