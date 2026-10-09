import express from "express";

const app= express();

const PORT=3000;

//goble middleware 

function sayhello(req,res,next){
    console.log("hello from middleware")
    next()
}

// app.use(sayhello)

//
app.get('/',sayhello,(req,res)=>{
    res.send("Hello from express middleware")})

app.get('/',(req,res)=>{
    res.send("Hello from express middleware")
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})