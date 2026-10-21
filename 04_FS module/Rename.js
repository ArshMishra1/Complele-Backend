//? Rename
const fs=require("fs");

//sync
// fs.renameSync("./newtext.txt" , 'newnext.txt ')

//callback


// fs.rename("./text.txt", "newfile.txt", (err) => {
//   if (err) {
//     console.log("Error renaming file:", err);
//     return;
//   }
  
// });

//!async

 async function re( ){
  try{
    let data = await fs.promises.rename("./text.txt" ,"newtext.txt")

  }catch(error){
    console.log(error)
  }
}
re()

let data=fs.statSync("./Revision.txt")
console.log(data)