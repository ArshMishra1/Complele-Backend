import express from "express"
import { usersdata } from "./userdata.js"

const app= express()
//query parameter
app.get('/users',(req ,res)=>{
     const {name}=req.query
     if(name){``
    const  userDatainfo =usersdata.filter((user)=>{
          return  user.name==name
    })
    return res.send(userDatainfo)
}
     res.send("user data access successfully")
})

//route parameter
app.get('/user/:id',(req,res)=>{
   const { id } = req.params; 
    const parsedid=parseInt(id)
  let userdataid=  usersdata.find((user)=>{
        return user.id===parsedid
    })
    res.send(userdataid)
})

app.listen(4000,()=>{
    console.log("Server runninh successful")
})