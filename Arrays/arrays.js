"use strict";
// --Массивы--


//1
// function camelize(str) {
//     let camelWord = ''
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== '-') {
//             camelWord += str[i]
//         } else {
//             camelWord += str[i + 1].toUpperCase()
//             i++
//         }
//     }
//     return camelWord;
// }
// console.log(camelize("background-color")) // => backgroundColor

//2
// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//     let nums = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= a && arr[i] <= b) {
//             nums.push(arr[i])
//         }
//     }
//     return nums;
// }

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1 (совпадающие значения)

// console.log(arr); // 5,3,8,1 (без изменений)

//3
// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1)
//             i--;
//         }
//     }
// }

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// console.log(arr); // [3, 1]

//4
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     }
//     if (a < b) {
//         return 1;
//     }
//     return 0
// })

// console.log(arr); // 8, 5, 2, 1, -10

//5
// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//     return arr
//         .slice()
//         .sort((a, b) => a.localeCompare(b))
// }

// let sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без изменений)


// Пример

// function Accumulator() {
//     this.value = []
//     this.add = (a) => {
//         this.value.push(a)
//     }
//     this.show = () => {
//         console.log(this.value)
//     }
// }
// let acc = new Accumulator()
// acc.show()
// acc.add(5)
// acc.show()
// acc.add(4)
// acc.show()

//6

// function Calculator() {
//     this.calculateOld = (str) => {
//         let operands = str.split(' ')
//         let firstOperand = +operands[0]
//         let operator = operands[1]
//         let secondOperand = +operands[2]
//         // console.log(operands)
//         // console.log(firstOperand)
//         // console.log(operator)
//         // console.log(secondOperand)
//         if (operator === "+") {
//             return firstOperand + secondOperand
//         }
//         if (operator === "-") {
//             return firstOperand - secondOperand
//         }
//     }
// }
// let calc = new Calculator();

// // console.log(calc.calculateOld('1 + 2'))

// function CalculatorSmart() {
//     this.calculate = (str) => {
//         let operands = str.split(' ')
//         let firstOperand = +operands[0]
//         let operator = operands[1]
//         let secondOperand = +operands[2]
//         return this.methods[operator](firstOperand, secondOperand)

//     }
//     this.addMethod = (operator, callBack,) => {
//         this.methods[operator] = callBack
//         console.log(this.methods)
//     }
//     this.methods = {
//     }
// }
// let powerCalc = new CalculatorSmart;
// powerCalc.addMethod("*", (a, b) => a * b,);
// powerCalc.addMethod("/", (a, b) => a / b,);
// powerCalc.addMethod("**", (a, b) => a ** b,);

// let result = powerCalc.calculate("3 * 3");
// console.log(result); // 8


// function Calendar() {
//     this.whichDay = (num) => {
//         return `this is ${ this.days[num] } `
//     }
//     this.learn = (number, dayOfWeek) => {
//         this.days[number] = dayOfWeek
//     }
//     this.days = {
//         // 1: 'Monday',
//         // 2: 'Tuesday',
//         // 3: 'Wednesday',
//         // 4: 'Thirsday',
//         // 5: 'Friday',
//         // 6: 'Saturday',
//         // 7: 'Sunday'
//     }
// }

// let calendar = new Calendar
// calendar.learn(4, 'Thirsday')
// calendar.learn(5, 'Friday')
// console.log(calendar.whichDay(5))


//7
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = []

// for (let i = 0; i < users.length; i++) {
//     names.push(users[i].name)
// }

// console.log(names);

//8
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// // let usersMapped = users.map((user => ({ fullName: `${user.name} ${user.surname}`, id: user.id })))

