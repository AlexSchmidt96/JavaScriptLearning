"use strict";


// date and time //


// let date = new Date(2012,1,20,3,12)
// alert(date)


// function getWeekDay(date) {
//     let day = date.getDay()
//     if (day == 0) {
//         day = 7
//     }
//     return day
// }
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert(getWeekDay(date));


// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);
//     dateCopy.setDate(date.getDate() - days)
//     return dateCopy.getDate()
// }


// let date = new Date(2015, 0, 2);


// alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)



// function getLastDayOfMonth(year, month) {
//     let lastDay = new Date(year, month + 1, 0)


//     return lastDay.getDate()

// }

// alert(getLastDayOfMonth(2012, 2))



// function getSecondsToday() {
//     let secondToday = new Date()
//     return secondToday.getHours() * 3600 + secondToday.getMinutes() * 60 + secondToday.getSeconds()
// }

// alert(getSecondsToday())

// function getSecondsTomorrow() {
//     let now = new Date()
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//     let diff = tomorrow - now;
//     return Math.round(diff / 1000)
// }

// alert(getSecondsTomorrow())


// function formatDate(date) {

//     let dayOfMonth = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     let hour = date.getHours();
//     let minutes = date.getMinutes();


//     let diffMs = new Date() - date;
//     let diffSec = Math.round(diffMs / 1000);
//     let diffMin = diffSec / 60;
//     let diffHour = diffMin / 60;


//     year = year.toString().slice(-2);
//     month = month < 10 ? '0' + month : month;
//     dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
//     hour = hour < 10 ? '0' + hour : hour;
//     minutes = minutes < 10 ? '0' + minutes : minutes;

//     if (diffSec < 1) {
//         return 'прямо сейчас';
//     } else if (diffMin < 1) {
//         return `${diffSec} сек. назад`
//     } else if (diffHour < 1) {
//         return `${diffMin} мин. назад`
//     } else {
//         return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
//     }

// }

// alert(formatDate(new Date(new Date - 30 * 1000)))
