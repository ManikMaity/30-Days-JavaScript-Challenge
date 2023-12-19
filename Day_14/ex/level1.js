// Write a function divideNumbers that takes two parameters and attempts to divide them. 
// Use a try-catch block to handle the division by zero error. Log the result if successful, 
// and log an error message if division by zero occurs.

function divideNumbers (x, y) {
    try {
        if (y == 0) throw "Devisin by Zero"
        console.log(x/y);
    }
    catch (error){
        console.error(error);
    }
}
// divideNumbers(5, 0); // Devisin by Zero
divideNumbers(5, 4); // 1.25


// Create a function validateInput that receives a username as a parameter. 
// If the username is an empty string, throw a custom error with the message 
// "Username cannot be empty."

const validateInput = (userName) => {
    if (userName == "") throw "Username cant be empty";
    console.log(`Hello, ${userName}`);
}
// validateInput(""); // Username cant be empty
validateInput("Manik") // Hello, Manik


// Write a function performOperation that takes two numbers and an operation as parameters. 
// Place the operation inside a try block and catch any error that occurs. 
// Log the error message along with the input values.

function performOperation (num1, num2, operator){
    try {

        if (num2 == 0) throw "Not devide by zero";
        let result = eval(`${num1}${operator}${num2}`);
        console.log("Result - ", result);
    }
    catch(err){
        console.error(err);
    }
}
performOperation(1,2,"+"); // Result -  3
performOperation(10, 0, "/"); // Not devide by zero