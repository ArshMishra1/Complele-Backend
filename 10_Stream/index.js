const http = require("http");
const fs=require("fs")
const PORT = 8900;

// Create a server
let server = http.createServer((req, res) => {
//    ------download file----
const readable=fs.readFileSync("simple.text")

    res.end(readable); 

});

// Run server or listen
server.listen(PORT, () => {
    console.log("Server run on the", PORT);
});
