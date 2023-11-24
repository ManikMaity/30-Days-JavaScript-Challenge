// ----------------------------------- LEVEL 1 ----------------------------------------  

// Declare a function fullName and it print out your full name.
function fullName (){
    console.log("Manik Maity");
}
fullName();



//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
const fullName2 = (firstName, lastName) => `${firstName} ${lastName}`;
let myFullName = fullName2('manik', 'maity')
console.log(myFullName);


// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers (a, b) {
    let c = typeof 2;
    if (typeof a == c && typeof b == c){
        return a+b;
    }
    else {
        return "Plese enter number!";
    }
}
console.log(addNumbers(1, 20)); // 21

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (len, wid) => 2*(len + wid);
let myRactangle = perimeterOfRectangle (5, 6);
console.log(myRactangle); //22


// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (len, wid) => len*wid;
console.log(areaOfRectangle(5, 6)); //30




// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (len, wid, hei) => len*wid*hei;
console.log(volumeOfRectPrism(5, 5, 3)) ///75

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle (r){
    let area = (Math.PI)*r*r;
    return area.toFixed(2);
}
console.log(areaOfCircle(5)); //78.54


// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = r => (2*Math.PI*r).toFixed(2);
console.log(circumOfCircle(2)); //12.57


 // Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. 
 // Write a function which calculates a speed of a moving object, speed.
 function objectSpeed (distance, time){
    return `${distance/time} km/hr`;
 }
 console.log(objectSpeed(5, 2)); //2.5 km/hr


 // Weight of a substance is calculated as follows: weight = mass x gravity. 
 //Write a function which calculates weight. 
 const objectWeight = m => m*9.8;
 console.log(objectWeight(10)); //98


 // Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
 // Write a function which convert oC to oF convertCelsiusToFahrenheit.
 const convertCelsiusToFahrenheit = c => (c*(9/5))+32 + " F";
 console.log(convertCelsiusToFahrenheit(100)) //212 F



//  Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
//  Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
//  Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function BMIcalculator (weig, heig){
    heig /= 100;
    let BMI = (weig / (heig**2)).toFixed(1);
    let status;
    if (BMI < 18.5){
        status = "Underweight";
    }
    else if (BMI >= 18.5 && BMI < 25){
        status = "Normal Weight";
    }
    else if (BMI >= 25 && BMI <30){
        status = "Overweight";
    }
    else {
        status = "Obese"
    }
    return `${status}: BMI is ${BMI}`;
}


console.log(BMIcalculator(75, 169)); //Overweight: BMI is 26.3 --> verified


// Write a function called checkSeason, it takes a month parameter 
// and returns the season:Autumn, Winter, Spring or Summer.
// INDIAN --> 
// Summer Season (Grishma): March to May
// Monsoon Season (Varsha): June to September
// Autumn Season (Sharad): October to November
// Pre-winter Season (Hemant): December to January

function checkSeason (month = "March") {
    month = month.toLowerCase();
    let season;
    switch (month) {
        case 'march':
        case 'april':
        case 'may' :
            season = "Summer"
            break;
    
        case "june":
        case "july":
        case "augest":
        case "september":
            season = "Monsoon"
            break;
        case "october":
        case "november":
            season = "Autumn"
            break;
        
        case "december":
        case "january":
        case "february" :
            season = "Winter"
            break;

        default:
            season = "Not proper input"
            break;
    }

    return season;
}

console.log(checkSeason("OCTOBER")); // Autumn
console.log(checkSeason("Manik")); // Not proper input


// Math.max returns its largest argument. 
// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method. 

function findMax (...nums){
    let maxNum = nums[0];

    for (let i = 1; i < nums.length; i++){
        if (nums[i] > maxNum){
            maxNum = nums[i];
        }
    }

    return `Maximum number - ${maxNum}`;
}

console.log(findMax(5, 2, 6, 9, 20, 1)); // Maximum number - 20
console.log(findMax(0, 10, 5)) //10
console.log(findMax(-5, -10, -2)) // -2





