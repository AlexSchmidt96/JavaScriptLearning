'use strict'
// При вводе 0(falsy значение) программа завершается 
// При вводе "" (falsy значение) программа завершается 
class AtmMachine {
    constructor() {
        this.balance = 0
    }
    requestPin() {
        let count = 0
        while (true) {
            const pinMessage = +prompt('Введите ПИН-код', '')
            count++
            if (pinMessage === 1234) {
                this.showMainTitle()
                break
            } else if (count === 3) {
                alert('Доступ заблокирован')
                break
            } else if (pinMessage == false) {
                this.shutDown()
                break
            } else {
                alert('Пин-код неверен')
            }
        }
    }
    showMainTitle() {
        while (true) {
            const showMainTitleMessage = +prompt('Пожалуйста введите цифру команды. Вам доступны команды: 1-"Снять", 2-"Пополнить", 3-"Показать".', "")
            if (showMainTitleMessage === 3) {
                this.showBalance()
                break
            } else if (showMainTitleMessage === 2) {
                this.topUpPayment()
                break
            } else if (showMainTitleMessage === 1) {
                this.withdraw()
                break
            } else if (showMainTitleMessage == false) {
                this.shutDown()
                break
            } else {
                alert('Введите корректное значение!')
            }
        }
    }
    showBalance() {
        alert(`Ваш баланс счета равен ${this.balance} руб.`)
        this.shutDown()
    }
    topUpPayment() {
        while (true) {
            const topUpPaymentMessage = +prompt('Введите сумму для пополнения счета, сумма указана в руб.', '')
            if (topUpPaymentMessage == false) {
                this.shutDown()
                break
            } else if (topUpPaymentMessage) {
                this.balance += topUpPaymentMessage
                alert(`Ваш баланс счета пополнен , ваш баланс счета равен ${this.balance} руб.`)
                this.shutDown()
                break
            } else {
                alert('Введите корректное значение!')
            }
        }
    }
    withdraw() {
        while (true) {
            const withdrawMessage = +prompt('Ведите сумму для снятия денег с Вашего счета, сумма указана в руб.', '')
            if (withdrawMessage > this.balance) {
                alert('Превышен лимит снятия со счета!')
            } else if (withdrawMessage == false) {
                this.shutDown()
                break
            } else if (withdrawMessage) {
                this.balance -= withdrawMessage
                alert(`Операция завершена, ваш баланс счета равен ${this.balance} руб.`)
                this.shutDown()
                break
            } else {
                alert('Введите корректное значение!')
            }
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
}


const atm = new AtmMachine()

atm.requestPin()