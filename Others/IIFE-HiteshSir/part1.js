// IIFE --> Immediately Invoked Functionn Expressions (IIFE)
// IIFE execute the funtion imidiately
//For removing Global scope's varibales polution we declair IFFE
function chai (){
    console.log("DB CONNECTED");
}
chai();


// IIFE Syntax 
// ";" this is requred to end the IIFE funtion
(function chai2(){
    console.log("DB CONNECTED 2");
})();


(function chai2(){
    console.log("DB CONNECTED 2");
})();

// IIFE in arrow function 
//  IIFE with perameter
((userName) => {
    console.log(`My Name is ${userName}`);
})("Manik");