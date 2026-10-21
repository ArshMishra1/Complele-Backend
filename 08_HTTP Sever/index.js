// n

// const mySever=http.createServer((req ,res)=>{
//      const log=fs.appendFile("log.txt" ,` \nuserLOG ${new Date().toDateString()}`,(err)=>{
// if(err){
//     console.log(err)
//     res.statusCode=500;
//     return res.end("internal sever error")
// }
// res.end("server is runniing")
//      })
    
// })


// mySever.listen(8000, ()=>{
//     console.log("Server is start")
// })


const http = require('http'); // Quotes add kiye
const fs = require('fs');     // Quotes add kiye

let mySever = http.createServer((req, res) => {
    let userlog = req.url;
    
    // Favicon request ko ignore karne ke liye (taki log file clean rahe)
    if (req.url === '/favicon.ico') return res.end();

    fs.appendFile('log.txt', `\n ${userlog} \n ${req.method}`, (err) => { // Quotes aur backticks sahi kiye
        if (err) {
            console.log("File error:", err);
            res.statusCode = 500;
            return res.end("Internal Server Error");
        }

        switch (req.url) {
            case '/':
                res.end("Home page");
                break;
            case '/about':
                res.end("This is About Page");
                break;
            default:
                res.statusCode = 404;
                res.end("404 Page Not Found");
        }
    });
});

// Port 8800 par listen kar raha hai
mySever.listen(8800, () => {
    console.log("Server is running on port 8800"); // Yahan 8800 kar diya taaki confusion na ho
});
