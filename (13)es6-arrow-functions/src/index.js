import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
const newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

//---------------------------------------------------
var numbers1 = [3, 56, 2, 48, 5];

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
const newNumbers1 = numbers1.filter((num) => num < 10);
console.log(newNumbers1);

//---------------------------------------------------
var numbers2 = [3, 56, 2, 48, 5];

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
var newNumber2 = numbers2.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newNumber2);

//---------------------------------------------------
var numbers3 = [3, 56, 2, 48, 5];

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
const newNumber3 = numbers3.find((num) => num > 10);
console.log(newNumber3);

//---------------------------------------------------
var numbers4 = [3, 56, 2, 48, 5];

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
const newNumber4 = numbers4.findIndex((num) => num > 10);
console.log(newNumber4);
