'use strict'

// Что может делать калькулятор?
// 1. принимать цифры от 0 до 9
// 1.1. Делать из целых чисел дробные с помощью точки
// 1.2. Делать из однозначного числа двух- трехзначные и тд (до тех пор пока размер дисплея позволяет)
// 2. применять к ним различные операторы (+,- и тд)
// 2.1.Делать из положительного числа отрицательное и наобарот
// 3. Считать результат 
// 4. Очищать дисплей 
function calculator() {
    const calculator = document.querySelector('.calc')
    const display = document.querySelector('.calculator-display')
    const buttons = document.querySelector('.buttons')
    buttons.addEventListener('click', function (event) {
        const target = event.target
        if (target.tagName === 'BUTTON') {
            const action = target.dataset.action
            const content = target.innerHTML

            const displayOutput = display.innerHTML
            const previousKeyType = calculator.dataset.previousKeyType

            const firstValue = calculator.dataset.firstValue
            const secondValue = displayOutput
            const operator = calculator.dataset.operator


            if (action === 'decimal') {
                if (!displayOutput.includes('.')) {
                    display.innerHTML = displayOutput + '.'
                } else if (previousKeyType === 'operator') {
                    display.innerHTML = '0'
                }
                calculator.dataset.previousKeyType = 'decimal'
            }

            if (!action) {
                if (displayOutput === '0' || previousKeyType === 'operator') {
                    display.innerHTML = content
                }
                else {
                    display.innerHTML = displayOutput + content
                }
                calculator.dataset.previousKeyType = 'number'
            }
            switch (action) {
                case 'divide':
                case 'multiply':
                case 'subtract':
                case 'add':

                    const firstValue = calculator.dataset.firstValue
                    const secondValue = displayOutput
                    const operator = calculator.dataset.operator

                    if (firstValue && operator && previousKeyType !== 'operator') {
                        const value = display.innerHTML = calculate(firstValue, secondValue, operator)
                        display.innerHTML = value
                        calculator.dataset.firstValue = value
                    } else {
                        calculator.dataset.firstValue = displayOutput
                    }
                    calculator.dataset.previousKeyType = 'operator'
                    calculator.dataset.operator = action
            }

            if (action === 'calculate') {
                display.innerHTML = calculate(firstValue, secondValue, operator)
                calculator.dataset.previousKeyType = 'calculate'
            }

            if (action === 'del') {
                display.innerHTML = displayOutput.substring(0, displayOutput.length - 1);
                calculator.dataset.previousKeyType = 'del'
            }

            if (action === 'clear') {
                display.innerHTML = '0'
                calculator.dataset.previousKeyType = 'clear'
            }

            function calculate(num1, num2, operator) {
                let result = ''
                if (operator === 'add') {
                    result = parseFloat(num1) + parseFloat(num2)
                } else if (operator === 'subtract') {
                    result = parseFloat(num1) - parseFloat(num2)
                } else if (operator === 'percent') {
                    result = parseFloat(num1) / 100
                } else if (operator === 'multiply') {
                    result = parseFloat(num1) * parseFloat(num2)
                } else if (operator === 'divide') {
                    result = parseFloat(num1) / parseFloat(num2)
                }

                return result
            }

        }
    })
}
function init() {
    calculator()
}
document.addEventListener('DOMContentLoaded', init)