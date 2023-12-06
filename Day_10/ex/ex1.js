// ------------------------------------ LEVEL 1 ---------------------------------------
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// create an empty set
const emptySet = new Set();
console.log(emptySet); // Set(0) {}

// Create a set containing 0 to 10 using loop 
const ZeroToTenNum = new Set();
for (let i = 0; i<11; i++){
    ZeroToTenNum.add(i);
}
console.log(ZeroToTenNum); // Set(11) { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// Create a set of 5 string elements from array
// Remove an element from a set 
const visitedPlaces = ["Dantan", "Angua", "Kolkata", "Polasia", "Malpara"];
const setOfVisitedPlaces = new Set(visitedPlaces);
console.log(setOfVisitedPlaces); //Set(5) { 'Dantan', 'Angua', 'Kolkata', 'Polasia', 'Malpara' }
setOfVisitedPlaces.delete("Polasia");
console.log(setOfVisitedPlaces); // Set(4) { 'Dantan', 'Angua', 'Kolkata', 'Malpara' }

// Clear a set
setOfVisitedPlaces.clear();
console.log(setOfVisitedPlaces); // Set(0) {}


// Create a map of countries and number of characters of a country
const mapOfCountries = new Map();
for (let i = 0; i<countries.length; i++){
    mapOfCountries.set(countries[i], countries[i].length);
}
console.log(mapOfCountries); // Map(3) { 'Finland' => 7, 'Sweden' => 6, 'Norway' => 6 }