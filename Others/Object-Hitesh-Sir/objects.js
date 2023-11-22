// Singleton
// Object.create


// objets literals
// the object keys are tracked as strings behind the scene

const mySym = Symbol("key1");



const jsUser = {
    "full name" : "Manik Maity",
    name: "manik",
    age : 19,
    loaction : "Kolkata",
    email: "manikmaity@g.com",
    islockedin : false,
    lastLogin : ["0", '5'],
    [mySym] : "mykey1"

};

// chnage object value 
jsUser.email = "Manik@shilpi.com"

// object value lock 
// Object.freeze(jsUser)

// jsUser.email = "manik@micro.com" // this will not change because object is freze


jsUser.greet = function () {
    console.log("Hello JS User");
}
jsUser.greetTwo = function () {
    console.log(`Hello! ${this.name}!`);
}



// console.log(jsUser)
// console.log(jsUser.name);
// console.log(jsUser.email)
// // console.log(jsUser[name]); //wilnt work because name is a string 
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

console.log(jsUser.greet());
console.log(jsUser.greetTwo());



