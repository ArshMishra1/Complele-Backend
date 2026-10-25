// const EventEmitter=require("events");

// const emitter= new EventEmitter();

// //on()

// emitter.on("GREET",(arg)=>{
//     console.log(`HEllO ${arg.fullname} ${arg.phoneon}`)
// })

// //emit()

// emitter.emit("GREET",{
//     fullname:"Arsh Mishra",
//     phoneon:9854763834
// })


//!project 
const fs=require("fs")
const EventEmitter=require("events");
const event= new EventEmitter()
let count=0;



event.on("LOGIN" ,(argu1  )=>{
      count++
    console.log("LOGING Event" ,argu1)
})

event.on("LOGOUT" ,(argu)=>{
      count++
    console.log("LOGOUT Event" ,argu)
})

event.on("PURCHASE" ,(argu)=>{
      count++
    console.log("PURCHASE Event", argu.itme1 ,argu.itme2 ,argu.itme3)
})
event.on("PROFILE" ,(argu)=>{
      count++
    console.log("PROFILE Event" ,argu)
})

event.on("SAUMMARY",()=>{


    let log=` user log ${count} `
fs.appendFile( "Log.txt" , log ,(err)=>{
    if(err){
        console.log(err)
    }
})

      fs.readFile("Log.txt" ,"utf-8",(err,data)=>{
        if(err){
            console.log(object)
        }else{
            console.log(data)
        }
      })
})



event.emit("LOGIN" ,"userLOGing sucessfully" )
event.emit("LOGOUT" ,"userLOGout sucessfully")
event.emit("PURCHASE",{
    itme1: "phone",
    itme2:"Laptop",
    itme3:"watch"
})

event.emit("PROFILE","username update sucessfully")

event.emit("SAUMMARY")





// const fs=require("fs")
// const EventEmitter=require("events");
// const event= new EventEmitter()
// let count=0;
// let log=` user log ${count} `
// fs.appendFile( "Log.txt" , log ,(err)=>{
//     if(err){
//         console.log(err)
//     }
// })


// event.on("LOGIN" ,(argu1  )=>{
//       count++
//     console.log("LOGING Event" ,argu1)
// })

// event.on("LOGOUT" ,(argu)=>{
//       count++
//     console.log("LOGOUT Event" ,argu)
// })

// event.on("PURCHASE" ,(argu)=>{
//       count++
//     console.log("PURCHASE Event", argu.itme1 ,argu.itme2 ,argu.itme3)
// })
// event.on("PROFILE " ,(argu)=>{
//       count++
//     console.log("PROFILE Event" ,argu)
// })

// event.on("SAUMMARY",()=>{
//       fs.readFile("Log.txt" ,"utf-8",(err,data)=>{
//         if(err){
//             console.log(object)
//         }else{
//             console.log(data)
//         }
//       })
// })



// event.emit("LOGIN" ,"userLOGing sucessfully" )
// event.emit("LOGOUT" ,"userLOGout sucessfully")
// event.emit("PURCHASE" ,{
//     itme1: "phone",
//     itme2:"Laptop",
//     itme3:"watch"
// })

// event.emit("PROFILE","username update sucessfully")

// event.emit("SAUMMARY")