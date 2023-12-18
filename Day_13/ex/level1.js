// Display the countries array as a table 
import { countries } from "./countries.js";
console.log(countries);
// console.table(countries);// -- working

// Display the countries object as a table
console.table(countries[0])
/*
┌────────────┬──────────┬─────────┬───────────┬───────────────────────────────────────────────────────────────────────────────┐
│  (index)   │    0     │    1    │     2     │                                    Values                                     │
├────────────┼──────────┼─────────┼───────────┼───────────────────────────────────────────────────────────────────────────────┤
│    name    │          │         │           │                                 'Afghanistan'                                 │
│  capital   │          │         │           │                                    'Kabul'                                    │
│ languages  │ 'Pashto' │ 'Uzbek' │ 'Turkmen' │                                                                               │
│ population │          │         │           │                                   40218234                                    │
│    flag    │          │         │           │ 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg' │
│   region   │          │         │           │                                    'Asia'                                     │
│    area    │          │         │           │                                    652230                                     │
└────────────┴──────────┴─────────┴───────────┴───────────────────────────────────────────────────────────────────────────────┘
*/

// Use console.group() to group logs
const groupCountry = countries.map(counrty => {
    console.group(counrty.name);
    console.log(counrty);
    console.groupEnd();
}) // --> working fine in browser console