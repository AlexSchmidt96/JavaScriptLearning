'use strict'


// У нас есть класс Logist, который распределяет заказы Order по грузовикам Truck. 
// У каждого заказа есть номер и вес. Машины все одной заданной максимальной вместимости - N тонн.
// Реализовать класс логиста, который распределяет заказы с разным весом по машинам и вывести содержимое каждой машины.

// 1. Логист принимает заказ 
// 2. Логист ищет свободную машину 
// 3. Логист спрашивает машину может ли он взять заказ 
// 4. Если машина больше взять заказ не может, логист ищет другую машину
// ** orders Инкапусляция! 
// ** Придумать что нибудь с условиями создания машин для загрузки
// ** Придумать как сравнивать максимальный вес с имеющимся и потом принимать решение о загрузке машины
// ** 1 заказ не обрабатывается! (когда он проверяет массив и не находит машину он выбрасывает заказ в помойку!)
// ** Добавить новый массив со значением на выполнении заказа  и по нему итерироваться ????
// ** Проверка не должна быть всех машин а только актуальной!
// ** Разобраться с нумерацией , она добавляется всем машинам одновременно а надо чтобы по отдельности!
// ** Номер добавляется когда машина приезжает в парк логистом


class Logist {
    constructor(maxWeight) {
        this.maxWeight = maxWeight
        this.carPark = []
    }
    add(order) {
        if (this.carPark.length === 0) {
            this.carPark.push(new Truck())
            for (let i = 0; i < this.carPark.length; i++) {
                // console.log('Жду приемки заказа')
                this.carPark[i].num = this.carPark.length // номер машины зависит от времени заезда в парк! Машина приехавшая первой, становится 1ым номером и тд
                this.carPark[i].weight += order.weight
                this.carPark[i].orders.push(order)
            }
        } else if (this.carPark.length > 0) {
            for (let i = this.carPark.length - 1; i < this.carPark.length; i++) {
                if (this.carPark[i].weight + order.weight > this.maxWeight) {
                    this.carPark.push(new Truck())
                    // console.log('Вызываю новую машину')
                }
                else {
                    this.carPark[i].weight += order.weight
                    this.carPark[i].orders.push(order)
                    this.carPark[i].num = this.carPark.length
                }
            }
        }
        // console.log(this.carPark)
    }
    *[Symbol.iterator]() {
        for (let i = 0; i < this.carPark.length; i++) {
            yield this.carPark[i]
        }
    }
}

class Order {
    constructor(num, weight) {
        this.num = num
        this.weight = weight
    }
}
class Truck {
    constructor() {
        this.weight = 0
        this.orders = []
        this.num = 0
    }
    show() {
        console.log(`Машина №${this.num} (общий вес груза ${this.weight}т): `)
        for (let i = 0; i < this.orders.length; i++) {
            console.log(` Заказ #${this.orders[i].num}  ${this.orders[i].weight}т`)
        }
    }
}



// Следующий код

const logist = new Logist(10);

logist.add(new Order(1, 2));
logist.add(new Order(2, 5));
logist.add(new Order(3, 4));
logist.add(new Order(4, 4));
logist.add(new Order(5, 1));
logist.add(new Order(6, 2));


for (const truck of logist) {
    truck.show();
}


// должен вывести

// Машина №1 (общий вес груза 7т):
//   Заказ #1 2т
//   Заказ #2 5т
// Машина №2 (общий вес груза 9т):
//   Заказ #3 4т
//   Заказ #4 4т
//   Заказ #5 1т
// Машина №3 (общий вес груза 2т):
//   Заказ #6 2т
