'use strict'


// На склад в красти-крабс завезли от 20 до 40 булочек и от 10 до 20 котлет.
// В ресторан пришел патрик и заказал от 5 до 25 бургеров.
// Если спанчбоб смог приготовить все бургеры, то должно вывестить “Ням ням было вкусно”.
// Если ингридиентов не хватило, то должно вывести “Я опять остался голодный”.

// Для проверки не забыть вывести сколько ингридиентов было и сколько бургеров было заказано.


// 1. Есть случайное число булочек(20 до 40 )
// 2. Есть случайное число котлет (10 до 20)
// 3. 2 булки и 1 котлета === 1 бургер
// 4. Клиент сделал случайный заказ(5 до 25 бургеров)
// 5  Ингридиентов у нас не равное кол-во, если 1 заканчивается то делать дальше бургеры невозможно
// 6. Если то что приготовили удовлетворяет условию заказа , то клиент говорит “Ням ням было вкусно”
// 7. Если ингридиентов не хватило, то должно вывести “Я опять остался голодный”.



function generateRandomNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
}

function createOrder(count) {
    let meat = generateRandomNumber(10, 20)
    let buns = generateRandomNumber(20, 40)
    const burger = '🍔'
    const burgers = []
    console.log(`Было: ${meat} котлет , ${buns} булочек. Заказано : ${count} бургеров`)
    return new Promise(function (resolve, reject) {
        setTimeout(function cookBurger() {
            meat -= 1
            buns -= 2
            burgers.push(burger)
            if (burgers.length === count) {
                resolve(burgers)
            } else if (meat === 0 || buns === 0) {
                reject(new Error('запасы кончились'))
            } else {
                setTimeout(cookBurger, 1000)
            }
        }, 1000)
    })
}

const orderedCount = generateRandomNumber(5, 25);
let promise = createOrder(orderedCount)

promise
    .then((burgers) => console.log(`Ням ням было вкусно! Я сьел все ${burgers.length} бургеров`))
    .catch((error) => console.log(`Я опять остался голодный , наверное у вас ${error.message}`))



