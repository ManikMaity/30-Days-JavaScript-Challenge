# JSON
 - JSON stands for JavaScript Object Notation. 
 - JSON is a light weight data format for storing and transporting. 
 - JSON is mostly used when data is sent from a server to a client.
 - JSON is an easier-to-use alternative to XML.

## Example of JSON
```js
{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}
```
- JSON and js object is very similer
- we can change JSON to Object and Object to JSON.
- In object we use keys without `double quotes`. This is the major difference between an object and a JSON

## JSON to js Object
- Mostly we fetch JSON data from HTTP response or from a file,
- In JavaScript the keyword JSON has `parse()` and `stringify()` methods
## Convert
```
JSON to JS Object => parse()
Js Object to JSON => stringify()
```

```js
JSON.parse(json[, reviver])
// json or text , the data
// reviver is an optional callback function
/* JSON.parse(json, (key, value) => {

})
*/
```
```js
const userText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
```

## JSON parse example for above json
```js
const userObj = JSON.parse(userText, undefined, 4);
    console.log(userObj)
```

## Using a reviver function with JSON.parse() 
- it takes `key` and `value` as peramiter
```js
const toUpperValue = JSON.parse(userText, (key,value) =>{
    let newValue = (typeof value == "string" && key != "email" ? value.toUpperCase() : value);
    return newValue;
})
console.log(toUpperValue);
/*
{
  users: [
    {
      firstName: 'ASABENEH',
      lastName: 'YETAYEH',
      age: 250,
      email: 'asab@asb.com'
    }, ...}
*/
```

## Converting Object to JSON
- have to use `JSON.stringify()` to cinvert to json
- `replacer` is used as filter and the `space` is an indentations.
- if there nothing to filter then we use `undefined`
- `space` (ex - 4) is used to formal code more readable. If not used the json in single line


### Syntax
```js
JSON.stringify(obj, replacer, space)
// json or text , the data
// reviver is an optional callback function
```
### Example 
**Data**
```js
const users2 = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  ```
  **simple JSON.stringify**
  ```js
  const jsonUser2 = JSON.stringify(users2, undefined, 5);
console.log(jsonUser2);
/*
{
     "Alex": {
          "email": "alex@alex.com",
          "skills": [
               "HTML",
               "CSS",
               "JavaScript"
          ],
          "age": 20,
          "isLoggedIn": false,
          "points": 30
     },...}
*/
```

#### Using a Filter Array with JSON.stringify
```js
// Using a Filter Array with JSON.stringify 
const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 250,
  isLoggedIn: false,
  points: 30
}
const userText2 = JSON.stringify(user, ["firstName", "lastName", "country"], 3);
console.log(userText2);
/*
{
   "firstName": "Asabeneh",
   "lastName": "Yetayeh",
   "country": "Finland"
}
*/
```
