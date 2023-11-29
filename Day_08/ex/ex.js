// --------------------------- LEVEL 2 ------------------------------ 

const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }



  // Find the person who has many skills in the users object.
  console.log(users.length)
  function getObjectUserSkillCount (obj = {name : "Manik"}){
    const users = Object.keys(obj);
    let maxSkillUser = obj[users[0]];
    for (let i = 1; i< users.length; i++){
        if ((obj[users[i]].skills.length) > maxSkillUser.skills.length){
            maxSkillUser = obj[users[i]];
        }
    }
    return maxSkillUser;
  }

  let mostSkillPerson = getObjectUserSkillCount(users);
  console.log(mostSkillPerson);


  // Count logged in users, count users having greater than equal to 50 points from the following object. 
  let loggedUserCount = 0;
  let userNames = Object.keys(users);
  for (let i = 0; i< userNames.length; i++){
    if (users[userNames[i]].isLoggedIn){
      loggedUserCount++;
    }
  }
  console.log(loggedUserCount);

// count users having greater than equal to 50 points -> same way




// Find people who are MERN stack developer from the users object
function MERN_Dev_Check(obj = {}){
  let MERN_Devs = [];
  const devArray = Object.keys(obj);
  for(let i = 0; i < devArray.length; i++){
    let devSkills = obj[devArray[i]].skills;
    if (devSkills.includes("MongoDB") && devSkills.includes("React") && devSkills.includes("Express") && devSkills.includes("Node")){
      MERN_Devs.push( obj[devArray[i]]);
    }
  }
  return MERN_Devs;
}

console.log(MERN_Dev_Check(users));


// Set your name in the users object without modifying the original users object 
let usersCopy = Object.assign(users);
usersCopy.Manik = {
  email : "manikmaity010@gmail.com",
  skills : ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Git & Github"],
  age : 20,
  isLoggedIn : true,
  points : 0
}

console.log(usersCopy);


// Get all keys or properties of users object
// Get all the values of users object

const usersAllKeys = Object.keys(users);
const usersAllValues = Object.values(users);
console.log(usersAllKeys);
console.log(usersAllValues);


// Use the countries object to print a country name, capital, populations and languages. 
var countryData = require('./countries.js')
console.log(countryData.COUNTRIES[0]);


//  -------------------------------------- LEVEL 3 ------------------------------------------


// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses 
// properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

let personAccount = {
  firstName : "Manik",
  lastName : "Maity",
  incomes : {salary: 8000, formMama:4000},
  exepenses: {recharge: 400, mobileRepair: 600},
  totalIncome  : function() {
    const allIncomes = Object.values(this.incomes);
    let sum = 0;
    for (let i = 0; i < allIncomes.length; i++){
      sum += allIncomes[i];
    }
    return sum;
  },

  totalExpences : function () {
    const allExpences  = Object.values(this.exepenses);
    let sum = 0;
    for (let i = 0; i < allExpences.length; i++){
      sum += allExpences[i];
    }
    return sum;
  },

  addIncome : function (key = "Key1", value = 200) {
    this.incomes[key] = value;
  },

  addExpences : function (key = "Key1", value = 200) {
    this.exepenses[key] = value;
  },

  accountBalance : function () {
    let income = this.totalIncome();
    let expence = this.totalExpences();

    return `Account Balance = (${income} - ${expence}) = ${income - expence}`;
  }
};

console.log(personAccount.totalIncome()) //12000
console.log(personAccount.totalExpences()) //1000

console.log(personAccount.addIncome("fromNotes", 100));
console.log(personAccount.incomes); // { salary: 8000, formMama: 4000, fromNotes: 100 }
console.log(personAccount.accountBalance()); // Account Balance = (12100 - 1000) = 11100


// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users2 = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

// Create a function called signUp which allows user to add to the collection. 
// If user exists, inform the user that he has already an account.
let user1 = {
  _id: 'manik123',
  username: 'Mnaik',
  email: 'manik@gmail.com',
  password: '656656',
  createdAt:'29/11/2023 09:03 AM',
  isLoggedIn: false
}

function signUp (obj = {}) {
  let userID = obj["_id"];
  let alreadyHaveAccount = false;
  for (let i = 0; i <users2.length; i++){
    let temp = users2[i]._id;
    if (temp == userID){
      alreadyHaveAccount = true;
    }
  }
  if (alreadyHaveAccount){
    return `Alraedy have a account`;
  }
  users2.push(obj);
  return `Account added to database`;
}

console.log(signUp(user1)); // Account added to database
console.log(users2);


// Create a function called signIn which allows user to sign in to the application

function signIn(userID = "", password=""){
  let doHaveAcount = false;
  let accountPosition = 0;
  for (let i = 0; i<users2.length; i++){
    let tempUser = users2[i]._id;
    let tempPassword = users2[i].password;
    if (tempUser == userID && password == tempPassword){
      doHaveAcount = true;
      accountPosition = i;
    }
  }

  if (doHaveAcount == true){
    users2[accountPosition].isLoggedIn = true;
    return `You are logged in. account deaials ${Object.values(users2[accountPosition])}`;
  }
  return `Accoount not found`;
}

console.log(signIn("manik123", "656656")); // You are logged in. account deaials manik123,Mnaik,manik@gmail.com,656656,29/11/2023 09:03 AM,false


// ------ Product Array --------
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
  ];


  // The products array has three elements and each of them has six properties. a. 
  //Create a function called rateProduct which rates the product b. 

  function rateProduct (userID = "user", product ="", ratting = 5){
    let isProductExist = false;
    let productPosition = 0;
    for (let i = 0; i<products.length; i++){
      if (product == products[i].name){
        isProductExist = true;
        productPosition = i;
      }
    }
    
    if (isProductExist){
      const user_rating = {}
      user_rating.userId = userID;
      user_rating.rate = ratting;
      products[productPosition].ratings.push(user_rating);
      return `ThankYou for your feedback.`;
    }
    return `Product not found`;
  }

  console.log(rateProduct("manik12", "TV", 4)); // ThankYou for your feedback.
  console.log(products[2].ratings[1]); // { userId: 'manik12', rate: 4 }


  // Create a function called averageRating which calculate the average rating of a product
  function productExist (productId = ""){
    let ifPoroductExit = false;
    let productPosition = 0;
    for (let i = 0; i < products.length; i++){
      let tempProduct = products[i];
      if (tempProduct._id == productId){
        ifPoroductExit = true;
        productPosition = i;
      }
    }

    return [ifPoroductExit, productPosition];
  }

function averageRating (productId = ""){
    let product = productExist(productId);
    if (product[0] == true){
      let productRating = products[product[1]].ratings;
      let totalRating = 0;
      for (let i = 0; i<productRating.length; i++){
        totalRating += productRating[i].rate;
      }
      console.log(totalRating);
      return totalRating/(productRating.length);
    }
}

console.log(averageRating("hedfcg")); // 4.75

// Create a function called likeProduct. 
// This function will helps to like to the product if it is not liked 
//and remove like if it was liked.

function likeProduct(productId = ""){
  let product = productExist(productId);
  if (product[0]){
    let like = products[product[1]].likes;
    if (like.length < 1){
      like.push("manik");
      return  `Added to Liked`
    }
    else{
      like.pop();
      return `Removed from liked`
    }
  }
  return `Product not found`
}
console.log(products[2].likes); // [ 'fg12cy' ]
console.log(likeProduct("hedfcg")); // Removed from liked
console.log(products[2].likes); // []
console.log(likeProduct("hedfcg")); // Added to Liked
console.log(products[2].likes); // [ 'manik' ]