"use strict";


// function makeCounter() {
//     let count = 0;

//     function counter() {
//         return count++
//     }

//     counter.set = value => count = value
//     counter.decrease = () => count--
//     return counter


// }

// let counter = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// counter.set(10); // установить новое значение счётчика

// alert(counter()); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

// alert(counter()); // 10 (вместо 11)



// function sum(a) {
//     let currentSum = a;
//     function f(b) {
//         currentSum += b
//         return f
//     }
//     f.toString = function () {
//         return currentSum;
//     }
//     return f
// }

// alert(sum(1)(2)); // 3
// alert(sum(5)(-1)(2)); // 6
// alert(sum(6)(-1)(-2)(-3)); // 0
// alert(sum(0)(1)(2)(3)(4)(5)); // 15

// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function() {
//       alert(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
//   }

// function printNumbers(from, to) {
//     let current = from;

//     setTimeout(function go() {
//       alert(current);
//       if (current < to) {
//         setTimeout(go, 1000);
//       }
//       current++;
//     }, 1000);
//   }

// >
// > >
// > > >
// > > > >
// function sum(n) {
//     if (n === 10) {
//         return;
//     }

//     sum(n + 1);
// }

// sum(1);

// function sum(n) {
//     while (true) {
//         n += 1;

//         if (n === 10) {
//             break;
//         }
//     }
// }

// function some() {
//     console.log(1);
//     some();
// }

// some();

// function sumTo(n) {
//     let sum = 0;
//     while (n > 0) {
//         sum += n;
//         n--;
//     }
//     // for (let i = 0; i < n; i++) {
//     //     sum += n - i;
//     // }
//     return sum
// }

// function sumTo(n) {
//     if (n === 1) {
//         return 1
//     }
//     return n + sumTo(n - 1)
// }

// 0. 3 + (
// 1. 2 + (
// 2. 1
// )
//)

// Факториал//

// for цикл //
// function factorialFor(n) {
//     let mul = 1
//     for (let i = 0; i < n; i++) {
//         mul *= n - i
//     }
//     return mul
// }
// console.log(factorialFor(1)) // 1! = 1

// // while цикл //
// function factorialWhile(n) {
//     let mul = 1
//     while (n > 0) {
//         mul *= n
//         n--
//     }
//     return mul
// }
// console.log(factorialWhile(2)) // 2! = 2 * 1 = 2

// // Recursion //
// function factorialRec(n) {
//     if (n === 1) {
//         return 1
//     }
//     return n * factorialRec(n - 1)
// }

// console.log(factorialRec(3)) // 3! = 3 * 2 * 1 = 6


// Фибоначи

// function fibonachiNum(n) {
//     if (n === 1 || n === 2) {
//         return 1
//     }
//     return fibonachiNum(n - 1) + fibonachiNum(n - 2)
// }

// console.log(fibonachiNum(1))// корректно
// console.log(fibonachiNum(3))// корректно
// console.log(fibonachiNum(77)) // Долго!



// function fibonachiNumCycle(n) {
//     let first = 1
//     let second = 1
//     for (let i = 3; i <= n; i++) {
//         let third = first + second
//         first = second
//         second = third
//     }
//     return second
// }
// console.log(fibonachiNumCycle(77)) // корректно!



// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// function printList(list) {
//     while (list) {
//         console.log(list.value)
//         list = list.next
//     }
// }
// printList(list)


// cycle //
// function printList(list) {
//     let arr = []
//     while (list) {
//         arr.push(list.value)
//         list = list.next
//     }
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i])
//     }
// }
// printList(list)

// recursion
// function printList(list) {
//     if (list.next) {
//         printList(list.next)
//     }
//     console.log(list.value)
// }
// printList(list)


// function makeWorker() {
//     // { count }
//     let count = 0;
//     return function () {
//         // {  } -> outer
//         return count++; // есть доступ к внешней переменной "count"
//     };
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// alert(counter1()); // 0
// alert(counter1()); // 1
// alert(counter2()); // 0

// counter1 = undefined;




//{Counter}
// function Counter() {
//     // { count, this} --> outer
//     let count = 0;//2

//     this.up = function () {
//         // {} --> outer
//         return ++count;
//     };
//     this.down = function () {
//         // {} --> outer
//         return --count;
//     };
// }

// let counter = new Counter();

// alert(counter.up()); // 1
// alert(counter.up()); // 2
// alert(counter.down()); // 1


// let phrase = "Hello";

// if (true) {
//     let user = "John";

//     function sayHi() {
//         alert(`${phrase}, ${user}`);
//     }
// }
// sayHi();

// function sum(a) {
//     return function (b) {
//         return a + b
//     }
// }
// console.log(sum(3)(4))


// function inBetween(a, b) {
//     return function (num) {
//         return num >= a && num <= b
//     }
// }

// function inArray(array) {
//     // return function (num) {
//     //     for (let i = 0; i < array.length; i++) {
//     //         if (num === array[i]) {
//     //             return true
//     //         }
//     //     }
//     // }
//     return function (num) { // эта функция должна вернуть <true> если <num in array >, и иначе если <num is not in array>, должна вернуть <false>
//         return array.includes(num)
//     }
// }


// /* .. ваш код для inBetween и inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.filter(inBetween(2, 7))); // 3,4,5,6
// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
// arr.filter(item => item === 3)



// function byField(fieldName) {
//     return function (a, b) {
//         return a[fieldName] > b[fieldName] ? 1 : -1
//     }
// }
// function compareStrings(a, b) {
//     return a.toLowerCase().localeCompare(b.toLowerCase())
// }

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// users.sort(byField('name'));
// console.log(users.map(user => user.name))

// users.sort(byField('age'));
// console.log(users.map(user => user.age))

// function map(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         users[i] = callback(users[i]);
//     }
// }

// Сделать так чтобы код работал
// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//         let shooter = function () { // функция shooter
//             console.log(i); // должна выводить порядковый номер
//         };
//         shooters.push(shooter);
//         i++;
//     }

//     return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// function makeArmy() {
//     let shooters = [];
//     for (let i = 0; i < 10; i++) {
//         let shooter = function () { // функция shooter
//             console.log(i); // должна выводить порядковый номер
//         };
//         shooters.push(shooter);
//     }
//     return shooters;
// }
// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 0
// army[5](); // у 5-го стрелка тоже будет номер 5

