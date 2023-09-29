# Arrays In JavaScript
 - Arrays can store multiple value unlike variable.
 - Each value in array have a index which starts at 0 and last one is length of array - 1
 - Usaly const is used to ceate an array

## Different wayss to create array
 - Using Array constructor
 - Using square brackets([])

 ## How to create an array with values
    const names = ["manik", "asanta", "prince", "DJ", "Pritam", "Bapi"];

## Array can have items of different data types
 - Array can contain diffeerent data types like int, bool, float, object etc.
        const diff = [
            'a',
            "manik",
            12,
            true,
            2.5,
            ["html", "css", "Javascript"]
            ];
## Creating an array using split
        let x1 = "JavaScript";
        const x1Array = x1.split("");

## Accessing array items using index
    let fruitsArray = ["apple", "banana", "oronge", "watermalon", "lime"];
    let a = fruitsArray[0];
    console.log(a);

## Modifying array element
    const ramayan = ["ram", "sita", "kisna", "hanuman", "varat", "laksman"];
    ramayan[0] = "hindu";
    console.log(ramayan);

## Methods to manipulate array
These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift. etc.
 - Array Constructor
 - Creating static values with fill
    - It fill all the spacs with one static value
 - Concatenating array using concat
    - It merges two arrays
- Getting array length
- Getting index an element in arr array

### fill
    const Xes = Array(4).fill("X");
    console.log(Xes); // [ 'X', 'X', 'X', 'X' ]

### Concatenating array
    const h1 = [1,2,3,4,5];
    const h2 = [6,7,8,9,10];
    const h3 = h1.concat(h2);
    console.log(h3);
### indexOf()
    let a2 = (names.indexOf("manik"));