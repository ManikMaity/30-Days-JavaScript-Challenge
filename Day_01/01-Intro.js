console.log("Hello, World!");


// Console can take multiple paramiters separate dbt coma (,)

console.log("Hey there, ","My name is ", "Manik Maity.");

// this is a single line comment in js

/* thsi is multi
line comment 
in js*/

// javascript understand its own sintext it dont understand other syntex

// printf("This is a C syntex\n"); //(It gives a error!)



console.log('Text within single quotes');
console.log("Text within double quotes");
console.log(`Text within backtick`);

//We can do math calculatiob i js console.log()
console.log(5555+54545);
console.log(22-10);
console.log(22*2);
console.log(55/11);
console.log(21%2);

/* Adding JavaScrip to Webpage -

        1. inline script
        2. Internal Script
        3. External Script
        4. Multiple External Script
*/



// _________________DATA TYPES IN JAVASCRIPT________________

//Data types: String, Number, Boolean, undefined, Null, and Symbol.

// Number or Intiger (int) = 1, 99, -20, 0
//  Float : 2.65, -66.333, 10.0
// String : "A", "Manik Maity", "Hello", "Anything12345678"
// Boolean : true and false

// Undifined
let x;
console.log(x); //Return undefined value

//Null or Empty value
let y = null;
console.log(y);

// cheaking Data type 
console.log(typeof 1);
console.log(typeof 3.55);
console.log(typeof true);
console.log(typeof y);
console.log(typeof undefined);


// _____________________________VARIABLES__________________________________


/* Variable are the container of data. It alocates memory for the value and
 store the value in the computer. 
 
 
 In js variable can be defilned by using - 1.var 2. let 3. const  */

 // let - let is use if the value change in the code.
 // const - it use when the value remail same like value of PI or gravity. const value cant change 
 //var - var woks same as let but not recomended



 //____________________________Naming in js_____________________________

// camelCase - thisIsCamelCase naming (ex - firstName, heyThere)


// Invailid Variables 
// first-name
// 1_num
// num_#_1

// ___________________________________Variaable Diclair__________________________

// let variableNane = value;

let myAge = 19;
const myName = "Manik";
const girlfriend = false; //Forver single

console.log(myName, myAge, girlfriend);