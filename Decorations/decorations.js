"use strict";
// Decorations

// let animal = {
//     name: 'Barsik',
//     say: function () {
//         console.log(`Hello, I am cat "${this.name}"`)
//     }
// };

// function voicesOfAnimals(voice) {
//     voice();
// }

// let say = animal.say.bind(animal);
// // say.call(animal);
// // say.apply(animal);
// voicesOfAnimals(say);


// function work(a, b) {
//     alert(a + b); // произвольная функция или метод
// }

// function spy(func) {
//     let arrayOfArgs = []

//     function work(...args) {
//         arrayOfArgs.push(args)
//         return func.apply(this, args)
//     }
//     work.calls = arrayOfArgs
//     return work;
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9


// for (let args of work.calls) {
//     alert('call:' + args.join()); // "call:1,2", "call:4,5"
// }

// function fibonachiNum(n) {
//     for (let i = 0; i < n; i++) {
//         // do nothing
//     }

//     return n;
// }

// function decorator(func) {
//     let cache = new Map()
//     return function (n) {
//         if (cache.has(n)) {
//             return cache.get(n)
//         }
//         let res = func(n)
//         cache.set(n, res)
//         return res
//     }
// }

// fibonachiNum = decorator(fibonachiNum)

// console.log('First', fibonachiNum(10000000000))
// console.log('Second', fibonachiNum(10000000000))


// function f(x) {
//     alert(x);
// }

// function delay(f, ms) {
//     return function () {
//         setTimeout(() => f.apply(this, arguments), ms)
//     }
// }

// // создаём обёртки
// let f1000 = delay(f, 2000);
// let f1500 = delay(f, 4500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс





// function debounce(f, ms) {
//     let coolDown = false
//     return function () {
//         if (coolDown)
//             return;
//         f.apply(this, arguments)
//         coolDown = true
//         setTimeout(() => coolDown = false, ms)
//     }
// }




// let f = debounce(alert, 1000);


// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => f(4), 1100); // выполняется
// setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)


// function f(a) {
//     console.log(a)
// }

// function throttle(func, ms) {
//     let can = true;
//     let args = null;

//     return function inner() {
//         if (!can) {
//             args = arguments;
//             return;
//         }

//         func.apply(this, arguments);
//         can = false;

//         setTimeout(() => {
//             can = true;
//             if (args) {
//                 inner.apply(this, args);
//                 args = null;
//             }
//         }, ms);
//     }
// }

// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано


// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'Вася',

//     loginOk() {
//         alert(`${this.name} logged in`);
//     },

//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'John',

//     login(result) {
//         alert(this.name + (result ? ' logged in' : ' failed to log in'));
//     }
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?



// let obj = {}
// Object.defineProperty(obj, 'propertyName', {
//     value: 'John'
// })
// let descriptor = Object.getOwnPropertyDescriptor(obj, 'propertyName');
// console.log(JSON.stringify(descriptor, null, 2))