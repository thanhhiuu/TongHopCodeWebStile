const mongoose = require("mongoose");
// Phần mã trên là một đoạn mã trong Node.js sử dụng thư viện Mongoose để định nghĩa và xuất một mô hình User dựa trên một schema
const UserSchema = new mongoose.Schema({ //  Schema xác định cấu trúc dữ liệu cho các đối tượng User trong cơ sở dữ liệu.
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
        // Khi thuộc tính "unique" được đặt cho một trường, nó yêu cầu rằng không có hai bản ghi
        // nào trong bộ sưu tập hoặc bảng có giá trị trùng lặp trong trường đó. 
        // Nếu một giá trị bị trùng lặp được cố gắng được chèn hoặc cập nhật
        // vào trường đã đánh dấu "unique", hệ quản trị cơ sở dữ liệu sẽ phát sinh lỗi hoặc từ chối thực hiện hành động đó.
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: Date.now
    }
})


module.exports = mongoose.model('user', UserSchema); // xuất mô hình User dựa trên schema đã định nghĩa.
                                                     // Điều này cho phép chúng ta sử dụng mô hình User này trong các phần khác của ứng dụng.

// Khi mô hình User này được xuất, ta có thể sử dụng nó để tương tác với cơ sở dữ liệu MongoDB bằng Mongoose. 
// Ví dụ, chúng ta có thể tạo, đọc, cập nhật và xóa các đối tượng User trong cơ sở dữ liệu dựa trên mô hình này.



// SCHEMA
// Trong ngữ cảnh của cơ sở dữ liệu, schema là một khái niệm được sử dụng để mô tả cấu trúc dữ liệu của một tập hợp các đối tượng trong cơ sở dữ liệu.
// Nó định nghĩa các trường(fields) và kiểu dữ liệu của mỗi trường trong một đối tượng, cũng như các ràng buộc,
// quy tắc và thuộc tính khác liên quan đến dữ liệu trong đối tượng đó.
// Một schema trong cơ sở dữ liệu quan hệ(relational database) tương đương với bảng(table) trong hệ quản trị cơ sở dữ liệu quan hệ(RDBMS)
// Nó xác định các cột(columns) và kiểu dữ liệu của các cột đó.