// Arrow Function

// regular function
function myName (){
    console.log("Manik Maity");
}

// arrow function
const alsoMyName = () =>{
    console.log("Manik Maity2")
}
myName();
alsoMyName();

const square = n => {
    return n**2;
}
console.log(square(3));

const toUpper = arr => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        newArray.push(arr[i].toUpperCase());
    }
    return newArray;
}
console.log(toUpper(["manik maity", "B.com"])) // [ 'MANIK MAITY', 'B.COM' ]



// returns without the "return" statement
const fullName  = (firstName, lastName) => `${firstName} ${lastName}`;
let myname = fullName("Manik", "Maity");
console.log(myname); // Manik Maity


// Function with default peramiter

function userMassege (name = "User"){
    return `Hello!, ${name}.`;
}
console.log(userMassege("Manik")); // Hello!, Manik.
console.log(userMassege());  // Hello!, User.


const userAge = (birthYear, currentYear = 2023) => {
    let age = currentYear - birthYear;
    return age;
}
console.log(userAge(2003, 2024)); //21
console.log(userAge(2003)); //20
