let startElement = document.getElementById("startId")
let gameElement = document.getElementById("gameId")
let buttons = document.querySelectorAll(".btnPick")
let randomNumber = document.getElementById("randomNumber")
let scoreElement = document.getElementById("scoreId")
let timeElement = document.getElementById("timeId")
let picked = 0
let score = 0
let seconds = 5
let timer 

function down() {
    timeElement.innerHTML = "You have " + seconds + " seconds left"
    seconds = seconds - 1
    if (seconds == -1) {
        alert("Game over because you are too slowwwwwwwww!")
        lose()
    }
}

function play() {
    seconds = 5
    scoreElement.innerHTML = "score: " + score
    score++
    picked = randomInteger(1, 3)
    randomNumber.innerHTML = picked
    if (timer) {
        clearInterval(timer)
    }
    down()
    timer = setInterval(down, 1000)
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkPick(n) {
    if (n == picked) {
        play()
    }
    else {
        alert(`Game over because you clicked on ${n} instead of on ${picked}!`)
        lose()
    }
}

function lose() {
    clearInterval(timer)
    score = 0
    for (let button of buttons) {
        button.classList.remove("animate")
    }
    gameElement.hidden = true
    startElement.hidden = false
}

function start() {
    for (let button of buttons) {
        button.classList.add("animate")
    }
    gameElement.hidden = false
    play()
    startElement.hidden = true
}