'use strict'

// Что может делать калькулятор?
// 1. принимать цифры от 0 до 9
// 1.1. Делать из целых чисел дробные с помощью точки
// 1.2. Делать из однозначного числа двух- трехзначные и тд (до тех пор пока размер дисплея позволяет)
// 2. применять к ним различные операторы (+,- и тд)
// 3. Считать результат 
// 4. Очищать дисплей 



class Calculator {
    constructor() {
        this.calculator = document.querySelector('.calc')
        this.display = document.querySelector('.calculator-display')
        this.buttons = document.querySelector('.buttons')
        // console.log(this) // проверка this
    }
    start() {
        this.buttons.addEventListener('click', (event) => {
            // console.log(this) // проверка this
            const target = event.target
            if (target.tagName === 'BUTTON') {
                const action = target.dataset.action
                const content = target.innerHTML

                const displayOutput = this.display.innerHTML
                const previousKeyType = this.calculator.dataset.previousKeyType

                let firstValue = this.calculator.dataset.firstValue
                const operator = this.calculator.dataset.operator
                let secondValue = displayOutput

                Array.from(target.parentNode.children).forEach(button => button.classList.remove('clicked'))


                this.isAction(action, content, displayOutput, previousKeyType, firstValue, secondValue, operator, target)

                if (action === 'decimal') {
                    this.decimal(displayOutput, previousKeyType)
                }

                if (action === 'del') {
                    this.delete(displayOutput)
                }

                if (action === 'clear') {
                    this.clear()
                }

                if (action === 'calculate') {
                    this.initCalculate(firstValue, operator, secondValue, previousKeyType, displayOutput)
                }
            }
        })
    }
    isAction(action, content, displayOutput, previousKeyType, firstValue, secondValue, operator, target) {
        if (!action) {
            if (displayOutput === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
                this.display.innerHTML = content
            }
            else {
                this.display.innerHTML = displayOutput + content
            }
            this.calculator.dataset.previousKeyType = 'number'
        }
        switch (action) {
            case 'divide':
            case 'multiply':
            case 'subtract':
            case 'add':

                if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                    const value = this.calculate(firstValue, secondValue, operator)
                    this.display.innerHTML = value
                    this.calculator.dataset.firstValue = value
                } else {
                    this.calculator.dataset.firstValue = displayOutput
                }
                target.classList.add('clicked')
                this.calculator.dataset.previousKeyType = 'operator'
                this.calculator.dataset.operator = action
        }
        // console.log(action) // проверка action
    }
    decimal(displayOutput, previousKeyType) {
        if (!displayOutput.includes('.')) {
            this.display.innerHTML = displayOutput + '.'
        } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
            this.display.innerHTML = '0'
        }
        this.calculator.dataset.previousKeyType = 'decimal'
    }
    delete(displayOutput) {
        this.display.innerHTML = displayOutput.substring(0, displayOutput.length - 1);
        this.calculator.dataset.previousKeyType = 'del'
    }
    clear() {
        this.calculator.dataset.firstValue = ''
        this.calculator.dataset.modValue = ''
        this.calculator.dataset.operator = ''
        this.calculator.dataset.previousKeyType = ''

        this.display.innerHTML = '0'
        this.calculator.dataset.previousKeyType = 'clear'
    }
    initCalculate(firstValue, operator, secondValue, previousKeyType, displayOutput) {
        if (firstValue) {
            if (previousKeyType === 'calculate') {
                firstValue = displayOutput
                secondValue = this.calculator.dataset.modValue
            }
            this.display.innerHTML = this.calculate(firstValue, secondValue, operator)
        }
        this.calculator.dataset.modValue = secondValue
        this.calculator.dataset.previousKeyType = 'calculate'
    }
    calculate(firstValue, secondValue, operator) {
        if (operator === 'add') {
            return parseFloat(firstValue) + parseFloat(secondValue)
        }
        if (operator === 'subtract') {
            return parseFloat(firstValue) - parseFloat(secondValue)
        }
        if (operator === 'multiply') {
            return parseFloat(firstValue) * parseFloat(secondValue)
        }
        if (operator === 'divide') {
            return parseFloat(firstValue) / parseFloat(secondValue)
        }
    }
}

function init() {
    const calculator = new Calculator()
    calculator.start()
}
document.addEventListener('DOMContentLoaded', init)