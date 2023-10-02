// Declare an empty array; 
const a1 = Array ();
console.log(a1, typeof a1);



// Declare an array with more than 5 number of elements
let a2 = [1, 2, 3, 4, 5, 6];
console.log(a2);



// Find the length of your array 
console.log(a2.length);



// Get the first item, the middle item and the last item of the array 
console.log(a2[0], a2[a2.length-1], a2[a2.length/2]);




/* Declare an array called mixedDataTypes, put different data types in the array and 
find the length of the array. The array size should be greater than 5*/

const mixedDataTypes = [33, "manik", 'A', true, [5, 6, 7], undefined, 1.53];
console.log(mixedDataTypes.length);




/* Declare an array variable name itCompanies and assign 
initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon */

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "Oracle", "Amazon"];





/* Print the array using console.log()

Print the number of companies in the array

Print the first company, middle and last co
mpany

Print out each company

Change each company name to uppercase one by one and print them out

Print the array like as a sentence: Facebook, 
Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. */

console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0], itCompanies[itCompanies.length/2], itCompanies[itCompanies.length - 1]);

for (let i = 0; i < itCompanies.length; i++)
{
    console.log(itCompanies[i]);
}

for (let i = 0; i < itCompanies.length; i++)
{
   let a3 = itCompanies[i].toUpperCase();
   console.log(a3);
}

let a4 = itCompanies.slice(0, itCompanies.length-1);
console.log(`${a4.join(", ")} and ${itCompanies[itCompanies.length-1]} are big IT companies.`);





// Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found 

let a5 = itCompanies.indexOf("Amazon");
(a5 == -1)
? console.log("Not Found")
: console.log(itCompanies[a5])

// Filter out companies which have more than one 'o' without the filter method 
let a6 = [];
for (let k = 0; k < itCompanies.length; k++)
{
    if (itCompanies[k].includes("o"))
    {
        a6.push(itCompanies[k]);
    }
}
console.log(a6);



/* Sort the array using sort() method
Reverse the array using reverse() method
Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle IT company or companies from the array
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies */
console.log(itCompanies);

let a7 = itCompanies.sort();
console.log(a7);

let a8 = itCompanies.reverse();
console.log(a8);


console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice((itCompanies.length - 3), (itCompanies.length)));

console.log(itCompanies);

itCompanies.shift();
console.log(itCompanies);


itCompanies.splice(itCompanies.length/2, 1);
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);