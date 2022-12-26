// Câu lệnh If....else
    // var a = 5;
    // var b = 10;

    // if (a === b) {
    //     document.write('a bằng b ')
    // }
    // else if(a > b) {
    //     document.write("a lớn hơn b")
    // }
    // else {
    //     document.write('a nhỏ hơn b');
    // }
//1. Giai PT Bậc 1
    // var hsa = 0;
    // var hsb = 0;
    // if ( hsa === 0 ){
    //     if (hsb === 0){
    //         document.write('Phuong trinh vo so nghiem');
    //     }
    //     else
    //     {
    //         document.write('Phuong trinh vo nghiem')
    //     }
    // }
    // else
    // {
    //     document.write('Phuong trinh co nghiem x = ' + -hsb / hsa);
    // }
//2. Giai Phương trình bậc 2
    // var a = 1;
    // var b = 10;
    // var c = 4;
    // var delta = b * b - 4 * a * c;
    // if (delta < 0) {
    //     document.write('Phuong trinh vo nghiem');
    // }
    // if (delta === 0 ) {
    //     var x = -b / (2 * a);
    // document.write('Phuong trinh co nghiem kep x = ' + x);
    // }
    // if (delta > 0) {
    //     var x1 = (-b + Math.sqrt (delta) / (2 * a));
    //     var x2 = (-b - Math.sqrt (delta) / (2 * a));
    //     document.write('Phuong trinh co hai nghiem x1 = ' + x1 + ', x2 = ' + x2);
    // }
// Lệnh if.....else lồng nhau
    // var a = 10;
    // if (a > 12){
    //     var b = 12;
    //     if (a === b){
    //         document.write(' a va b bang nhau ');
    //     }
    //     else
    //     {
    //         document.write(' a va b khong bang nhau ');
    //     }
    // }
    // else
    // {
    //     document.write('a nhỏ hơn 12 !')
    // }   
// Cấu trúc switch...case
    // var so = 2;
    // switch(so){
    //     case 1: 
    //     document.write('So mot');
    //     break;
    //     case 2:
    //         document.write('So hai');
    //     break;
    //     case 3:
    //     document.write('So ba');
    //     default:
    //     }
//1. Ví dụ Cấu trúc switch...case
    // var number = parseInt(prompt('Nhap du lieu de kiem tra'));
    
    // var mod = (number % 2 );

    // switch (mod)
    // {
    //     case 0: 
    //         document.write(number + ' La so chan');
    //         break;        
    //     case 1: 
    //         document.write(number + ' La so le ');
    //         break;                    
    //         default:
    //         document.write('Ky tu ban nhap khong dung !');        
    // }
//2. Ví dụ Cấu trúc switch...case
    // var color = prompt('Bạn cần chọn màu sắc');
    
    // switch (color) 
    // {
    //     case 'red':
    //         document.write('Nó là màu đỏ !');
    //         break;
    //     case 'Blue':
    //         document.write('Nó là màu xanh !');
    //         break;
    //     default:
    //         document.write('Bạn nhập không đúng data');
    // }
//3. Vòng lập for
    //* Tăng i 
    // var i;
    // for(i = 0 ; i < 10; i++){
    //     document.write(i + '<br/>')
    // }

    //* Giam i
    // for(i = 20; i > 0; i--){
    //     document.write(i + '<br/>');
    // }

    //*  Lặp với bước nhay tăng N đơn vị
    // var n = 2;
    // for(i = 0; i < 10 ; i+=n){
    //     document.write(i + '<br/>');
    // } ==> Tương tự với giảm bước nhảy

    //* Khai báo i ngay trong vòng lặp
    // for(var i = 0; i < 20; i++){
    //     document.write(i + '<br/>');
    // }

    //* Lồng vòng lập for
    // var i;
    // var j;

    // for(i = 0; i <= 10; i++){
        
    //     for(j = 0; j <= 10; j++){
    //         document.write("(["+i+"]["+j+"])");
    //     }
    
    //     document.write('<br/>');
    // }

    //* Bài tập chia hết cho 3 => Dùng vòng lập for
    // for(i = 0; i < 100; i++){
    //     if(i % 3 ===0){
    //         document.write(i + '<br/>')
    //     }
    // }

// Vòng lập while
    //* Tăng vòng lập
    // var i = 1;
    // while(i <=  9){
    //     document.write(i + '<br/>');
    //     i++;
    // }
    ///* Giam vòng lập
    // var i = 10;
    // while (i >= 1){
    //     document.write(i + '<br/>');
    //     i--;       
    // }

    //* Vòng lập với điều kiện phức tạp
    // var x = null;

    // while( x < 1 || x > 100){
    //     x = prompt('Nhập từ 1 => 99');
    // }
    // document.write('X bạn vừa nhập là :' + x);

// Vòng lập do...while

    // var x = null;
    
    // do{
    //     // Lệnh
    //     x = prompt('Nhập từ 1 đến 20');
    // }
    // while(x < 1 || x > 20 ) // Điều kiện

    // document.write('X bạn vừa nhập là :' + x);

    //* Lòng vòng lập while với do......while
    // var i = 0;

    // // Vòng lập ngoài
    // while(i <= 9){
    //     var j = 0;
        
    //     while(j <=9 ){
    //         document.write('(['+i+']['+j+'])');
    //         j++;
    //     }
    //     document.write('<br/>');
    //     i++;
    // }

// Break
    //* Vòng lặp for lặp từ 1 tới 10 và bị dừng tại vòng lặp thứ 5
    // var i = 1;
    // for(i = 1; i <= 10; i++)
    // {
    //     document.write(i + '<br/>')
    //     if(i == 5){
    //         document.write('Vòng lập sẽ bị dừng !');
    //         break;
    //     }
    // }
    //* Vòng lặp while bị nhảy ra khỏi vòng lặp khi biến i chia hết cho 9

    // var i = 3;
    // while(i <= 2000)
    // {
    //     document.write(i + '<br/>');

    //      if(i % 2000 == 0)
    //      {
    //         document.write('Vòng lập sẽ bị dừng !');
    //         break;
    //      }
    //      i++;
    // }

// Continue

    //* Vòng lặp for bỏ qua đoạn code in ra giá trị 5
    // var i = 1;

    // for(i = 1; i <=10 ; i++)
    // {
    //     document.write(i + '<br/>');
    //      if (i == 5)
    //      {
    //         document.write("Bỏ qua số 5" + '<br/>');
    //         continue;
    //      }
    // }

    //* Vòng lặp while bỏ qua bước lặp nếu i chia hết cho 9
    var i = 1;

    while(i <= 1000)
    {
        if (i % 9 == 0)
        {      
            i++; 
            document.write('Bỏ qua bước số 9'+ '<br/>');
            continue;
        }    
                      
        document.write(i + '<br/>');
        i++;
    }