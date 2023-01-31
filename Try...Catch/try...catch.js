// "use strict";


// class FormatError extends SyntaxError {
//     constructor(message) {
//         super(message)
//         this.name = this.constructor.name
//         this.stack = this.stack
//     }
// }



// let err = new FormatError("ошибка форматирования");

// alert(err.message); // ошибка форматирования
// alert(err.name); // FormatError
// alert(err.stack); // stack

// alert(err instanceof FormatError); // true
// alert(err instanceof SyntaxError); // true

// class User {
//     static sexes = ['male', 'female'];

//     constructor(name, male) {
//         if (!User.sexes.includes(male)) {
//             throw new Error('Нет такого пола, тупой американец!');
//         }

//         this.name = name;
//         this.male = male;
//     }

//     sayName() {
//         console.log(this.name);
//     }

//     // static getSex() {
//     //     return ['male', 'female'];
//     // }
// }

// class MyError extends Error { }

// var u1 = new User('Sam', 'male');
// var u2 = new User('John', 'binary');
// var u3 = new User('Jack', 'male');

// u1.sayName();
// console.log(User.sexes);

// class Rabbit extends Object {
//     constructor(name) {
//         super()
//         this.name = name;
//     }
// }

// let rabbit = new Rabbit("Кроль");

// alert(rabbit.hasOwnProperty('name'));

// class Jug {
//     constructor(volume, model) {
//         this._volume = volume;
//         this._model = model;
//     }
// }

// class Teapot extends Jug {

// }

// class CoffeeMachine extends Jug {
//     constructor(volume, model, milkVolume) {
//         super(volume, model);
//         this._milkVolume = milkVolume;
//     }
// }

// class MiniCoffeeMachine extends CoffeeMachine {
//     #name;
//     constructor(volume, model, milkVolume, name) {
//         super(volume, model);
//         this._milkVolume = milkVolume;
//         this.#name = name;
//     }

//     get model() {
//         return this._model;
//     }
//     set model(value) {
//         if (typeof value === 'number') {
//             throw Error('Model should be string!')
//         }
//         this._model = value;
//     }
// }

// const machine = new MiniCoffeeMachine(5, 'Virgin', 1, 'My little girl');
// console.log(machine)



// class FormatError extends SyntaxError {
//     constructor(message) {
//         super(message)
//         this.name = this.constructor.name
//     }
// }



// let err = new FormatError("ошибка форматирования");

// alert(err.message); // ошибка форматирования
// alert(err.name); // FormatError
// alert(err.stack); // stack

// alert(err instanceof FormatError); // true
// alert(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)