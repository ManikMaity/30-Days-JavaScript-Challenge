// Destructuring arrays 
const family = ["Swapan", "Manik", "Suman", "Malati"];
let [fatherName, myName, brotherName, motherName] = family;
console.log(myName); //Manik
console.log(motherName); // Malati

const fullStak = [["HTML", "CSS", "JavaScript"], ["Node", "Express", "MongoDB"]];
let [frontEnd, backEnd] = fullStak;
const printFrontend = frontEnd.map(tech => {console.log(tech)});
/* HTML
CSS
JavaScript */

// If we want to skip a value of array for destructuring 
// We just use a comma to give variable name 
const myPlaces = ["Benapura", "Dantan", "Kolkata"];
let [nativePlace, , currentPlace] = myPlaces;
console.log(currentPlace); // Kolkata

const familyCopy = family.slice(0);
let [, myname, ,] = familyCopy;
console.log(myname); // Manik


// Using default values in destructuring
const userProviedName  = [undefined, "Manik", "Maity"];
let [prefit = "Mr.", userFirstName, userLastName] = userProviedName;
console.log(`${prefit} ${userFirstName} ${userLastName}`); // Mr. Manik Maity

// We can use spred operator (...) in destructuring to specify rest of valuse
const oneToTwenty = [];
for (let i = 1; i<=20; i++){
    oneToTwenty.push(i);
}
console.log(oneToTwenty);
/*
[
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20
]
*/
let [one, two, ...rest] = oneToTwenty;
console.log(one); //1
console.log(rest);
/*
[
   3,  4,  5,  6,  7,  8,  9,
  10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20
]
*/

// Destructuring during iteration 
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];
for (const [country, capital] of countries){
    console.log(capital);
} 
// Helsinki
// Stockholm
// Oslo

// Object destructuring

const meUser = {
  name : "Manik",
  level : 19,
  skills : [["Thousand Sword", "Dance of lightning", "Blooody Spear"], ["Roar of dragon", "Skin of steel", "Ultimate Defence"]],
  exp : 15005
}

let {name, level, skills, exp, userLocation } = meUser;
console.log(name, level, skills, exp, userLocation);
/*Manik 19 [
  [ 'Thousand Sword', 'Dance of lightning', 'Blooody Spear' ],
  [ 'Roar of dragon', 'Skin of steel', 'Ultimate Defence' ]
] 15005 undefined */

let [offenceSkill, defenceSkill] = skills;
console.log(offenceSkill);


// Renaming while destructring
const placeVisit = {
  name : "Kolkata",
  distance : "300km",
  stay : "10 Days",
  price : 10000,
  places : ["Victorial Memorial", "National Musiusm", "Alipore Zoo", "Planatorium"],
  willRevisit : true
}
let {name : placeName, distance : placeDistance, stay: placeStayTime, price: visitPrice, places : visitPlaces} = placeVisit;
// console.log(stay); // Error : not defined
console.log(placeStayTime); // 10 Days

// We can use default values if key is not found or undefined
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter = 60 } = rectangle

console.log(width, height, area, perimeter) //20 10 200 60


// Destructuring keys as a function parameters. Let us create a function 
// which takes a rectangle object and it returns a perimeter of a rectangle. 
const rectangle1  = {
  width: 25,
  height : 20
}
const recPeramiter = (recObj = {}) => {
    if (recObj.hasOwnProperty('width') && recObj.hasOwnProperty('height')){
      const {width: w, height: h} = recObj;
      return 2*(w+h);
    }
}

console.log(recPeramiter(rectangle1)); // 90

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}

const personBio = (personObj) => {
  let skill = personObj.skills;
  let languages = personObj.languages;
  return `Hello, My name is ${personObj.firstName}. I am ${personObj.age} years old, living in ${personObj.country}. \n My work as a ${personObj.job} and have knownledge about ${(skill.slice(0, (skill.length - 1))).join(", ")} and ${skill[skill.length - 1]}.`
}

console.log(personBio(person));

// Destructuring object during iteration
const todoList = [
  {
    task:'Prepare JS Test',
    time:'4/1/2020 8:30',
    completed:true
  },
  {
    task:'Give JS Test',
    time:'4/1/2020 10:00',
    completed:false
  },
  {
    task:'Assess Test Result',
    time:'4/1/2020 1:00',
    completed:false
  }
  ]

  const printAllOut = todoList.map(({task, time, completed}) => {
    console.log(task, time, completed);
  })

/* Prepare JS Test 4/1/2020 8:30 true
Give JS Test 4/1/2020 10:00 false
Assess Test Result 4/1/2020 1:00 false */


// Spread or Rest Operator 

// Spread operator to get rest of element 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [ArrayOne, ...other] = nums;
console.log(other); //[ 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// spread operator to copy array and merge arrays 
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

/*[ 0, 2, 4, 6, 8, 10 ]
[ 1, 3, 5, 7, 9 ]
[
   0, 2, 4, 6, 8,
  10, 1, 3, 5, 7,
   9
] */

// spread operator to copy object
const anime = {
  title : "Sweet Recarnation",
  description : "Good anime about recarnation of japanese chef in a fantasy world.",
  length : 12,
  views : 12000000,
}

const sweetRecarnation = {...anime};
console.log(sweetRecarnation);
/*{
  title: 'Sweet Recarnation',
  description: 'Good anime about recarnation of japanese chef in a fantasy world.',
  length: 12,
  views: 12000000
} */

// changing object value while coping 
const anime1 = {...anime, title: "Sweet Reacrnation Season 1"};
console.log(anime1.title); // Sweet Reacrnation Season 1

// Speard operator with unlimited arguments function
function addNums (...args){
  const sum = args.reduce((total, item) => total + item);
  return sum;
}
console.log(addNums(5, 6, 4, 5)); // 20