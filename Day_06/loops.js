// Loops - 

// for loops 

let names = ["manik", "swapan", "malati", "parash", "tapan"];
let upperNames = [];

for (let i = 0; i<names.length; i++){
    upperNames.push(names[i].toUpperCase());
}
console.log(upperNames);



// while loop 


let i = 0;
let capNames = [];
while(names.length > i){
   let a = names[i].charAt(0).toUpperCase();
   let b = a.concat(names[i].slice(1));
   capNames.push(b);
   i++;
}
console.log(capNames);


// do while loops 

let j = 5
do {
    console.log("manik");
    j++
} while (j < 4);




// for of loop 
// used in arrays

for (const name of capNames){
    console.log(name.toLowerCase());
}



// break
// Break is used to interrupt a loop.
let ex3 = [];
for (let a = 0; a < names.length; a++){
    if (names[a] == "parash"){
        break;
    }
    ex3.push(names[a]);
}
console.log(ex3);




// continue
// We use the keyword continue to skip a certain iterations.

for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }
  



