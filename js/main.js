'use strict'

var gBallSize = 100

function onBallClick(maxDiameter, elBall) {
    const randColor = getRandomColor()
    const incrementAmount = getRandomInt(20, 61)

    gBallSize += incrementAmount
    if (gBallSize + incrementAmount > maxDiameter) gBallSize = 100

    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'
    elBall.innerText = gBallSize + ''
    elBall.style.backgroundColor = randColor

}