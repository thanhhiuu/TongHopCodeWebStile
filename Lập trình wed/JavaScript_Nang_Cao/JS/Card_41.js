// Biếu thức chính quy giúp ta thay thế, thay đổi trên phạm vi toàn cầu

// Biểu thức chính quy lượng hóa không tham lam
/**
 * Khớp phần tử trước nó bằng 0 hoặc nhiều lần.

+ +? Ghép phần tử trước nó một hoặc nhiều lần.

? ?? So khớp phần tử trước nó bằng 0 hoặc một lần.

{ n } { n }? Khớp phần tử trước nó chính xác n lần.

{ n ,} { n ,}? So khớp phần tử trước nó ít nhất n lần.

{ n , m } { n , m }? Khớp phần tử đứng trước từ n đến m lần.
 */

// Ví dụ về bộ định lượng không tham lam trong JavaScript (Regular Expression: Non-Greedy Quantifiers)

// Chương trình sau sử dụng bộ định lượng không tham lam (+?) để so khớp văn bản trong dấu ngoặc kép ("") của phần tử nút:

const s = '<button type="submit" class="btn">Send</button>';
const patter = /".+?"/g;
const result = s.match(patter);

console.log(result) // [ '"submit"', '"btn"' ]


// Các bộ định lượng lười so khớp các phần tử trước của chúng càng ít càng tốt để trả về các kết quả phù hợp nhỏ nhất có thể.

// Sử dụng dấu chấm hỏi (?) để biến một bộ định lượng tham lam thành một bộ định lượng lười biếng.



// Vào link này để tìm hiểu