// Stringify the students object with only firstName, lastName and skills properties
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

const studentNameSkills = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 3);
console.log(studentNameSkills);
/*
{
   "firstName": "Asabeneh",
   "lastName": "Yetayehe",
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