const webDev = ["html", "css", "javascript", "react", "nodejs", "mongodb"];
let find = prompt("Web Tech: ", "HTML").toLowerCase();
let isExist = webDev.indexOf(find);
(isExist == -1)
? alert(`Not found`)
: alert(`Found at Index ${isExist}`)


// Getting last index of an element in array 
// Last index of the item in array
const numbers = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(numbers.lastIndexOf(1)); // 6
console.log(numbers.lastIndexOf(10)); // -1
console.log(numbers.lastIndexOf(4)); // 3

//includes:To check if an item exist in an array. 
//Return true and false
console.log(webDev.includes("html")); // true

// Checking array 
// Array.isArray():To check if the data type is an array 
const num1 = [9,8,7,6,5,4,3,2,1];
let num2 = "987654321";
console.log(Array.isArray(num1)); //true
console.log(Array.isArray(num2)); //false