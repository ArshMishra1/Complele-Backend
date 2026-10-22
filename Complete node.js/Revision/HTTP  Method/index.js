const http = require("http");
const PORT = 8000;

const server = http.createServer((req, res) => {
    let method = req.method; 
    if (method === "GET") {
        res.end("GET method");
    } else if (method === "POST") {
        res.end("post method");
    } else if (method === "PUT") {
        res.end("PUT method");
    } else if (method === "PATCH") {
        res.end("PATCH method");
    } else if (method === "DELETE") {
        res.end("DELETE method");
    } else {
        
        res.statusCode = 405;
        res.end("Please select the right method");
        console.log("Please select the right method");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
