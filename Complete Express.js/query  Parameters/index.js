import express from 'express'

const app= express()

const PORT=8100;

app.get('/product',(req ,res)=>{
console.log( req.query)
 res.status(200).send( `YOur product is ${req.query.search} Page ${req.query.page}`)
})
app.listen(PORT,()=>{
    console.log(`Sever runing on ${PORT}`)
})