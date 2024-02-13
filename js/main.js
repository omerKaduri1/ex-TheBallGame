'use strict'

var gBallSize= 100

function onBallClick() {
    const elBall = document.querySelector('.ball')
    const incrementAmount = getRandomInt(20, 61)

    gBallSize += incrementAmount

    if (gBallSize + incrementAmount > 400) {
        elBall.style.width = '100px'
        elBall.style.height = '100px'
        elBall.innerText = gBallSize + ''
        gBallSize = 100
    }

        elBall.style.width = gBallSize + 'px'
        elBall.style.height = gBallSize + 'px'
        elBall.innerText = gBallSize + ''

}