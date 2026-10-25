//1 create http sever

const http = require("http");
const fs=require("fs")

const Server=http.createServer((req,res)=>{

    //!Downlaoding File in a bad way ❌
//   let data=fs.readFileSync("log.txt" ,"utf-8")
//   res.end(data)

    // let data=fs.readFile("./log.txt", "utf-8",(err)=>{
    //     if(err){
    //           console.log(err)
    //         res.statusCode=500;
    //         res.end("interanl Server errro")
    //          return
    //     }
    //       res.statusCode = 200;
    //     res.end(data);
    // })

    //!Downloadin File in a write Way


    // const readableStream=fs.createReadStream("log.txt")
    // readableStream.pipe(res)

    //!Copy File in a bad way ❌

//   let file=fs.readFileSync("log.txt" ,"utf-8")
//     fs.writeFileSync("Output.txt" , file)
//     res.end()

    //! Copy File in a write Way

    // let readSream=fs.createReadStream("log.txt");
    // let writestream=fs.createWriteStream("output.txt");

    //       readSream.on("data" ,(chunk)=>{
    //         console.log("chunk" ,chunk)
    //         writestream.write(chunk)
        //   })



        
   
    
})

Server.listen(8010)