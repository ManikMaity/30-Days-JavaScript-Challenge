// ------------------------------------------ LEVEL 2 ----------------------------------------

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08

function isZeroRequired (num){
  if (num < 10){
    num = "0"+num;
  }
  return num;
}

function twelveHour (hour){
    if (hour > 12){
        hour = hour - 12;
    }
    return hour;
}

function showDateTime(){
    const time = new Date ();
    let date = `${isZeroRequired(time.getDate())}/${isZeroRequired(time.getMonth())}/${isZeroRequired(time.getFullYear())}`
    let currentTime = `${isZeroRequired(twelveHour(time.getHours()))}:${isZeroRequired(time.getMinutes())}`
    return `${date} ${currentTime}`;
}
console.log(showDateTime());



// Declare a function name reverseArray. It takes array as a parameter and 
// it returns the reverse of the array (don't use method).


// //[5, 4, 3, 2, 1]

// //['C', 'B', 'A']

function reverseArray (arr){
    let reverseArray = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reverseArray.push(arr[i])
    }
    return reverseArray;
}
console.log(reverseArray(['A', 'B', 'C']))
console.log(reverseArray([1, 2, 3, 4, 5]))


// Declare a function name addItem. 
// It takes an item parameter and it returns an array after adding the item

const cart = [];

function addItem (item){
    cart.push(item);
    return cart;
}

addItem("Rice 5kg");
addItem("Tomato 500g")
console.log(cart); // [ 'Rice 5kg', 'Tomato 500g' ]

// Declare a function name removeItem. 
// It takes an index parameter and it returns an array after removing an item

function removeItem (index){
    cart.splice(index, 1);
    return cart;
}
removeItem(0);
console.log(cart) // [ 'Tomato 500g' ]


// Declare a function name sumOfOdds. 
// It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(num) {
    let oddSum = 0;
    for (let  i = 0; i < num; i++){
        if (i%2 != 0){
            oddSum += i;
        }
    }
    return oddSum;
}

console.log(sumOfOdds(10)); //25

// Declare a function name evensAndOdds . 
// It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
const evensAndOdds = (num) => {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i <= num; i++){
        if (i%2 == 0){
            evenCount++;
        }
        else {
            oddCount ++;
        }
    }
    return [evenCount, oddCount];
}

const inHundreed = evensAndOdds(100);
console.log(`The number of odds are ${inHundreed[1]}`);// The number of odds are 50
console.log(`The number of even are ${inHundreed[0]}`); // The number of even are 51



// Write a function which takes any number of arguments and return the sum of the arguments
function addUnlimitedNumber (){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(addUnlimitedNumber(5, 3, 2, 2));


// Writ a function which generates a randomUserIp. 
function randomIPNum (){
    return Math.floor(Math.random()*256);
}
let IPaddress = `${randomIPNum()}.${randomIPNum()}.${randomIPNum()}.${randomIPNum()}`
console.log(IPaddress);


// Declare a function name randomHexaNumberGenerator. 
// When this function is called it generates a random hexadecimal number. 
//The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'

const colorChars = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function hexCodeMaker(){
    let colorCode = [];
    for (let i = 0; i < 6; i++){
        colorCode.push(colorChars[Math.floor(Math.random()*(colorChars.length))])
    }
    return `#${colorCode.join("")}`;
}

console.log(hexCodeMaker()) // #DB3E6E


// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function rendomUserID(){
    let id = [];
    for (let i = 0; i<7; i++){
        let position = Math.floor(Math.random()*characters.length);
        id.push(characters[position]);
    }
    return id.join("");
}
console.log(rendomUserID()); //ZarRY12

 