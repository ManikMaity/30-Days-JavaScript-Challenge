// JSON 

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

    const userObj = JSON.parse(userText, undefined, 4);
    console.log(userObj)
    /*{
  users: [
    {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      age: 250,
      email: 'asab@asb.com'
    },
    {
      firstName: 'Alex',
      lastName: 'James',
      age: 25,
      email: 'alex@alex.com'
    },
    {
      firstName: 'Lidiya',
      lastName: 'Tekle',
      age: 28,
      email: 'lidiya@lidiya.com'
    }
  ]
} */


// using reciver fn with json 
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

// Converting Object to JSON
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