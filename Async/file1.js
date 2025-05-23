// const fs = require('fs');
// const data = fs.readFileSync('./a.txt', 'utf-8');  
// console.log(data);

// const data2 = fs.readFile('./b.txt', 'utf-8');
// console.log(data2);

/* const fs = require('fs');
function afterFileRead(err, data) {
    if (err) {
        console.log("File not found sorry ");
       
    }else {
        console.log(data);
    }
    
}
   

fs.readFile('./a.txt', 'utf-8', afterFileRead);

fs.readFile('./b.txt', 'utf-8', afterFileRead);

console.log("Done"); */

const fs = require("fs");
function cleanFile(filePath, cb) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    data = data.trim();
    fs.writeFile(filePath, data, function () {
      cb();
    });
  });
}

function onDone() {
  console.log("file has been cleaned");
}
cleanFile("a.txt", onDone);

