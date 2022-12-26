// 1. Hàm EVERY trong javascript
    // Every javascript là một phương thức dành cho đối tượng mảng trong javascript.
    // Công dụng của hàm này là giúp kiểm tra tất cả các phần tử trong mảng có thõa
    // mãn một điều kiện nào đó hay không. Nếu tất cả phần tử đều thỏa thì sẽ trả về true,
    // ngược lại nếu chỉ cần một phần tử không thỏa thôi là nó sẽ trả về false.
// Danh sách mảng
// s
//2. Hàm SOME trong javascript
    // Hàm some trong js có nhiệm vụ lặp qua tất cả các phần tử của mảng,
    // mỗi lần lặp nó sẽ truyền giá trị của phần tử đang lặp vào hàm callback.
    // Chỉ cần hàm callback return true là hàm some sẽ return true.
    // Ngược lại, nếu duyệt hết mảng mà không có return true nào thì hàm some sẽ return false.

    // Arrow function
    // some((element) => { ... } )
    // some((element, index) => { ... } )
    // some((element, index, array) => { ... } )

    // // Callback function
    // some(callbackFn)
    // some(callbackFn, thisArg)

    // // Inline callback function
    // some(function callbackFn(element) { ... })
    // some(function callbackFn(element, index) { ... })
    // some(function callbackFn(element, index, array){ ... })
    // some(function callbackFn(element, index, array) { ... }, thisArg)
    // Trong đó:

    // element là biến chứa giá trị của phần tử đang lặp.
    // index là key của phần tử đang lặp.
    // array là mảng gốc mà phần tử đang thuộc về.
    // thisArg là tham số không bắt buộc. Nếu được truyền vào thì thisArg sẽ được sử dụng làm giá trị "this",
    //  nếu không được truyền vào thì giá trị "this" là "undefined".

    // var number = [3, 3,4,6,7];
    // var kt = number.some(function(element, index, array) {
    //     return element > 10;
    // });
    // console.log(kt);

//3. Filter trong javascript 
    // Filter trong Javascript là một phương thức thuộc đối tượng mảng.
    // Nó có công dụng đúng ý nghĩa với tên gọi của nó, tức là sẽ lặp qua qua các phần tử, 
    // sau đó tùy vào từng bài toán mà sẽ quyết định chọn phần tử đó hay không.
    // Cuối cùng hàm này sẽ trả về một mảng các phần tử đã chọn.
    // Cú pháp của filter trong js như sau:
    //3.1 Hàm true
    // var number = [100, 200, 300, 400, 500];
    // var kt = number.filter(function(value){
    //     return value;
    // });
    // console.log(kt);
    // //3.2 Hàm false
    // var number = [10, 200, 300, 400, 500];
    // var kt = number.filter(function(value){
    //     if (value >= 100)
    //     {
    //         return true;
    //     }
    //     else if(value <100)
    //     {
    //         return false;
    //     }
    // });
    // console.log(kt);
//4. Cú pháp hàm map trong javascript
    // Hàm map() sẽ lặp qua từng phần tử của mảng, tham số truyền vào là một anonymous function. 
    // Hàm anonymous sẽ có một tham số truyền vào và đó chính là phần tử của mỗi vòng lặp,
    // bên trong thân hàm anonymouse sẽ có lệnh return về
    // một giá trị và giá trị này sẽ thay thế cho phần tử đó.

        // var number = [2, 3, 4, 5, 6];
        // var kt = number.map (function(items)
        // {
        //     return items * 2;
        // });
        // console.log(kt);