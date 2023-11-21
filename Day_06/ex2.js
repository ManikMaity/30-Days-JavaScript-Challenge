const countries = [
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
    'Kenya'
  ]


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'. - ['Finland','Ireland', 'Iceland']
const landContries = [];
for (let i = 0; i < countries.length; i++){
    if (countries[i].includes("land")){
        landContries.push(countries[i]);
    }
}
if (landContries.length != 0){
    console.log(landContries);
}
else{
    console.log(`All these countries are without land`);
}

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'. - ['Albania', 'Bolivia','Ethiopia']
const iaContries = [];
for (let i = 0; i < countries.length; i++){
    if (countries[i].endsWith('ia')){
        iaContries.push(countries[i]);
    }
}
if (iaContries.length != 0){
    console.log(iaContries);
}
else{
    console.log(`All these countries are without land`);
}

// Using the above countries array, find the country containing the biggest number of characters.

let bigCountry = countries[0];
for (let i = 1; i < countries.length; i++){
     if (bigCountry.length < countries[i].length){
        bigCountry = countries[i];
     }
}
console.log(bigCountry);


// Using the above countries array, find the country containing only 5 characters.

const fiveCharCountry = [];

for (let i = 0; i < countries.length; i++){
    if (countries[i].length == 5){
        fiveCharCountry.push(countries[i]);
    }
}

console.log(fiveCharCountry);


// Find the longest word in the webTechs array
let longest_webTech = webTechs[0];
for (let i = 1; i < webTechs.length; i++){
    if (longest_webTech.length < webTechs[i].length){
        longest_webTech = webTechs[i];
    };
}

console.log(longest_webTech);

// Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]


const webArrayWithLength = [];

for (let i = 0; i < webTechs.length; i++){
    let itemArray =[]
    itemArray.push(webTechs[i]);
    itemArray.push(webTechs[i].length);
    webArrayWithLength.push(itemArray);
}
console.log(webArrayWithLength);



// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

let stack = [];

for(let i = 0; i < mernStack.length; i++){
    stack.push(mernStack[i].charAt(0));
}
console.log(`${stack.join("")} Stack`);





// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

const fruit = ['banana', 'orange', 'mango', 'lemon'];
const reverse_fruit = [];

for (let i = fruit.length - 1; i >= 0; i--){
    reverse_fruit.push(fruit[i]);
}
console.log(reverse_fruit);




// ------------------------------------------ LEVEL 3 -------------------------------------------- 


// Copy countries array(Avoid mutation) 

const copiedCountries = [];
for (const country of countries) {
    copiedCountries.push(country);
}

console.log(copiedCountries, copiedCountries.length);
copiedCountries.push("India");


// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries  

function alphaSort(a, b) {

    return a.charCodeAt(0) - b.charCodeAt(0);
    
}

const sortedCountries = copiedCountries.sort(alphaSort);
console.log(sortedCountries);




// Sort the webTechs array and mernStack array 
const sortedWebTech = webTechs.sort(alphaSort), sortedMernStack = mernStack.sort(alphaSort);
console.log(sortedWebTech);
console.log(sortedMernStack);

// Extract all the countries contain the word 'land' from the countries array and print it as array

//Already done 
console.log(landContries);


// Find the country containing the hightest number of characters in the countries array 
// already done
console.log(bigCountry);


// Extract all the countries contain the word 'land' from the countries array and print it as array -- DONE

// Extract all the countries containing only four characters from the countries array and print it as array
const fourCharCountry = [];
for (let i = 0; i < countries.length; i++){
    if (countries[i].length == 4){
        fourCharCountry.push(countries[i]);
    }
}
console.log(fourCharCountry > 0 ? fourCharCountry : "No Country");


// Extract all the countries containing only four characters from the countries array and print it as array

const reverseCapCountry = [];

for (let i = countries.length - 1; i >= 0; i--){
    let country = countries[i].toUpperCase();
    reverseCapCountry.push(country);
}
console.log(reverseCapCountry);