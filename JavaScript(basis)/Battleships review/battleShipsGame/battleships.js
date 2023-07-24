const UP_DIRECTION = 1
const DOWN_DIRECTION = 2
const LEFT_DIRECTION = 3
const RIGHT_DIRECTION = 4

class Ship {
    constructor(coordinates) {
        this.coordinates = coordinates
    }
    isFree(x, y) {
        for (let i = 0; i < this.coordinates.length; i++) {
            const coordinate = this.coordinates[i]
            if (
                (x === coordinate.x && y === coordinate.y) ||
                (x - 1 === coordinate.x && y === coordinate.y) ||
                (x === coordinate.x && y - 1 === coordinate.y) ||
                (x + 1 === coordinate.x && y === coordinate.y) ||
                (x + 1 === coordinate.x && y - 1 === coordinate.y) ||
                (x === coordinate.x && y + 1 === coordinate.y) ||
                (x - 1 === coordinate.x && y - 1 === coordinate.y) ||
                (x - 1 === coordinate.x && y + 1 === coordinate.y) ||
                (x + 1 === coordinate.x && y + 1 === coordinate.y)
            ) {
                return false
            }
        }
        return true
    }

}

class BattleshipArea {
    constructor(elem) {
        this.elem = elem
        this.ships = []
        this.sizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
        this.chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    }
    createArea() {
        const chars = this.chars.map((char) => `<th>${char}</th>`).join('')
        const thead = `<tr><th></th>${chars}</tr>`
        let tbody = ''
        for (let y = 1; y <= 10; y++) {
            let tr = `<th>${y}</th>`
            for (let x = 1; x <= 10; x++) {
                tr += `<td class="cell_${x}${y}"></td>`
            }
            tbody += `<tr>${tr}</tr>`
        }
        this.elem.querySelector('thead').innerHTML = thead
        this.elem.querySelector('tbody').innerHTML = tbody
    }
    getRandomArbitrary(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    insert(size) {
        let x = this.getRandomArbitrary(1, 10)
        let y = this.getRandomArbitrary(1, 10)
        const direction = this.getRandomArbitrary(UP_DIRECTION, RIGHT_DIRECTION)
        const coordinates = []
        try {
            for (let i = 0; i < size; i++) {
                console.log(x, y)
                // проверка на корабль
                if (!this.canPut(x, y)) {
                    throw new Error('место занято другим кораблем')
                }
                // проверка границ
                if (x > 10 || x < 1 || y > 10 || y < 1) {
                    throw new Error('выход за границу!')
                }
                coordinates.push({ x, y })
                console.log(`часть корабля поставлена на ${x} и ${y} координат `)
                // проверка сторон
                switch (direction) {
                    case UP_DIRECTION:
                        y -= 1
                        break
                    case DOWN_DIRECTION:
                        y += 1
                        break
                    case LEFT_DIRECTION:
                        x -= 1
                        break
                    case RIGHT_DIRECTION:
                        x += 1
                        break
                }
            }
            this.ships.push(new Ship(coordinates))
            console.log('поставил корабль', coordinates.map(({ x, y }) => `${x},${y}`).join(' | '))
        } catch (e) {
            console.log(e.message)
            console.log('переставляем')
            this.insert(size)
        }
    }
    canPut(x, y) {
        for (let i = 0; i < this.ships.length; i++) {
            const ship = this.ships[i]
            if (!ship.isFree(x, y)) {
                return false
            }
        }
        return true
    }
    generateShips() {
        for (let i = 0; i < this.sizes.length; i++) {
            this.insert(this.sizes[i])
        }
        this.drawShips()
    }
    drawShips() {
        for (let i = 0; i < this.ships.length; i++) {
            for (let j = 0; j < this.ships[i].coordinates.length; j++) {
                const coordinate = this.ships[i].coordinates[j]
                console.log(coordinate)
                this.elem.querySelector(`.cell_${coordinate.x}${coordinate.y}`).classList.add("ship")
            }
        }
    }
}

function init() {
    const playerArea = document.getElementById('playerArea')
    const enemyArea = document.getElementById('enemyArea')

    const battleshipPlayerArea = new BattleshipArea(playerArea)
    const battleshipEnemyArea = new BattleshipArea(enemyArea)

    battleshipPlayerArea.createArea()
    battleshipEnemyArea.createArea()

    battleshipPlayerArea.generateShips()
    battleshipEnemyArea.generateShips()
}

document.addEventListener('DOMContentLoaded', init)

