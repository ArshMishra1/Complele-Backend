const fs = require("fs");

//!write operation
//sync
// fs.writeFileSync("./Firstfile.txt" ,"Hello ji first file")

//async

// fs.writeFile("./SecondFIle.txt", "hello ji Seond flie",(err)=>{
//    if(err) console.log(err)
// })

//!Read operation
//sync

// let dataread=fs.readFileSync("./SecondFIle.txt" ,"utf-8")
// console.log(dataread)


//async


// fs.readFile("./Firstfile.txt" ,"utf-8" ,(error, response)=>{
//    if(error){
//       console.log(error)
//    }else{
//       console.log(response)
//    }
// })


//!update /appned

//sync
// fs.appendFileSync("./Firstfile.txt" , "\n Hello New data" )


//async

// fs.appendFile("./Firstfile.txt" , "\n Hello New data async way " ,(error)=>{
//    console.log(error)
// })

//! For replaceing use the same wrtie it complete replace


//!unlink / delete
//sync

// fs.unlinkSync("./newtext.txt")

//aync

// fs.unlink("./SecondFIle.txt",(error)=>{
//  console.log(error)
// })


//Project create user log

fs.appendFile("./Firstfile.txt" , new Date().toDateString(),(error)=>{
   console.log(error)
})


 //!copy

// fs.copyFile("./Firstfile.txt" , "./Copyfile.txt",(err)=>{
//    console.log(err)
// })

//!Rename

// fs.rename("./Copyfile.txt" , "Copy.txt" ,(err)=>{
//    console.log(err)
// })

//!stat

// fs.stat("./Copy.txt" ,(err,status)=>{
//    if(err) console.log(err)
//    console.log(status)
// })



//! Folder creating

// fs.mkdirSync("./NewFolder")

//!rename folder

// fs.renameSync("./NewFolder" ,"TestFolder")


//!folder k andar file add kara na


// fs.writeFileSync("./TestFolder/data.txt" ,"Add file into folder")


//!Folder read

// let folderdata=fs.readdirSync("./TestFolder");
// console.log(folderdata)


//! delete folder with Content


fs.rmSync("./TestFolder" ,{recursive:true})

//delete folder with 