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
- Getting last index of an element in array
- includes:To check if an item exist in an array
- check if the data type is an array 
- Converting array to string
    - using .toString();
    - using .join(element joining value);
- Slice array elements
- Adding item to an array using push
- Removing the end element using pop
- Removing an element from the beginning
- Adding an element from the beginning
- Reversing array order
- Sorting elements in array
- Array of arrays

### fill
    const Xes = Array(4).fill("X");
    console.log(Xes); // [ 'X', 'X', 'X', 'X' ]

### Concatenating array
    const h1 = [1,2,3,4,5];
    const h2 = [6,7,8,9,10];
    const h3 = h1.concat(h2);
    console.log(h3);
### indexOf(the array irtem)
    let a2 = (names.indexOf("manik"));

### .lastIndexOf(array item)
    const numbers = [1, 2, 3, 4, 5, 3, 1, 2];
    console.log(numbers.lastIndexOf(1)); // 6

### .includes(item)
    console.log(webDev.includes("html")); // true

### Array.isArray(array)
    const num1 = [9,8,7,6,5,4,3,2,1];
    let num2 = "987654321";
    console.log(Array.isArray(num1)); //true
    console.log(Array.isArray(num2)); //false
### array.toString()
    let a1 = ["manik", " is", " a", " good", " boy."];
    console.log(a1);
    let a2 = a1.toString();
    a2 = a2.replace(/,/g, "");
    console.log(a2);

### array.join()
    let a3 = a1.join();
    console.log(a3); // simple join
    console.log(a1.join("")); //join thee array without ,
    let b1 = ["hey", "whats", "up"];
    console.log(b1.join(" ")); // join the array item using space in between
    console.log(b1.join("#")); // join the array item using # in between

### .slice(sarting index, ending index)
    let c1 = ["apple", "orange", "banana", "watermalon", "guava"];
    let c2 = c1.slice() // copy all items i array
    console.log(c2);
    let  c3 = c1.slice(1); // copy all the elements from index 1
    console.log(c3);
    let c4 = c1.slice(1, 3); // copy elements from index1 to index2 (doesn't include the last index3(last) element )
    console.log(c4);
### array.push(item to add in last index)
    let d1 = ["TVS", "Honda", "Hero", "RoyelEnfield"];
    d1.push("KTM");
    console.log(d1, d1[d1.length - 1]); // output the whole array and last index item
    
### array.pop();
    d1.pop();
    console.log(d1); //out the last index
### array.shift()
    d1.shift();
    console.log(d1); // revmovee the TVS

### array.unshift(element to include in first index)
    d1.unshift("Ola EV");
    console.log(d1); // add Ola EV in first

### array.reverse()
    let e1 = [1,2,3,4,5,6,7];
    console.log(e1);
    console.log(e1.reverse()); // reversed array

### array.sort()
    d1.sort();
    console.log(d1); // sort the array items alphabetically
    d1.reverse();
    console.log(d1); // revese alphabatically
    
# array of arrays
    let f1 = [["suman", "swapan", "malati"], ["pritam", "asanta", "DJ"]];
    console.log(f1[1][f1[1].length  -1]); //DJ