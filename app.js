var upLimit = document.querySelector("#topLimit")
var scores = document.querySelector("#scoreText")
var playerOneScore = 0
var playerTwoScore = 0
var reset = 0

upLimit.addEventListener("input", () => {
    upLimit = document.querySelector("#topLimit")
    console.log(upLimit.value)
})

document.querySelector("#playerOne").addEventListener("click", () => {
    if (playerOneScore != upLimit.value && playerTwoScore != upLimit.value) {
        playerOneScore++
        console.log(playerOneScore)
        reset = 0
        updateScore(playerOneScore, playerTwoScore)
    }
})

document.querySelector("#playerTwo").addEventListener("click", () => {
    if (playerOneScore != upLimit.value && playerTwoScore != upLimit.value) {
        playerTwoScore++
        console.log(playerTwoScore)
        reset = 0
        updateScore(playerOneScore, playerTwoScore)
    }
})

document.querySelector("#reset").addEventListener("click", () => {
    playerOneScore = 0
    playerTwoScore = 0
    reset = 1
    updateScore(playerOneScore, playerTwoScore)
})





function updateScore(playerOneScore, playerTwoScore) { 
    console.log(upLimit.value)
    if (reset == 1) {
        scores.innerText = "0 to 0"
    }
    else {
        var text = `${playerOneScore} to ${playerTwoScore}`
        if (playerOneScore == upLimit.value) {
            scores.innerHTML = `<span style="color: green;"> ${playerOneScore}</span> to <span style="color: red;"> ${playerTwoScore}</span>`
        }
        else if (playerTwoScore == upLimit.value) {
            scores.innerHTML = `<span style="color: red;"> ${playerOneScore}</span> to <span style="color: green;"> ${playerTwoScore}</span>`
        }
        else {
            scores.innerText = text
        }
    }
}