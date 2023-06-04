'use strict'
// 1. Статические части календаря - должны быть сразу в верстке (изначально)
// 2. Немного изменить алгоритм отрисовки: шагнуть до понедельника и начать рисовать строчки пока не нарисуем весь календарь
// 3. Рисуем календарь пока не достигнем понедельника следующего месяца 

function calendar(elem, year, month) {
    const calenderElement = document.getElementById('calendar')
    const now = new Date();
    const dateOptions = { month: 'long' }
    const monthIndex = month - 1;
    const date = new Date(year, monthIndex);
    const currMonth = date.toLocaleDateString('ru-RU', dateOptions);
    let tbody = ``

    while (date.getDay() !== 1) {
        date.setDate(date.getDate() - 1)
    }
    // debugger
    while (date.getMonth() !== monthIndex + 1 || date.getDay() !== 1) {
        if (date.getFullYear() === year + 1) {
            break
        }
        if (date.getMonth() === monthIndex) {
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

    const monthAndYearCaption = document.querySelector('.monthAndYearCaption')
    monthAndYearCaption.innerHTML = `<span class='arrorLeft'> < </span> <span class='today'> ${currMonth} ${year} </span> <span class='arrorRight'> > </span>`
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = `<tr>${tbody}</tr>`
    monthAndYearCaption.addEventListener('click', function (event) {
        let target = event.target
        if (target.tagName != 'SPAN') {
            return;
        }
        switch (target.className) {
            case 'arrorLeft':
                calendar(calenderElement, year, month - 1)
                break;
            case 'arrorRight':
                calendar(calenderElement, year, month + 1)
                break
            case 'today':
                calendar(calenderElement, now.getFullYear(), now.getMonth() + 1)
                break;
        }
    })
}

function init() {
    const calenderElement = document.getElementById('calendar')
    calendar(calenderElement, 2023, 11)
}
document.addEventListener('DOMContentLoaded', init)
