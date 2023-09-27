/* Get user input using prompt(“Enter your age:”). If user is 18 or older , 
give feedback:'You are old enough to drive' but if not 18 give another 
feedback stating to wait for the number of years he needs to turn 18. */

// let uAge  = prompt("Enter Age: ", 18);
// uAge >= 18
// ? alert(`Your'e old enough to drive`)
// : alert(`Your'e left ${18 - uAge} years to drive`)


/* Compare the values of myAge and yourAge using if … else. 
Based on the comparison and log the result to console stating who is older (me or you). 
Use prompt(“Enter your age:”) to get the age as input. */



// let yourAge = parseInt(prompt("Enter Your Age: ", 30));
// let myAge = 19;
// if (yourAge > myAge)
// {
//     alert(`your'e ${yourAge - myAge} years older than me`);
// }
// else
// {
//     alert(`I'm ${myAge - yourAge} years older than you`);
// }

/*If a is greater than b return 'a is greater than b' else 'a is less than b'. 
Try to implement it in to ways: 1. using if else 2. ternary operator. */

let a = 4
let b = 3

// if else 
if (a > b)
{
    console.log(`${a} is greater than ${b}`);
}
else 
{
    console.log(`${a} is less than ${b}`);
}

// Ternary operator
a > b
? console.log(`${a} is greater than ${b}`)
: console.log(`${a} is less than ${b}`)

/* Even numbers are divisible by 2 and the remainder is zero. 
How do you check, if a number is even or not using JavaScript? */
let num1 = parseInt(prompt("Enter number: ", 5));
(num1 % 2 == 0)
? alert(`${num1} is an even number`)
: alert (`${num1} is a odd number`)


//________________________LEVEL2______________________________
/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

let marks = parseInt(prompt("Marks: ", 55));
let grade;
if (marks >= 80)
{
    grade = "A";
}
else if (marks >= 70 && marks <= 79)
{
    grade = "B";
}
else if (marks >= 60 && marks <= 69)
{    
grade = "C";
} 
else if (marks >= 50 && marks <= 59)
{
    grade = "D";
}
else
{
    grade = "F";
}
alert(`You got ${marks} marks, so your'e grade is ${grade}`);

/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

const time = new Date();
let cMonth  = time.getMonth() + 1;


let month = prompt("Month: ", "January").toLowerCase();
let season;

switch (month) 
{
    case ("january") :
    season = "Winter";
    break;
    case ("february"):
    season = "Winter";
    break;
    case ("march") :
    season = "Spring";
    break;
    case ("april"):
    season = "Spring";
    break;
    case ("may"):
    season = "Spring";
    break;
    case ("june"):
    season = "Summer";
    break;
    case ("july"):
    season = "Summer";
    break;
    case ("august"):
    season = "Summer";
    break;
    case ("september"):
    season = "Autumn";
    break;
    case ("october"):
    season = "Autumn";
    break;
    case ("novemver"):
    season = "Autumn";
    break;
    case ("december"):
    season = "Autumn";
    break;
    default:
    season = "Invalid Input";
    break;  
}

alert (`The seoson is ${season}`);
