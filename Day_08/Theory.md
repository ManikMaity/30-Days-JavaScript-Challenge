# Variavle scope :
    - Local Scope
    - Global Scope

## Global Scope 
A globally declared variable can be accessed every where in the same file.

```js
let user = "User1"; // gobal variable;

//scope 
function userConsole(){
    let user = "MAnik"; //Local variable, user = "Manik" is accesable inside function
    console.log(user);
}
```

## Local scope
A variable declared as local can be accessed only in certain block code.
 - Block Scope
    - Block in JavaScript is a code in between two curly brackets
 - Function Scope   

 ```js
 let myName = "Manik";
let age = 19; // global scope

// function scope 
function driving(){
    let vechicle  = "Bike"; // local function scope

    // block scope
    if (age > 17){
        let greet = `${myName} can derive` // local block scope
        console.log(greet);
    }
}

 ```       

 ## Var & Let , Const
  - Var: variable declaired with var is accessaable everywhare;
  - let & cosnt: variable declaired with let and const is assecable in scope;


# Object
Everything can be an object and objects do have properties and properties have values, so an object is a key value pair.   

## Empty Object
```js
let myObject = {};
```
## Object with values 
The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.
```js
let userData = {
    firstName : "Manik",
    //here firstName is key and "Manik" is value
    lastName: "Maity",
    age : 20,
    skills : ["html", "CSS", "Git and GitHub", "Tailwind CSS", "Bootstrap", "JavaScript"],
    isEmployed : false
}
```

## Getting values from an object
 - using . followed by key name if the key-name is a one word
 -  using square bracket and a quote ('[""]')

 ```js
 // Getting values from an object 
userData.age = 21; // by dot
console.log(userData.age) //21

// like  a array 
userData["firstName"] = "Suman";
console.log(userData.firstName + " "+ userData.lastName);
```