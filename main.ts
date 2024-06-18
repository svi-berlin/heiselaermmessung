input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    BravZustand = 80
    BravStart = input.runningTime()
    pins.servoWritePin(AnalogPin.C17, BravZustand)
})
let Count = 0
let Aktuell = 0
let SampleStart = 0
let LaermPegel = 0
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
            pins.servoWritePin(AnalogPin.C17, BravZustand)
            BravStart = input.runningTime()
            basic.pause(500)
        }
    }
    LaermPegel = input.soundLevel()
    if (LaermPegel < Laermgrenze) {
        basic.showIcon(IconNames.Happy)
        basic.setLedColor(0x00ff00)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.setLedColor(0xff0000)
        SampleStart = input.runningTime()
        Aktuell = input.runningTime()
        Count = 0
        while (Aktuell - SampleStart < Testzeit) {
            LaermPegel = input.soundLevel()
            if (LaermPegel > Laermgrenze) {
                Count += 1
            }
            led.plotBarGraph(
            Count,
            25
            )
            basic.pause(10)
            Aktuell = input.runningTime()
        }
    }
})
