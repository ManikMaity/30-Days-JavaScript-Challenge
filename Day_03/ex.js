// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types
//01
const now = new Date();
let firstName = "manik", lastName = "maity", country = "India", city = "Kolkata", age = 19, isMarried = true, year = now.getFullYear();
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof year);

//02 Check if type of '10' is equal to 10
console.log((typeof "10") == (typeof 10)); //false

//03 Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10); //false

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