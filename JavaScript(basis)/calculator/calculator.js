'use strict'

function calculator() {
    const calculator = document.querySelector('.calc')
    const display = document.querySelector('.calculator-display')
    const calcButtons = buttons.addEventListener('click', function (event) {
        const target = event.target
        if (target.matches('div')) {
            const action = target.dataset.action
            const content = action.innerHTML
            const displayOutput = display.innerHTML
            const previousKeyType = calculator.dataset.previousKeyType
            if (!action) {
                if (displayOutput === '0' || previousKeyType === 'operator') {
                    display.innerHTML = content
                } else {
                    display.innerHTML = displayOutput + content
                }
            }
            if (action === 'decimal') {
                display.innerHTML = displayOutput + '.'
            }
            switch (action) {
                case 'addPlusMinus':
                case 'percent':
                case 'divide':
                case 'multiply':
                case 'subtract':
                case 'add':
                case 'calculate':
                case 'decimal':
                case 'clear':
                    calcButtons.classList.add('is-depressed')
                    calculator.dataset.previousKeyType = 'operator'
                    break
            }
            Array.from(calcButtons.parentNode.children).forEach(elem => elem.classList.remove('is-depressed'))


        }


        calcButtons

    })
}

function init() {
    calculator()
}
document.addEventListener('DOMContentLoaded', init)