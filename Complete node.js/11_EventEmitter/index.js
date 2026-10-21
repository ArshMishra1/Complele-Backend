const EventEmitter=require("events");
const emitter= new EventEmitter();

// simple


// emitter.on("Greet" ,()=>{
//     console.log("Hello World")
// })
// emitter.emit("Greet")

//with arrgument

// emitter.on("Hiii",(argu)=>{
//     console.log(`Hello ${argu}`)
// })
// emitter.emit("Hiii" ,"Class hai 1:10")

//multiple argument

emitter.on("Hii",(argu)=>{
console.log(` hello firstname ${argu.name} middlename ${argu.middlename}  lastname ${argu.Lastname}`)
})
emitter.emit("Hii" , {
    name:"Arsh",
    middlename:"Kumar",
    Lastname:"Mishra" 
})