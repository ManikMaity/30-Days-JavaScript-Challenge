// Regular Expressions

// Creating a pattern with RegExp Constructor 

//Without flag
let pattern = "love";
let regExp = new RegExp(pattern);

// With flag
let pattern2 = "love";
let flags = "gi";
let regExp2 = new RegExp(pattern2, flags);
// console.log(regExp2); // Output -  /love/gi

// By writing the  pattern and flags inside RegExp constructor
let regExp3 = new RegExp("manik", "gi");
// console.log(regExp3); // output - /manik/gi


// Without regexp constructor
let regExp4 = /pop/gi

let regExp5 = new RegExp ("pop", "gi");

// Both are same
console.log(regExp4, regExp5); // output  - /pop/gi /pop/gi


// RegExp object mathods 


// .test() -> match the pattern with given string and retuns true or false
const str = 'I love JavaScript';
const pattern5 = /javascript/i;
console.log(pattern5.test(str)); // true

// .match() --> returns an array of all the matches.

// multipe match gloabal flag 
const pattern3 = /i/gi;
const  match = str.match(pattern3);
console.log(match); // [ 'I', 'i' ]

// single match
const match2 = str.match(/javascript/i);
console.log(match2); 
/*[
  'JavaScript',
  index: 7,
  input: 'I love JavaScript',
  groups: undefined
] */

// no match 
console.log(str.match(/manik/)); // null

// .search() --> match in the string and returns index of searching pattern. -1 if not fouund
console.log(str.search(/i/)) // 14 - case sensitive - found at 14 index
console.log(str.search(/i/i)) // 0 - case insensitive - found at index 0
console.log(str.search(/i/ig)) // 0 - same , global no use
console.log(str.search(/hello/ig)) // -1 - not found

// Replacing a substring 


