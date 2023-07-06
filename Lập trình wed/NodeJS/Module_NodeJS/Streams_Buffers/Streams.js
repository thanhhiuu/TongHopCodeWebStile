
// Streams cho phép xử lý dữ liệu 1 cách tuần tự 
//  Streams được sử dụng để đọc hoặc ghi dữ liệu theo từng phần nhỏ (chunks) một thay vì đọc hoặc ghi toàn bộ dữ liệu cùng một lúc

const fs = require('node:fs');


const readerStreams = fs.createReadStream("name.txt", {
    encoding: "utf-8",
})

const writerStreams = fs.createWriteStream("name1.txt");

readerStreams.on("data", (chunk) => {
    console.log(chunk);
    writerStreams.write(chunk);
})


// Có các loại Stream khác nhau trong Node.js,
// ví dụ như Readable Stream để đọc dữ liệu, Writable Stream để ghi dữ liệu và Duplex/Transform Stream để đọc và ghi dữ liệu cùng một lúc.



// Sự kết hợp giữa Buffer và Stream trong Node.js cho phép bạn xử lý dữ liệu hiệu quả, đồng thời làm giảm lượng bộ nhớ sử dụng và thời gian đáp ứng.
// Bạn có thể đọc dữ liệu từ một nguồn (ví dụ như file hoặc socket) theo từng phần nhỏ bằng cách sử dụng Stream 
// và lưu trữ nó trong Buffer để xử lý hoặc ghi dữ liệu theo yêu cầu.