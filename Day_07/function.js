// function without parameters 
function tenToTwentyRandomNum (){
    let randomNum = Math.floor(Math.random()*11) + 10;
    return randomNum;
}

let num = tenToTwentyRandomNum();
console.log(num);


// function with one peraneter
// This function console log the argument
function consoleLog (a){
    console.log(a);
}

let myName = "Manik Maity";
consoleLog(myName); // calling the function


// function with two paremeter 
function fullName (a, b){
    let fullName = a + " "+b;
    return fullName;
}

const fName  = "Manik";
const lNAme = "Maity";
console.log(fullName(fName, lNAme)); // Manik Maity


// function with multiple parameters
function arraySum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
const array1 = [5, 4, 6, 8, 10];
console.log(arraySum(array1)); // 33


// Unlimited number of parameters in regular function
// This is when we dont know how many argumnet user pass
function sumOfAll (){
    let sum =0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(sumOfAll(1, 2, 4, 8)); // 15

// Unlimited number of parameters in arrow function 
// We have to use spred operator with argument name in arraow function for  unlimeted 
const userFullName = (...names) =>{
    
    for(let i = 0 ; i < names.length; i++){
    names[i] = names[i].charAt(0).toUpperCase() + names[i].substr(1);
    }

    return names.join(" ");
}

console.log(userFullName("manik", "kumar", "prasad", "maity")); // Mnaik Kumar Prasad Maity
console.log(userFullName("manik", "maity")); // Manik miaty


// Anonymous Function

const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
  }