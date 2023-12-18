// Check the speed difference among the following loops: while, for, for of, forEach 
const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  
// While 
console.time("While")
let x = 0;
while (x < users.length)
{
  console.log(users[x].name);
  x++;
}
console.timeEnd("While"); // While: 4.669ms


// for
console.time("For loop");
for (let i = 0; i < users.length; i++){
  console.log(users[i].name);
}
console.timeEnd("For loop"); // For loop: 0.275ms


// for of 
console.time("For of loop");
for (const {name, ...other} of users){
  console.log(name);
}
console.timeEnd("For of loop"); // For of loop: 0.422ms


// forEach
console.time("forEach loop");
const userNames  = users.forEach(({name, ...other}) => {console.log(name)});
console.timeEnd("forEach loop"); // forEach loop: 0.261ms