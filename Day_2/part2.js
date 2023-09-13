
//_______________________________Tamplate Lireral_______________________________
let a = 5;
let b = 21;
console.log(`The sum of ${a} and ${b} is ${a+b}.`);

//Bio Data Using Tamplate Leteral
let firstNAme = "manik";
let lastName = "maity";
let space = " ";
let age = 19;
let degree = "B.com";
let passion = "web-devlopment";
let fullName = firstNAme + space+lastName;

console.log(`My name is ${fullName}.\nI am ${age} years old purrsuing ${degree} degree.\nI am very interesterd in ${passion}.`);

console.log(`${a} is greater then ${b} - ${a>b}`);


// _________________________________String Methods _________________________________________

//Length Method
console.log(`The Legth of ${fullName} is ${fullName.length} space included`);


// Array with string
console.log(`The last charecter of ${fullName} is ${fullName[(fullName.length-1)]}`);

// Uppercase & Lower case
let uFullName = fullName.toUpperCase();
console.log(`My name in uppercase ${uFullName}`);
console.log(`Name in lowerCase is ${uFullName.toLowerCase()}`);


// substr in String 
console.log(`My title is ${fullName.substr(6, 5)}`);

//substring use
console.log(`My web-devlopment is ${passion.substring(0, 3)} + ${passion.substring(4, (passion.length))}`);

