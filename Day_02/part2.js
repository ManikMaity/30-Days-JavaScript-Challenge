
//_______________________________Tamplate Lireral_______________________________
let a = 5;
let b = 21;
console.log(`The sum of ${a} and ${b} is ${a+b}.`);

//Bio Data Using Tamplate Leteral
let firstNAme = "manik";
let lastName = "maity";
let space = " ";
let age = 19;
let degree = "B.com";
let passion = "web-devlopment";
let fullName = firstNAme + space+lastName;

console.log(`My name is ${fullName}.\nI am ${age} years old purrsuing ${degree} degree.\nI am very interesterd in ${passion}.`);

console.log(`${a} is greater then ${b} - ${a>b}`);


// _________________________________String Methods _________________________________________

//Length Method
console.log(`The Legth of ${fullName} is ${fullName.length} space included`);


// Array with string
console.log(`The last charecter of ${fullName} is ${fullName[(fullName.length-1)]}`);

// Uppercase & Lower case
let uFullName = fullName.toUpperCase();
console.log(`My name in uppercase ${uFullName}`);
console.log(`Name in lowerCase is ${uFullName.toLowerCase()}`);


// substr in String 
console.log(`My title is ${fullName.substr(6, 5)}`);

//substring use
console.log(`My web-devlopment is ${passion.substring(0, 3)} + ${passion.substring(4, (passion.length))}`);

// Split in JavaScript 
// this method, split at each point where the separator occurs in the given string.
let brotherName =  "Suman Maity";
let firstNames = "manik, mohit, rahul, sanjay, kriti, riki, kris"
let test1 =  brotherName.split();
let test2 = brotherName.split(" ");
let test3 = firstNames.split(", ");
console.log(test3);
console.log(test1);
console.log(test2);

//trim() method use 
//Remove spaces 
let nameWithSpace = "   My name is manik maity    "
console.log(nameWithSpace.trim() +".");

//include() use
//Returns a boolean value if the given string in the method is exint in the string

let aboutMe = "My name is manik maity";
console.log(aboutMe.includes('manik'));
console.log(aboutMe.includes('Manik'));

// Replace i Js || replace the suSting with a new provide substring
let village = "Benapura";
console.log(village.replace("Bena", "Bana"));

// charAt || its find the char at a specified index value
let sName = "Suman";
console.log(sName.charAt(0));
console.log(sName.charAt(sName.length-1));

//charCodeAt() || its provide the ASCII code of of a char in a string
let rName = "Battle";
console.log(rName.charCodeAt(1)); // a ---> 97

/* indexOf()  || Takes a substring and if the substring exists in a string it returns 
the first position of the substring if does not exist it returns -1 */
let sGood = "Suman Maity is good boy!";
console.log(sGood.indexOf("is"));
console.log(sGood.indexOf("manik"));


// concat add strings
console.log(sGood.concat(" and this is", " a ", "substings."));

//startsWith() --> it checks is the string starts with the given string.
console.log(sGood.startsWith("Suman"));

//endsWith()
console.log(sGood.endsWith("!"));