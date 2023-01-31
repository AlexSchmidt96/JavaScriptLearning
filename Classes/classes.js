"use strict"

// Classes //

//  1. Task
// class Animal {
//     MAX_STOMACH;
//     constructor(name) {
//         this.__stomach = 0;
//         this.name = name;
//     }
//     get stomach() {
//         return this.__stomach;
//     }
//     set stomach(value) {
//         if (typeof value !== 'number') {
//             alert('Ты втираешь мне какую-то дичь!');
//             return;
//         }
//         this.__stomach = value;
//     }
//     say() { }
//     eat(food) {
//         this.__stomach += food;
//     }
//     isFull() {
//         if (this.__stomach >= this.MAX_STOMACH) {
//             console.log('I AM FULL, DADDY');
//         } else {
//             console.log('TIME TO EAT OR DIE');
//         }
//     }
// }

// class Hamster extends Animal {
//     MAX_STOMACH = 5;
//     say() {
//         console.log('thru thru');
//     }
// }

// class Dog extends Animal {
//     MAX_STOMACH = 25;
//     say() {
//         console.log('bark bark');
//     }
// }
// const hamster = new Hamster('Sasha');
// const dog = new Dog('Pashka');

// const hamsters = [];
// for (let i = 0; i < 100; i++) {
//     const hamster = new Hamster(`Hamster #${i}`);
//     hamsters.push(hamster);
//     hamster.eat(1)
// }

// console.log(hamsters);
// console.log(hamster, dog);
// hamster.stomach = 'govno';
// hamster.eat(10);
// dog.eat(15);
// hamster.isFull();
// dog.isFull();
// console.log(hamster, dog);


// 2. Task

// function Clock({ template }) {

//     let timer;

//     function render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     this.stop = function () {
//         clearInterval(timer);
//     };

//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };

// }

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();

// class Clock {
//     constructor(params) {
//         this.template = params.template;
//     }
//     timer;
//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output)
//     }
//     stop() {
//         clearInterval(this.timer);
//     }
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }
// let clock = new Clock({ template: 'h:m:s' });
// clock.start();
// clock.stop()

// 3. Task

// class Animal {

//     constructor(name) {
//         this.name = name;
//     }

// }

// class Rabbit extends Animal {
//     constructor(name) {
//         super(name);
//         this.created = Date.now();
//     }
// }

// let rabbit = new Rabbit("Белый кролик"); // работает!
// alert(rabbit.name);

// 4. Task
// class Rabbit extends Object {
//     constructor(name) {
//         super()
//         this.name = name
//     }
// }

// let rabbit = new Rabbit("Кроль");

// alert(rabbit.hasOwnProperty('name'));

// class Animal {

//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }

//     stop() {
//         this.speed = 0;
//         alert(`${this.name} стоит неподвижно.`);
//     }

// }

// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} прячется!`);
//     }

//     stop() {
//         super.stop(); // вызываем родительский метод stop
//         this.hide(); // и затем hide
//     }
// }

// let rabbit = new Rabbit("Белый кролик");

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!


// class Animal {
//     name = 'animal';

//     constructor() {
//         alert(this.name); // (*)
//     }
//     sayName() {
//         alert(this.name)
//     }
// }

// class Rabbit extends Animal {
//     name = 'rabbit'
//     constructor() {
//         super()
//     }

// }

// new Animal(); // animal
// let rabbit = new Rabbit()
// rabbit.sayName();

// class Animal {

//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         console.log(this.name)
//     }
// }

// class Rabbit extends Animal {
//     constructor(name) {
//         super(name)
//         this.created = Date.now();
//     }
//     getName() {
//         super.getName()
//     }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// // alert(rabbit.name);
// rabbit.getName()




