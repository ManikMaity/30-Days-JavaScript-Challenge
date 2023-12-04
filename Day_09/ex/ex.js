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


// Explain the difference between some and every =>

// Summary. The every() array method in JavaScript is used to check 
// if all the elements of the array satisfy the callback function condition or not. 
// The some() array method in JavaScript is used to check if at least 
// one of the elements passes the callback test or not.

// Use some to check if some names' length greater than seven in names array
const greaterThenSvenNames = names.some(n => n.length > 7);
console.log(greaterThenSvenNames); //true


// Use every to check if all the countries contain the word land
const isEveryCountryLand = countries.every(n => (n.toLowerCase()).includes("land"));
console.log(isEveryCountryLand); //false

// Explain the difference between find and findIndex.
// find -> iltirate through array and  return find the first element which satisfies the condition
// findIndex -> iltirate through array and find the first element index which satisfies the condition


// Use find to find the first country containing only six letters in the countries array
const sixLatterCountry = countries.find(country => country.length == 6);
console.log(sixLatterCountry); //Sweden

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayPosition = countries.findIndex(count => count == "Norway");
console.log(norwayPosition); // 3

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaPosition = countries.findIndex(count => count == "Russia");
console.log(russiaPosition); // -1


// ------------------------------------------- LEVEL 2 -------------------------------------------
const products2 = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  const countries2 = [
    "Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
  ]

// Find the total price of products by chaining two or more array iterators
// (eg. arr.map(callback).filter(callback).reduce(callback))
function allPrices(n){
    return n.price;
}
const totalPriceOfProduct = products2.map(allPrices).filter(n => typeof n == typeof 3).reduce((sum, n) => sum+n);
console.log(totalPriceOfProduct); //27


// Find the sum of price of products using only reduce reduce(callback))
function sumPrice (sum, item){
    if (typeof item.price != typeof 3){
        item.price = 0;
    }
    return sum + item.price;
}
const reduceTotalPrice = products2.reduce(sumPrice, 0); // 0 is the initial value
console.log(reduceTotalPrice); //27

// Declare a function called categorizeCountries which returns an array of countries 
// which have some common pattern(you find the countries array in this repository as 
//     countries.js(eg 'land', 'ia', 'island','stan')). 


function categorizeCountries (arr = [], common){
    const filteredItems = arr.filter(item => (item.toLowerCase()).includes(common.toLowerCase()));
    return filteredItems;
}
const landCountry = categorizeCountries(countries2, "land");
console.log(landCountry);
const iaCountry = categorizeCountries(countries, "ia");
console.log(iaCountry);

// Create a function which return an array of objects, which is the letter and the number 
// of times the letter use to start with a name of a country.

function letterCountry (arr = []){
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let catergirizedCountry = [];
    for (let i = 0; i < letters.length; i++){
        let char = letters[i];
        let tempObj = {};
        const countryWithLetter = arr.filter(country => (country.toLowerCase()).startsWith(char));
        tempObj[char] = countryWithLetter;
        catergirizedCountry.push(tempObj);
    }
    return catergirizedCountry;
}
console.log(letterCountry(countries2)); // --> working


//Declare a getFirstTenCountries function and return an array of ten countries. 
// Use different functional programming to work on the countries.js array
function firstTenCountries(counrty, index){
    return index < 10;
}
const getFirstTenCountries = countries2.filter(firstTenCountries);
console.log(getFirstTenCountries);

// Declare a getLastTenCountries function which
// returns the last ten countries in the countries array.
const getLastTenCountries = countries2.filter((country, index) => index > (countries2.length - 11));
console.log(getLastTenCountries);
/*[
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Åland Islands'
] */

function getLettersUsed (arr = [], letter = "a"){
    const letterUsed = arr.filter(item => (item.toLowerCase()).startsWith(letter.toLowerCase()));
    return letterUsed.length;
}
console.log(getLettersUsed (countries2, "i")); // 9