// let usersMapped = []

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     usersMapped.push({
//         fullName: `${user.name} ${user.surname}`,
//         id: user.id
//     })
// }
// console.log(usersMapped)

//9
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// // function sortByAge(users) {
// //     users.sort((a, b) => {
// //         if (a.age < b.age) {
// //             return -1;
// //         }
// //         if (a.age > b.age) {
// //             return 1;
// //         }
// //         return 0
// //     })
// // }
// function sortByAge(users) {
//     users.sort((a, b) => a.age - b.age)
// }


// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

//10
// let arr = [1, 2, 3];

// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function shuffle(arr) {
//     const sortBy = getRandomArbitrary(-1, 2);
//     console.log(sortBy)
//     arr.sort((a, b) => sortBy);
//     // arr.sort((a, b) => {
//     //     console.log('here', a, b);
//     // })
//     return arr;
// }


// console.log(shuffle(arr));
// // // arr = [3, 2, 1]

// // console.log(shuffle(arr));
// // // arr = [2, 1, 3]

// // console.log(shuffle(arr));
// // // arr = [3, 1, 2]
// // // ...


//11
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// // function getAverageAge(users) {
// //     let num = 0;
// //     for (let i = 0; i < users.length; i++) {
// //         num += users[i].age
// //     }
// //     return num / users.length
// // }
// function getAverageAge(users) {
//     return users.reduce((acc, user) => acc + user.age, 0) / users.length
// }

// // 0: (0 + 25) / 3 = 8,3
// // 1: (8,3 + 30) / 3 = 12,
// // 2: (12 + 29) / 3 = 13.9


// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

//12
// function unique(arr) {
//     let newStrings = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!newStrings.includes(arr[i])) {
//             newStrings.push(arr[i])
//         }
//     }
//     return newStrings
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log(unique(strings)); // кришна, харе, :-O




12 // TODO сделать через объекты (reduce)
// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// function unique(arr) {
//   return Object.keys(arr.reduce((obj, key) => {
//     obj[key] = key
//     return obj
//   }, {}))

// }



// console.log((unique(strings)))




//13
// let users = [
//     { id: 'john', name: "John Smith", age: 20 },
//     { id: 'ann', name: "Ann Smith", age: 24 },
//     { id: 'pete', name: "Pete Peterson", age: 31 },
// ];
// // console.log(users)

// function groupById(users) {
//     let usersById = {};
//     for (let i = 0; i < users.length; i++) {
//         console.log(usersById)
//         let user = users[i]
//         usersById[user.id] = user
//     }
//     return usersById
// }
// let usersById = groupById(users);
// console.log(usersById)
// // после вызова у нас должно получиться:

// usersById = {
//     john: { id: 'john', name: "John Smith", age: 20 },
//     ann: { id: 'ann', name: "Ann Smith", age: 24 },
//     pete: { id: 'pete', name: "Pete Peterson", age: 31 },
// }




// 13 // TODO сделать через reduce
// let users = [
//     { id: 'john', name: "John Smith", age: 20 },
//     { id: 'ann', name: "Ann Smith", age: 24 },
//     { id: 'pete', name: "Pete Peterson", age: 31 },
// ];

// let usersById = groupById(users);

// function groupById(arr) {
//     return arr.reduce((usersById, user) => {
//         usersById[user.id] = user;
//         return usersById
//     }, {})
// }
// console.log(usersById)
/*
// после вызова у нас должно получиться:
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/


// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values)); // Hare,Krishna,:-O


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//     let map = new Map();

//     for (let word of arr) {
//       let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//       map.set(sorted, word);
//     }

//     return Array.from(map.values());
//   }

//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//   alert( aclean(arr) )

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((acc, key) => (acc + key))
// }
// console.log((sumSalaries(salaries))); // 650


// let user = {
//     name: 'John',
//     age: 30
// };


// function count(user) {
//     return Object.values(user).length
// }

// console.log(count(user));


// let user = {
//     name: "John",
//     years: 30
// };

// let { name, years: age, isAdmin: isAdmin = false } = user

// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaries) {

//     let maxSalar = 0
//     let maxName = null
//     for (let [key, value] of Object.entries(salaries)) {
//         if (maxSalar < value) {
//             maxSalar = value
//             maxName = key
//         }
//     }
//     return maxSalar

// }
// console.log(topSalary(salaries))


// var uniqueInOrder = function (iterable) {
//   let arr = []
//   for (let i = 0; i < iterable.length; i++) {
//     let count = 0
//     for (let j = i; j < iterable.length; j++) {
//       if (iterable[i] === iterable[j]) {
//         arr.push(iterable[i])
//         count++
//       }
//     }
//     if (count > 1) {
//       return;
//     }
//   }
//   return arr
// }

// var uniqueInOrder = function (iterable) {
//   let arr = []
//   arr.forEach((element, index) => {
//     if (element !== arr.length && element !== arr[index + 1]) arr.push(element)
//   })
//   return arr
// }