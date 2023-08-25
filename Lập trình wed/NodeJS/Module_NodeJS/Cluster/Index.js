const http = require("http");

const cluster = require("cluster");

if (cluster.isMaster) {
    console.log("Process" + process.pid + "is running")
    cluster.fork();
    cluster.fork();
} else {


    const sever = http.createServer((req, res) => {
        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/plain" })
            res.end("Home page")
        } else if (req.url === "/api") {
            res.writeHead(200, { "Content-Ty pe": "text/plain" })
            res.end("Page news")
        }
    })


    sever.listen(8000, "localhost", () => {
        console.log('Ket noi thanh cong voi cong 8000')
    })
}