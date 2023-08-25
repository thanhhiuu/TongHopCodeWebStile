const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Đây là trang chủ", "utf-8");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "application/JSON" });

        res.end(JSON.stringify({
            firstName: "Thanh Hieu",
            Age: 14
        }), "utf-8")
    } else if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "text/html" });
        try {
            fs.createReadStream("./index.html", "utf-8").pipe(res);
        } catch (error) {
            console.error("Lỗi khi đọc file:", error);
            res.writeHead(500);
            res.end("Lỗi server", "utf-8");
        }
    }
    else {
        res.writeHead(404);
        res.end("Lỗi kết nối", "utf-8")
    }
})
                                                                            

server.listen(3000, "localhost", () => {
    console.log("Kết nối thành công với http://localhost:4000")
})