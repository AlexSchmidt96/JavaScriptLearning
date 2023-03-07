"use strict";
// Спанчбоб готовит бургеры за 2 секунды каждый.
// Мы сделали онлайн заказ на 5 бургеров через функцию createOrder(count, callMe) и будем ждать, 
// пока нам позвонят в нашу функцию callMe по готовности всех бургеров.

// готовит бургеры за 2 сек = 1 бургер
// Есть заказ (createOrder(count, callMe)) где count = кол-во нужных бургеров , callMe = функция кал-бек которая сообщает об готовности


// function createOrder(count, callMe) {
//     let burger = 0
//     setTimeout(function cook() {
//         burger++
//         if (burger === count) {
//             callMe()
//         } else {
//             setTimeout(cook, 2000)
//         }
//     }, 2000)
// }

// function createOrder(count, callMe) {
// let burger = 0
// let timerId = setInterval(() => {
//     burger++
//     if (burger === count) {
//         clearInterval(timerId)
//         callMe()
//     }
// }, 2000)
// }


// Спанчбоб готовит бургеры 🍔 за 2 секунды каждый.
// Мы сделали онлайн заказ на 5 бургеров через функцию createOrder(count, callMe) и будем ждать, 
// пока патрик принесет нам заказ через функцию takeBurgers. С вероятностью в 50% он сожрет один бургер пока несет

// Не рабоатет функция? Проверь какие аргументы она принимает и что возвращает. Проверь как ты её вызываешь и что передаёшь. Сука!

// function createOrder(count, takeBurgers) {
//     let burger = '🍔'
//     let burgers = []
//     let possibility = Math.random()
//     setTimeout(function cook() {
//         burgers.push(burger)
//         if (burgers.length === count) {
//             if (possibility > 0.5) {
//                 burgers.pop()
//             }
//             takeBurgers(burgers)
//         } else {
//             setTimeout(cook, 1000)
//         }
//     }, 1000)
// }

// const orderedCount = 5;
// createOrder(orderedCount, (burgers) => {
//     if (burgers.length === orderedCount) {
//         console.log(`Ням ням ${orderedCount} бургеров`)
//     } else {
//         console.log('ТУТ МЕНЬШЕ!!11')
//     }
// });
