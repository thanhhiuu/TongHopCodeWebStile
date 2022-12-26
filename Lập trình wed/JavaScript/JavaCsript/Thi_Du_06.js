// Tạo mảng 
// Tạo mảng thông thường
// var myarr1 = ['Javascript', 12, 'PHP', 'CSS'];
//     console.log(myarr1);
//     console.log(typeof myarr1);

// // Cách tạo mạng khác
// // var myarr2 = new Array('Js', 12, 'PHP', 'CSS');
// // console.log(myarr2);
//     console.log(myarr1.length);
//     console.log(myarr1[1]);
// // Các method chuyển mảng sang chuỗi
//     var mang1 = myarr1.toString();
//     console.log(mang1);

//     var mang2 = myarr1.join(':');
//     console.log(mang2);

// // Các hàm xử lý mảng => Ngược với hàm array.push(), hàm này có tác dụng xóa đi phần tử cuối cùng trong mảng.
// // hàm array.pop
//     var item = myarr1.pop();
//     var item1 = myarr1.pop();
//     var item2 = myarr1.pop();
//     var item3 = myarr1.pop();
//     console.log(item);
//     console.log(item1);
//     console.log(item2);
//     console.log(item3);

    // Hàm Array.push => Hàm này sẽ thêm một phần tử vào cuối mảng.
    var mang3 = ['Ruby', 'C++', 'SQL'];
    console.log(mang3);
    var newmang3 = mang3.push('HTML', 'NMLT', 'C+');
    console.log(mang3);

// Hàm Array.splice =>  Hàm splice() có ba tham số truyền vào như sau: splice(position_add, num_element_remove, value1, value2, ...).
// Trong đó:
// position_add là vị trí sẽ thêm (vị trí đầu tiên là 0)
// num_element_remove là số phần tử sẽ xóa (bắt đầu từ position_add)
// value1, value2, .. là danh sách các phần tử sẽ được thêm vào sau khi tại vị trí position_add và sau khi xóa số lượng num_element_remove phần tử.

    // mang3.splice(1,3);
    // console.log(mang3);
    // mang3.splice(1, 2, 'Java', 'Python');
    // console.log(mang3);

// Hàm array.slice() => Hàm dùng để lấy một số phần tử con trong mảng. Có hai tham số truyền vào như sau: slice(start, end).
// Trong đó:
    // start: là vị trí bắt đầu
    // end: là vị trí kết thúc
``
    mang3.slice(3, 5);
    console.log(mang3); 