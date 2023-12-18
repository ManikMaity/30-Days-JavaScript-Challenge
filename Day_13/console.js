// console.log Method
console.log(`My name is Manik Maity`);


// Substitution
console.log ("My name is %s, I am %d years old.", "MANIK", 19); 
// My name is MANIK, I am 19 years old.


// CSS 
// single style 
console.log("%cButton", "background-color:orange; padding:10px 20px; border-radius: 15px; font-size: 1rem; font-weight: bold; cursor: pointer;")

// multiple style 
console.log("My name is %cManik Maity%c. I am %c19%c years old and live in %cKolkata%c.",
"color: yellow; font-size: 1rem; font-weight: bold",
" ",
"color: green; font-size: 1rem; font-weight: bold",
" ",
"color: red; font-size: 1rem; font-weight: bold",
" "
)

// warn
console.warn("This is a warning!");

//Error 
console.error("You made a mistake");


// table
let company = {
    Name : "Samsung",
    Employee : "500000",
    Country : "Korea",
    Establish : 1894,
    IsProfitable : true
}
console.table(company);

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)

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
  console.table(users)


  // console.time()

console.time("Normal For Loop");
for (let i = 0; i < countries.length; i++){
    console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Normal For Loop"); // Normal For Loop: 3.321ms

console.time("For Of")
for (const [country, city] of countries){
    console.log(country, city);
}
console.timeEnd("For Of"); // For Of: 1.839ms

console.time("ForEach");
countries.forEach(([country, city]) => {console.log(country, city)});
console.timeEnd("ForEach"); // ForEach: 0.962ms

// console.info()
console.info("This is a info");


// console.assert()
// execute if false
console.assert(5> 6, "It is false"); // Assertion failed: It is false

// console.group(); 

console.group("Users");
console.log(users);
console.groupEnd();


// console.count() 
// it count every time console.count() called

for (let i = 0; i<5; i++){
    console.count("Count")
}
/*
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5 */

// console.clear() 
// Clear the console
console.clear();