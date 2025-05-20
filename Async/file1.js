// const fs = require('fs');
// const data = fs.readFileSync('./a.txt', 'utf-8');  
// console.log(data);

// const data2 = fs.readFile('./b.txt', 'utf-8');
// console.log(data2);

const fs = require('fs');
function afterFileRead(err, data) {
    if (err) {
        console.log("File not found sorry ");
       
    }else {
        console.log(data);
    }
    
}
   

fs.readFile('./a.txt', 'utf-8', afterFileRead);

fs.readFile('./b.txt', 'utf-8', afterFileRead);

console.log("Done");
