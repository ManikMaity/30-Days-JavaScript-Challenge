// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. 
// It doesn’t take any parameter but it takes two inputs using prompt(). 
// One of the input is the number of characters and the second input is the number 
// of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function userIdGeneratedByUser (){
    let numChar = 7;
    let numOfIDs = 6;
    let IDs = [];
    for (let i = 0; i < numOfIDs; i++){
        let ID = [];
        for (let i = 0; i<numChar; i++){
            let position = Math.floor(Math.random()*characters.length);
            ID.push(characters[position]);
        }
        IDs.push(ID.join(""));
    }
    return IDs;
}

console.log(userIdGeneratedByUser()); // [ 'SebCDW8', 'U1cu76d', 'QM5L6eg', 'qaY12Sa', 'deZ8jdm', 'pi2MAn6' ]



// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb (hex = "#155AA2"){
    hex = hex.replace(/#/, "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    
    return `rgb(${r},${g},${b})`;
}

let red = convertHexaToRgb("#678373");
console.log(red); // rgb(103,131,115)



// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array 

function shuffleArray(arr){

    // assesing all array  item
    for (let i = 0; i < arr.length; i++){

        // a random array item position 
        let randomArrayPosition = Math.floor(Math.random()*arr.length);
        if (randomArrayPosition != i){
            let temp = arr[i];
            arr[i] = arr[randomArrayPosition];
            arr[randomArrayPosition] = temp;
        }
    }

    return arr;
}

console.log(shuffleArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // [9, 7, 1, 10, 5, 6, 2, 4,  3, 8]


// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
function modifyArray (arr){
    if (arr.length < 5){
        return `Item Not Found`
    }
    let newArray = [];
    for (let i = 0; i<arr.length; i++){
        if (i == 4){
            newArray.push(arr[i].toUpperCase())
        }
        newArray.push(arr[i]);
    }
    return newArray;
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
/* [
  'Avocado', 'Tomato',
  'Potato',  'Mango',
  'LEMON',   'Lemon',
  'Carrot'
]*/
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon'])); //Item Not Found



// Write a functions which checks if all items are unique in the array.
function checkIfUnique(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i +1; j<arr.length; j++){
            if (arr[i] == arr[j]){
                return "Not Unique";
            }
        }
    }
    return "Unique";
}

console.log(checkIfUnique(["Manik", "Maity", "Suman", "Swapan","Maity"])); //Not Unique
console.log(checkIfUnique([5, 6, 7, 8, 10])); //Unique




// JavaScript variable name does not support special characters or symbols except \$ or _. 
// Write a function isValidVariable which check if a variable is valid or invalid variable.
function isLetter (char){
    if ((char >="a" && char <= "z") || (char >="A" && char <= "Z")){
        return true;
    }
    return false;
}

function isNumber (num){
    if (num >= 0 && num <= 9){
        return true;
    }
    return false;
}


function isValidVariable (variable){

    for (let i = 0;  i<variable.length; i++){
        if (variable[i] != "$" && variable[i] != '_' && !isLetter(variable[i]) && !isNumber(variable[i])){
            return false;
        }
    }
    return true;
}


console.log(isValidVariable("hello$guys")); // true
console.log(isValidVariable("*f")); // false


// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

