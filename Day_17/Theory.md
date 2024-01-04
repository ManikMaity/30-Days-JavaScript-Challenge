# HTML5 Web Storage
- Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance
- At least 5MB data can be stored and can accessed by js.
## There are two Web Storage objects:
1. `sessionStorage` - localStorage has no expiration time
2. `localStorage` - sessionStorage gets cleared when the page session ends

## sessionStorage
sessionStorage is only available within the browser tab or window session. It’s designed to store data in a single web page session.
## localStorage
local storege data will be still available when the browser is closed and reopened, and also instantly between tabs and windows.

## Methods for local storage
```js 
setItem(), getItem(), removeItem(), clear(), key()
```

## Usage of local storege
- store data temporarily
- saving products that the user places in his shopping cart
- Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests. Even images can be stored in strings using Base64 encoding.
- can be used for user authentication method
## HTML5 Web Storage Objects
- `window.localStorage` - stores data with no expiration date
- `window.sessionStorage` -  stores data for one session 
- `localStorage` - to see the local storege
- `localStorage.clear()` - clear everything from local storage
- `localStorage.setItem()` - store in local storage. Takes two peramiters `key` & `value`
- `localStorage.getItem()` - get item from local storeg. Takes `key` as peram
- `localStorage.removeItem()` - remove item from local storge. Takes item `key`
- `localStorage.key()` - to display a data stored in a localStorage.
### Note -
- In local storage all data is stored as string. 
- local storge method peram first take `key` then `value`.

## Setting item to the localStorage
- Only `string` data 
- If we are storing an array or an object, we should stringify it

### Syntax
```js
localStorage.setItem('key', 'value');
```

### Example 
```js
localStorage.setItem("myData", "Manik Maity");
let userCart = ["01256", "HTML Course", 199];
localStorage.setItem("cartData", userCart);
```
### Storing objects in local storage
- Using `JSON.stringify` convert the object to JSON and then can be stored in local storage
- After than `JSON.parse` to reconvert the JSON to Object.
```js
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
```

## Getting item from localStorage
```js
console.log(myInfo); // Manik Maity
```
```js
const userCartLocal = localStorage.getItem("cartData").split(",");
console.log(userCartLocal); // (3) ['01256', 'HTML Course', '199']
```
```js
console.log(localStorage.getItem("userInfoLocal"));
/*{
   "name": "Gautam Paira",
   "age": 32,
   "place": "Dantan",
   "isEmployed": false
} */
console.log(JSON.parse(localStorage.getItem("userInfoLocal"), undefined)); // {name: 'Gautam Paira', age: 32, place: 'Dantan', isEmployed: false}
```
## Clearing the localStorage
### Clearing one item
```js
localStorage.removeItem("myData");
console.log(localStorage.getItem("myData")); // null
```
### Clearing all local storage
```js
localStorage.clear()
```