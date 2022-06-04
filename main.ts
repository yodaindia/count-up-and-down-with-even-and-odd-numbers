input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(2 * index)
        basic.clearScreen()
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
        basic.clearScreen()
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 15; index++) {
        basic.showNumber(15 - index)
        basic.clearScreen()
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(2 * index + 1)
        basic.clearScreen()
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
	
})
