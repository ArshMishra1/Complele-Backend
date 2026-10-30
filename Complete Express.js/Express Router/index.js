import express from 'express'
import UserRouter from './routes/user.router.js'

const app=express()
//register
app.use("/user",UserRouter)

app.get('/',(req ,res)=>{
    res.send("hello")
})
app.listen(3100,()=>{
    console.log(`server running on 3000`)
})