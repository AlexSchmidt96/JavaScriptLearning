'use strict'
// При вводе 0 (falsy значение) программа завершается check
// При вводе "" (falsy значение) программа завершается  check
// Поставить "Закончить операцию" при недостатке средсва для снятия  check
// Переделать while requestPin -> for  check
// Переделать на строковый промпт и явные нул и андеванд  check
// Реализовать класс Карта  check
// Рекурсировать маинТайтле check
// "печатать чек" после каждой операции   check
// Проверка на отрицательные числа! check

// Проверка 
// 1.  Отмена
// 2.  Не тот тип данных
// 3.  Нужный тип но некорректный

class AtmMachine {
    constructor() {
        this.cardReader = []
    }
    insert(card) {
        this.cardReader.push(card)
        // console.log(this.cardReader) // карта вставлена
        try {
            this.cardReader[this.cardReader.length - 1].check()
            this.requestPin()
        } catch (error) {
            alert(error.message)
        }
    }
    requestPin() {
        let count = 0
        for (let i = 0; i <= 2; i++) {
            count++
            const value = prompt('Введите ПИН-код', '')
            if (value === null || value === undefined) {
                const message = confirm('Вы хотите завершить обслуживание?')
                if (!message) {
                    this.requestPin()
                }
                break
            } else if (value !== this.cardReader[this.cardReader.length - 1].pinCode) {
                alert('Неверный пин код')
            } else {
                this.showMainTitle()
                break
            }
        }
        if (count === 3) {
            alert('Доступ заблокирован')
        }
    }
    showMainTitle() {
        const value = prompt('Пожалуйста введите цифру команды. Вам доступны команды: 1-"Снять", 2-"Пополнить", 3-"Показать".', "")
        if (value === null || value === undefined) {
            this.shutDown()
        } else if (value === "3") {
            this.showBalance()
        } else if (value === "2") {
            this.topUp()
        } else if (value === "1") {
            this.withdraw()
        } else {
            alert('Введите корректное значение!')
            this.showMainTitle()
        }
    }
    showBalance() {
        alert(`Ваш баланс счета равен ${this.cardReader[this.cardReader.length - 1].balance} руб.`)
        this.shutDown()
    }
    topUp() {
        const value = prompt('Введите сумму для пополнения счета, сумма указана в руб.', '')
        if (value === null || value === undefined) {
            this.shutDown()
        } else if (value === String(value) && +value > "0") {
            this.cardReader[this.cardReader.length - 1].balance += +value
            alert(`Ваш баланс счета пополнен`)
            this.showCheck()
        } else {
            alert('Введите корректное значение!')
            this.topUp()
        }
    }
    withdraw() {
        const value = prompt('Ведите сумму для снятия денег с Вашего счета, сумма указана в руб.', '')
        if (value === null || value === undefined) {
            this.shutDown()
        } else if (value === String(value) && +value > "0") {
            if (+value > this.cardReader[this.cardReader.length - 1].balance) {
                alert('Превышен лимит снятия со счета!')
                this.shutDown()
            } else {
                this.cardReader[this.cardReader.length - 1].balance -= value
                alert(`Операция завершена`)
                this.showCheck()
            }
        } else {
            alert('Введите корректное значение!')
            this.withdraw()
        }
    }
    shutDown() {
        const shutDownMessage = confirm('Вы хотите завершить обслуживание?')
        if (shutDownMessage) {
            alert('Завершение работы')
        } else {
            this.showMainTitle()
        }
    }
    showCheck() {
        const ask = confirm('Печатать чек?')
        if (ask) {
            alert(`ваш баланс счета равен ${this.cardReader[this.cardReader.length - 1].balance} руб.`)
        }
        this.shutDown()
    }
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Card {
    constructor() {
        this.balance = 0
        this.cardNumber = []
        this.pinCode = '1234'
    }
    generateNumber() {
        for (let i = 0; i < 16; i++) {
            let randomNum = getRandomNumber(0, 9)
            this.cardNumber.push(randomNum)
        }
        console.log(this.cardNumber)
    }
    check() {
        if (this.cardNumber.length !== 16) {
            throw new Error('Вставьте карту правильной стороной!')
        }
    }
}
const card = new Card()
const atm = new AtmMachine()
card.generateNumber()
atm.insert(card)