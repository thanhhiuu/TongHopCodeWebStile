const fs = require("node:fs");
const  gzip = require("node:zlib");


const readerStreams = fs.createReadStream("name.txt", {
    encoding: "utf-8"
})


const writeStreams = fs.createWriteStream("name2.txt")
// "pipes" (ống) là một khái niệm quan trọng liên quan đến việc truyền dữ liệu giữa các luồng đọc và ghi. 
// Nó cho phép bạn kết nối các luồng (streams) lại với nhau để truyền dữ liệu từ một nguồn đến một đích một cách dễ dàng và hiệu quả.
// ở đây ta sẽ đưa dữ liệu từ luồng đọc (readerStreams) đến luônng ghi 1 cách dễ dàngs
readerStreams.pipe(writeStreams);
   

const gzipStream = gzip.createGzip();
const compressedStream = fs.createWriteStream("name2.txt.gz");
readerStreams.pipe(gzipStream).pipe(compressedStream);


// Để sử dụng ống trong Node.js, bạn có thể sử dụng phương thức .pipe() để kết nối một luồng đọc với một luồng ghi.
// Khi bạn gọi phương thức .pipe() trên một luồng đọc, dữ liệu sẽ được tự động chuyển tiếp từ luồng đọc này đến luồng ghi.