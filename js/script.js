// 1
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
}
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for (const key of keys){
    console.log(key, user[key])
}

// 2
const countProps = function(obj){
    const keys = Object.keys(obj)
    return keys.length
}
console.log(countProps({ name: 'Mango', age: 2 }));


// 3
const findBestEmployee = function (employees){
    let maxTasks = 0;
    let bestEmployee;

    for (const employee in employees) {
        const tasks = employees[employee];
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = employee;
        }
    }
    return bestEmployee;
}

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
);

// 4
const countTotalSalary = function (employees) {
    const values  = Object.values(employees);

    let total = 0;

    for (const value of values) {
        total += value;
    }
    return total;
}

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    })
)


// 5
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
        const values = [];
        let item;

        for (let item of arr) {
            let value = item[prop];

            if (value !== undefined) {
                values.push(value);
            }
        }
        return values;
    }

console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'quantity'));
console.log(getAllPropValues(products, 'category'));


// 6
const products6 = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];
const calculateTotalPrice = function (allProducts6, productName){
    let total = 0;

    for (const product of allProducts6){
        let name = product.name;

        if (productName === name) {
            total = product.price * product.quantity;
        }
    }
    return total;
}
console.log(calculateTotalPrice(products6, 'Радар'));


// 7 ??????????

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
}

const account = {
    balance: 0,
    transactions: [],

    createTransaction(amount, type) {

    },

    deposit(amount){

    },

    withdraw(amount){

    },

    getBalance() {

    },

    getTransactionDetails(id) {

    },

    getTransactionTotal(type) {

    },
}

const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));
numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));