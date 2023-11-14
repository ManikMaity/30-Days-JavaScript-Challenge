const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


//   Iterate 0 to 10 using for loop, do the same using while and do while loop
// for loop
for (let i = 0; i < 11; i++){
    console.log(i);
}
// while loop
let j = 0; 
while(j <= 10){
    console.log(j);
    j++;
}
// do while loop
let k = 0;
do{
    console.log(k);
    k++
}while(k <= 10);




// Iterate 10 to 0 using for loop, do the same using while and do while loop
// for loop
for (let i = 10; i > -1; i--){
    console.log(i);
}
// while loop
let l = 10; 
while(l >= 0){
    console.log(l);
    l--;
}
// do while loop
let m = 10;
do{
    console.log(m);
    m--;
}while(m >= 0);



// Iterate 0 to n using for loop
for (let i = 0; i <= 'n'; i++){
    console.log(i);
}

// Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

let p = 5;
for (let i = 1; i <= p; i++){
    for (let k = 0; k < i; k++){
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}


// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

let maxNum = 10;
for (let i = 0; i <= maxNum; i++){
    console.log(`${i} x ${i} = ${i**2}`);
}

// Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

console.log("i\ti^2\ti^3")
for (let i = 0; i <= maxNum; i++){
    console.log(`${i}\t${i**2}\t${i**3}`);
}


// Use for loop to iterate from 0 to 100 and print only even numbers 
for (let i =  0; i <=100; i++){
    if (i%2 == 0 ){
        console.log(i);
    }
}


// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++){
    if (i%2 == 0){
        continue;
    }
    console.log(i);
}



// Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i =  0; i <= 100; i++){
    let isPrime = true;
  if (i == 0 || i == 1){
    isPrime = false;
  }

  else if (i > 1){

    for ( let  j = 2; j < i; j++)
    {
        if (i%j == 0){
            isPrime = false;
            break;
        }
    }
  }
  
  if (isPrime){console.log(i)}
}  




// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i<= 100; i++){
    sum+=i;
}
console.log(sum); //5050


// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500. 
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let evenSum = 0, oddSum = 0;
let arr1 = [];
for (let i = 0; i <= 100; i++){
    if (i%2 == 0){
        evenSum += i;
    }
    else{
        oddSum += i;
    }
}
arr1.push(evenSum);
arr1.push(oddSum);
console.log(` The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}. `); //2550, 2500
console.log(arr1); // [2550, 2500]




// Develop a small script which generate array of 5 random numbers
const arr2 = [];
for (let i = 0; i <5; i++){
    let randomNum = Math.ceil(Math.random()*99); // 1 to 99 random
    arr2.push(randomNum);
}
console.log(arr2); //[ 27, 65, 54, 99, 50 ]


// Develop a small script which generate a six characters random id: 5j2khz

const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
console.log(chars)
let id = [];
for (let i =0; i < 5; i++){
    let rNum = Math.floor(Math.random()*(chars.length));
    id.push(chars[rNum]);
}
console.log("id: "+id.join(""));  //id: anb82