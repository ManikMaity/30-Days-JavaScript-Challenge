// ___________________________Conditionals_______________________________

// _________________if__________________
let age = 19;
if (age >= 18)
{
    console.log("You are an adult");
}

//__________________if & else ___________________
age = 15;
if(age > 17)
{
    console.log(`Your'e ${age}. You are a adult`);
}
else 
{
    console.log(`Your'e ${age}. Your'e not an adult.`);
}

// __________________else if _____________________
let num = -5;
if (num > 0 )
{
    console.log(`${num} is positive number.`);
}
else if (num < 0 )
{
    console.log(`${num} is negetive number.`);
}
else 
{
    console.log(`${num} is zero.`);
}

// ____________________switch__________________________

let time = new Date();
let day = time.getDay();

switch (day) 
{
    case 0 :
        console.log("Today is Sunday");
        break;
    case 1 :
        console.log("Today is Monday");
        break;
    case 2 :
        console.log("Today is Tuesday");
        break;
    case 3 :
         console.log("Today is Wednesday");
         break;
    case 4 :
        console.log("Today is Thusday");
        break;
    case 5 :
        console.log("Today is Friday");
        break;
    case 6 :
        console.log("Today is Saterday");
        break;
    default :
        console.log("Invailid Value");
        break;        
}

// _____________________________Ternary Operators______________________________
let isRaining = true;
isRaining
? console.log("Bring Raincoat")
: console.log("Raincoat not reaquired")