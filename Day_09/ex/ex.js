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

  var countries2 = require('./countries2.js');

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



// ------------------------------------------- LEVEL 3 ------------------------------------------------ 
var countries3 = require('./countries.js');
/* 
{
    "name": "Afghanistan",
    "capital": "Kabul",
    "languages": [
            "Pashto",
            "Uzbek",
            "Turkmen"
    ],
    "population": 40218234,
    "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    "region": "Asia",
    "area": 652230
} ....
*/

// Use the countries information, in the data folder. 
// Sort countries by name, by capital, by population 
const countries4 = countries3.slice(0);
function capitalNameSorting (country1 = {}, country2 ={}){
	if (country1.hasOwnProperty("capital") && country2.hasOwnProperty("capital")){
		let cap1 = country1.capital.toLowerCase().charAt(0);
		let cap2 = country2.capital.toLowerCase().charAt(0);
		if (cap1 > cap2){
			return 1;
		}
		else if (cap1 < cap2){
			return -1;
		}
		else {
			return 0
		}
	}
	else if (country1.hasOwnProperty("capital")){
		return -1;
	}
	else if (country2.hasOwnProperty("capital")){
		return 1;
	}
	else {
		return 0;
	}
}
const sortedByCapitalName = countries4.sort(capitalNameSorting)
console.log("Sorted coutries bases on capitals")
// console.log(sortedByCapitalName); // --> Working

// Sorting by population 
const countries5 = countries3.slice(0);

function populationSort (country1, country2){
	if (country1.hasOwnProperty("population") && country2.hasOwnProperty("population")){
		if (country1.population > country2.population){
			return 1;
		}
		else if (country1.population < country2.population){
			return -1;
		}
		else {
			return 0;
		}
	}
	else if (country1.hasOwnProperty("population")){
		return -1;
	}
	else if (countries2.hasOwnProperty("population")){
		return 1
	}
	else{
		return 0;
	}
}

// const sortedByPopulation = countries5.sort(populationSort)
// console.log(sortedByPopulation);// --> working

/* [
	{
	  name: 'Bouvet Island',
	  languages: [ 'Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk' ],
	  population: 0,
	  flag: 'https://flagcdn.com/bv.svg',
	  region: 'Antarctic Ocean',
	  area: 49
	},
	{
	  name: 'Heard Island and McDonald Islands',
	  languages: [ 'English' ],
	  population: 0,
	  flag: 'https://flagcdn.com/hm.svg',
	  region: 'Antarctic',
	  area: 412
	},.....] */




// *** Find the 10 most spoken languages
const countries6 = countries3.slice(0);

function mostSpokenLanguage (countriesArr, numberOfLang){
	let mostSpokenLeng = [];
	
	// filter out not having language country
	const filteredLanguageCountry = countriesArr.filter(country => country.hasOwnProperty("languages"));
	
	// getting all languages 
	let allLanguages = [];
	function pushLang (country){
		let lang = country.languages;
		allLanguages.push(lang);
	}
	const pushLanguage = filteredLanguageCountry.map(pushLang)
	allLanguages = allLanguages.reduce((sum, lang) => sum.concat(lang));
	

	//removing duplicates
	const indiLanguage = allLanguages.filter((item, index) => allLanguages.indexOf(item) === index);


	// language counts and array
	for (let i = 0; i < indiLanguage.length; i++){
		let langAndCount = {};
		let lang = indiLanguage[i];
		const langCount = allLanguages.filter(item => item == lang).length;
		langAndCount.country = lang;
		langAndCount.count = langCount;
		mostSpokenLeng.push(langAndCount);
	}

	 // sorting array bassed on language count 
	 const sortedLangAndCountArray = mostSpokenLeng.sort((a, b) => b.count - a.count);

	 
	 return sortedLangAndCountArray.slice(0, numberOfLang);
}
// console.log(mostSpokenLanguage(countries6, 3)) // --> working 
/*[
  { country: 'English', count: 91 },
  { country: 'French', count: 45 },
  { country: 'Arabic', count: 25 }
] */


// *** Use countries_data.js file create a function which create the ten most populated countries 

// copy all countries data to not mutate 
const countries7 = countries3.slice(0);


function getTopPopulationCountry (countriesDataArray = [], numOfCountries = 0){
	
	//filter out not having population key
	const countriesWithPopulation = countriesDataArray.filter(country => country.hasOwnProperty("population"));

	//sort countries based on population
	const sortedCountriesByPopulation = countriesWithPopulation.sort((country1, country2) =>{
		let population1 = country1.population;
		let population2 = country2.population;
		if (population1 > population2){
			return -1;
		}
		else if (population1 < population2){
			return 1;
		}
		else{
			return 0;
		}
	})

	// output array
	let outputCountriesArray = [];
	for (let i = 0; i < numOfCountries; i++){
		let tempCountryObj = {};
		tempCountryObj.counrty = sortedCountriesByPopulation[i].name;
		tempCountryObj.population = sortedCountriesByPopulation[i].population;
		outputCountriesArray.push(tempCountryObj);
	}

	return outputCountriesArray;
}
// console.log(getTopPopulationCountry(countries7, 4)) // --> working
/*[
  { counrty: 'China', population: 1402112000 },
  { counrty: 'India', population: 1380004385 },
  { counrty: 'United States of America', population: 329484123 },
  { counrty: 'Indonesia', population: 273523621 }
] */


// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
// and measure of variability(range, variance, standard deviation). In addition to those measures find 
// the min, max, count, percentile, and frequency distribution of the sample. You can create an object 
// called statistics and create all the functions which do statistical calculations as method for the statistics object. 
// Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = {};
statistics.count = () => ages.length;
statistics.Sum = () => ages.reduce((sum, age) => sum+age, 0);
statistics.Min = () => Math.min(...ages);
statistics.Max = () => Math.max(...ages);
statistics.Range = () => statistics.Max() - statistics.Min();
statistics.Mean = () => Math.round(statistics.Sum()/ statistics.count());
statistics.Median = () => {
	const ages1 = ages.slice(0);
	ages1.sort((a, b) => a-b);
	if (ages1.length%2 == 0){
		let index = (ages1.length/2)
		return ((ages1[index]) + (ages1[index -1]))/2;
	}
	else{
		let index = Math.floor(ages1.length/2);
		return ages1[index];
	}
}


statistics.Verience = () => {
	const mean = (statistics.Sum() / ages.length).toFixed(2);
	const squaredDiffs = ages.map(age => (age - mean) ** 2);
	const varience = squaredDiffs.reduce((sum, age) => sum + age, 0) / (ages.length - 1);
	return varience;
}

statistics.Mode = () => {
	// removing duplicates
	const withoutDuplicate = ages.filter((age, index) => ages.indexOf(age) == index);

	let agesAndCount = [];
	for (let i = 0; i < withoutDuplicate.length; i++){
		let tempObj = {};
		const count = ages.filter(age => age == withoutDuplicate[i]).length;
		tempObj.mode = withoutDuplicate[i];
		tempObj.count = count;
		agesAndCount.push(tempObj);
	}
	const agesAndCountSorted = agesAndCount.sort((item1, item2) => item2.count - item1.count)
	return agesAndCountSorted[0];
}

console.log(statistics.Verience())
console.log(statistics.Median());
console.log(statistics.Mean())
console.log(statistics.Range());
console.log(statistics.Min())
console.log(statistics.count());
console.log(statistics.Mode())
