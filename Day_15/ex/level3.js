// Let's try to develop a program which calculate measure of central 
// tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). 
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
// You can create a class called Statistics and create all the functions which do statistical calculations 
// as method for the Statistics class. Check the output below.

// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
class statistic {
    constructor (arr = []){
        this.Array = arr;
        this.arrayOfNum = this.Array.slice(0);
    }
    count(){
        return this.arrayOfNum.length;
    }
    sum (){
        const array = this.arrayOfNum;
        const sum = array.reduce((pv, cv) => pv+cv, 0)
        return sum;
    }
    sorted (){
        const array = this.arrayOfNum;
        const minToMax = array.sort((num1, num2) => num1 - num2);
        return minToMax;
    }

    min (){
        const array = this.sorted()
        return array[0];
    }
    max (){
        const array = this.sorted();
        return array[array.length - 1];
    }
    range (){
        return this.max() - this.min();
    }
    mean (){
        const mean  = this.sum()/this.count();
        return Math.round(mean);
    }
    median (){
        const array = this.arrayOfNum;
        const length = this.count();
        let middle = (length/2)-1;
        if (length%2 != 0){
            return array[Math.ceil(middle)];
        }
        else if (length%2 == 0){
            const lValue = array[Math.floor(middle)];
            const rValue = array[middle + 1];
            console.log(lValue, rValue)
            return  (lValue+rValue)/2
        }
    }

    mode (){
        const array = this.arrayOfNum;
        const allNum = new Set(array);

        // num and count 
        const numAndcountArray = [];
        for (const num of allNum){
            const numAndCount = {};
            const count = array.filter(val => val == num).length;
            numAndCount[`mode`] = num;
            numAndCount[`count`] = count;
            numAndcountArray.push(numAndCount);
        }
        // sorting the numAndCount 
        const sortedNumAndCount = numAndcountArray.sort((arr1, arr2) => {
            if (arr1.count > arr2.count){
                return -1;
            }
            else if (arr1.count < arr2.count){
                return 1;
            }
            else{
                return 0;
            }
        })
        
        return sortedNumAndCount[0];
    }

    var (){
        const array = this.arrayOfNum;
        const mean = this.mean();

        // Calculate the Squared Differences from the Mean 
        const sqrDiffMin = array.map(num => {
            const diff = num - mean;
            return diff**2;
        })
        
        // Sum the Squared Differences 
        const sqrDiffSum = sqrDiffMin.reduce((pv, cv) => pv+cv);

        // Variance calculation 
        return sqrDiffSum/this.count();

    }
    std (){
        return Number(Math.sqrt(this.var()).toFixed(1));
    }
}

const statistics = new statistic(ages);
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2


// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties 
// and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor(fName, lName, incomes = [], expenses){
        this.firstName = fName;
        this.lastName = lName;
        this.incomes = incomes;
        this.expenses = expenses;
    }
    get totalIncome (){
        const allIncomes = this.incomes.map(income => income.income);
        const totalIncome = allIncomes.reduce((pv, cv) => pv + cv);
        return totalIncome;
    }
    get totalExpense (){
        const allExp = this.expenses.map(exp => exp.expense);
        const totalExp = allExp.reduce((pv, cv) => pv + cv);
        return totalExp;
    }

    get accountInfo (){
        const info = {
            "Name" : `${this.firstName} ${this.lastName}`,
            "Total Income" : this.totalIncome,
            "Total Expense" : this.totalExpense,
            "Balance" : this.totalIncome - this.totalExpense
        }
        console.log("Account Info =>")
       console.table(info)
       console.log("Incomes =>")
       console.table(this.incomes)
       console.log("Expenses =>")
       console.table(this.expenses)
    }
    set addIncome (income = {}) {
        this.incomes.push(income);
    }
    set addExpense (exp = {}){
        this.expenses.push(exp);
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
const person1 = new PersonAccount("Mnaik", "Maity", person1Income, person1Expences);
console.log(person1.expenses)
console.log(person1.totalIncome)
console.log(person1.totalExpense)
console.log(person1.accountInfo)
person1.addIncome = {income : 500, des : "Notes"};
person1.addExpense = {expense : 500, des : "Mouse"};
console.log(person1.accountInfo)

