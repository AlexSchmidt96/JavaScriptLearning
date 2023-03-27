'use strict'

class AtmMachine {
    constructor() {
        this.balance = 0
    }
    requestPin() {

        while (true) {
            let pinMessage = +prompt('Введите ПИН-код', '')
            if (pinMessage === 1234) {
                this.showMainTitle()
            } else if (pinMessage === null || pinMessage === undefined) {
                return false
            }
        }
    }
    showMainTitle() {
        let message = prompt('Пожалуйста введите команду. Вам доступны команды:"Снять", "Пополнить", "Показать".', "")
        if (message === "Показать") {
            this.showBalacne()
        } else if (message === "Пополнить") {
            this.topUpPayment()
        } else if (message === "Снять") {
            this.withdraw()
        } else {
            this.requestPin()
        }
    }
    showBalacne() {
        alert(this.balance)
        let endMessage = confirm('Закончить операцию?')
        if (endMessage === false) {
            this.showMainTitle()
        } else {
            // alert('Завершение работы') // отдельная функция для завершения работы
        }
    }
    topUpPayment() {
        let payMessage = +prompt('Введите сумму для пополнения баланса', '')
        if (payMessage === true) {
            this.balance += payMessage
        }
    }
    withdraw() {

    }

}


const atm = new AtmMachine()

atm.requestPin()