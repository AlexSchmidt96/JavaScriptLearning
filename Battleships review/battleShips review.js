"use strict"
    (() => {
        let view = {
            displayMessage: function (message) {
                let messageArea = document.getElementById('messageArea')
                messageArea.innerHTML = message
            },
            displayHit: function (location) {
                let cell = document.getElementById(location)
                cell.setAttribute('class', 'hit')
            },
            displayMiss: function (location) {
                let cell = document.getElementById(location)
                cell.setAttribute('class', 'miss')
            },
        }
        let model = {
            boardSize: 6,
            numShips: 3,
            shipsSunk: 0,
            shipsLength: 3,
            ships: [
                { locations: [0, 0, 0], hits: ["", "", ""] },
                { locations: [0, 0, 0], hits: ["", "", ""] },
                { locations: [0, 0, 0], hits: ["", "", ""] },

            ],
            fire: function fire(quess) {
                for (let i = 0; i < this.numShips; i++) {
                    let ship = this.ships[i]
                    let index = ship.locations.indexOf(quess)
                    if (index >= 0) {
                        ship.hits[index] = 'hit'
                        view.displayHit(quess)
                        view.displayMessage('Попал!!')
                        if (this.isSunk(ship)) {
                            view.displayMessage('Ты потопил корабль!!')
                            this.shipsSunk++
                        }
                        return true
                    }
                }
                view.displayMiss(quess)
                view.displayMessage('Промазал!')
                return false
            },
            isSunk: function (ship) {
                for (let i = 0; i < this.shipsLength; i++) {
                    if (ship.hits[i] !== 'hit') {
                        return false
                    }
                }
                return true
            },
            generateShipLocations: function () {
                let locations;
                for (let i = 0; i < this.numShips; i++) {
                    do {
                        locations = this.generateShip()
                    } while (this.collision(locations))
                    this.ships[i].locations = locations
                }
            },
            generateShip: function () {
                let direction = Math.floor(Math.random() * 2)
                let row, col;
                if (direction === 1) {
                    row = Math.floor(Math.random() * this.boardSize)
                    col = Math.floor(Math.random() * (this.boardSize - this.shipsLength))
                } else {
                    row = Math.floor(Math.random() * (this.boardSize - this.shipsLength))
                    col = Math.floor(Math.random() * this.boardSize)
                }
                let newLocation = [];
                for (let i = 0; i < this.shipsLength; i++) {
                    if (direction === 1) {
                        newLocation.push(row + '' + (col + i))
                    } else {
                        newLocation.push((row + i) + '' + col)
                    }
                }
                return newLocation;
            },
            collision: function (locations) {
                for (let i = 0; i < this.numShips; i++) {
                    let ship = model.ships[i];
                    for (let j = 0; j < locations.length; j++) {
                        if (ship.locations.indexOf(locations[j]) >= 0) {
                            return true
                        }
                    }
                }
                return false
            }
        }
        let controller = {
            quesses: 0,
            processGuess: function (quess) {
                let location = parseGuess(quess);
                if (location) {
                    this.quesses++
                    let hit = model.fire(location)
                    if (hit && model.shipsSunk === model.numShips) {
                        view.displayMessage(`Ты потопил все корабли за ${this.quesses} попыток `)
                    }
                }
            }
        }
        function parseGuess(quess) {
            let alphabet = ["A", "B", "C", "D", "E", "F", "G"]
            if (quess === null || quess.length !== 2) {
                alert('Введите сочетание буквы и цифры с доски!')
            } else {
                let firstChar = quess.charAt(0);
                let row = alphabet.indexOf(firstChar)
                let column = quess.charAt(1)
                if (isNaN(row) || isNaN(column)) {
                    alert('Такого значения нет на доске!')
                } else if (row < 0 || row > model.boardSize || column < 0 || column > model.boardSize) {
                    alert('Значения превышают заданные на доске!')
                } else {
                    return row + column
                }
            }
            return null
        }
        function init() {
            let fireButton = document.getElementById('fireButton')
            fireButton.onclick = handleFireButton
            let quessInput = document.getElementById('quessInput')
            quessInput.onkeypress = handleKeyPress
            model.generateShipLocations();
        }
        function handleKeyPress(e) {
            let fireButton = document.getElementById('fireButton')
            if (e.keyCode === 13) {
                fireButton.click();
                return false
            }
        }
        function handleFireButton() {
            let quessInput = document.getElementById('quessInput')
            let quess = quessInput.value
            controller.processGuess(quess)
            quessInput.value = '';
        }
        window.onload = init;

    })()