import express from 'express'
const router=express.Router()

//Darshboard (access token)

router.get("/Darshboard",(req ,res)=>{
    res.status(200).send({
        message:"welcome to the dashboard"
    })
})
export default  router;