"use strict";
// Спанчбоб готовит бургеры за 2 секунды каждый.
// Мы сделали онлайн заказ на 5 бургеров через функцию createOrder(count, callMe) и будем ждать, 
// пока нам позвонят в нашу функцию callMe по готовности всех бургеров.

// готовит бургеры за 2 сек = 1 бургер
// Есть заказ (createOrder(count, callMe)) где count = кол-во нужных бургеров , callMe = функция кал-бек которая сообщает об готовности


function createOrder(count, callMe) {
    let burger = 0
    setTimeout(function cook() {
        burger++
        if (burger === count) {
            callMe()
        } else {
            setTimeout(cook, 2000)
        }
    }, 2000)
}

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

createOrder(5, () => console.log('Мой заказ готов'));
