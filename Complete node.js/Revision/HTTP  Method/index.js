const http =require("http");
const fs=require("path");
const PORT=8000;
const server=http.createServer((req,res)=>{
    let method=req.method
    if(method === method.GET){
        res.end("GET method")
    }else if(method === method.POST ){
        res.end("post method")

    }else if(method === method.PUT){
        res.end("PUT method")

    }else if(method === method.PATCH){
        res.end(" PATCH method")

    }else if(method === method.DELETE){
        res.end(" DELETE method")

    }else{
        console.log("plasase select the write method")
    }
})

server.listen(PORT)