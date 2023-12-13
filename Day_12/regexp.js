// Regular Expressions

// Creating a pattern with RegExp Constructor 

//Without flag
let pattern = "love";
let regExp = new RegExp(pattern);

// With flag
let pattern2 = "love";
let flags = "gi";
let regExp2 = new RegExp(pattern2, flags);
// console.log(regExp2); // Output -  /love/gi

// By writing the  pattern and flags inside RegExp constructor
let regExp3 = new RegExp("manik", "gi");
// console.log(regExp3); // output - /manik/gi


// Without regexp constructor
let regExp4 = /pop/gi

let regExp5 = new RegExp ("pop", "gi");

// Both are same
console.log(regExp4, regExp5); // output  - /pop/gi /pop/gi


// RegExp object mathods 


// .test() -> match the pattern with given string and retuns true or false
const str = 'I love JavaScript';
const pattern5 = /javascript/i;
console.log(pattern5.test(str)); // true

// .match() --> returns an array of all the matches.

// multipe match gloabal flag 
const pattern3 = /i/gi;
const  match = str.match(pattern3);
console.log(match); // [ 'I', 'i' ]

// single match
const match2 = str.match(/javascript/i);
console.log(match2); 
/*[
  'JavaScript',
  index: 7,
  input: 'I love JavaScript',
  groups: undefined
] */

// no match 
console.log(str.match(/manik/)); // null

// .search() --> match in the string and returns index of searching pattern. -1 if not fouund
console.log(str.search(/i/)) // 14 - case sensitive - found at 14 index
console.log(str.search(/i/i)) // 0 - case insensitive - found at index 0
console.log(str.search(/i/ig)) // 0 - same , global no use
console.log(str.search(/hello/ig)) // -1 - not found

// Replacing a substring 
// Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
// .replace()

const sentance = `Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language`

const replacedSentance = sentance.replace(/python|Python/g, "JavaScript");
console.log(replacedSentance);
// JavaScript is the most beautiful language that a human begin has ever created.
// I recommend JavaScript for a first programming language

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

console.log(txt.replace(/%/g, ""));
// I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.
// I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.

//Regexp charecters -
// Square Bracket []
// square bracket to include lower and upper case
const txt2 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the \
 doctor way has been replaced by a banana a day keeps the doctor far far away. '
 const replacedTxt2 = txt2.replace(/[Aa]pple/g, "Mango"); // it will replace substring with A or a;
 console.log(replacedTxt2);

let pattern7 = /[Aa]pple|[Bb]anana/g;
console.log(txt2.match(pattern7)); // [ 'Apple', 'banana', 'apple', 'banana' ]


// Escape character(\) 
const txt3 = 'This regular expression example was made in January 12,  2020.'
let pattern6 = /\d/g; // d is spexial charecter for digit
console.log(txt3.match(pattern6)); // [ '1', '2', '2', '0', '2', '0' ]

// One or more times(+) 
console.log(txt3.match(/\d+/g)); // [ '12', '2020' ]

// Period(.)
const txt4 = 'Apple and banana are fruits';
console.log(txt4.match(/[a]./g)); // [ 'an', 'an', 'an', 'a ', 'ar' ]
console.log(txt4.match(/[a].+/g)); // [ 'and banana are fruits' ]

// Zero or one times(?) 
// ? means optional
const txt5 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
console.log(txt5.match(/E-?mail/gi));

// Quantifier in RegExp 
const txt6 = 'This regular expression example was made in December 6,  2019.';
let pattern8 = /\b[a-zA-Z]{4}\b/g;
let pattern9 = /\d{1,4}/g;
console.log(txt6.match(pattern8)); // [ 'This', 'made' ]
console.log(txt6.match(pattern9)); // [ '6', '2019' ]

