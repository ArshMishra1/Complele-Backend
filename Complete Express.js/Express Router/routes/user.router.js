import {Router} from 'express'
//create express router
let UserRouter=Router()


UserRouter.get("/create-user",(req ,res)=>{
    res.send("user is created")
})
UserRouter.get("/getAll-user",(req ,res)=>{
    res.send("user is getAlluser")
})
UserRouter.get("/delete-user",(req ,res)=>{
    res.send("user is delete user")
})
UserRouter.get("/update-user",(req ,res)=>{
    res.send("user is update user")
})

export default UserRouter;