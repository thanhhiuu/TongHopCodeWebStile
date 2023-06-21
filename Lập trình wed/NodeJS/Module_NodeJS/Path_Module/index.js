// Module được tích hợp sẵn - Path module

const path = require("node:path");

console.log("");
console.log(__filename); // d:\TongHopCodeWebStile\Lập trình wed\NodeJS\Module_NodeJS\Path_Module\index.js
console.log(__dirname); // d:\TongHopCodeWebStile\Lập trình wed\NodeJS\Module_NodeJS\Path_Module


console.log("");
console.log(path.basename(__filename));
console.log(path.basename(__dirname));




console.log("");
console.log(path.extname(__filename));
console.log(path.extname(__dirname));