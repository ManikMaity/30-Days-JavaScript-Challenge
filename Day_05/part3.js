// __________________Converting array to string _______________________
let a1 = ["manik", " is", " a", " good", " boy."];
console.log(a1);
let a2 = a1.toString();
a2 = a2.replace(/,/g, "");
console.log(a2);

// Joining array elements 
let a3 = a1.join();
console.log(a3); // simple join
console.log(a1.join("")); //join thee array without ,
let b1 = ["hey", "whats", "up"];
console.log(b1.join(" ")); // join the array item using space in between
console.log(b1.join("#")); // join the array item using # in between

//Slice array elements
//Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
let c1 = ["apple", "orange", "banana", "watermalon", "guava"];
let c2 = c1.slice() // copy all items i array
console.log(c2);
let  c3 = c1.slice(1); // copy all the elements from index 1
console.log(c3);
let c4 = c1.slice(1, 3); // copy elements from index1 to index2 (doesn't include the last index3(last) element )
console.log(c4);

// Adding item to an array using push
// Push: adding item in the end.
let d1 = ["TVS", "Honda", "Hero", "RoyelEnfield"];
d1.push("KTM");
console.log(d1, d1[d1.length - 1]); // output the whole array and last index item

// Removing the end element using pop
// end endex item
d1.pop();
console.log(d1); //out the last index

// Removing an element from the beginning using shift()
d1.shift();
console.log(d1); // revmovee the TVS

//Add an element from the beginning using unshift()
d1.unshift("Ola EV");
console.log(d1); // add Ola EV in first

// Reversing array order .reverse()
let e1 = [1,2,3,4,5,6,7];
console.log(e1);
console.log(e1.reverse()); // reversed array

// Sorting elements in array 
console.log(d1);
d1.sort();
console.log(d1); // sort the array items alphabetically
d1.reverse();
console.log(d1); // revese alphabatically

// Array of arrays
let f1 = [["suman", "swapan", "malati"], ["pritam", "asanta", "DJ"]];
console.log(f1[1][f1[1].length  -1]); //DJ