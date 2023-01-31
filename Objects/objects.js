// Objects //

/* let user = {}
user.name = "john";
user.surname = "Smith";
delete user.name;

alert(user.name);
alert(user.surname);*/

/* function isEmtpy(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}*/

/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
alert(sum);*/
/*
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}*/

// Objects//
/*
let calculator = {
    number1: 0,
    number2: 0,
    read(number1, number2) {
        this.number1 = prompt('number1', 0);
        this.number2 = prompt('number2', 0);
    },
    sum() {
        return this.number1 + this.number2;
    },
    mul() {
        return this.number1 * this.number2;
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
*/

/*
function Calculator() {

    this.read = function() {
      this.a = +prompt('a', 0);
      this.b = +prompt('b', 0);
    };

    this.sum = function() {
      return this.a + this.b;
    };

    this.mul = function() {
      return this.a * this.b;
    };
  }

  let calculator = new Calculator();
  calculator.read();

  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );
  */

/*
function Accumulator(StarringValue) {
    this.value = starringValue;
    this.read = function () {
        this.value += prompt('Добавляем?', 0);
    };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/
/*
let calculator = {
    a: 0,
    b: 0,
    read(a, b) {
        this.a = +prompt("a", 0)
        this.b = +prompt("b", 0)
    },
    sum() {
        return this.a + this.b;
    },
};
calculator.read();
alert(calculator.sum());*/
