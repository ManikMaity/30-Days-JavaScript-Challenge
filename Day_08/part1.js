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

// Srtting new key for object 

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }

  console.log(person);
  person.city = "Kolkata"; //changing exiting key value
  person.isStudent = true; // adding new key and value
  person.degree = "B.com";
  person.address = {
    street : "Girish Mukherjeee Road",
    area : "Bhawanipur",
    pin : 700025
  }
console.log(person);


person.greet = function greet(){
    let withoutLastSkill = this.skills.splice(0, (this.skills.length -1));
    let lastSkill = this.skills.splice(this.skills.length -1);
    return `Hello! My name is ${this.firstName}. I know ${withoutLastSkill.join(", ")} and ${lastSkill.join("")}`;
}
console.log(person.greet());


// Object  Methods

// Object.assign
// Copy all data from an exiting object
let copyUserName = Object.assign({}, userName);
console.log(copyUserName);


// Object.keys 
// copy keys and returns as array
let personKeys = Object.keys(person);
let addressPlaceHolders = Object.keys(person.address)
console.log(personKeys);
console.log(addressPlaceHolders);


// Object.values() 
// arrays of values of object
let personValues = Object.values(person);
console.log(personValues);


// Object.entries()
// Keys and values of object
// object to array 
console.log(Object.entries(person));


//  hasOwnProperty()
// check if a specific key or property exist in an object
let isGreet = person.hasOwnProperty("address");
console.log(isGreet); //true
