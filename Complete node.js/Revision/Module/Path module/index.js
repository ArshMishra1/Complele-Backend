//path module- 1 built in module 2 used to work with  file and folder path
const  path= require("path");

console.log(__dirname)
console.log(__filename)

//!path
let newpath=path.join("folder","subfolder","main.js");
// console.log(newpath)

//!parse 

let paresdata=path.parse(newpath)
console.log(paresdata)

//!basename

let filename=path.basename(newpath)
console.log(filename)


//!exstension

let extension=path.extname(filename)
console.log(extension)

//!resolve

