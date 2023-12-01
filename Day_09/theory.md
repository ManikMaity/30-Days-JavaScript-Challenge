# Higher Order Function
Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

## Callback
```js
// Callback 
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

function message (func, firstName, lastName){
    return `Hi, there! ${func(firstName, lastName)}`
}
console.log(message(fullName, "Manik", "Maity")); //Hi, there! Manik Maity
```
```js
function addArrayTwo (arr) {
    let sum = 0;
    arr.forEach(function(element){sum += element});
    return sum;
}
console.log(addArrayTwo(array2)); // 20
```

## Returning Function 
Higher order functions return function as a value​
```js
// Returning function 
function firstOrder (n){
    function secondOrder (m){
        function thirdOrder (o){
            return n*m*o;
        }
        return thirdOrder;
    }
    return secondOrder;
}
console.log(firstOrder(5)(2)(3)); // 30
```

## Setting time
In js we can set interval before  code code execute
- setInterval(callback, duration)
- setTimeout(callback, duration)


### setInterval
The duration is in milliseconds and the callback will be always called in that interval of time.
```js
// setInterval
function sayHello(){
    console.log("Hello, there.");
}
setInterval(sayHello, 5000); // prints Hello, there. every 5sec
```

### setTimeout
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

## Functional Programming
In modern js we have buildin methods we can do complicated work. it takes callback function.
```
 Examples - forEach, map, filter, reduce, find, every, some, and sort.
```

### forEach
 Iterate an array elements. It takes a callback function.
 ```js
 const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// uppercase print 
let upperCaseCountry = [];
countries.forEach((country) => upperCaseCountry.push(country.toUpperCase()));
console.log(upperCaseCountry); // [ 'FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND' ]
 ```

### map
 map work like forEAch but it return an new array
 ```js
 const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  ```
 ```js
 const firstThreeChar = countries2.map((country) => (country.substring(0, 3)).toUpperCase());
console.log(firstThreeChar);
// [
//     'ALB', 'BOL', 'CAN',
//     'DEN', 'ETH', 'FIN',
//     'GER', 'HUN', 'IRE',
//     'JAP', 'KEN'
//   ]
```

### filter
it  returns a new array with filterout items which fulfil the conditiion
```js
function filterWithWord (word) {
    const newArray = countries2.filter((country) => country.includes(word));
    return newArray;
}

console.log(filterWithWord("land")); // [ 'Finland', 'Ireland' ]
console.log(filterWithWord("ia")); //[ 'Albania', 'Bolivia', 'Ethiopia' ]
```

### reduce
```js
const array4 = [1, 2 , 3, 4];
const newArray = array4.reduce((sum, value) =>{
    console.log(`${sum} + ${value}`);
   return sum + value;
})
console.log(newArray);
// 1 + 2
// 3 + 3
// 6 + 4
// 10
```
### every
every: Check if all the elements are similar in one aspect. It returns boolean
```js
const array5 = ["Manik", "Suman", "Swapan", "Malati", "Parash"];
const isAllString = array5.every((name) => typeof name == "string");
console.log(isAllString); // true
```

### find 
retuns the first elemnet which satisfies the condition
```js
const s_names = array5.find((name) => name.startsWith('S'));
console.log(s_names); // Suman
```
### findIndex
it returns the index of the first array element satisfies the condition 
```js
const M_names = array5.findIndex((name) => name.startsWith("M"));
console.log(M_names); // 0
console.log(array5[M_names]); /// Manik
```

### some
Check if some of the elements are similar in one aspect. It returns boolean 
```js
function allString (arr = []){
    const isAllString = arr.some((element) => typeof element == "string");
    return isAllString;
}
console.log(allString(array5)); // true
```

### sort
it sorts the array either asending or decnding order
it modifies the original array
```js
const array6 = array5;
console.log(array6.sort()); // [ 'Malati', 'Manik', 'Parash', 'Suman', 'Swapan' ]
```
#### Sorting number
```js
const num2 = [5, 8, 6, 2, 0];
console.log(num2.sort((a, b) => {
    console.log(`${a} ${b}` );
    return a - b;
})); //[ 0, 2, 5, 6, 8 ]

function compareFnc (a, b){
    if (a > b){
        return -1;
    }
    else if (b > a){
        return 1;
    }
    else{
        return 0;
    }
}

let num3 = [4, 2, 8, 1, 6];
console.log(num3.sort(compareFnc)); //[ 8, 6, 4, 2, 1 ]
```