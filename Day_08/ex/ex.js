// --------------------------- LEVEL 2 ------------------------------ 

const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }



  // Find the person who has many skills in the users object.
  console.log(users.length)
  function getObjectUserSkillCount (obj = {name : "Manik"}){
    const users = Object.keys(obj);
    let maxSkillUser = obj[users[0]];
    for (let i = 1; i< users.length; i++){
        if ((obj[users[i]].skills.length) > maxSkillUser.skills.length){
            maxSkillUser = obj[users[i]];
        }
    }
    return maxSkillUser;
  }

  let mostSkillPerson = getObjectUserSkillCount(users);
  console.log(mostSkillPerson);


  // Count logged in users, count users having greater than equal to 50 points from the following object. 
  let loggedUserCount = 0;
  let userNames = Object.keys(users);
  for (let i = 0; i< userNames.length; i++){
    if (users[userNames[i]].isLoggedIn){
      loggedUserCount++;
    }
  }
  console.log(loggedUserCount);

// count users having greater than equal to 50 points -> same way




// Find people who are MERN stack developer from the users object
function MERN_Dev_Check(obj = {}){
  let MERN_Devs = [];
  const devArray = Object.keys(obj);
  for(let i = 0; i < devArray.length; i++){
    let devSkills = obj[devArray[i]].skills;
    if (devSkills.includes("MongoDB") && devSkills.includes("React") && devSkills.includes("Express") && devSkills.includes("Node")){
      MERN_Devs.push( obj[devArray[i]]);
    }
  }
  return MERN_Devs;
}

console.log(MERN_Dev_Check(users));


// Set your name in the users object without modifying the original users object 
let usersCopy = Object.assign(users);
usersCopy.Manik = {
  email : "manikmaity010@gmail.com",
  skills : ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Git & Github"],
  age : 20,
  isLoggedIn : true,
  points : 0
}

console.log(usersCopy);


// Get all keys or properties of users object
// Get all the values of users object

const usersAllKeys = Object.keys(users);
const usersAllValues = Object.values(users);
console.log(usersAllKeys);
console.log(usersAllValues);


// Use the countries object to print a country name, capital, populations and languages. 
var countryData = require('./countries.js')
console.log(countryData.COUNTRIES[0]);