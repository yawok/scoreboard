let homeScore = document.getElementById('homeScore')
let awayScore = document.getElementById('awayScore')
let currentHomeScore = 0
let currentAwayScore = 0

function increaseHomeScore(point) {
    currentHomeScore += point 
}

function increaseAwayScore(point) {
    currentAwayScore += point
}

function renderHomeScore() {
    homeScore.innerText = currentHomeScore
}

function renderAwayScore() {
    awayScore.innerText = currentAwayScore
}

function homePlus1 () {
    increaseHomeScore(1)
    renderHomeScore()
}

function homePlus2 () {
    increaseHomeScore(2)
    renderHomeScore()
}

function homePlus3 () {
    increaseHomeScore(3)
    renderHomeScore()
}

function awayPlus1 () {
    increaseAwayScore(1)
    renderAwayScore()
}

function awayPlus2 () {
    increaseAwayScore(2)
    renderAwayScore()
}

function awayPlus3 () {
    increaseAwayScore(3)
    renderAwayScore()
}