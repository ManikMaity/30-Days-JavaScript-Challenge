// ______________________________Converting Data Types _________________________________

//string ---> int
 let num = "10";
console.log(num+2); //102

console.log(parseInt(num)+2); //12

console.log(Number(num)+2); //12

 let toNum = +num;
 console.log(toNum); //10

// string ---> float
let sFloat = "5.25";
console.log(parseFloat(sFloat) + 0.25); //5.50
//Other two ways are same as string ---> int

//Float ----> Int
let fFloat = +sFloat; //5.5
console.log(parseInt(fFloat)); //5
