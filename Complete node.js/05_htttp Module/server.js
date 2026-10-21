const http = require("http");

const PORT = 8080;

let server = http.createServer((request, response) => {
    response.end("Hello My First server");
});

server.listen(PORT, () => {
    console.log(`Server is connected at ${PORT} successfully`);
});