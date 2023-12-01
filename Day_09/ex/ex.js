const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// ---------------------------------- LEVEL 1 -------------------------------------

// Explain the difference between forEach, map, filter, and reduce. 
// forEach -  lterate through a array and modifies a array according to the function 
// map - retuns a new array after modificaion
// filter - retuns an array with elemets which satifies the condition
// reduce - takes to values first aggregate value and a array element


// Define a callback function before you use it in forEach, map, filter or reduce.\
// callback - callback function is function which goes as agruments of other function.


// Use forEach to console.log each country in the countries array. 
countries.forEach((counrty) => {console.log(counrty)});
// Finland
// Sweden
// Denmark
// Norway
// IceLand

// Use forEach to console.log each name in the names array. 
// same

// Use forEach to console.log each number in the numbers array. --> same

// Use map to create a new array by changing each country to uppercase in the countries array. 
const upperCaseCountries = countries.map((names) => names.toUpperCase());
console.log(upperCaseCountries); // [ 'FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'ICELAND' ]


// Use map to create an array of countries length from countries array. 
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength); //[ 7, 6, 7, 6, 7 ]


// Use map to create a new array by changing each number to square in the numbers array 
const squareNumber = numbers.map((num) => num*num);
console.log(squareNumber);
// [
//     1,  4,  9, 16,  25,
//    36, 49, 64, 81, 100
// ]

// Use map to change to each name to uppercase in the names array --> done

// Use map to map the products array to its corresponding prices. 
const productPrices = products.map((product) => product.price);
console.log(productPrices); // [ 3, 6, ' ', 8, 10, '' ]

// Use filter to filter out countries containing land. 
const landCountries = countries.filter((country) => (country.toLowerCase()).includes("land"));
console.log(landCountries);

// Use filter to filter out countries having six character. 
const sixCharCountries = countries.filter((coun) => coun.length === 6);
console.log(sixCharCountries); // [ 'Sweden', 'Norway' ]


// Use filter to filter out countries containing six letters and more in the country array.
const sixOrMoreCharCountries = countries.filter((counrty) => counrty.length >= 6);
console.log(sixOrMoreCharCountries); // [ 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand' ]

//Use filter to filter out country start with 'E';
const startsWithCoutries = countries.filter((country) => country.startsWith("E"));
console.log(startsWithCoutries); // []

// Use filter to filter out only prices with values.
const priceWithValues = products.filter((prodect) => typeof prodect.price == typeof 2);
console.log(priceWithValues);
// [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 }
// ]

// Declare a function called getStringLists which takes an array as a 
// parameter and then returns an array only with string items.
function getStringLists(arr) {
    const stringArray = arr.filter((element) => typeof element == typeof "manik");
    return stringArray;
}
const array2 = ["Manik", 18, "7076404237",];
console.log(getStringLists(array2)); // [ 'Manik', '7076404237' ]


// Use reduce to sum all the numbers in the numbers array. 
const numberSum = numbers.reduce((a, b) => a + b);
console.log(numberSum); // 55

// Use reduce to concatenate all the countries and to produce this sentence: 
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries 
function massege (sum, element, index) {
    if (index == countries.length - 1){
        return `${sum} and ${element}`;
    }
    return `${sum}, ${element}`
}

const countryMassege = countries.reduce(massege);
const finalSentenace = countryMassege + " north European countries."
console.log(finalSentenace); //Finland, Sweden, Denmark, Norway and IceLand north European countries.