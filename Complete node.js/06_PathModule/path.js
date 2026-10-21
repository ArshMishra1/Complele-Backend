

// const path = require('path');
// const filepath=path.join("Stundent", "Class" ,"Name.txt")
// console.log(filepath)

// const dir=path.dirname(filepath)
// console.log(dir)
// const basename=path.basename(filepath)
// console.log(basename)
// const extname=path.extname(filepath)
// console.log(extname)
// const resolve=path.resolve(filepath)
// console.log(resolve)

// const parsedatapaht=path.parse(filepath);
// console.log(parsedatapaht)


// <------Revision------->
const path=require("path")

const mypath=path.join('home','city','state.js')
// console.log(mypath)

// let adsolutepath=path.resolve('account' , 'user' ,'password')
// console.log(adsolutepath)

// console.log(path.basename(mypath))
// console.log(path.extname(mypath))

// console.log(path.dirname(mypath))
console.log(path.parse(mypath));
