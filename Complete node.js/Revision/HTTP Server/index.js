//CREATE SERVER USING http MOUDULE

const http=require("http");
const fs=require("fs")
let PORT=8000;
const server= http.createServer((req,res)=>{
   
    const date= new Date()
    const content=`New req is receive on ${date} and url ${req.url}`
    fs.writeFile("./text.txt", content, (err)=>{
  if(err){
    console.log(err)
  }
    })
    res.end("HEllo first http sever")
})

server.listen(8000)