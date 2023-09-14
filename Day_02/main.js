// There are two types of Data Type in Js 
            // 1. Primitive Data Types - num, string, boolean, null etc
            // 2. Non-Primitive Data Types - Objects, Arrays, function

// Primive Data Types : No-modified; Non- Primive data Type : Modified 

// Array 
let about = ["manik maity", 19, "B.com Student" ];
console.log(`${about[0]} who is ${about[1]} years is a ${about[2]}`);

let x = [1,2,3];
let y = [1,2,3];
console.log(x == y); // false

// Dont compare non-primitive data types

// Numbers 

let age = 19;
const PI = 3.14;
let currentYear  = 2023;
console.log(age, PI, currentYear);


// _________________________________________ Math object in js_________________________________

const pi = Math.PI; console.log(pi);// Math.PI provides the value of PI
 console.log(Math.round(pi)); // Math.round rounded value to nearest intiger
 console.log(Math.floor(pi)); // Round down to int -- floor --> Basement
 console.log(Math.ceil(pi)); // Roud up to int -- ceil ---> Ciling(up)
 console.log(Math.max(1,55,-2,0)); // Provides the max value among the given number
 console.log(Math.min(1,55,-2,0)); // Provides the min value among the given number

//  Random Rumbers 
console.log(Math.random()); //Provides random numbers between 0 to 0.999
console.log(Math.random()*101) // provides random number between 0 to 100

console.log(Math.abs(-11.2)); // Provides posotive value

console.log(Math.sqrt(49)); //Provides squore rute 7
console.log(Math.pow(7, 2)); //provide the power value of number.  here 7^2 = 7*7 = 49

// Intiger number in Math.random()
console.log(Math.round(Math.random()*10)); // provide number 0 to  10
// console.log(Math.round(10*0.001)); //just checking


 // ________________________________String____________________________________________________|
let emptyString = " ";
let fullName = "Manik Maity";
let firstName = 'manik';
let lastName = `maity`;
let degree = "B.com";
let learning = "JavaScript";
let bugString = "Hey whats up I am, very tried ringht now but I know I can do it. Because 'Time is money";

// string concatination 
let myName = firstName + lastName;
let withSpace = firstName +emptyString+lastName;
console.log(myName); console.log(withSpace);


// Concetenating String by Addition | Old Way | ES5 
console.log("Hello, Everyone. My name is "+withSpace+". I am a "+degree+" student currently learning "+learning+".");

// \t is use to give tag 8 spaces 
console.log("Hello, Everyone. \t My name is "+withSpace+". \n I am a "+degree+" student currently learning "+learning+".");

// "\" in the end of the line use to break the string to see in the code editor
// /n can make a new  line
console.log("Lorem ipsum dolor sit amet consectetur adipisicing elit. \n \
Enim asperiores aliquam ipsam quidem voluptates, suscipit at fugit exercitationem. \n \
 Nisi eligendi reiciendis optio ad, velit esse. Praesentium reiciendis in saepe unde.") 

 // '\\' use for write backslase
 console.log("This is how to write \\ in js");
