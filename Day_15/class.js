// Class
class UserName {
    // code
}

// Class Instantiation
// means creating and object from class.
// have to use "new" keyword to creat obj from class.
class Person {
    
}

const firstPerson = new Person ();
const secondPerson =  {

}
console.log(firstPerson) // Person {}
console.log(secondPerson) // {}


// Obj from class 
class FullName {
    constructor (fName, lName){
        this.firstName = fName;
        this.lastName = lName;
        this.fullName = fName + " " + lName;
    }
}
const userOneFullName = new FullName ("Mnaik", "Maity");
console.log(userOneFullName); 
/* FullName {
    firstName: 'Mnaik',
    lastName: 'Maity',
    fullName: 'Mnaik Maity'
  }*/
console.log(userOneFullName.fullName); // Mnaik Maity

const userTwoName = new FullName ("Suman", "Maity")
console.log(userTwoName.firstName); // Suman

const noValueUser = new FullName ();
console.log(noValueUser)
/*FullName {
  firstName: undefined,
  lastName: undefined,
  fullName: 'undefined undefined'
} */

// Using the class Person we created three persons object. As you can see our class did not many properties let us add more properties to the class.
const stringCapitalCase = (str = "") => {
    let strArray = str.split("");
    let firstChar = strArray.splice(0, 1);
    firstChar = firstChar.toString().toUpperCase();
    return firstChar + strArray.join("").toLowerCase();
}

class User {
    constructor (fName, lName, age, country, phone){
        this.name = fName + " "+lName;
        this.Age = age;
        this.country = stringCapitalCase(country);
        this.Phone = phone;
    }
}
let user1 = new User ("Manik", "Maity", 19,"india", 66);
console.log(user1) // User { name: 'Manik Maity', Age: 19, country: 'India', Phone: 66 }


// Default values with constructor
class newUser {
    constructor (
        name = "NewUser",
        age = 18,
        country = "India",
        number = 98999956,
        isLoggedIn = false
    )
    {
        if (isLoggedIn){
        this.UserName = name;
        this.Age = age;
        this.Country = country;
        this.Number = number;
        }
        else{
        this.isLoggedIn = isLoggedIn;
        }

    }
}

const user2 = new newUser ("Manik", 20, undefined, undefined, true);
console.log(user2); 
/*newUser {
    UserName: 'Manik',
    Age: 20,
    Country: 'India', - default value
    Number: 98999956 - default value
  } */

// Class methods
// Methods are JavaScript functions inside the class.

class userName {
    constructor (fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }
    getFullName (textCase = "normal"){
        let fName = this.firstName;
        let lName  = this.lastName;
        let fullName = fName + " "+ lName;
        switch (textCase) {
            case "normal":
                fullName = fullName;
                break;
            case "upper":
                fullName = fullName.toUpperCase();
                break;
            case "lower":
                fullName = fullName.toLowerCase();
                break;
            case "firstCap":
                fullName = `${stringCapitalCase(fName)} ${stringCapitalCase(lName)}`;
                break;
            default:
                throw "Use peramiter like: nomal => no change, upper => all capital, lower => all lowercase & firstCap => first charecter capital only"
                break;
        }
        return fullName;
    }
}
const user3 = new userName ("maNik", "MaIty");
console.log(user3.firstName); // Manik
console.log(user3.getFullName("firstCap")) // Manik Maity
console.log(user3.getFullName("upper")) // MANIK MAITY

// Properties with initial value 
class newPerson {
    constructor (fName, lName){
        this.firstName = fName;
        this.lastName = lName;
        this.score = 0; // with initional value
    }
}
const person4 = new newPerson("Swapan", "Maity");
console.log(person4.score) // 0
