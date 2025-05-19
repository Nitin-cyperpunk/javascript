const fs = require('fs');
const data = fs.readFileSync('./a.txt', 'utf-8');  
console.log(data);


const data2 = fs.readFile('./b.txt', 'utf-8');
console.log(data2);