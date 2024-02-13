'use strict'

var gBallWidth = 100
var gBallHeight = 100

function onBallClick() {
    const elBall = document.querySelector('.ball')

    if (gBallHeight < 400) {
        gBallWidth += 50
        gBallHeight += 50
    
        elBall.style.width = gBallWidth + 'px'
        elBall.style.height = gBallHeight + 'px'
        elBall.innerText = gBallHeight + ''
    }
    
    else {
        elBall.style.width = '100px'
        elBall.style.height = '100px'
        elBall.innerText = '100'
        gBallHeight = 100
        gBallWidth = 100
    }
}