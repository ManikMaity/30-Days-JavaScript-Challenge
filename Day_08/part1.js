// ompty object 
let myObject = {};

// object with values
let userData = {
    firstName : "Manik",
    //here firstName is key and "Manik" is value
    lastName: "Maity",
    age : 20,
    skills : ["html", "CSS", "Git and GitHub", "Tailwind CSS", "Bootstrap", "JavaScript"],
    isEmployed : false
}

// Getting values from an object 
userData.age = 21; // by dot
console.log(userData.age) //21

// like  a array 
userData["firstName"] = "Suman";
console.log(userData.firstName + " "+ userData.lastName);


// function incide object and this

let userName = {
    firstName: "Manik", 
    lastName : "Maity",
    greet : function process() {
        return `Hello!, ${this.firstName} ${this.lastName}`;
    }
}

console.log(userName.greet())