// Nhập 1 module

const UsingModule = require('./Card_39');



console.log('Xuất đối tượng error có trong Card_39.js', UsingModule.error);
console.log('Xuất đối tượng warning có trong Card_39.js', UsingModule.warning);
console.log('Xuất đối tượng info có trong Card_39.js', UsingModule.info);

UsingModule.myFunc('Node js Demo module');
UsingModule.hello();
UsingModule.ahello("Thanh Hieu");