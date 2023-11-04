const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 20
let timerId = null


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquares = squares[Math.floor(Math.random() * 9)]
    randomSquares.classList.add('mole')

    hitPosition = randomSquares.id

}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 300)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game Over! Your Score is' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)