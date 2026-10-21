// const fs=require('fs')
// //sync
// // let data =fs.readFileSync('./newtext.txt' ,"utf-8")
// // console.log(data)

// //callback

// fs.readFile('./newtext.txt' ,'utf-8', (err,res)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(res)
//     }
// })


// //promise

// //  async function readnode( ){
// //     try{
// //     let data =await fs.promises.readFile("./newtext.txt",'utf-8')
// //     console.log(data)
// //     }
// //     catch(error){
// //         console.log(error)
// //     }
  
// }
// readnode()


// <--------------- Revesion------------->

const fs=require( "fs")

//sync
let data=fs.readFileSync("./Revision.txt" ,"utf-8")
console.log(`First Output-->${data}`)

//callback
fs.readFile("./Revision.txt" ,"utf-8",(err ,data2)=>{
    if(err){
console.log(err)
    }else{
        console.log(`Second Output -->${data2}`)
    }
})
//asyc

async function test2(){
    try{
        
         let data = await fs.promises.readFile("./Revision.txt" ,"utf-8")
         console.log(` third Output--${data}`)

    }catch(err){
console.log(err)
    }
}
test2()