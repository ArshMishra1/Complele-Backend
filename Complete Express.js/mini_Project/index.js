import express from 'express'
import userReq from './routes/user.routes.js'
const app=express()

app.use('/user' , userReq)

app.get('/',(req ,res)=>{
 res.send("main index.js")
})

app.listen(3100,()=>{
    console.log( ` server running on 3100`)
})