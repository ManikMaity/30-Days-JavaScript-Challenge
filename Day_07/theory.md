# Function
Function is block of resuable code which is designed ti perform certain task.

## Ways to Declairing a function

    - Declaration function
    - Expression function
    - Anonymous function
    - Arrow function

## Function Declaration

##  Function without perameters
```js
//declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName() // calling function by its name and with parentheses
```

### Example 

```js
// function without parameters 
function tenToTwentyRandomNum (){
    let randomNum = Math.floor(Math.random()*11) + 10;
    return randomNum; // function returning values
}

let num = tenToTwentyRandomNum(); // calling the function
console.log(num);
```

## Function with parameter

### One perameter
```js
// function with one parameter
function functionName(parm1) {
  //code goes her
}
functionName(parm1) // during calling or invoking one argument needed
```

### Two Perameter
```js
// function with two paremeter 
function fullName (a, b){
    let fullName = a + " "+b;
    return fullName;
}
```

### Multiple Perameter
```js
function arraySum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
const array1 = [5, 4, 6, 8, 10];
console.log(arraySum(array1)); // 33
```

### Unlimited Peramiter
```js
function sumOfAll (){
    let sum =0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(sumOfAll(1, 2, 4, 8)); // 15
```
### Unlimited Peramiters in arrow function
```js
// We have to use spred operator with argument name in arraow function for  unlimeted 
const userFullName = (...names) =>{
    
    for(let i = 0 ; i < names.length; i++){
    names[i] = names[i].charAt(0).toUpperCase() + names[i].substr(1);
    }

    return names.join(" ");
}

console.log(userFullName("manik", "kumar", "prasad", "maity")); // Mnaik Kumar Prasad Maity
console.log(userFullName("manik", "maity")); // Manik miaty
```
