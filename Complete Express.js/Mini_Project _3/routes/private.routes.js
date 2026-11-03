import {Router} from 'express';

const  privaterouter=Router();
import { Authorization } from '../Middleware/Authorization.js';

privaterouter.get('/Dashborad' ,Authorization ,(req ,res)=>{
    res.send("Dashbroad page")
})



export  default privaterouter