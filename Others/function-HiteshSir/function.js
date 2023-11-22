// function sayMyName (arr){
//     for (let i  = 0; i< arr.length; i++){
//         console.log(arr[i]);
//     }
// }
// sayMyName
// sayMyName("manik"); // exicute



// a and b is peramiters                                                                
function addTwoNum (a, b){

    let c = typeof 1;
    if (typeof a == c && typeof b == c){
        return (a + b);
    }
    else{
       return ("Plesse Provide Number");
    }
}
    
const result = addTwoNum(4, "2")// 4 and "2" are arguments
// console.log(result);


function logInUserMassage(userName){
    if (!userName){
        return "Please Enter User Name"
    }
    return `Hi there! ${userName}.`;
}

const massage = logInUserMassage();
// console.log(massage);



// this will add a defauilt value to username perameter. If no argumets are passed then this default value will be executed
function defaultMassege (username = "Hero"){
    return `Hi there! ${username}.`;
}
console.log(defaultMassege("Manik")); // Hi there! Manik.
console.log(defaultMassege())// Hi there! Hero.

