'use stric'

// setTimeout(() => {
//     console.log('timeout')  // Асинхронный код  (6) 'timeout'
// }, 0);

// const p = new Promise((resolve, reject) => {
//     console.log('Promise creation');  // Синхронный код (1) 'Promise creation'
//     resolve()
// })

// const p2 = new Promise((resolve, reject) => {
//     console.log(123) // Синхронный код  (2) 123
// })

// p.then(() => {
//     console.log('Promise resolving');  // Асинхронный код  (5) 'Promise resolving'
// })

// console.log('End')   // Синхронный код (3) 'End'

// console.log('p2 =>>', p2) // Синхронный код (4) 'p2 =>>' Promise * потому что  p2 = new Promise((resolve, reject) => {})


// console.log('script start'); // Синхронный код  (1) 'script start'

// setTimeout(function () {
//     console.log('setTimeout'); //  Асинхронный код  (5) 'setTimeout'
// }, 0);

// Promise
//     .resolve()
//     .then(function () {
//         console.log('promise1'); // Асинхронный код  (3) 'promise1'
//     })
//     .then(function () {
//         console.log('promise2'); // Асинхронный код  (4) 'promise2'
//     });

// console.log('script end'); // Синхронный код  (2) 'script end'



// var a = 5;
// setTimeout(function timeout() {
//     console.log(a); //   Асинхронный код  (4) 25
//     a = 10;
// }, 0);

// var p = new Promise(function (resolve, reject) {
//     console.log(a); // Синхронный код  (1) 5
//     a = 25;
//     resolve();
// });

// p.then(function () {
//     // some code // Асинхронный код  (3)
// });

// console.log(a); // Синхронный код  (2) 25
