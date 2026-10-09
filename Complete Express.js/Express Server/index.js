//import express from 'express';
import express from "express";


//create express application

let app=express();
let PORT=3000;


//Createing Routes or Define routes


app.get('/' ,(req ,res)=>{
    console.log("hello i am form get request")
})


//app.listen --start sever on spefice port number

app.listen(PORT , ()=>{
    console.log(`Sever start on Port ${PORT}`)
})
