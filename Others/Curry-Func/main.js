// Currying 
// currying is a function which takes more than one perameters and provide them each parameter into unary function argument

// simple curry 
function schoolBag (item1){
    return function (item2){
        return function (item3){
            return `${item1}, ${item2} and ${item3} `;
        }
    }
}
console.log(schoolBag("Books")("Pen")("Notebook")); // Books, Pen and Notebook 

// shortern with arrow function 
const gymBag = item1 => item2 => item3 => `${item1}, ${item2} and ${item3}`;
console.log(gymBag("Gym Cloths and Shoes")("Towel")("Water Bottle")); // Gym Cloths and Shoes, Towel and Water Bottle


// pertially applied carrying function

// this function takes id and color and apply
const itemColor = id => color => document.querySelector(`#${id}`).style.color = color;

// itemColor("heading1")("red"); // it will apply red 

const heading = itemColor("heading1"); // this willn't do anythig because it only partialy complete

//we can complete it later
heading("blue"); // apply blue to heading id
heading("yellow") // apply blue to heading id