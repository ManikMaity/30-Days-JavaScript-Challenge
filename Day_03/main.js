// ___________________Boolean____________________
let isHreater = 5 > 10 ? "Dog" : "Cat";
console.log(isHreater); //true

//_______________Truthy Value and value________________

//Truthy Value -->
/*  
    > All numbers(positive and negative) are truthy except zero
    > All strings are truthy except an empty string ('')
    > The boolean true 
*/
// Falsy Value -->
/*
    > 0 (-0)
    > false
    > NaN
    > undefined
    > null
    > [] emty string

*/

let xname;
console.log(xname); //undefined

let age = null;
console.log(age); //null --> no value

//________________________Operators________________________
console.log(5 + 5); //10
console.log(11 % 5); //1 --> remainder
console.log(2 ** 3); //8 --> power

let cm = 170;
const cmFeet = 0.0328;
console.log(`In feet is ${(cmFeet * cm).toFixed(2)}`);

//__________________________________Comparison Operators_____________________
let a1 = 2;
let a2 = "2";
console.log(a1 == a2); //true --> Only value compare
console.log(a1 === a2); //false --> values and datatype compare

/* more != (Not equal to), > (greater than), < (less then),
 >= (Greater then equal to), <= (less than equal)*/

console.log(3 !== "3"); // true, compare both value and data type

console.log(0 == false); //true --> both falsy value
console.log(0 === false); //false --> both falsy value but datatype diffrent
console.log(NaN == false); //false --> exception
console.log(true == 1); //true --> turthy value
console.log("manik".length == "maity".length); //true

//_____________________Logical Operators________________________
