// Destructuring arrays 
const family = ["Swapan", "Manik", "Suman", "Malati"];
let [fatherName, myName, brotherName, motherName] = family;
console.log(myName); //Manik
console.log(motherName); // Malati

const fullStak = [["HTML", "CSS", "JavaScript"], ["Node", "Express", "MongoDB"]];
let [frontEnd, backEnd] = fullStak;
const printFrontend = frontEnd.map(tech => {console.log(tech)});
/* HTML
CSS
JavaScript */

// If we want to skip a value of array for destructuring 
// We just use a comma to give variable name 
const myPlaces = ["Benapura", "Dantan", "Kolkata"];
let [nativePlace, , currentPlace] = myPlaces;
console.log(currentPlace); // Kolkata

const familyCopy = family.slice(0);
let [, myname, ,] = familyCopy;
console.log(myname); // Manik


// Using default values in destructuring
const userProviedName  = [undefined, "Manik", "Maity"];
let [prefit = "Mr.", userFirstName, userLastName] = userProviedName;
console.log(`${prefit} ${userFirstName} ${userLastName}`); // Mr. Manik Maity

// We can use spred operator (...) in destructuring to specify rest of valuse
const oneToTwenty = [];
for (let i = 1; i<=20; i++){
    oneToTwenty.push(i);
}
console.log(oneToTwenty);
/*
[
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20
]
*/
let [one, two, ...rest] = oneToTwenty;
console.log(one); //1
console.log(rest);
/*
[
   3,  4,  5,  6,  7,  8,  9,
  10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20
]
*/

// Destructuring during iteration 
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];
for (const [country, capital] of countries){
    console.log(capital);
} 
// Helsinki
// Stockholm
// Oslo