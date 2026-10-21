//? delete
// const fs=require("fs")
// //sync
// fs.unlinkSync("Readcopy.js")


// <--------Delete------->

const fs=require("fs");

//sync
// fs.unlinkSync("./Revisio")
//callback
// fs.unlink("Revision.txt" ,(err)=>{
//     if(err){
//         console.log(err)
//     }
// })
//async
 async function test(){
    try{
        await fs.promises.unlink("text.text")
    }
    catch(err){  console.log(err)
    }
 }
test()
 