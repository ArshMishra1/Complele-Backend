//!Node.js example

const fs=require("fs")     //main thread

console.log("1 , Start")

fs.readFile("data.txt",(err,data)=>{
    if(err){
        console.log(err);
        return
    }else{
        console.log(data);
    }
})

console.log("2 , End")


//! event loop exmpale

 console.log("A")

 setTimeout(()=>{
   console.log("B")
 },0
)

console.log("C")