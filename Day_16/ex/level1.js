const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];

// Change skills array to JSON using JSON.stringify()
const skillsText = JSON.stringify(skills);
console.log(skillsText);
// ["HTML","CSS","JS","React","Node","Python"]

// Stringify the age variable
let age = 250;
console.log(JSON.stringify(age)); //250


// Stringify the isMarried variable
// Stringify the student object
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
console.log(JSON.stringify(isMarried)); // true
const studentText = JSON.stringify(student, undefined, 3);
console.log(studentText) 
/*
{
   "firstName": "Asabeneh",
   "lastName": "Yetayehe",
   "age": 250,
   "isMarried": true,
   "skills": [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Node",
      "Python"
   ]
}
*/