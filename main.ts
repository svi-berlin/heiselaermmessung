input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    BravZustand = 80
    BravStart = input.runningTime()
    pins.servoWritePin(AnalogPin.C17, BravZustand)
})
let BravStart = 0
let BravZustand = 0
BravZustand = 80
let Testzeit = 5000
let Laermgrenze = 585
BravStart = input.runningTime()
let BravDauer = 0
let BravLimit = 30000
pins.servoWritePin(AnalogPin.C17, BravZustand)
basic.forever(function () {
    BravDauer = input.runningTime() - BravStart
    if (BravDauer > BravLimit) {
        if (BravZustand > 0) {
            BravZustand += -40
        }
    }
})
