// _______________________________Arrays__________________________________

// Using Array constructor 
const arr = Array ();
console.log(typeof arr); // object

// Using square brackets([])
const arr1 = [];
console.log(typeof arr1);

//How to create an array with values
const names = ["manik", "asanta", "prince", "DJ", "Pritam", "Bapi"];
const numbers = [5, 10, 7, 3, 9, 2];
const fruits = ["apple", "banana", "strabery", "guava", "watermalon"];

//print
console.log(`Names: ${names}, Number od Names: ${names.length}`);

// Array can have items of different data types
const diff = [
    'a',
    "manik",
    12,
    true,
    2.5,
    ["html", "css", "Javascript"]
];
console.log(`Types:`);


for (let i = 0; i < diff.length; i++){
    console.log(typeof diff[i]);
}

// Creating an array using split 
let x1 = "JavaScript";
const x1Array = x1.split("");
console.log(x1Array);

let MNC = 'JavaScript, HTML, CSS, React, NodeJS, MongoDB';
const MNCArray = MNC.split(", ");
console.log(MNCArray);

// Accessing array items using index
let fruitsArray = ["apple", "banana", "orange", "watermalon", "lime"];
let a = fruitsArray[0];
console.log(a);
console.log(fruitsArray[fruitsArray.length - 1]);

// Modifying array element
const ramayan = ["ram", "sita", "kisna", "hanuman", "varat", "laksman"];
ramayan[0] = "hindu";
console.log(ramayan);

// ___________________________Methods to manipulate array_______________________________________

// Array Constructor
const planets = Array(2); // It creates eight empty value inside the memory -- back to back
planets[0] = "Vinus"; // Then we can add value to them
planets[1] = "Earth";
console.log(planets);

// Creating static values with fill 
// It fill all the spacs with one static value
const Xes = Array(4).fill("X");
console.log(Xes); // [ 'X', 'X', 'X', 'X' ]

// Concatenating array using concat 
// It merge two arrays
const h1 = [1,2,3,4,5];
const h2 = [6,7,8,9,10];
const h3 = h1.concat(h2);
console.log(h3);

const namesFruits = names.concat(fruits);
console.log(namesFruits);

// Getting array length 
console.log(names, names.length);

// Getting index an element in arr array
let a2 = (names.indexOf("manik")); //0
let a3 =  (names.indexOf("Ronit")); // -1 (because not found)
console.log(a2, names[a2]); 
console.log(a3);

// Check an element if it exist in an array using indexOf()
const schoolItem = ["bag", "pen", "pencil", "ruller", "water bottle", "tiffen"];
let searchItem = prompt("What to search: ", "hat"); // het to search
let isExit = schoolItem.indexOf(searchItem);
if (isExit == -1)
{
    alert(`Not Found`);
}
else 
{
    alert(`Found in index ${isExit}`);
}

