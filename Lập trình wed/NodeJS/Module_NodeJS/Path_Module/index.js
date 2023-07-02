// Module được tích hợp sẵn - Path module

const path = require("node:path"); // Cách tiêu chuẩn để import module

console.log("");
console.log(__filename); // d:\TongHopCodeWebStile\Lập trình wed\NodeJS\Module_NodeJS\Path_Module\index.js
// In ra đường dẫn tuyệt đối --filename


console.log(__dirname); // d:\TongHopCodeWebStile\Lập trình wed\NodeJS\Module_NodeJS\Path_Module
// __dirname đường dẫn thư mục của tập tin đang được thực thi


console.log("");
console.log(path.basename(__filename)); // index.js
// path.basename(__filename) in ra phần cơ bản của tệp tin
console.log(path.basename(__dirname));// Path_Module
// path.basename(__filename) in ra phần cơ bản của thư mục


console.log("");
console.log(path.extname(__filename)); // .js
// path.extname(__filename) in ra phần mở rộng của tệp tin
console.log(path.extname(__dirname)); // rỗng
// path.extname(__filename) in ra phần mở rộng bản của thư mục
// Vi thư mục không có phần mở rộng nên kết quả bằng rỗng



console.log("");
// path.parse(__filename) trả về một đối tượng chứa thông tin về đường dẫn tập tin hiện tại. kết quả được tin dưới dạng Json
console.log(path.parse(__filename));    // {
                                        //     root: 'd:\\',
                                        //     dir: 'd:\\TongHopCodeWebStile\\Lập trình wed\\NodeJS\\Module_NodeJS\\Path_Module',
                                        //     base: 'index.js',
                                        //     ext: '.js',
                                        //     name: 'index'
                                        //   }
console.log(path.format(path.parse(__filename))); // d:\TongHopCodeWebStile\Lập trình wed\NodeJS\Module_NodeJS\Path_Module\index.js
// Sử dụng path.format để chuyển đổi đối tượng trước đó thành một đối tượng hoàn chỉnh


console.log("");
// path.isAbsolute kiểm tra đường dẫn tệp tin có tuyệt đối không true = tuyệt đối và false = không tuyệt đối
console.log(path.isAbsolute(__filename)); // true
console.log(path.isAbsolute("./data.json")); /// false



console.log("Phương thức join được sử dụng để kết hợp các thành phần đường dẫn thành một đường dẫn hoàn chỉnh.");
console.log("Các thành phần đường dẫn được cung cấp dưới dạng các chuỗi hoặc mảng chuỗi.");
console.log(path.join("folder1", "folder2", "index.js")); // folder1\folder2\index.js
console.log(path.join("/folder1", "folder2", "index.js")); // \folder1\folder2\index.js
console.log(path.join("/folder1", "//folder2", "index.js")); // \folder1\folder2\index.js
console.log(path.join("/folder1", "//folder2", "../index.js")); // \folder1\index.js
console.log(path.join(__dirname, "data.json")); // d:\TongHopCodeWebStile\Lập trình wed\NodeJS\Module_NodeJS\Path_Module\data.json

console.log("Phương thức resolve được sử dụng để giải quyết các đường dẫn tương đối thành đường dẫn tuyệt đối.");
console.log("Các thành phần đường dẫn được cung cấp dưới dạng các chuỗi hoặc mảng chuỗi.");
console.log("Phương thức tính toán đường dẫn tuyệt đối dựa trên thư mục làm việc hiện tại của ứng dụng Node.js và các đường dẫn được cung cấp.");
console.log(path.resolve("folder1", "folder2", "index.js")); // D:\TongHopCodeWebStile\Lập trình wed\NodeJS\Module_NodeJS\folder1\folder2\index.js
console.log(path.resolve("/folder1", "folder2", "index.js")); // D:\folder1\folder2\index.js
console.log(path.resolve("/folder1", "//folder2", "index.js")); // D:\folder2\index.js
console.log(path.resolve("/folder1", "//folder2", "../index.js")); // D:\index.js
console.log(path.resolve(__dirname, "data.json")); // d:\TongHopCodeWebStile\Lập trình wed\NodeJS\Module_NodeJS\Path_Module\data.json