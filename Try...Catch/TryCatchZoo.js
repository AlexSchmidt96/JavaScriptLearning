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
    givePill(beast) {
        let probability = Math.random()
        if (probability > 0.25) {
            beast.takePill()
            console.log(`${beast.name}: принял таблетку и у него ${beast.health} здоровья`)
        }
    }
    checking() {
        this.#listOfAnimals.forEach((beast, index) => {
            try {
                beast.check()
                this.givePill(beast)
            } catch (error) {
                if (error instanceof ReanimatableDeathError) {
                    this.reanimation(beast)
                } else if (error instanceof UnreanimatableDeathError) {
                    this.funeral(index, beast)
                    if (this.#listOfAnimals.length === 0) {
                        this.quit()
                    }
                } else {
                    throw error
                }
            }
        })
        this.timerId = setTimeout(() => { this.checking() }, 10000)
    }
    reanimation(beast) {
        console.log(`${beast.name}: реанимируем!`)
        beast.reanimate()
    }
    funeral(index, beast) {
        this.#listOfAnimals.splice(index, 1)
        console.log(`${beast.name}: он похоронен`)
    }
    quit() {
        console.log('Я увольняюсь')
        clearInterval(this.timerId)
    }
}

class ReanimatableDeathError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class UnreanimatableDeathError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class Animal {
    constructor(name) {
        this._name = name
        this._health = 0
        this._stomach = 0
    }
    get name() {
        return this._name
    }
    get health() {
        return this._health
    }
    check() {
        if (this._stomach === -1) {
            if (this.health >= 3) {
                throw new ReanimatableDeathError(`${this.name}: умирает!`)
            } else {
                throw new UnreanimatableDeathError(`${this.name}: умeр!`)
            }
        }
        this.#absorb()
    }
    takePill() {
        this._stomach++
        this._health++
    }
    reanimate() {
        this._stomach = 0
        this._health = 0
    }
    #absorb() {
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