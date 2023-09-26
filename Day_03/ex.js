// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types
//01
const now = new Date();
let firstName = "manik",
  lastName = "maity",
  country = "India",
  city = "Kolkata",
  age = 19,
  isMarried = true,
  year = now.getFullYear();
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof year);

//02 Check if type of '10' is equal to 10
console.log(typeof "10" == typeof 10); //false

//03 Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10); //false

//04 Boolean value is either true or false.

//05 Write three JavaScript statement which provide truthy value.
console.log(1 == true); //true
console.log(true == true); //true

//06 Write three JavaScript statement which provide falsy value.
console.log(0 == false);
console.log("" == false);
console.log(!undefined);

//07 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

//08 4 > 3 //true
//09 4 >= 3 //true
//10 4 < 3 //false
//11 4 <= 3 //false
//12 4 == 4 //true
//13 4 === 4 //true
//14 4 != 4 //false
//15 4 !== 4 //false
//16 4 != '4' //false
//17 4 == '4' //true
//18 4 === '4' //false

// There is no 'on' in both dragon and python
let dra = "dragon",
  py = "python";
console.log(!dra.includes("on") == !py.includes("on")); //false == false : true --> both includes

// Use the Date object to do the following activities
const time = new Date();

// What is the year today?
console.log(time.getFullYear());

// What is the month today as a number?
console.log(time.getMonth());

// What is the date today?
console.log(time.getDate());

// What is the day today as a number?
console.log(time.getDay());

// What is the hours now?
console.log(time.getHours());

// What is the minutes now?
console.log(time.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(time.getTime());

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Base: ", 6);
let height = prompt("Height: ", 8);
alert(`The area of the triangle is ${0.5 * base * height}.`);

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let aSide = parseInt(prompt("Side a: ", 6));
let bSide = parseInt(prompt("Side b: ", 9));
let cSide = parseInt(prompt("Side c: ", 8));
let total = aSide + bSide + cSide;
alert(`The perimeter of the triangle is ${total}`);

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let rHeigth = parseInt(prompt("Heigth: ", 6));
let rWeidth = parseInt(prompt("Weidth: ", 6));
let rArea = rHeigth * rWeidth;
let rPerimeter = 2 * (rHeigth + rWeidth);
alert(`Rectengle Area: ${rArea} and perimeter: ${rPerimeter}`);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let rCircle = parseInt(prompt("Radius: ", 3));
alert(`Area of a circle is ${(rCircle ** 2 * Math.PI).toFixed(2)}`);
alert(`Circumference of a circle ${(2 * Math.PI * rCircle).toFixed(2)}`);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = parseInt(prompt("x: ", 6));
alert(`y-intercept of y ${2 * x - 2}`);

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2,
  y1 = 2,
  x2 = 6,
  y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log(`slope between point (2, 2) and point(6,10): ${slope}`);

/* Calculate the value of y (y = x2 + 6x + 9).
 Try to use different x values and figure out at what x value y is 0. */

 let yValue = 0;
 let xValue;
 for (let x  = -100; ((x**2)+(6*x)+9)!= 0; x++)
 {
    xValue = x;
 }
console.log(xValue+1);

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
 let hour = prompt("Hours: ", 8), perHourRate = prompt("Per Hour Rate: ", 30);
 alert(`Pay of the person: ${hour*perHourRate}`);

//  If the length of your name is greater than 7 say, your name is long else say your name is short. 
let myName = prompt("Enter Name: ", "Mnaik Maity");
myName.length > 7
? console.log(`Long Name - ${myName.length}`)
: console.log(`Short Name - ${myName.length}`)