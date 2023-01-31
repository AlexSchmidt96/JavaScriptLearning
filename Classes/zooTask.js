"use strict"

// TO DO //


// ЗООПАРК
// Есть звери, которые умеют кушать, играть (при этом у них тратятся силы) и спать (при этом у них восполняются силы)
// Есть работник зоопарка, который умеет кормить зверей
// Этот работник обходит зоопарк каждые 10 секунд и по очереди кормит каждого зверя
// И когда он их накормил, звери говорят "спасибо, я покушал" и если у них есть силы, то начинают играть
// Звери: Жираф, слон, гепард, леопард


class Animal {
    constructor(name) {
        this._name = name
        this.power = 0
    }
    eat() {
        console.log(`${this._name}: Спасибо, покушал`)
        this.play()
    }
    play() {
        if (this.power !== 0) {
            console.log(`${this._name}: Время играть`)
            this.power--
        } else {
            console.log(`${this._name}: нужно поспать`)
            this.sleep()
        }
    }
    sleep() {
        console.log(`${this._name}: спит`)
        this.power++
    }
}

class Giraffe extends Animal { }
class Elephant extends Animal { }
class Gepard extends Animal { }
class Leopard extends Animal { }

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
            this.#listOfAnimals.forEach((item) => item.eat())
        }, 1000)
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






