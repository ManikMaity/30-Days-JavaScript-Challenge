// singleton
const tinderUser = new Object ();

tinderUser.id = "Manik123"
tinderUser.name = "Mnaik";
tinderUser.isLogin = false



// console.log(tinderUser);

const visitedUser = {
    email : "hjt@gmail.com",
    visitDays :[5, 6, 0],
    fullName :{
        userFullName : {
            firstName : "Manik",
            lastName : "Maity",
        }
       
    }

}

// console.log(visitedUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}


// joining objects 
const obj3 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2} //spred assign
// console.log(obj3);
// console.log(obj4)

// data from database  
const userData = [

    {
        id: "5s67",
        email : "hit@jk.com"
    },
    {
        id: "ujhyu",
        email : "hsw7@jk.com"
    },
    {
        id: "sygsgy",
        email : "ui8@jk.com"
    },
    {
        id: "d6sw6",
        email : "fud@jk.com"
    }

]

let all_IDs = [];
for (let i  = 0; i <userData.length;  i++){
    all_IDs.push(userData[i].id);
}
// console.log(all_IDs); 

console.log(tinderUser);
console.log(Object.values(tinderUser)); // all values array
console.log(Object.keys(tinderUser)); // all keys array
console.log(Object.entries(tinderUser)); // converts to arrays
console.log(tinderUser.hasOwnProperty("name")); // checks property of objets

