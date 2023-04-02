'use strict'

// Создать класс-итератор Line, который будет принимать количество людей в строю 
// и при итерации будет возвращать “Первый” или “Второй”.
// В итоге код должен работать следующим образом

class Line {
    constructor(countOfPeople) {
        this.countOfPeople = countOfPeople
    }
    *[Symbol.iterator]() {
        for (let num = 1; num <= this.countOfPeople; num++) {
            if (num % 2 === 0) {
                yield 'Второй'
            } else {
                yield 'Первый'
            }

        }
    }
}


const line = new Line(6)
for (const count of line) {
    console.log(count)
}

// Первый
// Второй
// Первый