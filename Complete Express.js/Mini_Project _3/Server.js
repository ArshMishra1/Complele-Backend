import express from 'express'
const app=express()
const PORT=8000;

app.get('/',(req ,res)=>{
    res.send("helllo ")
})

app.listen(PORT,()=>{
    console.log(`Server is runnig on ${PORT}`)
})