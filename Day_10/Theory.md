# Set
Set is the collection of unique elements.

## Creating a set
- emply set
- set from arrays

### Empty set
```js
const companies = new Set();
console.log(companies) // Set(0) {}
```
### Set from arrays
```js
const names = ["Manik", "Swapan", "Malati", "Swapan", "Manik", "Swapan",   "Suman", ];
const namesWithoutDuplicates = new Set(names);
console.log(namesWithoutDuplicates); // Set(4) { 'Manik', 'Swapan', 'Malati', 'Suman' }
```

## Set is iterable by for of loop
```js
for (const name of namesWithoutDuplicates){
    console.log(name);
}
// Manik
// Swapan
// Malati
// Suman
```
## Set Methods
- adding element (.add(item))
- deleting element (.delete(item))
- cheacking element (.has(item))
- clear all elements (.clear())

### Adding item to Set
.add(item) is used to add new items in set
```js
const TechCompanies = new Set();
console.log(TechCompanies); // Set(0) {}
TechCompanies.add("Google");
TechCompanies.add("Amazon");
TechCompanies.add("Netflix");
TechCompanies.add("Facebook");
console.log(TechCompanies.size); //4
console.log(TechCompanies); // Set(4) { 'Google', 'Amazon', 'Netflix', 'Facebook' }
```

###  Deleting an element a set
.delete(item) is used to delete element from a set.
```js
TechCompanies.delete("Google");
console.log(TechCompanies); //Set(3) { 'Amazon', 'Netflix', 'Facebook' }
```

### Checking an element in the set
it returns a boolean value after searching the given item in set. (true or false)
```js
let ama = "Amazon"
console.log(TechCompanies.has(ama));//true
console.log(TechCompanies.has('Apple'));//false
```
### Clearing the set
clear all the items in set
```js
TechCompanies.clear();
console.log(TechCompanies); // Set(0) {}
```

## Union of sets
means mergeing to arrays and getting non-duplicate values
```js
const ourFamily  = ["Swapan", "Malati", "Manik", "Suman", "Paresh", "Sumati"];
const unsclesFamily = ["Tapan", "Babi", "Manas", "Paresh", "Sumati"];
const wholeFamilty = [...ourFamily,...unsclesFamily]; // using spred operator
const wholeFamilty2 = ourFamily.concat(unsclesFamily); // using concat
console.log(wholeFamilty);
console.log(wholeFamilty2);

const unionOfFamily = new Set(wholeFamilty);
console.log(unionOfFamily);
```

## Intersection of sets
intersection mean common between  to values
```js
const setOfOurFamily = new Set(ourFamily);
const setOfUnclesFamily = new Set (unsclesFamily);

const intersectionOfFamily = ourFamily.filter(name => setOfUnclesFamily.has(name));
console.log(intersectionOfFamily) // [ 'Paresh', 'Sumati' ]
```


## Difference of sets
```js
const DifferenceOfFamily = ourFamily.filter(name => !setOfUnclesFamily.has(name));
console.log(DifferenceOfFamily); // [ 'Swapan', 'Malati', 'Manik', 'Suman' ]
```

# Map

## Ceating map
- empty map ()
- map from array

### Empty Map
```js
const emptyMap = new Map();
console.log(emptyMap); // Map(0) {}
```

### Map from arrays 
Map takes arrays inside arrays.
```js
const personPlace = [ ["Manik", "Kokata"], ["Suman", "Kolkata"], ["Paresh", "Benapura"]];
const personPlaceMap = new Map(personPlace);
console.log(personPlaceMap);
/*
Map(3) {
  'Manik' => 'Kokata',
  'Suman' => 'Kolkata',
  'Paresh' => 'Benapura'
}
 */
```
## Map methods 
- Add element in map (.set(item1, item2))
- Getting element from Map (.get(item))
- checking map keys (.has(keyItem))


### Adding values in map - .set(item1, item2)
```js
const techProgress = new Map();
techProgress.set("HTML", "90%");
techProgress.set ("CSS", "80%");
console.log(techProgress);
/*Map(6) {
  'HTML' => '90%',
  'CSS' => '80%'
}*/
```
### Getting element from Map - (.get(item))
```js
const htmlProgress = techProgress.get('HTML');
console.log(htmlProgress); // 90%
```

### checking map keys (.has(keyItem))
Returns true or false
```js
const hasJS = techProgress.has("Javascript");
const hasReact = techProgress.has("React")
const onlyKeyCheck = techProgress.has("90%");
console.log(hasJS); //true
console.log(hasReact); //false
console.log(onlyKeyCheck); // false
```
## Eccessing values using for..of loop 
```js
for (const tech of techProgress){
    console.log(tech);
}
/*[ 'HTML', '90%' ]
[ 'CSS', '80%' ]
[ 'Git & Github', '60%' ]
[ 'Boostrap', '80%' ]
[ 'TailwindCSS', '80%' ]
[ 'Javascript', '30%' ] */
```
```js
for (const [tech, progress] of techProgress){
    console.log(tech);
}
/*HTML
CSS
Git & Github
Boostrap
TailwindCSS
Javascript */```
