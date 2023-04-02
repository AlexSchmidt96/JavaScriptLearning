"use strict";
// Рекурсия и стек //

//1.

// Cycle //
// function sumCycle(a) {
//     let res = 0
//     for (let i = 1; i <= a; i++) {
//         res += i
//     }
//     return res
// }
// console.log(sumCycle(2))  // Можно решить


// // Recursion //

// function sumTo(n) {
//     if (n === 1) {
//         return n
//     } else { return n + sumTo(n - 1) }
// }
// console.log(sumTo(2)) // Максимальное значение превышено

// // Progression //

// function sumProg(b) {
//     return b * (b + 1) / 2
// }

// console.log(sumProg(2))

//2.

// function factorial(n) {
//     if (n === 1) {
//         return n
//     } else { return n * factorial(n - 1) }
// }

// console.log(factorial(5))


//3.

// function fib(n) {
//     if (n <= 1) {
//         return n
//     } else {
//         return fib((n - 1)) + fib((n - 2))
//     }
// }
// console.log(fib(7))


// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//       let c = a + b;
//       a = b;
//       b = c;
//     }
//     return b;
//   }

//4.

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
//     let tmp = list
//     while (tmp) {
//         console.log(tmp.value)
//         tmp = tmp.next
//     }
// }
// printList(list)



// function printList(list) {
//     console.log(list.value)
//     if (list.next) {
//         printList(list.next)
//     }

// }
// printList(list)

//5

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
//     let arr = [];
//     let tmp = list
//     while (tmp) {
//         arr.push(tmp.value)
//         tmp = tmp.next
//     }
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i])
//     }
// }

// printList(list)



// function prinReversetList(list) {

//     if (list.next) {
//         prinReversetList(list.next)
//     }
//     console.log(list.value)
// }

// prinReversetList(list)
