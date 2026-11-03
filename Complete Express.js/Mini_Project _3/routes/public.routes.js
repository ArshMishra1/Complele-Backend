import {Router} from 'express';
import { generateToken } from '../utils/token -ulits.js';

const router=Router();

router.get('/GenrateToken',(req,res)=>{
    let token=generateToken()
    res.send({
        message:"token is genrated",
        token:token
    })
})

router.get('/' ,(req ,res)=>{
    res.send("home")
})


export  default router