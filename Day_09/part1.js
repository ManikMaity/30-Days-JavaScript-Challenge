// Callback
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

function message(func, firstName, lastName) {
  return `Hi, there! ${func(firstName, lastName)}`;
}
console.log(message(fullName, "Manik", "Maity")); //Hi, there! Manik Maity

// Returning function
function firstOrder(n) {
  function secondOrder(m) {
    function thirdOrder(o) {
      return n * m * o;
    }
    return thirdOrder;
  }
  return secondOrder;
}
console.log(firstOrder(5)(2)(3)); // 30

// callback function example
let array1 = [5, 7, 4, 2, 0, 9];
let array2 = Array(4).fill(5);

const sumArray = (arr) => {
  let sum = 0;
  function callback(element) {
    sum += element;
  }
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(array1)); // 27

function addArrayTwo(arr) {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
}
console.log(addArrayTwo(array2)); // 20

// Setting time
// In js we can set interval before  code code execute

// // setInterval
// let count = 0;
// function sayHello(){
//     console.log(`Time - ${count}`);
//     count++;
// }
// setInterval(sayHello, 1000); // prints Hello, there. every 5sec

// // setTimeout

// function fiveSecTimer (){
//     let count = 5;
//     function massege (){
//         console.log(`Timer - ${count}`);
//         count--;
//     }
//     setInterval(massege, 1000)
// }
// setTimeout(fiveSecTimer, 5000)

// functional programing

// for each

let array3 = [1, 8, 4, 2, 5];
array3.forEach((num) => console.log(num)); // prints every elements of array

sum2 = 0;
const add = (num) => (sum2 += num);
array3.forEach(add);
console.log(sum2); // 20

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
// uppercase print
let upperCaseCountry = [];
countries.forEach((country) => upperCaseCountry.push(country.toUpperCase()));
console.log(upperCaseCountry); // [ 'FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND' ]

// map
// map work like forEAch but it return an new array
const userNames = [
  { firstName: "Manik", lastName: "Maity" },
  { firstName: "Suman", lastName: "Maity" },
  { firstName: "Swapan", lastName: "Maity" },
  { firstName: "Malati", lastName: "Maity" },
];

function insertFullName(user) {
  user.fullName = `${user.firstName} ${user.lastName}`;
}

const withFullName = userNames.map(insertFullName);
console.log(Object.values(userNames[0])); //[ 'Manik', 'Maity', 'Manik Maity' ]


const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

const firstThreeChar = countries2.map((country) => (country.substring(0, 3)).toUpperCase());
console.log(firstThreeChar);
// [
//     'ALB', 'BOL', 'CAN',
//     'DEN', 'ETH', 'FIN',
//     'GER', 'HUN', 'IRE',
//     'JAP', 'KEN'
//   ]

// filter
// it  returns a new array with filterout items which fulfil the conditiion
function filterWithWord (word) {
    const newArray = countries2.filter((country) => country.includes(word));
    return newArray;
}

console.log(filterWithWord("land")); // [ 'Finland', 'Ireland' ]
console.log(filterWithWord("ia")); //[ 'Albania', 'Bolivia', 'Ethiopia' ]

const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]

const A_Grade_Students = scores.filter((student) => (student.score >= 80));
console.log(A_Grade_Students);
// [
//     { name: 'Asabeneh', score: 95 },
//     { name: 'Lidiya', score: 98 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 }
//   ]

// reduce
const array4 = [1, 2 , 3, 4];
const newArray = array4.reduce((sum, value) =>{
    console.log(`${sum} + ${value}`);
   return sum + value;
})
console.log(newArray);
// 1 + 2
// 3 + 3
// 6 + 4
// 10


// every
// every: Check if all the elements are similar in one aspect. It returns boolean
const array5 = ["Manik", "Suman", "Swapan", "Malati", "Parash"];
const isAllString = array5.every((name) => typeof name == "string");
console.log(isAllString); // true


// find 
// retuns the first elemnet which satisfies the condition
const s_names = array5.find((name) => name.startsWith('S'));
console.log(s_names); // Suman


// findIndex
// it returns the index of the first array element satisfies the condition 
const M_names = array5.findIndex((name) => name.startsWith("M"));
console.log(M_names); // 0
console.log(array5[M_names]); /// Manik

// some
// Check if some of the elements are similar in one aspect. It returns boolean 

function allString (arr = []){
    const isAllString = arr.some((element) => typeof element == "string");
    return isAllString;
}
console.log(allString(array5)); // true

// sort
// it sorts the array either asending or decnding order
// it modifies the original array
const array6 = array5;
console.log(array6.sort()); // [ 'Malati', 'Manik', 'Parash', 'Suman', 'Swapan' ]


// sorting number
// if negative value (-1) is return then a come before b. 
// if positive value (1) return then b comes before a
const num2 = [5, 8, 6, 2, 0];
console.log(num2.sort((a, b) => {
    console.log(`${a} ${b}` );
    return a - b;
})); //[ 0, 2, 5, 6, 8 ]

function compareFnc (a, b){
    if (a > b){
        return -1;
    }
    else if (b > a){
        return 1;
    }
    else{
        return 0;
    }
}

let num3 = [4, 2, 8, 1, 6];
console.log(num3.sort(compareFnc)); //[ 8, 6, 4, 2, 1 ]

// sorting objects inside array
const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age > b.age){
    return 1;
  }
  else if (a.age < b.age){
    return -1;
  }
  else{
    return 0;
  }
})
console.log(users);
// [
//   { name: 'Elias', age: 22 },
//   { name: 'Brook', age: 50 },
//   { name: 'Eyob', age: 100 },
//   { name: 'Asabeneh', age: 150 }
// ]