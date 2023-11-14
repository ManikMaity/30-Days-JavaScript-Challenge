// let myName = "manik";
// let a = myName[0] ;
// console.log(myName, a);

// for (let i = 0; i < 50; i++){
//     let number1 = Math.floor(Math.random()*101);
//     console.log(number1);
// }

let fullName = "Manik Maity";
// let sepName  = fullName.split(" ");
// console.log(`Hey ${sepName[0]}, Welcome to our page`);

// let fName = fullName.substring(6);
// console.log(fName, fullName.length);

// let user_name = "                Manik Maity     ";
// console.log(user_name.trim());

// console.log(fullName.includes("Maik")? "yup" : "no");

// console.log(fullName.replace("Manik", "Suman"));
// console.log(fullName.indexOf("M"));
// console.log(fullName.lastIndexOf("M"));
// console.log(fullName.startsWith("Manik"));
// console.log(fullName+fullName[fullName.length - 1].repeat(20)+"!");

// let string = 'I love JavaScript. If you do not love JavaScript what else can you Love.'
// console.log(string.search("you"));
// console.log(string.match(/LOVE/gi));


// let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
// console.log(txt.match(/\d+/g));

// let num = "10.56";
// let fNum = parseFloat(num);
// console.log(fNum);
// let iNum = parseInt(fNum);
// console.log(iNum);


// let a = "30DaysOfJavaScript";
// console.log(a.includes("Days")); //true

// let b = "30 days of javascript"
// console.log(b.indexOf("a"));
// console.log(b.lastIndexOf("a"));

// console.log(b.search("script"));
// console.log(b.endsWith("ipt"));

// let a = parseFloat("9.8");
// console.log(parseInt(Math.round(a)), typeof parseInt(Math.round(a)));

// for (let i = 0; i< 50; i++){
//     let a = Math.floor(Math.random()*51) + 50;
//     console.log(a);
// }

// let a  = [1, 2, 3, 4, 5];

// for (let i = 0; i < a.length; i++)
// {
//     console.log(`${a[i]} 1 ${Math.pow(a[i], 2)} ${Math.pow(a[i], 3)}`);
// }

// let a = "You cannot end a sentence with because because because is a conjunction";
// let sub = a.substr(a.indexOf("because"), 7*3+2);
// console.log(sub);


// let a  = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
// let b = a.match(/love/gi);
// console.log(b, b.length);

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
// let b = sentence.replace(/%|\$|@|&|#|;/g, "");
// console.log(b);


// let a  =  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
// let b = a.match(/\d+/g);
 
// let total = 0;
// for (let i = 0; i<b.length; i++){
//     total += Number(b[i]);
// }
// console.log(total);



// let user_age = 13;
// user_age > 18
// ? console.log("Adult")
// : console.log("Minor")


// const a  = prompt("First Name: ", "Ex. - Nanik");
// alert(`Hello ${a}!`);
// let b = confirm("Are you sure want to delete this?");
// console.log(b); //true


// const time = new Date();
// console.log(`Date is ${time.getDate()}/${time.getMonth()}/${time.getFullYear()}. Time is ${time.getHours() > 12 ? (time.getHours()) - 12 : time.getHours()}:${time.getMinutes()}`);

// let date = time.getDate(), month = time.getMonth(), year = time.getFullYear(), hour = time.getHours(), minute = time.getMinutes();

// function isZero (a){
//     if (a >= 10){
//         return a;
//     }
//     else if (a < 10){
//         return "0"+a;
//     }
// }

// if (hour > 12){
//     hour -= 12;
// }


// console.log(`Date - ${isZero(date)}/${isZero(month)}/${isZero(year)}. \n Time - ${isZero(hour)} : ${isZero(minute)}`);

// let a = parseInt(prompt("Number: "));
// if (a%2 == 0){
//     alert("its a even number");
// }
// else {
//     alert ("its add number");
// }

// let time = new Date();
// let day = time.getDay();

// switch (day){
//     case 1 :
//         day = "Monday";
//         break;
//     case 2 :
//         day = "Tuesday";
//         break;
//     case 3 :
//         day = "Wednusday";
//         break;
//     case 4:
//         day = "Thusday";
//         break;
//     case 5 :
//         day = "Friday";
//         break;
//     case 6 :
//         day = "Saterday"
//         break;
//     case 7 :
//         day = "Sunday";
//         break;
// }

// console.log(day)






let my_array = ["manik", 20, true, "B.com", 16000, null, [24, 36, 24]];

// let my_name  = "manik maity";
// my_name = my_name.split(" ");
// console.log(my_name);
// let a  = prompt("Deamed items: ", "car");
// a = a.toLocaleLowerCase();
// const dream = ["flat", "car", "traveling", "wife", "business", "girlfriend", "gadets"]

// dream.indexOf(a) != -1
// ? alert(`This item in in array at ${dream.indexOf(a)} position`)
// : alert(`Item is not in array`)


// const ram = Array(5).fill("ram");
// ram.push("sam");
// ram.push("sita");
// console.log(ram);

// my_array = my_array.concat(ram);
// // console.log(my_array)
// let result = [];
// for (let i = 0;  i < (ram.length); i++ ){
//     if (ram[i].includes("s")){
//         result.push(ram[i]);
//     }
// }
// console.log(ram);
// console.log(result);


// let a = (my_array.toString()).replace(/,/gi, " ");
// console.log(a.split(" "));


// let a  = my_array.join("-");
// let aArray = a.split("-");


// aArray[aArray.length -1] = aArray[aArray.length - 1].split(",");
// // console.log(aArray);
// let b = aArray.slice(1, aArray.length -1);
// console.log(b);
// console.log(aArray);

// my_array.push("Kolkata");
// console.log(my_array);
// my_array.shift();
// console.log(my_array);
// my_array.pop();
// console.log(my_array);
// my_array.unshift("Manik");
// console.log(my_array);
let userArray = [54, 64, 0, 5, 85, 46];

function numSort(a) {
    for (let i = 0; i < a.length; i++){
        for (let j = i+1; j < a.length; j++){
            if (a[i] > a[j]){
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    return a;
}

function selectSort (arr){
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the current element is the minimum
        let minIndex = i;

        // Find the index of the minimum element in the unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                // Update minIndex if a smaller element is found
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element in the unsorted part
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}


console.log(selectSort(userArray));