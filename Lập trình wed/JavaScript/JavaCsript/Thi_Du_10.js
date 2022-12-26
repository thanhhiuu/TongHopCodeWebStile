// Đối tượng Date
// Cách 1
// var timeObj = new Date();
// var timeObj = new Date(value);
// var timeObj = new Date(dateString);
 
// Cách 2
// var timeObj = new Date(year, monthIndex);
// var timeObj = new Date(year, monthIndex, day);
// var timeObj = new Date(year, monthIndex, day, hours);
// var timeObj = new Date(year, monthIndex, day, hours, minutes);
// var timeObj = new Date(year, monthIndex, day, hours, minutes, seconds);
// var timeObj = new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);

// Cách thứ nhất: Truyền vào tham số là chuỗi hoặc một giá trị.

// Nếu bạn không truyền tham số nào vào thì nó sẽ trả về ngày giờ hiện tại, tức là ngay thời điểm chạy lệnh.
// dateString là một chuỗi định dạng ngày tháng cần lấy.
// value cũng có thể là một dãy số được chuyển từ ngày giờ cần lấy sang miliseconds
// Cách thứ hai: Nó có tối đa là 7 tham số truyền vào:

// year là năm cần lấy
// monthIndex là tháng cần lấy
// day là ngày trong tháng cần lấy
// hours là giờ cần lấy
// minuites là phút cần lấy
// seconds là giây cần lấy
var date1 = new Date();
console.log(date1); // Trả về ngày tháng hiện tại
// Lưu ý : Tháng bắt đầu từ 0 đến 11
var date2 = new Date(2022, 03, 21, 12, 30, 10);
console.log(date2);
var date3 = new Date('2022-05-29');
console.log(date3); 
console.log(date3.getFullYear());
console.log(date3.getMonth());
console.log(date3.getDate());