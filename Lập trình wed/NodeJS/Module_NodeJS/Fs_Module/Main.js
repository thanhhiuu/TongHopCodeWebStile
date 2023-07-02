// Cách import fs vào
const fs = require("node:fs");

// readFileSync sử dụng để đồng bộ đọc nội dung từ tập tin đã cho
const constFile = fs.readFileSync("./name.txt", "utf-8");  
console.log("NNo 1")
console.log(constFile);
 

// readFile đọc nội dunng 1 cách khôg đồng bộ
fs.readFile("./name.txt", "utf-8", (error, data)=> {
    if(error) {
        console.log(error);
    } else {
        console.log("Reader " + data);
    }
})

console.log("No 2")



// writeFileSync ghi nội dung vào tệp tin đồng bộ
const constWriter = fs.writeFileSync("dog.txt", "Cho co " );

// writeFile ghi nội dung vào tệp tin khôg đồng bộ
fs.writeFile("dog.txt", "Cho Husky", {flag: "a"} , (err) => {
    if(err) {
        console.log(err);
    }
})


console.log("No 3");



// Module fs trong JavaScript là một module tích hợp sẵn trong Node.js, cho phép bạn thao tác với hệ thống tập tin (file system) của máy tính. 
// Nó cung cấp các phương thức và hàm để đọc, ghi, xóa, di chuyển và thao tác với các tập tin và thư mục.



// Module fs cung cấp cả các phương thức đồng bộ (synchronous) và không đồng bộ (asynchronous) để thực hiện các thao tác với tập tin. Phương thức đồng bộ sẽ chặn luồng chính (main thread) trong quá trình thực hiện, trong khi phương thức không đồng bộ sẽ không chặn luồng chính và cho phép tiếp tục thực hiện các tác vụ khác trong quá trình chờ đợi kết quả từ hệ thống tập tin.



// Dưới đây là một số phương thức quan trọng trong module fs:

// -------------Đọc và ghi tập tin:

// fs.readFile(path, options, callback): Đọc nội dung của một tập tin.
// fs.writeFile(file, data, options, callback): Ghi nội dung vào một tập tin. Nếu tập tin đã tồn tại, nội dung sẽ được ghi đè.



// -----------------Thao tác với thư mục:
// fs.mkdir(path, options, callback): Tạo thư mục mới.
// fs.readdir(path, options, callback): Đọc danh sách các tệp tin và thư mục trong một thư mục.
// fs.rmdir(path, callback): Xóa một thư mục.




// ------------------Các thao tác khác:
// fs.rename(oldPath, newPath, callback): Đổi tên hoặc di chuyển tệp tin hoặc thư mục.
// fs.unlink(path, callback): Xóa một tệp tin.






// Dưới đây là một số thuộc tính con quan trọng của module fs trong Node.js:

// fs.constants: Đây là một đối tượng chứa các hằng số liên quan đến hệ thống tập tin, ví dụ như quyền truy cập, các cờ mở tập tin, và mã lỗi.

// fs.promises: Đây là một đối tượng chứa các phương thức của module fs được đóng gói bởi Promise, cho phép sử dụng cú pháp Promise hoặc async/await để thực hiện các thao tác với tập tin một cách không đồng bộ.

// Dưới đây là một số phương thức quan trọng trong fs.promises:

// fs.promises.readFile(path, options): Đọc nội dung của một tập tin.
// fs.promises.writeFile(file, data, options): Ghi nội dung vào một tập tin.
// fs.promises.mkdir(path, options): Tạo thư mục mới.
// fs.promises.readdir(path, options): Đọc danh sách các tệp tin và thư mục trong một thư mục.
// fs.promises.rename(oldPath, newPath): Đổi tên hoặc di chuyển tệp tin hoặc thư mục.
// fs.Stats: Đây là một đối tượng đại diện cho thông tin trạng thái của một tập tin hoặc thư mục. Nó bao gồm các phương thức như isFile(), isDirectory(), size (kích thước), mtime (thời gian sửa đổi cuối cùng), v.v.
// Các thuộc tính và phương thức con khác của module fs có thể được tìm thấy trong tài liệu chính thức của Node.js với tên đầy đủ là "fs - File System" (https://nodejs.org/api/fs.html).