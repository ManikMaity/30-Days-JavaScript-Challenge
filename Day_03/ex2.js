// Compare your first name length and your family name length and you should get this output

let fullname = "manik maity";
let split = fullname.split(" ");
let firstName = split[0], lastName = split[1];

if (firstName.length > lastName.length)
{
    console.log(`Your first name ${split[0]}, larger then the last name ${split[1]}`);
}
else if (firstName.length < lastName.length)
{
    console.log(`Your first name ${split[0]}, smaller then the last name ${split[1]}`);
}
else
{
    console.log(`Your first name ${split[0]} and last name ${split[1]} both are equal`);
}

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 25, yourAge = 30;

myAge > yourAge
? console.log(`I am ${myAge - yourAge} years older then you`)
: console.log(`Your'e ${yourAge - myAge} years older than me`)

// Using prompt get the year the user was born and if the user is 18 or above allow
// the user to drive if not tell the user to wait a certain amount of years.
let bornYear = parseInt(prompt("Birth Year: ", 2003));
let age = 2023 - bornYear;
age >= 18
? console.log(`Your'e ${age}, You are old enough to drive`)
: console.log(`Your'e ${age}, You will allowed to drive after ${18-age} years`)


// Write a script that prompt the user to enter number of years. 
//  Calculate the number of seconds a person can live. Assume some one lives just hundred years 

let numYear = parseInt(prompt("Number of Years: ", 85));
let yearToSec = (((numYear*365)*24)*60)*60;
alert(`You will live ${yearToSec} second`);

// Create a human readable time format using the Date time object
// ________________________________Level3_____________________________________
/* Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */
function iZero (a)
{
    if (a < 10)
    {
        a = "0"+ a;
        return a;
    }
    return a;
}

let time = new Date();
let hour = time.getHours();
let rMonth = time.getMonth() + 1;
rMonth = iZero(rMonth);
if (hour > 12) 
{
    hour -=12;
    hour = iZero(hour);
}


let readableTime = `${iZero(time.getDate())}/${rMonth}/${time.getFullYear()} ${hour}:${iZero(time.getMinutes())}`;
console.log(readableTime);