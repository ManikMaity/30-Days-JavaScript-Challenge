 /* try {
    let firstName = "Manik";
    console.log(firstName + " " + lastName);
}
catch (err){
    console.error(err) // ReferenceError: lastName is not defined at Object.<anonymous>
}

// Finally
try {
    console.log(userName);
}
catch (err){
    console.log("Not Valid User Name"); // Not Valid User Name
}
finally{
    console.log("It will always execute"); // It will always execute
}

// Catch block peramiter
try {
    console.log(hello);
}
catch (error){
    console.log(error.name); // ReferenceError
    console.error(error.message); // hello is not defined
} 

// throw
// create custom error
// throw 'Error2' // generates an exception with a string value
// throw 42 // generates an exception with the value 42
// throw true // generates an exception with the value true
// throw new Error('Required') // generates an error object with the message of Required


const throwError = () => {
    let number = prompt("Enter a number - ", "5");
    number = Number(number); 
    if (number == "") throw "Empty"
    if (typeof number != typeof 3) throw "Not Number"
    if (number > 5) throw new Error("Bigger than 5");
    if (number < 4) throw "Less than 4";
}
throwError(); //6
/* error.js:42 Uncaught Error: Bigger than 5
at throwError (error.js:42:27)
at error.js:45:1 */ 


// ReferenceError
console.log(firstName);
/*ReferenceError: firstName is not defined
    at Object.<anonymous>  */

// SyntaxError:
console.log(2++/5);
// SyntaxError: Invalid left-hand side expression in postfix operation


// TypeError
let num = 5;
console.log(num.toUpperCase());
/*TypeError: num.toUpperCase is not a function
    at Object.<anonymous>  */