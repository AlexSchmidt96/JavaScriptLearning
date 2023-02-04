"use strict";

// По мотивам задания “Зоопарк”.

// Жил был ветеринар-джун и была у него клиника, куда приводили лечиться животных.
// И все доверяли ему, но он был растяпа.

// Ветеринар каждые 10 секунд делает обход по зверям, проверяет их самочувствие с помощью их метода check
// и даёт таблетку.
// Но с вероятностью в 25% он забывает дать таблетку одному из животных
// и поэтому в следующий раз когда он будет проверять их самочувствие
// - животное умирает с помощью прокидывания кастомной ошибки.
// Но это еще не конец! Если этому животному давали таблетки хотя-бы 3 раза,
// то ветеринар может реанимировать животное.
// В противном случае, ветеринар кричит “ай ай, барсик умер”,
// хоронит его и больше не проверяет его самочувствие.

//Псевдокод
//1.Есть класс ветеринар
//2.Есть класс животное и наследуемые от него классы животных (взять из задания "зоопарк") 
//3.У животных есть метод check() каждые 10 секунд при проверки исполняется метод givePill в котором он  дает таблетку животному
//4.Есть вероятность 25% процентов что он не даст таблетку пробросит ошибку что животное умирает
//5.Должна пройти проверка на "Если животное давали 3 раза таблетку === true", то сработает метод reanimation()
//6. else console.log('ай ай this.name умер') и сработает метод funeral()
//7. После этого исполнения метода check() к этому животному не должно осуществляться 


class Veterinarian {
    #name;
    #listOfAnimals;
    constructor(listOfAnimals) {
        this.#name = this.constructor.name
        this.#listOfAnimals = listOfAnimals
    }
    givingPill;
    givePill(item) {
        let probability = Math.random()
        if (probability > 0.25) {
            item.takePill()
            console.log(`${item._name}: принял таблетку и у него ${item._health} здоровья`)
        }
    }
    checking() {
        this.status = setInterval(() => {
            this.#listOfAnimals.forEach((item, index) => {
                try {
                    item.check()
                    this.givePill(item)
                } catch (error) {
                    if (item._health >= 3) {
                        console.log(`${item._name}: Начинаем реанимацию!`)
                        this.reanimation(item)
                    } else {
                        this.funeral(index, item)
                    }
                }
            })
        }, 10000)
    }
    reanimation(item) {
        console.log(`${item._name}: реанимируем!`)
        this.givePill(item)
    }
    funeral(index, item) {
        this.#listOfAnimals.splice(index, 1)
        console.log(`${item._name} : он умер`)
    }

}

class Animal {
    constructor(name) {
        this._name = name
        this._health = 0
        this._stomach = 0
    }
    check() {
        if (this._stomach === -1) {
            throw new ZooError(`${this._name}: умирает!`)
        }
        this.absorb()
    }
    takePill() {
        this._stomach++
        this._health++
    }
    absorb() {
        this._stomach--
    }
}

class Giraffe extends Animal { }
class Elephant extends Animal { }
class Gepard extends Animal { }
class Leopard extends Animal { }

const animal = new Animal()
const giraffe = new Giraffe('Жираф')
const elephant = new Elephant('Слон')
const gepard = new Gepard('Гепард')
const leopard = new Leopard('Леопард')
const veterinarian = new Veterinarian([giraffe, elephant, gepard, leopard])

veterinarian.checking()