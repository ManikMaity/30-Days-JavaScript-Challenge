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

