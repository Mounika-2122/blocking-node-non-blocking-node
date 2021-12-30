//Blocking code execution is for sync

const fs =require("fs");
const textIN = fs.readFileSync("colors.txt","utf-8");
console.log(textIN);

//Non-blocking code execution is for async
fs.readFile('colors.txt' , 'utf-8' , (err,data) => {
    console.log(data);
});
console.log('Reading File')
