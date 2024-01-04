

// store in localStorage 
localStorage.setItem("myData", "Manik Maity");

// getting value from local storage
let myInfo = localStorage.getItem("myData");
console.log(myInfo); // Manik Maity

let userCart = ["01256", "HTML Course", 199];
localStorage.setItem("cartData", userCart);
const userCartLocal = localStorage.getItem("cartData").split(",");
console.log(userCartLocal); // (3) ['01256', 'HTML Course', '199']

// storing objects in local storage 
const userInfo = {
    name : "Gautam Paira",
    age : 32,
    place : "Dantan",
    isEmployed : false
}

const userInfoText = JSON.stringify(userInfo, undefined, 3);
localStorage.setItem("userInfoLocal", userInfoText);
console.log(localStorage.getItem("userInfoLocal"));
/*{
   "name": "Gautam Paira",
   "age": 32,
   "place": "Dantan",
   "isEmployed": false
} */
console.log(JSON.parse(localStorage.getItem("userInfoLocal"), undefined)); // {name: 'Gautam Paira', age: 32, place: 'Dantan', isEmployed: false}

// local storage remove

// remove one item
localStorage.removeItem("myData");
console.log(localStorage.getItem("myData")); // null


// all remove 
localStorage.clear() // Storage {length: 0}


