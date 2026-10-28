// //How to create server in express

// const express=require("express")

// let app=express()  //application

// let PORT=8000;

// //route
//  app.get("/" ,(req ,res)=>{
//     res.send("hello sir i am form home page")
//  })

// app.get("/user",(req ,res)=>{
//        res.send("Hello  First server in Revision koi bhai")
// })

// app.get("/Contact",(req ,res)=>{
//     res.send("Contact router")
// })

// app.listen(PORT,()=>{
//     console.log(` You sever in running on ${PORT}`)
// })



//Http method
//1 GET
 
// import express from 'express'; 
// import  userInfo from './userinfo.js'; 

// const app = express(); 
// const PORT = 8000; 

// console.log(userInfo); 

// app.get('/', (req, res) => { 
//     res.send('Hello this GET method'); 
// }); 

// app.get("/userinfo" ,(req ,res)=>{
//     res.send(userInfo)
// })

// app.listen(PORT, () => { 
//     console.log(`Server running on ${PORT}`); 
// });

//2 POST

// import express from 'express'
// import userInfo from './userinfo.js';
// import fs from 'fs'

// const app=express()

// let PORT=8100;
// app.use(express.json())

// app.get( "/",(req ,res)=>{
//     res.send(userInfo)
// })

// app.post("/userLogin",(req ,res)=>{

//      let {name , email ,age ,city }= req.body

     
// let data=userInfo.push(
//     {
//       id:userInfo.length+1,
//       name,
//       email,
//       age,
//       city
// }
// )
// fs.writeFile("userinfo.js" , data ,(error)=>{
//     if(error){
//         console.log(error)
//     }
// })
//          res.status(200).send("Data send successfully")
// })

// app.listen(PORT,()=>{
//     console.log(`Server running on ${PORT}`)
// })

//3 PUT

import express from 'express';
import userInfo from './userinfo.js';
const app=express()
const PORT=8100

app.get("/userinfo" ,(req ,res)=>{
    res.send(userInfo)
})

app.put('/userinfod/:id',(req ,res)=>{
     let {id}=req.params
      let userid=parseInt(id)
      const userinfoindex= userInfo.findIndex((ele)=>{
            return ele.id=== userid
       })
       
       userInfo[userinfoindex] = {
    id: userid,
    name: "update data"
};


              res.send("data update successfully")
       
})

// start delete bro
app.delete('/userinfo/:id',(req ,res)=>{
      const {id}=req.params
      const userid= parseInt(id)
console.log(userid)
      let deleteuser=userInfo.findIndex((ele)=>{
        return ele.id===userid
      })
      console.log(deleteuser)
        if (deleteuser === -1) {
        return res.status(404).send("User not found");
    }

    userInfo.splice(deleteuser, 1);

    res.send("User deleted successfully");
})

app.listen(PORT,()=>{
 console.log(`Sever runnig on${PORT}`)
})


//4 patch
//5 Delete
