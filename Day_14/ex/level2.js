// Modify the function from Exercise 3 to handle multiple types of errors. 
// Catch and log specific messages for different error types (e.g., TypeError, ReferenceError). 
// If no error occurs, log the result.

function performOperation (num1, num2, operator){
    try {

        if (num2 == 0) throw new Error("Not devide by zero");
        let result = eval(`${num1}${operator}${num2}`);
        console.log("Result - ", result);
        // console.log("Result - ", result.toUppperCase());
    }
    catch(err){
        console.error(err.name);
    }
}
performOperation(1,2,"+"); // Result -  3
performOperation(10, 0, "/+"); // Error
performOperation(10, 2, "/+/"); // SyntaxError
performOperation(undefined, undefined, undefined) // ReferenceError
performOperation(10, 2, "+") // TypeError


// Create a function checkAge that prompts the user for their age. 
// If the age is less than 18, throw a custom error with the message "You must be 18 or older."
//  Otherwise, log a message welcoming the user.

const checkAge = (age) => {
    if (age < 18) throw "You must be 18 or older.";
    console.log("Welcome to the website");
}
checkAge(19); // Welcome to the website
// checkAge(17); 
/*   if (age < 18) throw "You must be 18 or older.";
                  ^
You must be 18 or older. */

// Write two functions: callerFunction and targetFunction. 
// callerFunction calls targetFunction. 
// In targetFunction, introduce a ReferenceError.
//  Catch this error in callerFunction and log an appropriate message.

function targetFunction (){
    console.log(hello);
}

function callerFunction (){
    try {
        targetFunction();
    }
    catch (err){
        console.log("Caugth error in callere func -", err.message) // hello is not defined
    }
}
callerFunction() // Caugth error in callere func - hello is not defined