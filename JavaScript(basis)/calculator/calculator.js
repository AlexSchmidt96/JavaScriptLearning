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
    buttons.addEventListener('click', function (event) {
        const target = event.target
        if (target.tagName === 'BUTTON') {
            const action = target.dataset.action
            const content = target.innerHTML
            const displayOutput = display.innerHTML
            const previousKeyType = calculator.dataset.previousKeyType
            switch (action) {
                case 'percent':
                case 'divide':
                case 'multiply':
                case 'subtract':
                case 'add':
                    calculator.dataset.previousKeyType = 'operator'
                    calculator.dataset.firstValue = displayOutput
                    calculator.dataset.operator = action
            }
            if (action === 'decimal') {
                display.innerHTML = displayOutput + '.'
            }
            if (action === 'calculate') {
                const firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                const secondValue = displayOutput
                display.innerHTML = calculate(firstValue, secondValue, operator)
            }
            if (!action) {
                if (displayOutput === '0' || previousKeyType === 'operator') {
                    display.innerHTML = content
                }
                else {
                    display.innerHTML = displayOutput + content
                }
            }
            function calculate(num1, num2, operator) {
                let result = ''
                if (operator === 'add') {
                    result = parseFloat(num1) + parseFloat(num2)
                } else if (operator === 'subtract') {
                    result = parseFloat(num1) - parseFloat(num2)
                } else if (operator === 'percent') {
                    result = parseFloat(num1) % parseFloat(num2)
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