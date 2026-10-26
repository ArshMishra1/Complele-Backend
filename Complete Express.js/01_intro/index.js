
//!express normal sever setup
// import express from "express";   //import express module
// const app = express();          //create express application
// const PORT = 3000;                 //set port number
// app.listen(PORT, (req, res) => {                     //start server and listen on port 3000
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


//express server setup with nodeman and https request and response
import express from "express";   //import express module
import {data} from "./Data.js"
let app=express()        //create express application
let PORT=3000;             //set port  number

app.use(express.json());

//get method with req.query
app.get("/api/v1/users",(req ,res)=>{
    const {name}=req.query
    if(name){
        const user=data.filter((user)=>{
            return user.name===name
        })
    res.status(200).send(user)

    }
    res.status(200).send(data)

})


// get method with req.params
app.get("/api/v1/users/:id",(req , res)=>{


   const {id}=req.params
   const userid=parseInt(id);
    if(userid){
        const user=data.find((user)=>{
            return user.id===userid
        })
    return res.status(200).send(user)

    }
    res.status(200).send(data)
})




//post

app.post("/api/v1/users", (req, res) => {
   const {name ,address}=req.body
   const newuser={
    id:data.length +1,
    name,
    address
   }
    
   data.push(newuser)
    return res.status(201).send({
        success: true,
        message: "Data received successfully"
    });
})


app.listen( PORT ,()=>{
    console.log("server run successfully")
})
