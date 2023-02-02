"use strict"

// TO DO //


// ЗООПАРК
// Есть звери, которые умеют кушать, играть (при этом у них тратятся силы) и спать (при этом у них восполняются силы)
// Есть работник зоопарка, который умеет кормить зверей
// Этот работник обходит зоопарк каждые 10 секунд и по очереди кормит каждого зверя
// И когда он их накормил, звери говорят "спасибо, я покушал" и если у них есть силы, то начинают играть
// Звери: Жираф, слон, гепард, леопард

// Дополнение
// Теперь наши животные не просто едят 1 крошку, они получают случайную порцию от сторожа. 
// И силы животного теперь зависят от еды. 
// Во время сна еда усваивается организмом и дает ему силы. 
// У каждого животного свой метаболизм и необходимое для восполнения сил количество еды.

// Псевдокод
// 1. Еда которую едят животные должна быть случайной 
// 2. Сделать силу зависимой от количества поглощенной еды
// 3. Во время сна сила восполняется от количество поглощенной еды
// 4. Дать каждому животному свой параметр добавления еды к силе от кол-ва поглощенной еды
// 


class Animal {
    _efficiencyСoefficient = 0
    constructor(name) {
        this._name = name
        this._stomach = 0
        this._power = 0
    }
    eat(food) {
        this._stomach += food
        console.log(`${this._name}: Спасибо, покушал`)
        this.play()
    }
    play() {

        if (this._power >= 2) {
            console.log(`${this._name}: Время  играть`)
            this._power -= 2
        } else {
            console.log(`${this._name}: нужно поспать`)
            this.sleep()
        }
    }
    sleep() {
        console.log(`${this._name}: спит`)
        this._power += this._stomach / this._efficiencyСoefficient
    }
}

class Giraffe extends Animal {
    _efficiencyСoefficient = 4
}
class Elephant extends Animal {
    _efficiencyСoefficient = 5
}
class Gepard extends Animal {
    _efficiencyСoefficient = 3
}
class Leopard extends Animal {
    _efficiencyСoefficient = 2
}

class ZooWorker {
    #name;
    #listOfAnimals;
    constructor(listOfAnimals) {
        this.#name = this.constructor.name
        this.#listOfAnimals = listOfAnimals
    }
    feeding;
    feed() {
        this.feeding = setInterval(() => {
            this.#listOfAnimals.forEach((item) => {
                let food = Math.floor(Math.random() * 10)
                item.eat(food)
            })
        }, 10000)
    }
    stopFeeding() {
        clearInterval(this.feeding)
    }
}
const giraffe = new Giraffe('Жираф')
const elephant = new Elephant('Слон')
const gepard = new Gepard('Гепард')
const leopard = new Leopard('Леопард')
const zooWorker = new ZooWorker([giraffe, elephant, gepard, leopard])


// zooWorker.feed()
