"use strict";

// let promise = new Promise(function (resolve, reject) {
//     resolve(1);

//     setTimeout(() => resolve(2), 1000); // Ignored!
// });

// promise.then(alert);



// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));



// function go() {
//     showCircle(150, 150, 100, div => {
//         div.classList.add('message-ball');
//         div.append("Привет, мир!");
//     });
// }

// function showCircle(cx, cy, radius) {
//     let div = document.createElement('div');
//     div.style.width = 0;
//     div.style.height = 0;
//     div.style.left = cx + 'px';
//     div.style.top = cy + 'px';
//     div.className = 'circle';
//     document.body.append(div);


//     return new Promise(resolve => {
//         setTimeout(() => {
//             div.style.width = radius * 2 + 'px';
//             div.style.height = radius * 2 + 'px';

//             div.addEventListener('transitionend', function handler() {
//                 div.removeEventListener('transitionend', handler);
//                 resolve(div);
//             });
//         }, 0);
//     })
// }


var uniqueInOrder = function (iterable) {
    let arr = []
    for (let i = 0; i < iterable.length; i++) {
        let count = 0
        for (let j = i; j < iterable.length; j++) {
            if (iterable[i] === iterable[j]) {
                arr.push(iterable[i])
                count++
            }
            if (count > 1) {
                arr.shift()
            }
        }
    }
}