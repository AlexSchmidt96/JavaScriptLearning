'use strict'


// У нас есть класс Logist, который распределяет заказы Order по грузовикам Truck. 
// У каждого заказа есть номер и вес. Машины все одной заданной максимальной вместимости - N тонн.
// Реализовать класс логиста, который распределяет заказы с разным весом по машинам и вывести содержимое каждой машины.

// 1. Логист принимает заказ 
// 2. Логист ищет свободную машину 
// 3. Логист спрашивает машину может ли он взять заказ 
// 4. Если машина больше взять заказ не может, логист ищет другую машину
// ** Когда не смогу положить груз в машину то она поедет сама
// ** orders Инкапусляция! 
// ** Придумать что нибудь с условиями создания машин для загрузки
// ** Придумать как сравнивать максимальный вес с имеющимся и потом принимать решение о загрузке машины
// ** 1 заказ не обрабатывается! (когда он проверяет массив и не находит машину он выбрасывает заказ в помойку!)
// ** Добавить новый массив со значением на выполнении заказа  и по нему итерироваться ????


class Logist {
    constructor(maxWeight) {
        this.maxWeight = maxWeight
        this.carPark = []
        this.carOnMission = []

    }
    add(order) {
        debugger
        if (this.carPark.length === 0) {
            this.carPark.push(new Truck(this.maxWeight))
            console.log('Жду приемки заказа')
            this.carPark.forEach((truck) => {
                if (truck.weight < this.maxWeight) {
                    truck.weight += order.weight
                    truck.orders.push(order)
                }
                else {
                    console.log('я поехал')
                }
            })
        } else if (this.carPark.length > 0) {
            this.carPark.forEach((truck) => {
                if (truck.weight + order.weight > this.maxWeight) {
                    console.log('я поехал')
                    this.carOnMission.push(truck)
                }
                else {
                    console.log('Допринимаю еще заказ')
                    truck.weight += order.weight
                    truck.orders.push(order)
                }
            })
        }
        console.log(this.carPark)
    }
    *[Symbol.iterator]() {
        for (let i = 0; i < this.carOnMission.length; i++) {
            yield this.carOnMission[i]
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
    constructor(maxWeight) {
        this.weight = 0
        this.maxWeight = maxWeight
        this.orders = []
    }
    show() {
        console.log(`Машина №${this.num} (общий вес груза ${this.weight} т):
           Заказ #${this.orders}  ${this.orders}т`)
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
