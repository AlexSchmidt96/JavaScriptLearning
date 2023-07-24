'use strict'

class PlayerCheckers {
    constructor(coordinates) {
        this.coordinates = coordinates
    }
}
class EnemyCheckers extends PlayerCheckers { }

class CheckersArea {
    constructor(elem) {
        this.elem = elem
        this.checkers = []
        this.chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',]
    }
    run() {
        this.createArea()
        this.generateCheckers()
        this.drawCheckers()
    }
    createArea() {
        const chars = this.chars.map((char) => `<th>${char}</th>`).join('')
        const thead = `<tr><th></th>${chars}</tr>`
        let tbody = ''
        for (let y = 1; y <= 8; y++) {
            let tr = `<th>${y}</th>`
            for (let x = 1; x <= 8; x++) {
                let className = `cell_${x}${y}`
                if ((y + x) % 2 !== 0) {
                    className += ` blackCell`
                }
                tr += `<td class="${className}"></td>`
            }
            tbody += `<tr>${tr}</tr>`
        }
        this.elem.querySelector('thead').innerHTML = thead
        this.elem.querySelector('tbody').innerHTML = tbody
    }
    generateCheckers() {
        for (let y = 1; y <= 8; y++) {
            let x = y % 2 === 0 ? 1 : 2
            for (; x <= 8; x += 2) {
                if (y <= 3) {
                    this.checkers.push(new EnemyCheckers({ x, y }))
                } else if (y >= 6) {
                    this.checkers.push(new PlayerCheckers({ x, y }))
                }
            }
        }
        console.log(this.checkers)
    }
    drawCheckers() {
        for (let i = 0; i < this.checkers.length; i++) {
            const coordinate = this.checkers[i].coordinates
            let span = document.createElement('span')
            span.className = this.checkers[i] instanceof EnemyCheckers ? 'checker black' : 'checker white'
            this.elem.querySelector(`.cell_${coordinate.x}${coordinate.y}`).append(span)
        }
    }
}

function init() {
    const area = document.getElementById('checkersArea')
    const checkersArea = new CheckersArea(area)
    checkersArea.run()
}

document.addEventListener('DOMContentLoaded', init)



