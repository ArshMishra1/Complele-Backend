import express from "express";

const app= express();

const PORT=3000;

app.use(express.json());

//application level middleware
let loging= function( req,res ,next){
    console.log("Logined")
    next()
}
let authtication= function( req,res ,next){
    console.log("authentication")
    next()
}

app.get('/',(req ,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})