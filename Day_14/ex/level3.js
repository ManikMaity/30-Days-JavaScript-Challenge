// Write a function performSeriesOfOperations that takes an 
// array of operations (add, subtract, multiply) and numbers. 
// Perform each operation sequentially. If any operation fails, 
// log the error and continue with the next operation. Use a 
// combination of try-catch and finally to ensure that certain code executes regardless of errors.

const performOperation = (oper = [], nums = []) => {
    try {
    if (oper.length == 0 || nums.length == 0) throw "Empty value";
    if (oper.length != nums.length - 1) throw "Operation should be 1 grreater than numbers";
    let result = nums[0];
    for (let i = 0; i < nums.length - 1; i++){
        let nextNum = nums[i +1];
        switch (oper[i]) {
            case "add":
                result += nextNum;
                break;
            case "subtract":
                result -= nextNum;
                break;
            case "multiply":
                result *= nextNum;
                break;
            default:
                throw "Not a valid operation";
                break;
        }
    }
    console.log("Result- ", result);
    }
    catch (err){
        console.error("Error- ", err);
    }
    finally {
        console.log("Operation Complete");
    }
}

performOperation(["add", "subtract", "multiply"], [5, 4, 6, 4])
/*Result-  12
Operation Complete */
performOperation (["add", "add", "subtract", "subtract", "subtract"], [20, 25, 5, 10, 10, 10]);
/*Result-  20
Operation Complete */
performOperation(['add', 'divide', 'subtract'], [10, 2, 3, 5]);
/*Error-  Not a valid operation
Operation Complete */

// Write a function divideArrayByTwo that takes an array of numbers and divides each number by 2. 
// Handle any errors that may occur during the division, and log the result or 
// error message for each number. If an error occurs, continue with the next number.
function divideArrayByTwo(numArr = []) {
    try{
        if (numArr.length == 0) throw 'Number array is empty';
        const notNumItem = numArr.map(num => {
            if (typeof num != typeof 2) throw `${num} at ${numArr.indexOf(num)} isnt a number`
            let result = (num/2);
            if (isNaN(result) || !isFinite(result)) throw "Not propely devisiable";
            console.log(`${num} / 2 = ${result.toFixed(1)}`);
        })
    }
    catch (err){
        console.error("Error: ", err);
    }
}

// divideArrayByTwo([6, 8, 'abc', 10, 0, 12]); // Error:  abc at 2 isnt a number
divideArrayByTwo([4, 8, 16, 20, 2]);  
/*
4 / 2 = 2.0
8 / 2 = 4.0
16 / 2 = 8.0
20 / 2 = 10.0
2 / 2 = 1.0 
*/
divideArrayByTwo([10, -5, 30, 'xyz', 6]);
/*
10 / 2 = 5.0
-5 / 2 = -2.5
30 / 2 = 15.0
Error:  xyz at 3 isnt a number
*/