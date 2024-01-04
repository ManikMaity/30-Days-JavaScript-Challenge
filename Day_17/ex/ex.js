// --------------- LEVEL 1 ------------------
// Store you first name, last name, age, country, city in your browser localStorage. 

let myData = {
    "first name" : "Manik",
    "lastName" : "Maity",
    "age" : 20,
    "country" : "India",
    "city" : "Kolkata"
}

localStorage.setItem("myData", JSON.stringify(myData, undefined, 3));
console.log(localStorage.getItem("myData"));
/*{
   "first name": "Manik",
   "lastName": "Maity",
   "age": 20,
   "country": "India",
   "city": "Kolkata"
} */


// ----------------- LEVEL 2 -------------
// Create a student object. The student object will have first name, last name, age,
// skills, country, enrolled keys and values for the keys. 
// Store the student object in your browser localStorage.

class student {
    constructor (fname, lname, age, skills = [], coun, enKey, vKey){
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.skills = skills;
        this.country = coun;
        this.enrolledKey = enKey;
        this.valueKeys = vKey;
    }
}
const student1 = new student("Suman", "Maity", 16, ["football", "sports"], "India", "Suman256", "55886");
localStorage.setItem(student1.enrolledKey, JSON.stringify(student1, undefined, 3));
console.log(localStorage.getItem(student1.enrolledKey));
/*
{
   "firstName": "Suman",
   "lastName": "Maity",
   "age": 16,
   "skills": [
      "football",
      "sports"
   ],
   "country": "India",
   "enrolledKey": "Suman256",
   "valueKeys": "55886"
}

*/



// ----------------- LEVEL 3 --------------------

// Create an object called personAccount. It has firstname, lastname, incomes, 
// expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, 
// addExpense and accountBalance methods. Incomes is a set of incomes and its 
// description and expenses is also a set of expenses and its description.

class personAccount {
    constructor (fname, lname, incomes = [], expences = []){
        this.firstname = fname;
        this.lastname = lname;
        this.incomes = incomes;
        this.expences = expences;
    }
    get totalIncome (){
        const totalIncome = this.incomes.map(item => item.income).reduce((pv,cv) => pv+cv);
        return totalIncome;
    }
    get totalExpence(){
        const totalExpence = this.expences.map(item => item.expense).reduce((pv,cv) => pv+cv);
        return totalExpence;
    }

    get accountInfo(){
        // basic info 
        const basicInfo = {
            "Account Holder" : this.firstname+" "+this.lastname,
            "Account Balance" : this.totalIncome - this.totalExpence
        }
        console.table(basicInfo);
        console.table(this.incomes);
        console.table(this.expences);
    }
    set addIncome (addIncome = {}){
        this.incomes.push(addIncome);
    }
    set addExpence (addExpense = {}){
        this.expences.push(addExpense);
    }
    get accountBalance (){
        return this.totalIncome - this.totalExpence;
    }
    
}

let person1Income = [
    {income : 8000, des : "From part-time job"},
    {income : 300, des : "Medicine shop"},
    {income : 1500, des : "from dad"}
];

let person1Expences = [
    {expense : 400, des : "Mobile recharge"},
    {expense : 600, des : "food"},
    {expense : 500, des : "study expences"},
    {expense : 500, des : "shoping"},
    {expense : 300, des : "other expences"}
]
const person1 = new personAccount ("Mnaik", "Maity", person1Income, person1Expences);
person1.addIncome = {income : 300, des : "apps"};
person1.addExpence = {expense : 500, des : "netflix"}
console.log(person1)

localStorage.setItem("person1", JSON.stringify(person1, undefined, 3));

let person1FromLocalStorage = localStorage.getItem("person1");
console.log(person1FromLocalStorage);
/*{
   "firstname": "Mnaik",
   "lastname": "Maity",
   "incomes": [
      {
         "income": 8000,
         "des": "From part-time job"
      },
      {
         "income": 300,
         "des": "Medicine shop"
      },
      {
         "income": 1500,
         "des": "from dad"
      },
      {
         "income": 300,
         "des": "apps"
      }
   ],
   "expences": [
      {
         "expense": 400,
         "des": "Mobile recharge"
      },
      {
         "expense": 600,
         "des": "food"
      },
      {
         "expense": 500,
         "des": "study expences"
      },
      {
         "expense": 500,
         "des": "shoping"
      },
      {
         "expense": 300,
         "des": "other expences"
      },
      {
         "expense": 500,
         "des": "netflix"
      }
   ]
}
 */