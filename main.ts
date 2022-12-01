input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index - 1, 0)
        led.plot(3, index)
        led.plot(index - 1, 4)
    }
})
