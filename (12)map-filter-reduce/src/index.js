var numbers1 = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}

const newNumbers = numbers1.map(double);
console.log(newNumbers);

/* 
-----OR reduce code by creating function in map()-----

const newNamers = numbers1.map(function (x){
  return x * 2; 
}); 


-----OR using forEach-----

var newNumbers = []; 

numbers1.forEach(function (x){
  newNumbers.push(x*2);
}); 

*/

var numbers2 = [9, 30, 2, 12, 5];

//Filter - Create a new array by keeping the items that return true.
const newNumbers2 = numbers2.filter(function (num) {
  return num > 10;
});

console.log(newNumbers2);

/* 
-----OR using forEach-----

var newNumbers2 = []; 

numbers2.forEach(function (num){
  if(num > 10)
  newNumbers.push(num);
}); 

*/

var numbers3 = [9, 7, 2, 1, 5];

//Reduce - Accumulate a value by doing something to each item in an array.
const total = numbers3.reduce(function (accumulator, num) {
  //console.log(accumulator);
  return accumulator + num;
});

console.log(total);

/* 
-----OR using forEach-----

var total = 0;

numbers3.forEach(function (num){
  total += num
}); 

*/

var numbers4 = [9, 7, 2, 1, 5];

//Find - find the first item that matches from an array.
const match = numbers4.find(function (num) {
  return num > 8;
});

console.log(match);

var numbers5 = [9, 7, 2, 1, 20];

//FindIndex - find the index of the first item that matches.
const index = numbers5.findIndex(function (num) {
  return num > 10;
});

console.log(index);
