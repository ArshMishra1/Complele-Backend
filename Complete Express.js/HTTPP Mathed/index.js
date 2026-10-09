
import express from "express"; 
import {users} from "./data.js"
const app = express();
app.use(express.json())

const PORT = 4000; 

//Get method
app.get('/user', (req, res) => {
    res.json(users);
});

//multiple get method
app.get("/home" ,(req,res)=>{
    res.send("Hello home")
})
app.get("/about",(req ,res)=>{
    res.send("<h1>HELLO WORD ABOUR </h1>")
})

//Post - post is an HTTP method used to send  data form client (frotend) to sever and create new  data

app.post("/user" ,(req ,res)=>{
    const { name ,email, age}=req.body
    const newuser={
        id:users.length +1,
        name,
        email,
        age
    }
users.push(newuser)
    res.send("User added successfully")

})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
