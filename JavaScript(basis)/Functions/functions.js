"use strict";

// function typeOfWomens(partners, age) {
//     if (partners === 0 && age < 18) {
//         return "ребенок"
//     } else if (partners === 0 && age >= 18 && age < 50) {
//         return "девственница"
//     } else if (partners <= 3 && age >= 18 && age < 30) {
//         return "телочка"
//     } else if (partners > 3 && age >= 18 && age < 30) {
//         return "шлюха"
//     } else if (partners > 0 && age >= 30 && age < 50) {
//         return "милфа"
//     } else if (age >= 50) {
//         return "старуха"
//     }
// }
// console.log(typeOfWomens(1, 17));


// function typeOfWomens(partners, age) {
//     if (age >= 50) {
//         return "старуха"
//     }
//     if (age < 18) {
//         return "ребенок"
//     }
//     if (partners === 0) {
//         return "девственница"
//     }
//     if (age >= 30) {
//         return "милфа"
//     }
//     if (partners <= 3) {
//         return "телочка"
//     }
//     return "шлюха"
// }
// console.log(typeOfWomens(4, 25))


// Написать функцию, получающую на вход два числа.
// Если оба числа чётные - функция возвращает их произведение.Если оба числа нечётные - функция возвращает их сумму.
// Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
// четное нечетное

// function isOdd(value) {
//     return !isEven(value);
// }
// function isEven(value) {
//     return value % 2 == 0
// }
// function showGroupOfNumbers(num1, num2) {
//     if (isOdd(num1) && isOdd(num2)) {
//         return num1 + num2
//     }
//     if (isEven(num1) && isEven(num2)) {
//         return num1 * num2
//     }
//     if (isOdd(num1)) {
//         return num1
//     }
//     return num2
// }
// console.log(showGroupOfNumbers(-4, -16));



// Ваша функция принимает два аргумента:

//     текущий возраст отца (лет)
//     текущий возраст сына (лет)

// Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).
// function getfamilyAge(sonAge, fatherAge) {
//     return Math.abs(sonAge * 2 - fatherAge)
// }
// console.log(getfamilyAge(35, 45));

// Функция в которую передаётся число n, нужно вернуть количество положительных нечетных чисел меньше n

// function num(n) {
//     for (let i = 1; i < n; i++) {
//         if (i % 2 == 1) {
//             return console.log(i++)
//         }
//     }
// }
// num(10);

// alert("я JavaScript");


// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }
// console.log(checkAge(18));

// function min(a, b) {
//     if (a > b) {
//         return a
//     } return b
// }
// console.log(min(4, 3));


// let x = +prompt("Введите число")
// let n = +prompt("Введите степень")

// function pow(x, n) {
//     return x ** n;
// }
// alert(pow(1, 2));


// let ask = (question, yes, no) => {
//     return confirm(question) ? yes() : no();
// }

// ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
// );


// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) { result *= x; }
//     return result;
// }



// function Calculator() {
//     this.read = function () {
//         this.firstNumber = +prompt("Введите число", 0)
//         this.secondNumber = +prompt("Введите число", 0)
//     }
//     this.sum = function () {
//         return this.firstNumber + this.secondNumber
//     }
//     this.mul = function () {
//         return this.firstNumber * this.secondNumber
//     }
// };
// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());



// function Accumulator(startingValue) {

//     this.read = function () {
//         this.value += +prompt('Сколько нужно добавить?', 0)
//     }
//     this.value = startingValue

// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read()
// alert(accumulator.value);


//Function//

/*
function checkAge(age) {
    return confirm('А родители разрешили?') || age > 18;
}
function checkAge(age) {
    return (age > 18) ? true : confirm('А родители разрешили?');
}*/

/*
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    };
}
let result = min(1, 1);
alert(result);*/
/*
function pow(x, n) {

    return x ** n;
}
let result = pow(1, 100);
alert(result);
*/

// function arrow//

/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);*/

/*
function hello(name) {
    let phrase = `hello ${name}!`;
    say(phrase);
}
function say(phrase) {
    alert(`** ${phrase} **`);
}*/
