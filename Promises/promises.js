"use strict";

// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms))
// }
// delay(3000).then(() => alert('выполнилось через 3 секунды'));


// Спанчбоб готовит бургеры за 2 секунды каждый.
// Мы сделали заказ на 5 бургеров через функцию createOrder(count) и сели за стол. 
// И теперь мы ждем, пока официант принесет нам заказ и скажем “Спасибо за N бургеров!”

function createOrder(count) {
    const burger = '🍔'
    const burgers = []
    const possibility = Math.random()
    return new Promise(function (resolve, reject) {
        setTimeout(function cook() {
            burgers.push(burger)
            if (burgers.length === count) {
                if (possibility > 0.5) {
                    burgers.pop()
                    reject(new Error('нету одного бургера'))
                }
                resolve(burgers)
            } else {
                setTimeout(cook, 2000)
            }
        }, 2000)
    })
}
const orderedCount = 5;
let promise = createOrder(orderedCount);

promise
    .then((order) => console.log(`Спасибо за ${order.length} бургеров!`))
    .catch((error) => console.log(`Простите но тут ${error.message}`))
