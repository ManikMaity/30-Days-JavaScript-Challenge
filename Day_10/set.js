// set

// empty set
const companies = new Set();
console.log(companies) // Set(0) {}

// creatimg set from array
const names = ["Manik", "Swapan", "Malati", "Swapan", "Manik", "Swapan",   "Suman", ];
const namesWithoutDuplicates = new Set(names);
console.log(namesWithoutDuplicates); // Set(4) { 'Manik', 'Swapan', 'Malati', 'Suman' }

// iterate through set
for (const name of namesWithoutDuplicates){
    console.log(name);
}
// Manik
// Swapan
// Malati
// Suman


// Adding element to set
const TechCompanies = new Set();
console.log(TechCompanies); // Set(0) {}
TechCompanies.add("Google");
TechCompanies.add("Amazon");
TechCompanies.add("Netflix");
TechCompanies.add("Facebook");
console.log(TechCompanies.size); //4
console.log(TechCompanies); // Set(4) { 'Google', 'Amazon', 'Netflix', 'Facebook' }

// Deleting an element a set
TechCompanies.delete("Google");
console.log(TechCompanies); //Set(3) { 'Amazon', 'Netflix', 'Facebook' }

// Checking an element in the set
// it returns a boolean value after searching the given item in set
let ama = "Amazon"
console.log(TechCompanies.has(ama));//true
console.log(TechCompanies.has('Apple'));//false

// Clearing all values
TechCompanies.clear();
console.log(TechCompanies); // Set(0) {}


// how to use set
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ];

  const languagesWithoutDuplicetes = new Set (languages);
  let languageAndCount = [];
  for (const leng of languagesWithoutDuplicetes){
    let tempObj = {};
    let langCount = languages.filter((language) => language == leng).length;
    tempObj.Lang = leng;
    tempObj.Count = langCount;
    languageAndCount.push(tempObj);
  }
  console.log(languageAndCount.sort((lang1, lang2) => lang2.Count - lang1.Count));
  /* [
  { Lang: 'English', Count: 3 },
  { Lang: 'French', Count: 2 },
  { Lang: 'Finnish', Count: 1 },
  { Lang: 'Spanish', Count: 1 }
] */

// Other use case of set. For instance to count unique item in an array. 
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers); //unique numbers
setOfNumbers.add("Manik"); //string
setOfNumbers.add(languagesWithoutDuplicetes); // set inside set
console.log(setOfNumbers);

// Union of sets
const ourFamily  = ["Swapan", "Malati", "Manik", "Suman", "Paresh", "Sumati"];
const unsclesFamily = ["Tapan", "Babi", "Manas", "Paresh", "Sumati"];
const wholeFamilty = [...ourFamily,...unsclesFamily]; // using spred operator
const wholeFamilty2 = ourFamily.concat(unsclesFamily); // using concat
console.log(wholeFamilty);
console.log(wholeFamilty2);

const unionOfFamily = new Set(wholeFamilty);
console.log(unionOfFamily);


// Intersection of sets
const setOfOurFamily = new Set(ourFamily);
const setOfUnclesFamily = new Set (unsclesFamily);

const intersectionOfFamily = ourFamily.filter(name => setOfUnclesFamily.has(name));
console.log(intersectionOfFamily) // [ 'Paresh', 'Sumati' ]

// Difference of sets
const DifferenceOfFamily = ourFamily.filter(name => !setOfUnclesFamily.has(name));
console.log(DifferenceOfFamily); // [ 'Swapan', 'Malati', 'Manik', 'Suman' ]
