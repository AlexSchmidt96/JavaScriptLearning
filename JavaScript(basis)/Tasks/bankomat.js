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
        this.card = undefined
    }
    insert(card) {
        this.card = card
        try {
            this.checkCard()
            this.checkPin()
            this.showMainTitle()
        } catch (error) {
            alert(error.message)
        }
        this.card = undefined
    }
    checkPin() {
        let count = 0
        while (count < 3) {
            const value = prompt('Введите ПИН-код', '')
            if (value == null) {
                const isExit = confirm('Вы хотите завершить обслуживание?')
                if (isExit) {
                    throw new Error('Завершение работы')
                }
            } else if (value !== this.card.pinCode) {
                count++
                alert('Неверный пин код')
            } else {
                return;
            }
        }
        throw new Error('Доступ заблокирован')
    }
    showMainTitle() {
        const value = prompt('Пожалуйста введите цифру команды. Вам доступны команды: 1-"Снять деньги со счета", 2-"Пополнить счет", 3-"Показать баланс".', "")
        if (value == null) {
            this.shutDown()
            return;
        }
        switch (value) {
            case '1':
                this.withdraw()
                break
            case '2':
                this.topUp()
                break
            case '3':
                this.showBalance()
                break
            default:
                alert('Введите корректное значение!')
                this.showMainTitle()
        }
    }
    showBalance() {
        alert(`Ваш баланс счета равен ${this.card.balance} руб.`)
        this.shutDown()
    }
    topUp() {
        const value = prompt('Введите сумму для пополнения счета, сумма указана в руб.', '')
        if (value == null) {
            this.shutDown()
            return;
        }
        const amount = +value
        if (this.isInvalidAmount(amount)) {
            alert('Введите корректное значение!')
            this.topUp()
            return;
        }
        this.card.balance += amount
        alert(`Ваш баланс счета пополнен`)
        this.showCheck()
    }
    withdraw() {
        const value = prompt('Ведите сумму для снятия денег с Вашего счета, сумма указана в руб.', '')
        if (value == null) {
            this.shutDown()
            return;
        }
        const amount = +value
        if (this.isInvalidAmount(amount)) {
            alert('Введите корректное значение!')
            this.withdraw()
            return;
        }
        if (amount > this.card.balance) {
            alert('Превышен лимит снятия со счета!')
            this.shutDown()
            return;
        }
        this.card.balance -= amount
        alert(`Операция завершена`)
        this.showCheck()
    }
    shutDown() {
        const isExit = confirm('Вы хотите завершить обслуживание?')
        if (isExit) {
            alert('Завершение работы')
        } else {
            this.showMainTitle()
        }
    }
    showCheck() {
        const isPrint = confirm('Печатать чек?')
        if (isPrint) {
            this.showBalance()
            return;
        }
        this.shutDown()
    }
    checkCard() {
        if (this.card.number.length !== 16) {
            throw new Error('Вставьте карту правильной стороной!')
        }
    }
    isInvalidAmount(amount) {
        return isNaN(amount) || amount <= 0 || amount % 1 > 0
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
        this.number = this.generateNumber()
        this.pinCode = '1234'
    }
    generateNumber() {
        let str = ''
        for (let i = 0; i < 16; i++) {
            str += getRandomNumber(0, 9)
        }
        return str
    }
}
const card = new Card()
const atm = new AtmMachine()
card.generateNumber()
atm.insert(card)