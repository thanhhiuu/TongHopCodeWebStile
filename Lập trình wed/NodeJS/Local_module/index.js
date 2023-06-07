// Local Modules là biến cục bộ do nhà phát triển tạo trong ứng dụng của mình và do chính nhà phát triền thực thi
require("./add.js") // require => Hàm yêu cầu 
console.log("Xin chào các bạn !");

// Common.js là một tiêu chuẩn nêu rõ cách một modules nên được cấu trúc và chia sẽ 
// Node.js đã thông qua common.js khi nó bắt đầu và là những gì bạn sẽ thấy trong cơ sở mã


// Summary 
// Mỗi tệp là một module được tách biệt
// Muốn sử dụng module cần sử dụng hàm yều câu require
// Khi chạy file js có chứa module thì module đó được chạy song song với file js