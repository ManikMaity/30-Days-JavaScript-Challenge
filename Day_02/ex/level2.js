//01
console.log(`The quote 'There is no exercise better for the heart than reaching\
 down and lifting people up.' by John Holmes teaches us to help one another.`);
 //02
 console.log(`"Love is not patronizing and charity isn't about pity, it is about love.\
  Charity and love are the same -- with charity you give love,\
   so don't just give money but reach out your hand instead."`)

//03
console.log((typeof "10") === (typeof 10));
console.log((typeof 10) == (typeof 10));

//04
console.log(parseFloat("9.8") == 10);
console.log(Math.round(parseFloat("9.8")) === 10);

//05
let j = "jargon", p = "phython";
console.log(j.includes("on") == p.includes("on"));
//06
let sen2  = "I hope this course is not full of jargon.";
console.log(sen2.includes("jargon"));

//07
console.log(Math.floor(Math.random()*101));

//08
console.log((Math.floor(Math.random()*51))+50);

//09
console.log(Math.floor(Math.random()*256));

//10
let js = "JavaScript";
let c = Math.floor(Math.random()*(js.length));
console.log(js[c]);

//11
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++)
{
    console.log(array[i], 1, Math.pow(array[i], 2), Math.pow(array[i], 3));
}

//12
let sen3 = "You cannot end a sentence with because because because is a conjunction.";
console.log(sen3.substr(sen3.indexOf("because"), 7*3+2));
