const fs=require("fs")
//sync
fs.appendFileSync("./Revision.txt" ,"\nHEllO new Word")
//callbaak
fs.appendFile("./Revision.txt" ,"\nnew Hu bother Word",(err)=>{
    if(err){
        console.log(err)

    }
})
//async and await(promise)

 async function test(){
    try{

        let data= fs.promises.appendFile("./Revision.txt" ,"\n hello promise wala hu")
    }catch(err){
        console.log(err)
    }
}
test()