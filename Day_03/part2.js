//_____________________Logical Operators________________________
//  There operatators  - &&,  ||, !
console.log(5 < 12 && 10 < 12); //both true --> true
console.log(5 < 10  || 5 < 2); // One true --> true
console.log(!(5<6)); //false

//_______________________Incremant Operartors____________________
// pre-Incemant and post-Incemant
let x =0, y =0;
console.log(++x); //1 --> pre Incremant
console.log(y++); //0 --> post Incremant

//____________________Ternary Operators_____________________
/* Ternary operator allows to write a condition. 
Another way to write conditionals is using ternary operators*/

let mage = 17;
let isAdult = 18;

mage >= isAdult
? console.log(`Age - ${mage} You are a adult`)
: console.log(`Age - ${mage} You aren't a adult`)

//________________________Windows Method________________________
// let pName = prompt("Name: ");
// alert(`Hello!, ${pName}`);

// let tPromt = prompt('Degree: ', 'B.com(H)'); //the second text works as a defoult value
// console.log(tPromt);

//confirm("") method

// let remove = confirm("Are you sure waant to delete this?");

// remove == true
// ? console.log("Deleted")
// : console.log("Not  Deleted")

const now = new Date();
console.log(now);
console.log(`Current Year: ${now.getFullYear()}`);
console.log(`Current Month ${now.getMonth()}`); // 8 //because -- Jan = 0 not 1
console.log(`Todays date: ${now.getDate()}`); //22
console.log(`Day: ${now.getDay()}`); //5 --> friday