
const express = require('express') // Dòng đầu tiên const express = require('express') là để import thư viện Express.
                                   // Express cung cấp một cách linh hoạt để xây dựng các ứng dụng web theo cách riêng của bạn và hỗ trợ sự phát triển nhanh chóng và hiệu quả.
const connectMongoose = require("./db"); // Dòng tiếp theo const connectMongoose = require("./db") là để import hàm connectMongoose


connectMongoose(); // Giup kết nối với cơ sở dữ liệu  

const app = express() // Dòng này tạo một instance của ứng dụng Express. Chúng ta sẽ sử dụng biến app này để cấu hình và định nghĩa các endpoint cho ứng dụng web.
const port = 3000 // Biến này đại diện cho số cổng mà máy chủ web sẽ lắng nghe các kết nối từ client.

app.use('/api/author', require('./routers/author')); // Dòng này đăng ký một middleware cho ứng dụng Express. Middleware này được áp dụng cho mọi request tới đường dẫn bắt đầu bằng /api/author
app.use('/api/note', require('./routers/note')); // đăng ký middleware cho đường dẫn bắt đầu bằng /api/note và sử dụng router từ file ./routers/note.
// Các middleware trong Express có thể được đăng ký và sử dụng bằng cách sử dụng phương thức use() của ứng dụng Express. 
// Middleware có thể là hàm đơn lẻ hoặc một chuỗi các middleware liên tiếp nhau. 
// Khi một yêu cầu đến, Express sẽ thông qua các middleware theo thứ tự và thực hiện các xử lý tương ứng.

app.listen(port, () => { // listen lắng nghe đến kết nối máy chủ
  console.log(`Example app listening on port http://localhost:${port}`)
})





