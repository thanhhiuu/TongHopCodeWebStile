// const http = require("node:http");

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-type", "text/plain");
//     res.end("Xin chào bạn đã tới với nodejs");
// })

// server.listen(3000, 'localhost', () => {
//     console.log('Truy cập vào server http://localhost:3000/');
// })


const http = require('node:http');
const fs = require('node:fs');


// Tạo 1 máy chủ bằng createServer phương thức này nhận vào 1 hàm callback để xử lý yêu cầu và phản hồi của máy chủ
const server = http.createServer((request, response) => {
    // Kiểm tra nếu request.method là get và request.url là users
//   if (request.method === 'GET' && request.url === '/users') {

    // Thiết lập mã trạng thái của phản hồi là 2000
    // Để chỉ định rằng yêu cầu thành công
    // statusCode => giúp đặt trạng thái phản hồi
    // response.statusCode = 200;


    /** Cáchh 2: Đọc văn bản trả về là 1 JSON
           // Đặt tiều đề Content-Type là application/json để chỉ định rằng phản hồi là 1 json
    // setHeader => giúp đặt tiêu đền cho http
    response.setHeader('Content-Type', 'application/json');

    // Tạo 1 mảng chứa các đối tượng
    const users = {
        firstName: "Thanh Hieu",
        lastNam: "Nguyen" ,
    };
    // Dùng JSON.stringify(users) trong trường họp này để chuyển đổi mảng thành 1 chuỗi json
    // Cuối cùng chúng ta gửi users làm nội dung phản hồi
    // end => kết thúc phản hồi và gửi đến client
    // JSON.stringify => chuyển đổi một đối tượng javascript thành json
    response.end(JSON.stringify(users));

     */





/* Cách 1: ĐỌC VĂN BẢN THUẦN TÚY text/plain
  } else {
    // 404 để thể hiện rằng không tìm thấy tài nguyên
    response.statusCode = 404;

//     // Content-Type', 'text/plain => Chỉ định rằng phản hồi sẽ là 1 văn bản thuần
    response.setHeader('Content-Type', 'text/plain');

//     // Làm nội dung phản hồi
    response.end('Not found');
  }
*/


//   } else {
   
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./index.html", "utf-8").pipe(response)

//   }
//
});

// Lắng nghe kết nối cổng
server.listen(9000, 'localhost', () => {
    // Khi lắng nghe thành công chúng ta sẽ xuất hiện thông báo này
  console.log('Server running at http://localhost:3000/');
});



// Tổng quan, đoạn mã trên tạo một máy chủ web đơn giản sử dụng module HTTP trong Node.js.
// Nó lắng nghe các yêu cầu đến cổng 3000 và đường dẫn '/users'.
// Nếu yêu cầu là một phương thức 'GET' và đường dẫn là '/users', nó trả về một danh sách các người dùng dưới dạng JSON.
//  Nếu không, nó trả về mã trạng thái 404 và thông báo 'Not found'.
