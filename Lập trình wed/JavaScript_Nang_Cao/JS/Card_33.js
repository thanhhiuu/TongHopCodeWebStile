let ac = 10; // Phạm vi toàn phần

function scrope() {
    let a = 9;
    console.log(a); 
}
scrope(); // Phạm vi Cục bộ 
// console.log(a) // Error


console.log(ac)




/// 1. Phạm vi cục bộ (Local Scope):

// Một phạm vi cục bộ được tạo ra khi bạn khai báo một biến hoặc một hàm bên trong một hàm khác.
// Biến hoặc hàm trong phạm vi cục bộ chỉ có thể truy cập được từ bên trong hàm mà nó được khai báo. Nghĩa là nó không thể được truy cập từ bên ngoài hàm.
// Biến trong phạm vi cục bộ chỉ tồn tại trong suốt quá trình thực thi của hàm và bị hủy sau khi hàm kết thúc.
// Các hàm con bên trong một hàm cha cũng có thể truy cập các biến và hàm của hàm cha.
// Ví dụ:

// javascript
// Copy code
function myFunction() {
  var x = 10; // Biến x chỉ tồn tại trong phạm vi của hàm myFunction()
  console.log(x); // Output: 10
}

myFunction();
// console.log(x); // Lỗi: x không được xác định




/// 2.Phạm vi toàn cục (Global Scope):

// Một phạm vi toàn cục được tạo ra khi bạn khai báo một biến hoặc một hàm bên ngoài bất kỳ hàm nào.
// Biến hoặc hàm trong phạm vi toàn cục có thể truy cập được từ bất kỳ nơi nào trong chương trình JavaScript, bao gồm cả bên trong các hàm khác.
// Biến toàn cục tồn tại suốt thời gian chạy của chương trình và chỉ bị hủy khi trình duyệt tắt hoặc khi ghi đè lên nó.
// Ví dụ:

// javascript
// Copy code
var y = 20; // Biến y được khai báo trong phạm vi toàn cục

function myFunction() {
  console.log(y); // Output: 20
}

myFunction();
console.log(y); // Output: 20


// Lưu ý: Khi bạn khai báo một biến mà không sử dụng từ khóa var, let, hoặc const, biến đó sẽ tự động trở thành biến toàn cục.

// Phạm vi cục bộ và phạm vi toàn cục đóng vai trò quan trọng trong việc quản lý và bảo mật mã JavaScript của bạn. Đảm bảo bạn hi