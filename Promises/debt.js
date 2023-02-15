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
//         this._money = money
//         this._days = days
//         this._sanyasMoney = 0
//     }
//     get money() {
//         return this._money
//     }
//     get days() {
//         return this._days
//     }
//     get sanyasMoney() {
//         return this._sanyasMoney
//     }
//     then(resolve, reject) {
//         let debtMoney = this._money
//         setInterval(() => {
//             debtMoney -= debtMoney
//             this._sanyasMoney += 8
//             this._sanyasMoney -= 4
//             if (this._sanyasMoney >= this._money) {
//                 resolve(this.money)
//             }
//             else {
//                 reject(new Error('eбобо'))
//             }
//         }, this._days * 1)
//     }
//     catch() {
//         reject(new Error('eбобо'))
//     }
// }



// const sanya = new Sanya(10, 1);
// sanya
//     .then((money) => console.log(`Санёк вернул ${money} тысяч рублей`))
//     .catch((error) => console.log("Санёк не вернул бабки, потому что:", error.message))


function debt(money, days) {
    let debtMoney = money
    let sanyasMoney = 0
    return new Promise((resolve, reject) => {
        setTimeout(function day() {
            debtMoney -= debtMoney
            sanyasMoney += 8 - 4
            if (sanyasMoney < 0) {
                reject(new Error('eбобо'))
            } else if (sanyasMoney >= money) {
                resolve(money)
            } else {
                console.log('в следующий день верну')
                setTimeout(day, days * 1000)
            }
        }, days * 1000)

    })
}
let promise = debt(10, 1)
promise
    .then((money) => console.log(`Санёк вернул ${money} тысяч рублей`))
    .catch((error) => console.log(`Санёк не вернул бабки, потому что: `, error.message))