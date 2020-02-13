//The path module provides utilities for working with file and directory paths
const path = require('path');

const filename = path.join(__filename);   //The path.join() method joins all given path segments together 
const basename = path.basename(filename);
const extname = path.extname(basename);

console.log(filename);
console.log(basename);
console.log(extname);