// ----------------------------------------- LEVEL 1 --------------------------------------------


// Calculate the total annual income of the person from the following text. 
// ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const txt1 = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
const calculateTotalIncome = (txt = "") => {
    const allIncomes = txt.match(/\d+/g);
    console.log(allIncomes)
    const totalIncome = allIncomes.reduce((sum, income) => {
        income = Number(income);
        return sum + income;
    }, 0);
    return totalIncome;
}
console.log(calculateTotalIncome(txt1));

// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative 
// direction, 0 at origin, 4 and 8 in the positive direction. 
// Extract these numbers and find the distance between the two furthest particles.
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
function distanceBeteenPoints (arr =[]) {
    let findLowerPoint = arr.sort((a,b) => {
        let num1 = Number(a);
        let num2 = Number(b);
        return num1 - num2;
    })
    return Number(findLowerPoint[findLowerPoint.length - 1]) - Number(findLowerPoint[0])
}
console.log(distanceBeteenPoints(points)) // 12

// Write a pattern which identify if a string is a valid JavaScript variable 
let pattern = /(^[(a-z|A-Z)])\_/g;
let varName  = "my-Variable";
let isVAlid = pattern.test(varName);
console.log(isVAlid);