# Error Handling
JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block.

## Syntax 
```js
try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}
```

## Example 
```js
 try {
    let firstName = "Manik";
    console.log(firstName + " " + lastName);
}
catch (err){
    console.error(err) // ReferenceError: lastName is not defined at Object.<anonymous>
}
```

## Finally
 code to be executed regardless of an error occurs or not
 ```js
 try {
    console.log(userName);
}
catch (err){
    console.log("Not Valid User Name"); // Not Valid User Name
}
finally{
    console.log("It will always execute"); // It will always execute
}
```

## Catch block peramiter
```js
try {
    console.log(hello);
}
catch (error){
    console.log(error.name); // ReferenceError
    console.error(error.message); // hello is not defined
} 
```

## throw
create custom error
```js
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
```

## Error Types
### ReferenceError
A ReferenceError is thrown if we use a variable that has not been declared.
```js
console.log(firstName);
/*ReferenceError: firstName is not defined
    at Object.<anonymous>  */
    
```

### SyntaxError
A syntax error has occurred
```js
console.log(2++/5);
// SyntaxError: Invalid left-hand side expression in postfix operation
```
### TypeError
A type error has occurred
```js
let num = 5;
console.log(num.toUpperCase());
/*TypeError: num.toUpperCase is not a function
    at Object.<anonymous>  */
```