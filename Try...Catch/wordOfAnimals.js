// "use strict";

// У нас есть 3 сущности: трава (🌿), травоядное животное (🐄), хищное животное (🐆).
// Травоядное может сожрать только траву, хищник может сожрать только травоядное, трава никого не может сожрать.

// Создается случайное количество каждой сущности от 10 до 20;
// Они складываются в один массив в случайном порядке;
// Дальше запускаем цикл, в котором каждое существо может попытаться сожрать ближайшего (слева и справа);

// Важно следить, чтобы существо по цепочке ниже не смогло сожрать существо выше (например, трава не может сожрать животного).

// Вывести в начале:
// - Сколько кого
// - Как они располагаются - [🌿🐆🐄]
// Вывести в конце:
// - Сколько кого осталось
// - Как они располагаются [🌿🐆🐄]
// - Кто победил

// 1. Класс Nature с аргументом в виде пустого массиве
// 2. В классе Nature метод pushThemUp который случайным образом пушит остальные классы себе в массив
// 3. В классе life метод исполняет удаление элемента из массива слева или справа от себя
// 4. В классах животных и травы задаем условия и ограничения исполнения метода из класса life
// Вывести в начале:
// - Сколько кого
// - Как они располагаются - [🌿🐆🐄]
// Вывести в конце:
// - Сколько кого осталось
// - Как они располагаются [🌿🐆🐄]
// - Кто победил


// Math.floor(Math.random() * (20 - 10) + 10) для генерации сущностей от 10 до 20
// .sort(() => Math.random() - 0.5) для перемешивания массива
//.filter(item => item === grass.name).length найти кол-во элементов в массиве по условию

// Дальше запускаем цикл, в котором каждое существо может попытаться сожрать ближайшего (слева и справа);
// Важно следить, чтобы существо по цепочке ниже не смогло сожрать существо выше (например, трава не может сожрать животного).
// 1. Как обратиться к элементу в массиве
// 1.1. Как сделать чтобы он удалял элемент слева (с исключением)  arr[i - 1] === *item instanceof Class*
// 1.2. Как сделать чтобы он удалял элемент справа (с исключением) arr[i + 1] === *item instanceof Class*
// * удалил из массива при этом не оставив не его месте пустоту  *splice(start,deleteCount)*
// (способы удаления элемента из массива не сначала или конца и без созданий копий:
// Если первая форма это хищник , а сосед справа трава то ничего не делать
// Есди первая форма это хищник , а сосед справа травоядный то удалить его из массива
// Есди первая форма это хищник , а сосед справа хищник то ничего не делать
// Если первая форма это трава , а сосед справа трава то ничего не делать
// Есди первая форма это трава , а сосед справа травоядный ничего не делать
// Есди первая форма это трава , а сосед справа хищник то ничего не делать
// Если первая форма это травоядный , а сосед справа трава то удалить его из массива
// Есди первая форма это травоядный , а сосед справа травоядный то удалить его из массива
// Есди первая форма это травоядный , а сосед справа хищник то ничего не делать

// 🐆🐄🌿🐆🌿🐄🌿🌿🌿🐆🐆🌿🐄
// 🐆🌿🐆🐄🌿🌿🐆🐆🐄
// 🐆🌿🐆🌿🌿🐆🐆
// 🐆🌿🐆🌿🌿🐆🐆


// Я всегда могу создать новую переменную и что-то записать в неё (если хочу)
// Я всегда могу сравнить два значения друг с другом (с помощью математических операций ===, !==, >, < и тд)
// Я всегда могу придумать функцию, которая будет ПРИНИМАТЬ аргументы и ВОЗВРАЩАТЬ значение


// TODO существа имеют разный размер популяции
// TODO выводиться в консоль должны иконки а не объекты
// TODO говорит о том, может ли животное съесть другое животное - метод животного
// TODO подумать нет ли кода, который выполняет одно и то же но пишется в нескольких местах (дублируется)

class Nature {
    constructor() {
        this.wildNature = []
    }
    pushThemUp() {
        console.log(numberOfIndividuals)
        for (let i = 0; i < numberOfIndividuals; i++) {
            this.wildNature.push(new Predator(i))
            this.wildNature.push(new Grass(i))
            this.wildNature.push(new Herbivore(i))
        }
        console.log(numberOfIndividuals)
        this.sort()
        this.showResult()
        this.fight()
    }
    population() {

    }
    fight() {
        let start = this.wildNature.length
        for (let i = 0; i < this.wildNature.length; i++) {
            if (this.wildNature[i] instanceof Predator && i < this.wildNature.length - 1 && this.wildNature[i + 1] instanceof Herbivore) {
                this.wildNature.splice(i + 1, 1)
            }
            if (this.wildNature[i] instanceof Predator && i > 0 && this.wildNature[i - 1] instanceof Herbivore) {
                this.wildNature.splice(i - 1, 1)
            }
            if (this.wildNature[i] instanceof Herbivore && i < this.wildNature.length - 1 && this.wildNature[i + 1] instanceof Grass) {
                this.wildNature.splice(i + 1, 1)
            }
            if (this.wildNature[i] instanceof Herbivore && i > 0 && this.wildNature[i - 1] instanceof Grass) {
                this.wildNature.splice(i - 1, 1)
            }
        }
        if (start > this.wildNature.length) {
            this.fight()
        } else {
            this.showResult()
        }
    }
    sort() {
        this.wildNature.sort(() => Math.random() - 0.5)
    }
    showResult() {
        let howManyGrasses = this.wildNature.filter(item => item instanceof Grass).length
        let howManyPredators = this.wildNature.filter(item => item instanceof Predator).length
        let howManyHerbivores = this.wildNature.filter(item => item instanceof Herbivore).length
        console.log(`травы : ${howManyGrasses} штук`)
        console.log(`хищников : ${howManyPredators} штук`)
        console.log(`травоядных : ${howManyHerbivores} штук`)
        console.log(nature.wildNature)
        if (howManyPredators > howManyGrasses && howManyPredators > howManyHerbivores) {
            console.log(`победили хищники`)
        }
        if (howManyGrasses > howManyPredators && howManyGrasses > howManyHerbivores) {
            console.log(`победили травы`)
        }
        if (howManyHerbivores > howManyGrasses && howManyHerbivores > howManyPredators) {
            console.log(`победили травоядные`)
        }
    }
}

class Grass {
    constructor(num) {
        this._name = '🌿'
        this.num = num
    }
    get name() {
        return this._name
    }
}
class Herbivore {
    constructor(num) {
        this._name = '🐄'
        this.num = num
    }
    get name() {
        return this._name
    }

}
class Predator {
    constructor(num) {
        this._name = '🐆'
        this.num = num
    }
    get name() {
        return this._name
    }

}


const nature = new Nature()

nature.pushThemUp()

