'use strict'


// Создать класс Sanya, которому можно занять N тысяч рублей на K дней (но в нашем случае это секунды).
// Санёк зарабатывает 1к в час или 8к в день.
// И допустим что к концу дня он все занятые деньги и половину заработанных сливает на колу и шлюх.


// экземпляр класса Sanya принимает в себя  2 аргумента : деньги которые он получил в долг, дни за которые он должен их вернуть
// У Sanya должны быть собственные накопления которые пополняются к концу дня ( + 8000  за день) 
// но после этого  он теряет ПОЛОВИНУ своих денег и ВСЕ деньги что он взял в долг
// Когда число дней истечет Sanya должен ПРОВЕРИТЬ хватит ли у него СВОИХ денег чтобы отдать долг

// class Sanya {
//     constructor(money, days) {
//         this.money = money
//         this.days = days
//     }
//     then(onfulfilled, onrejected) {
//         const salary = 8 * this.days
//         const sanyasMoney = salary / 2
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (sanyasMoney >= this.money) {
//                     resolve(onfulfilled(this.money))
//                 } else {
//                     const error = new Error('у санька закончились деньги');
//                     if (onrejected) {
//                         onrejected(error);
//                     } else {
//                         reject(error)
//                     }
//                 }
//             }, this.days * 1000)
//         })
//     }
// }

function debt(money, days) {
    const salary = 8 * days
    const sanyasMoney = salary / 2
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sanyasMoney >= money) {
                resolve(money)
            } else {
                reject(new Error('у санька закончились деньги'))
            }
        }, days * 1000)
    })
}

// const sanya = new Sanya(10, 1);
const sanya = debt(10, 3)
sanya
    .then(
        (money) => console.log(`Санёк вернул ${money} тысяч рублей`),
        // (error) => console.log("Санёк не вернул бабки, потому что:", error.message)
    )
    .then((value) => console.log('here', value))
    .catch((error) => console.log("Санёк не вернул бабки, потому что:", error.message))