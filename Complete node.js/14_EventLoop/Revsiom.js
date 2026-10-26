// !Task: File System (fs) module
// 1. fs module use karo.
// 2. data.txt naam ki file banao aur usmein "Hello Node.js" likho.
// 3. File ko readFile() se asynchronously read karo.
// 4. File ka data console par print karo.
// 5. Error aaye toh use handle karo.

//i do 
// const fs= require("fs")
// fs.writeFile("data2.txt","Hello Node.js " ,(error,)=>{
//     if(error){
//         console.log(error)
//     }
// })

// fs.readFile("data2.txt","utf-8" ,(error,data)=>{
//     if(error){
//         console.log(error)
//         return
//     }
//     console.log(data)
// })

// //Ai do 

// const fs = require("fs");

// fs.writeFile("data.txt", "Hello Node.js", (error) => {
//     if (error) {
//         console.log(error);
//         return;
//     }

//     fs.readFile("data.txt", "utf-8", (error, data) => {
//         if (error) {
//             console.log(error);
//             return;
//         }

//         console.log(data);
//     });
// });



// !Question 2 Task: Node.js ke http module ka use karke ek server create karo.
// Requirements:
// 1. http module import karo.
// 2. Ek server create karo using http.createServer().
// 3. Jab user browser mein server open kare, response mein "Hello Node.js Server!" send karo.
// 4. Server ko port 3000 par run karo.
// 5. Browser mein http://localhost:3000 open karne par message show hona chahiye.

const http=require("http")
const PORT=3000
const server=http.createServer((req,res)=>{
    res.end("Hello Node.js Server!")
})

server.listen(PORT,()=>{
    console.log(` Sever running on ${"http://localhost:3000" }`)
})