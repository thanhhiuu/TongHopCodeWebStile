// Chapter 4
// Problem No 1
let str =  "Har\"";
console.log(str.length);

// Problem No 2
const sentence = "Chao mung ban den voi the gioi cong nghe";
const word = "the gioi";

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


// Problem No 3
let tre = "Lam on cho toi kien thuc";
let amount = tre.slice(15);
console.log(amount);


// Problem No 4
let friend = "Van truong";
console.log(friend.replace("t", "T"));