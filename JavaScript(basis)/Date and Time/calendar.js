'use strict'
// 1. Статические части календаря - должны быть сразу в верстке (изначально)
// 2. Немного изменить алгоритм отрисовки: шагнуть до понедельника и начать рисовать строчки пока не нарисуем весь календарь
// 3. Рисуем календарь пока не достигнем понедельника следующего месяца 



// План 
//1. функция initCalendar рисует бокс и кнопки и вызвать 1 раз fillCalendar
//2. функция fillCalendar рисует числа внутри календаря 
//3. функция обработчик которая вызывает fillCalendar

const DEFAULT_VALUES = {
    year: 2023,
    month: 11,
}

function fillCalendar(month) {
    const dateOptions = { month: 'long' }
    const date = new Date(DEFAULT_VALUES.year, month - 1);
    const currMonth = date.toLocaleDateString('ru-RU', dateOptions);


    let tbody = ``
    const tableBody = document.querySelector('tbody')
    const now = new Date();

    const monthAndYearCaption = document.querySelector('.today')
    monthAndYearCaption.innerHTML = `${currMonth} ${DEFAULT_VALUES.year} `

    while (date.getDay() !== 1) {
        date.setDate(date.getDate() - 1)
    }
    // debugger
    while ((date.getMonth() !== month || date.getDay() !== 1) && date.getFullYear() !== DEFAULT_VALUES.year + 1) {
        if (date.getMonth() === month - 1) {
            const isCurrentDay = date.getMonth() === now.getMonth() && date.getDate() === now.getDate();
            if (isCurrentDay) {
                tbody += `<td class="currentDayCell">${date.getDate()}</td>`
            } else {
                tbody += `<td>${date.getDate()}</td>`;
            }
        } else {
            tbody += `<td class = "notCurrentMonthCell">${date.getDate()}</td>`
        }
        if (date.getDay() === 0) {
            tbody += '</tr><tr>';
        }
        date.setDate(date.getDate() + 1);
    }
    tableBody.innerHTML = `<tr>${tbody}</tr>`
}


function init() {
    fillCalendar(DEFAULT_VALUES.month)

    const now = new Date()
    document.querySelector('.today').addEventListener('click', function () {
        selectedMonth = now.getMonth() + 1
        fillCalendar(selectedMonth)
    })

    let selectedMonth = DEFAULT_VALUES.month

    document.querySelector('.arrowLeft').addEventListener('click', function () {
        if (selectedMonth === 1) {
            return;
        }
        selectedMonth -= 1

        fillCalendar(selectedMonth)
    })
    document.querySelector('.arrowRight').addEventListener('click', function () {
        if (selectedMonth === 12) {
            return;
        }
        selectedMonth += 1

        fillCalendar(selectedMonth)
    })
}
document.addEventListener('DOMContentLoaded', init)
