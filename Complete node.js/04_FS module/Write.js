//? FS modules--(File sytem module) is used to read and write files in Node.js. It provides both synchronous and asynchronous methods for file operations.


// const fs=require('fs')
// const { appendFile } = require("fs")
// const fs=require("fs/promises")
// const {writeFile}=require("fs/promises")
//sync

// fs.writeFileSync("./newtext.txt" ,"hello")

//async

//!using callback

// fs.writeFile("./newtext.txt" ,"hello" , (err)=>{
//     if(err) {
//         console.log(err)
//     }else{
//         console.log("hello work done")
//     }
// })

//!using promise
//  async function wrtie(){
//     try{
//         await fs.promises.writeFile("./newtext.txt", "hello done with promise");
//         console.log("done")
        
//     }catch(error){
//         console.log(error)
//     }

// }
// wrtie()

//!2
//  async function wrtie(){
//     try{
//         await fs.writeFile("./newtext.txt", "hello done with promise second way");
//         console.log("done")
        
//     }catch(error){
//         console.log(error)
//     }

// }

// wrtie()

//!3
//  async function wrtie(){
//     try{
//         await writeFile("./newtext.txt", "hello done with promise third way");
//         console.log("done")
        
//     }catch(error){
//         console.log(error)
//     }

// }
// wrtie()


// !appendFile

// async function app(){
//     try{
//         await fs.appendFile("./newtext.txt" , "\n new line");
//     }catch(error){
//         console.log(error)
//     }
       
// }

// app()

// <--------------- Revesion------------->

// const fs=require("fs")
// //sync
// fs.writeFileSync("./Revision.txt" ,"Hello i do revision of node .js --> Fs module")
// //callback
// fs.writeFile("./Revision.txt" , "fs module" ,(err)=>{
//     console.log(err)
// })
// //async -->promise

//  async function test(){
//     try{
//         let data= await fs.promises.writeFile("./Revision.txt" , "  i complete writefs module method")

//     } catch(error){
//         console.log(error)
//     }
// }
// test()




