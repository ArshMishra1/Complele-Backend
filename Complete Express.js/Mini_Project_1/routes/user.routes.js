import {Router} from 'express'
import fs from'fs'

const userReq=Router()

let authentication=((req,res ,next)=>{
    let loging=true
    if(loging){
        next()
    }else{
        res.send("Plasae login first")
    }
})

userReq.get('/private' ,authentication,(req ,res)=>{
    // let data=new Date().toDateString()
    // fs.writeFile('log.txt', data,(err)=>{
    //        res.send(err)
    // })
fs.readFile('private.txt','utf-8',(err,data)=>{
    if(err){
        res.status(401).send(err)
        return
    }
    res.send(data)
})
})

userReq.get('/public' ,(req ,res)=>{
fs.readFile('Public.txt','utf-8',(err,data)=>{
    if(err){
        res.status(401).send(err)
        return
    }
    res.send(data)
})
})

export default userReq
