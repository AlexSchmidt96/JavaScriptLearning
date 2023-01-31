"use strict";

// let head = {
//     glasses: 1
// };

// let table = {
//     pen: 3,
//     __proto__: head
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed
// };

// console.log(pockets.pen)
// console.log(bed.glasses)


// let hamster = {
//     stomach: [],
//     eat(food) {
//         this.stomach.push(food);
//     }
// };

// let speedy = {
//     stomach: [],
//     __proto__: hamster
// };

// let lazy = {
//     stomach: [],
//     __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// speedy.eat("coconut");
// console.log(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// lazy.eat('apple')
// console.log(lazy.stomach); // apple


// function Obj(mama) {
//     this.mama = 'Helen';
// }

// Obj.prototype = {}
// let obj = new Obj('Vika')

// let obj2 = new obj.constructor('Lola');
// alert(obj2.mama)

// function f() {
//     alert("Hello!");
// }
// Function.prototype.defer = function (ms) {
//     setTimeout(this, ms)
// }
// f.defer(1000);


// Function.prototype.defer = function (ms) {
//     return function () {
//         setTimeout(() => f.apply(this, arguments), ms)
//     }
// }
// function f(a, b) {
//     alert(a + b);
// }

// f.defer(2000)(1, 2);

// let dictionary = Object.create(null, {
//     toString: {
//         value() {
//             return Object.keys(this).join()
//         }
//     }
// });

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for (let key in dictionary) {
//     alert(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"

