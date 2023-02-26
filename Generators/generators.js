'use strict'

// По мотивам аналогичной задачи.

// Но теперь у нас генераторы: склад булочек, склад котлет. И эти два генератора вместе генерируют бургеры.

// Функция getBurgers() должна вернуть генератор бургеров. 
// В итоге Патрик ест N бургеров по одному и если у него получается наесться, то говорит “Фух, я наелся” иначе “Я всё ещё голоден!”

// Псевдо код 
// есть 2 генератора которые генерируют мне мясо и булку
// пока у меня есть мясо и булки я делаю бургеры
// пока у меня есть бургеры я сокращаю свой заказ 
// если у меня заказ равен 0 то заказ выполнен 
// если генератор закончился раньше чем заказ то заказ не выполнен 

function generateRandomNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
}

function* meat() {
    let meatCount = generateRandomNumber(10, 20)
    console.log(`Было: ${meatCount} мяса`)
    for (let i = 0; i < meatCount; i++) {
        yield '🥩';
    }
}
function* buns() {
    let bunsCount = generateRandomNumber(20, 40)
    console.log(`Было: ${bunsCount} булок`)
    for (let i = 0; i < bunsCount; i++) {
        yield '🫓';
    }
}

const meatGenerator = meat()
const bunsGenerator = buns()

function* getBurgers() {
    // done если true то у нас законочились продукты 
    // Проверяем на наличие продуктов, берем 1 продукт 
    while (!meatGenerator.next().done && !bunsGenerator.next().done && !bunsGenerator.next().done) {
        yield '🍔'
    }
}

const burgers = getBurgers()

let orderCount = generateRandomNumber(5, 25);
console.log(`Заказано: ${orderCount} бургеров`)
while (orderCount > 0) {
    if (burgers.next().done) {
        break
    }
    orderCount -= 1
}
if (orderCount === 0) {
    console.log('Фух, я наелся')
} else {
    console.log('Я всё ещё голоден!')
}