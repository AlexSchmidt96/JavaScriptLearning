/* While cicle

let b = 0;
while (b < 5) {
    alert(b);
    b++;
}*/

/* For cicle
for (let a = 0; a <= 10; a++) {
    alert(a);
}*/

/* continue cicle
for (let b = 0; b < 10; b++) {
    if (b % 4 == 0) continue;
    alert(b);
}*/

/*
for (let b = 2; b <= 10; b++) {
    if (b % 2 == 1) continue;
    alert(b);
}*/

/*
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}*/

/*
let value = 0;
while (true) {
    let value = prompt("введите число больше 100", '');
    if (value >= 100) break;
    if (!value) break;
    if (value < 100) {
        alert('введите другое число');
    }
}*/

/*
same
let value = 0;
do value = prompt("введите число больше 100", '');
while (value <= 100 && value);*/

/*
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i )*/