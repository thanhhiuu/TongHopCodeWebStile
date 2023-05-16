// Js String Methods

// 1. Length: Ktra độ dài của 1 chuỗi
// let string = "Thanh hieu";
// let LengthString = string.length;
// console.log("======== LengthString", LengthString);\






// 3. slice: trích xuất của một phần của một chuỗi và trả về phần được trích xuất

//  2 Tham số: Vị trí bắt đầu cắt và vị trí 
// Vị trí kết thúc là không bắt buộc, nếu k có tham số  thứ 2 thì nó sẽ cắt từ điểm bắt đầu đến hết chuỗi

    // let string1 = "toi hoc code";
    //  let b = string1.slice(-5);

    //  console.log('========= b ', b);






// 4. substring() tuong tu slice() nhưng mà khi chuyền tham số âm vào thì nó không hoạt động


// 5. substr() tương tự slice(). Giup cắt một chuỗi con trong 1 chuỗi
// Nhận vào 2 tham số: tham số đầu là trí cắt và tham số thứ 2 là số lượng kí tự cắt 

// 6. Repalce: Ghi đè
// 2 tham soo
var string = "ilove js";

var b = string.replace("ilove", "i love");

console.log(b)