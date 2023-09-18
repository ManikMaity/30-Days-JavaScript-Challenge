//01
let challenge = "30Days of JavaScript";
//02
console.log(challenge);
//03
console.log(challenge.length);
//04
let x = challenge.toUpperCase();
console.log(x);
//05
let y = challenge.toLowerCase();
console.log(y);

//06
let sub1 = challenge.substr(0, 6);
console.log(sub1);
let sub2 = challenge.substring(0, 6);
console.log(sub2);

//07
console.log(challenge.substring(2, (challenge.length)));

//08
console.log(challenge.includes("Script"));

//09 //10
let sArray = challenge.split(" ");
console.log(sArray);

//11
let techCompany = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(techCompany.split(","));

//12
let phython = challenge.replace("JavaScript", "Phython");
console.log(phython);

//13
console.log(challenge.charAt(15));

//14
console.log(challenge.charCodeAt(10));

//15
console.log(challenge.indexOf('a'));
//16
console.log(challenge.lastIndexOf('a'));

//17
let sen1 = "You cannot end a sentence with because because because is a conjunction";
console.log(sen1.indexOf("because"));
//18
console.log(sen1.lastIndexOf("because"));
//19
console.log(sen1.search("because"));
//20
let withSpaces = "   " + challenge;
console.log(withSpaces);
console.log(withSpaces.trim());

//21
console.log(challenge.startsWith("30"));
//22
console.log(challenge.endsWith("Script"));

//23
console.log(challenge.match(/a/g)); // Use /a/gi to find all the A/a 's case insensitive
 //24
let a1 = "30 Days of";
let a2 = " ";
let a3 = "JavaScrpit";
console.log(a1.concat(a2, a3));

//25
console.log(challenge.repeat(2));