//How to create server in express

const express=require("express")

let app=express()  //application

let PORT=8000;

//route
 app.get("/" ,(req ,res)=>{
    res.send("hello sir i am form home page")
 })

app.get("/user",(req ,res)=>{
       res.send("Hello  First server in Revision koi bhai")
})

app.get("/Contact",(req ,res)=>{
    res.send("Contact router")
})

app.listen(PORT,()=>{
    console.log(` You sever in running on ${PORT}`)
})
