// Map
// Ceating map

// Empty map
const emptyMap = new Map();
console.log(emptyMap); // Map(0) {}

// Map from arrays
// map takes arrays inside arrays
const personPlace = [ ["Manik", "Kokata"], ["Suman", "Kolkata"], ["Paresh", "Benapura"]];
const personPlaceMap = new Map(personPlace);
console.log(personPlaceMap)
/*
Map(3) {
  'Manik' => 'Kokata',
  'Suman' => 'Kolkata',
  'Paresh' => 'Benapura'
}
 */

// Adding values to Map 
const techProgress = new Map();
techProgress.set("HTML", "90%");
techProgress.set ("CSS", "80%");
techProgress.set("Git & Github", "60%")
techProgress.set("Boostrap", "80%");
techProgress.set("TailwindCSS", "80%");
techProgress.set("Javascript", "30%");
console.log(techProgress);
/*
Map(6) {
  'HTML' => '90%',
  'CSS' => '80%',
  'Git & Github' => '60%',
  'Boostrap' => '80%',
  'TailwindCSS' => '80%',
  'Javascript' => '30%'
}
*/

// Gatting values from Map
const htmlProgress = techProgress.get('HTML');
console.log(htmlProgress); // 90%

// Checking the keys in map
const hasJS = techProgress.has("Javascript");
const hasReact = techProgress.has("React")
const onlyKeyCheck = techProgress.has("90%");
console.log(hasJS); //true
console.log(hasReact); //false
console.log(onlyKeyCheck); // false

// Eccessing values using for..of loop 
for (const tech of techProgress){
    console.log(tech);
}
/*[ 'HTML', '90%' ]
[ 'CSS', '80%' ]
[ 'Git & Github', '60%' ]
[ 'Boostrap', '80%' ]
[ 'TailwindCSS', '80%' ]
[ 'Javascript', '30%' ] */

for (const [tech, progress] of techProgress){
    console.log(tech);
}
/*HTML
CSS
Git & Github
Boostrap
TailwindCSS
Javascript */