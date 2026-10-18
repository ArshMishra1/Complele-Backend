import express from 'express'

const router=express.Router()

//Gererate -token point 
router.get('/genrate-token',(req,res)=>{
    const token="token"
    res.status(200).send({
        message: "Token generate save it for future use",
        token :token
    })
})

//Home route
router.get('/', (req ,res)=>{
    res.status(200).send({
        message:"Welcome to the home page"
    })
})

export  default router;