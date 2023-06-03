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

    while (date.getMonth() !== monthIndex + 1 || date.getDay() !== 1) {
        const isCurrentDay = date.getMonth() === now.getMonth() && date.getDate() === now.getDate();
        if (date.getMonth() === monthIndex) {
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
    const monthAndYearCaption = document.querySelector('caption')
    monthAndYearCaption.innerHTML = `<span class='arrorLeft'> < </span> ${currMonth} ${year} <span class='arrorRight'> > </span>`
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = `<tr>${tbody}</tr>`
    document.querySelector('button').addEventListener('click', function (event) {
        let target = event.target
        if (target.tagName != 'SPAN') {
            return;
        }
        calendar(calenderElement, now.getFullYear(), now.getMonth() + 1)
    })
    monthAndYearCaption.addEventListener('click', function (event) {
        let target = event.target
        if (target.tagName != 'SPAN') {
            return;
        }
        if (target.className === 'arrorLeft') {
            calendar(calenderElement, year, month - 1)
        }
        if (target.className === 'arrorRight') {
            calendar(calenderElement, year, month + 1)
        }
    })
}

function init() {
    const calenderElement = document.getElementById('calendar')
    calendar(calenderElement, 2023, 7)
}
document.addEventListener('DOMContentLoaded', init)
