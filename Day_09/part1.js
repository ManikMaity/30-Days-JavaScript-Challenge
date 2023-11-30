// Callback 
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

function message (func, firstName, lastName){
    return `Hi, there! ${func(firstName, lastName)}`
}
console.log(message(fullName, "Manik", "Maity")); //Hi, there! Manik Maity

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


// callback function example 
let array1 = [5, 7, 4, 2, 0, 9];
let array2 = Array (4).fill(5);


const sumArray = arr =>{
    let sum = 0;
    function callback(element){
        sum += element;
    }
    arr.forEach(callback);
    return sum;
}
console.log(sumArray(array1)); // 27



function addArrayTwo (arr) {
    let sum = 0;
    arr.forEach(function(element){sum += element});
    return sum;
}
console.log(addArrayTwo(array2)); // 20

// Setting time 
// In js we can set interval before  code code execute

// // setInterval
// let count = 0;
// function sayHello(){
//     console.log(`Time - ${count}`);
//     count++;
// }
// setInterval(sayHello, 1000); // prints Hello, there. every 5sec

// // setTimeout

// function fiveSecTimer (){
//     let count = 5;
//     function massege (){
//         console.log(`Timer - ${count}`);
//         count--;
//     }
//     setInterval(massege, 1000)
// }
// setTimeout(fiveSecTimer, 5000)


// functional programing


// for each 
let array3 = [1, 8, 4, 2, 5];
array3.forEach(num => console.log(num));// prints every elements of array

sum2 = 0;
const add = num => sum2+=num;
array3.forEach(add);
console.log(sum2); // 20

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// uppercase print 
let upperCaseCountry = [];
countries.forEach((country) => upperCaseCountry.push(country.toUpperCase()));
console.log(upperCaseCountry); // [ 'FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND' ]