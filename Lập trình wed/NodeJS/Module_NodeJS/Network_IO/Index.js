const https = require("https");



const kq = 6;

const start = Date.now();

for(let i = 0; i < kq; i++) {
    https.request("https://www.youtube.com/watch?v=qCC56uJh3bk&ab_channel=Codevolution",(res) => {
        res.on("data", () => {});
        res.on("end", () => {
            console.log("Thời gian chạy", (i + 1), Date.now() - start);
        });
        
    })
    .end();
}