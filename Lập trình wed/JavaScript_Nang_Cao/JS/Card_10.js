/**
 * Introduction to array
 */
let practise = [12, 13, 14, 15, false, "I love you"];
console.log(practise[0]);
console.log(practise[1]);
console.log(practise[2]);
console.log(practise[3]);
console.log(practise[4]);
console.log(practise[5]);
console.log(practise[6]);
practise[6] = 45; // Add a new data to the array
console.log(practise);

// Problem NO 1
let chapter = [12, 14, 15, 17, 1000];
console.log(chapter);
// chapter.forEach(element => {
//     console.log(element);
//     console.log(typeof element);
// });

for(i = 0; i < chapter.length ; i++) {
    console.log(chapter[i]);
    console.log(chapter[i] + " " + typeof chapter)
}   

// Methods Concat => Noi chuoi  
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
const arr3 = arr1.concat(arr2);
console.log(arr3);