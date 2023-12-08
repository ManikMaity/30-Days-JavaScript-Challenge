
// -------------------------------------------------- LEVEL 1 --------------------------------------------

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp. 
const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(humanBodyTemp); // 37

// Destructure and assign the elements of countries array to fin, est, sw, den, nor 
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
let [fin, est, sw, den, nor] = countries;
console.log(den); // Denmark

// Destructure the rectangle object by its properties or keys. 
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
let {width, height, area, perimeter} = rectangle;
console.log(area); // 200


// ------------------------------------------- LEVEL 2 ---------------------------------------
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ];
        
// Iterate through the users array and get all the keys of the object using destructuring 
const objKeys = users.map(item => {
    return Object.keys(item);
})
console.log(objKeys);

// Find the persons who have less than two skills
const personLessThanTwoSkills = users.filter(user => user.skills.length < 2);
console.log(personLessThanTwoSkills); // [ { name: 'John', scores: 85, skills: [ 'HTML' ], age: 25 } ]


// --------------------------------------- LEVEL 3 -----------------------------------------------
var countries2 = require('../../Data/countries');
console.log(countries2);
/*{
    name: 'Grenada',
    capital: "St. George's",
    languages: [ 'English' ],
    population: 112519,
    flag: 'https://flagcdn.com/gd.svg',
    region: 'Americas',
    area: 344
  } */

// Destructure the countries object print name, capital, population and languages of all countries
const printAll = countries2.map(({name, capital, languages, population}) => {
    return `${name}, ${capital}, ${languages}, ${population}`;
});
console.log(printAll);

// A junior developer structure student name, skills and score in array of arrays 
// which may not easy to read. Destructure the following array name to name, skills 
// array to skills, scores array to scores, JavaScript score to jsScore and React 
// score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, score] = student;
let [ , ,jsScore, reactScore] = score;
console.log(name, skills, jsScore, reactScore)

// Write a function called convertArrayToObject which can convert the array to a structure object. 
/*{
        name: 'David',
        skills: ['HTM','CSS','JS','React'],
        scores: [98,85,90,95]
      }, */

      const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]

function convertArrayToObject (array){
    const resultArray = [];
    const arrayToObject = array.map(([name, skills, score]) => {
        const studentObj = {};
        studentObj.name = name;
        studentObj.skills = skills;
        studentObj.scores = score;
        resultArray.push(studentObj);
    })
    return resultArray;
}
console.log(convertArrayToObject(students));
/*[
  {
    name: 'David',
    skills: [ 'HTM', 'CSS', 'JS', 'React' ],
    scores: [ 98, 85, 90, 95 ]
  },
  {
    name: 'John',
    skills: [ 'HTM', 'CSS', 'JS', 'React' ],
    scores: [ 85, 80, 85, 80 ]
  }
] */

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// - Add Bootstrap with level 8 to the front end skill sets
// - Add Express with level 9 to the back end skill sets
// - Add SQL with level 8 to the data base skill sets
// - Add SQL without level to the data science skill sets 
const student2 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

  const newStudent = {...student2};
  const boostarp = {skill: "Bootstap", level: 8};
  const express = {skill: "Express", level: 9};
  const sql = {skill: "SQL", level: 8};
  newStudent.skills.frontEnd.push(boostarp);
  newStudent.skills.backEnd.push(express);
  newStudent.skills.dataBase.push(sql);
  newStudent.skills.dataScience.push(sql.skill);


  console.log(student2.skills);
  console.log(newStudent.skills);
  