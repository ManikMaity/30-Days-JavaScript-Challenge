# Regular Expressions
 - A regular expression or RegExp is a small programming language that helps to find pattern in data.
 - A RegExp can be used to check if some pattern exists in a different data types.
 - To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp patter using two forward slashes followed by a flag

## RegExp parameters 
Regex take two parameter 
1. Search pattern
2. Flags (optional)

### Pattern - 
Pattern can be a word or any kind of similarity we want to find in search. 
### Flags - 
Flags are optional perameter we use to determine what type of searching we are doing.

- **g** - use to search pattern in whole text
- **i** - i flag use to search case insensitive means in lower and uppercase
- **m** - multiline


## Creating a pattern with RegExp Constructor 

### Without flag
```js
let pattern = "love";
let regExp = new RegExp(pattern);
```

### With flag
```js
let pattern2 = "love";
let flags = "gi";
let regExp2 = new RegExp(pattern2, flags);
// console.log(regExp2); // Output -  /love/gi
```

### By writing the  pattern and flags inside RegExp constructor
```js
let regExp3 = new RegExp("manik", "gi");
// console.log(regExp3); // output - /manik/gi
```

## Without regexp constructor
```js
let regExp4 = /pop/gi
```

## RegExp object mathods 

### .test()
- Match the pattern with given string and retuns true or false
```js
const str = 'I love JavaScript';
const pattern5 = /javascript/i;
console.log(pattern5.test(str)); // true
```

### .match()
- Returns an array of all the matches.
- null if no matches found
- if not global flag returns an array containing the pattern, index, input and group.

```js
// multipe match gloabal flag 
const pattern3 = /i/gi;
const  match = str.match(pattern3);
console.log(match); // [ 'I', 'i' ]
```

```js
// single match
const match2 = str.match(/javascript/i);
console.log(match2); 
/*[
  'JavaScript',
  index: 7,
  input: 'I love JavaScript',
  groups: undefined
] */
```

```js
// no match 
console.log(str.match(/manik/)); // null
```

### .search()
- Match in the string and returns index of searching pattern. -1 if not fouund
- It dont give multiple result even in use of global flag
```js
console.log(str.search(/i/)) // 14 - case sensitive - found at 14 index
console.log(str.search(/i/i)) // 0 - case insensitive - found at index 0
console.log(str.search(/i/ig)) // 0 - same , global no use
console.log(str.search(/hello/ig)) // -1 - not found
```