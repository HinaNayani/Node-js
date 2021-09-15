// const util = require('./util.js');
// console.log(util.addition(7,8));
// console.log(util.subtraction(7,8));

 const fs = require('fs');


//read package.json and adding key

// const data = fs.readFileSync('./package.json');
// const myObject = JSON.parse(data);
// myObject['owner'] = 'whatever'
// // const newData2 = JSON.stringify(myObject);
//  console.log(myObject);

// fs.writeFile("./package.json" , newData2,(err) =>{
//     if (err) throw err;
//     console.log("New Data Added");
// });

//deleting folder with its content

// const dataDir = ('./data');
// const dataFile = ('test.text');
// fs.rmdirSync(dataDir, { recursive: true });


// Renaming Files
//removing from folder and renaming
// fs.renameSync('./temp/practice.js', './app2.js');

//renaming and putting inside a folder
fs.renameSync('./app3.js', './temp/practice.js');

//Renaming Directory
// fs.renameSync('./temp', './App');