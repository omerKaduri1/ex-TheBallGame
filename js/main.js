'use strict'

function onBallClick(elBall) {
    var ballWidth = 100
    var ballHeight = 100

    ballWidth += 50
    ballHeight += 50

    elBall.style.width = ballWidth + 'px'
    elBall.style.height = ballHeight + 'px'
    elBall.innerText = ballHeight + ''
}