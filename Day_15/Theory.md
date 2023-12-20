# Classes
- JavaScript is an object oriented programming language. Everything in JavScript is an object, with its properties and methods.
- A Class is like an object constructor, or a "blueprint" for creating objects.
-  Creating an object from a class is called **class instantiation**.

## Class Syntax
- the name of a class in CamelCase and block code(two curly brackets)
```js
// syntax
class ClassName {
    //  code goes here
}
```
## Example 
### Class without code
```js
class UserName {
    // code
}
```

## Class Instantiation
- means creating and object from class.
- we can create as many obj as required from an class
- have to use "new" keyword to creat obj from class.

## Class Constructor
- The constructor is a builtin function which allows as to create a blueprint for our object.
- it takes argument for creating obj as peramiter do required task;
- inside constractor we use this keyword to assign value in object
```js
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
  ```

## Default values with constructor
- we can use default value in constractor peramiter just like function
```js
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
  ```
## Class methods
- Methods are JavaScript functions inside the class.
- anonomus func inside class but after constructor
```js
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
```

## Properties with initial value
```js
class newPerson {
    constructor (fName, lName){
        this.firstName = fName;
        this.lastName = lName;
        this.score = 0; // with initional value
    }
}
const person4 = new newPerson("Swapan", "Maity");
console.log(person4.score) // 0

```