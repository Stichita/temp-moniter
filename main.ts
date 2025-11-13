let temp = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("" + input.temperature() + "c")
    basic.clearScreen()
    basic.showIcon(IconNames.Cow)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    temp = 1.8 * input.temperature() + 32
    basic.showString("" + Math.round(temp) + "f")
    basic.clearScreen()
    basic.showIcon(IconNames.Cow)
})
