/*Khai báo biến
    /* 
    * Cách 1 - khai báo với var

    var x = 10;
    Cách 2 - khai báo với let

    let x = 10;
    Khai báo bằng var thì biến đó có thể khai báo lại sau khi đã được khai báo.
    var x = 10;
    //...
    var x = 15; //Khai báo lại, không có lỗi gì
    
    * Cách 2 - khai báo với let

    let x = 10;
    Khai báo bằng var thì biến đó có thể khai báo lại sau khi đã được khai báo.
    var x = 10;
    //...
    var x = 15; //Khai báo lại, không có lỗi gì
    Khai báo bằng let thì biến chỉ được khai báo một lần
    let a = 20;
    //...
    let a = 100; //phát sinh lỗi, a đã khai báo
    
    * Phạm vi của biến:

    Cục bộ (local) - biến chỉ có hiệu lực trong hàm (khối) nó khai báo (học về hàm sau) - ra khỏi hàm hết hiệu lực
    Toàn cục (global) - biến có hiệu lực toàn code, có thể truy cấp ở bất kỳ đâu. Biến này không khai báo trong một hàm, mà khai báo bên ngoài.
    */