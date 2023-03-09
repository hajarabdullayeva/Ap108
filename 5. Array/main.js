// let arr = new Array();

// let name = new String("Hajar");
// let num = new Number(4);

// Object class

// const arr = [1, 2, "my Array", 3, 5, 89, "Hello"];
// index
// Array-da indexleme 0-dan bashlayir
// console.log(numArray);

// console.log(numArray[0]); //arrayin 0-ci elementi ==1

// console.log(numArray[2]);
// console.log(numArray[4]);

// arr[0] = "Hajar";
// console.log(arr);

// console.log(arr[6]);
// console.log(arr.length);

// console.log(arr[arr.length - 1]);
// arr[6]

// let arr = [6, 5, 4, 10, 41];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// indexOf, shift, pop, unshift, push

// let arr = [6, 5, 4, 10, 41];

// arr[3]; //10
// console.log(arr.indexOf(10));
// console.log(arr.indexOf(41));
// arr.shift(6);
// Arrayin evvelinden silir

// arr.pop(41);
// Arrayin sonundan element silir

// arr.unshift(7);
// console.log(arr);
// Arrayin evveline element elave edir

// arr.push(888);
// Arrayin sonune element elave edir
// console.log(arr);

// let arr = [1, 7, 9, 15];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   // 0 = 0 + 1
//   // 1 = 1+ 7
//   // 8 = 8 + 9
//   // 17 = 17 + 15
//   sum = sum + arr[i];
// }
// console.log(sum);

let arr = [1, 89, 7, 9, 15];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
