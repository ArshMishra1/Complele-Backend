 import express from 'express'
 const app=express()
 const router=express.Router()

//GOLBA middleware

let sayhaiMiddleware=(req,res,next)=>{
      console.log("Hay hello middleware")
      next()
}
app.use(sayhaiMiddleware)

//!routes level middleware

// let routeslevel=(req,res,next)=>{
//     console.log("helllo bro this router level s middleware")
//     next()
// }

router.use((req ,res,next)=>{
    console.log("second way to router")
    next()
})


 app.get('/',(req,res)=>{
    res.send("HELLO EVERTHTING WORKING PROPERLy")

 })

 app.get('/data',(req ,res)=>{
     res.send("SEcond user routes")
 })

// app.get('/routes' , routeslevel ,(req ,res)=>{
//     res.send("this router level")
// })


//! router second way 

router.get("/userdata",(req,res)=>{
    res.send("Router second way")
})

router.get("/profile",(req,res)=>{
    res.send("Router send Routes")
})


router.get("/contact",(req,res)=>{
    res.send("Router for Contact")
})


//connect routes with router

app.use("/user" ,router)

 app.listen(3000,()=>{
     console.log(`server runing on ${3000}`)
 })