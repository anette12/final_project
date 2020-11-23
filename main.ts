input.onPinPressed(TouchPin.P0, function () {
    if (start) {
        Time_passed = 0
        if (Day_night == "Day") {
            start = false
            Water_food = randint(0, 5)
            if (Water_food % 2 == 0) {
                Giraffe_leave()
                for (let index = 0; index < Water_food; index++) {
                    Water()
                    basic.pause(300)
                }
                Giraffe_enter()
            } else {
                Giraffe_turn()
                for (let index = 0; index < Water_food; index++) {
                    Food()
                }
            }
            score += 100
            start = true
        }
    }
})
function Dance () {
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # . .
        # # # . .
        # . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # . .
        . . # . .
        . . # # #
        . . # . #
        `)
    basic.pause(500)
}
function Giraffe_leave () {
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # . .
        # # # . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . # . . .
        # # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # . . . .
        # . . . .
        # . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    if (start == false) {
        end = 0
        Time_passed = 0
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showString("WELCOME!")
        Giraffe_enter()
        start = true
    }
})
function Giraffe_sleep () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # .
        # # # # .
        `)
}
function Night () {
    basic.showLeds(`
        . # # # .
        # # . . .
        # # . . .
        # # . . #
        . # # # .
        `)
    basic.pause(300)
    basic.showLeds(`
        . # # # .
        # # . . #
        # # . . .
        # # . . .
        . # # # .
        `)
    basic.pause(300)
}
function Day () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.pause(200)
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        # # # # #
        . # . # .
        `)
    basic.pause(200)
}
input.onButtonPressed(Button.B, function () {
    start = false
    sleep = false
    light2 = input.lightLevel()
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    basic.showString("SCORE:")
    basic.showNumber(Math.round(score / 3) + 100)
    if (score >= 100 && score <= 250) {
        basic.showString("EXCELLENT CARE!!")
        basic.showIcon(IconNames.Happy)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else if (score >= 50 && score <= 99) {
        basic.showString("YOU CAN DO BETTER")
        basic.showIcon(IconNames.Asleep)
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (score >= 0 && score <= 50) {
        basic.showString("TRY AGAIN")
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    basic.showString(" GOODBYE!")
    basic.clearScreen()
    score = 0
    end = 1
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    if (start) {
        if (Day_night == "Night") {
            start = false
            sleep = true
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # .
                # # # . .
                # . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # .
                # . # . .
                `)
            score += 50
            start = true
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (start) {
        Time_passed = 0
        if (Day_night == "Day") {
            start = false
            for (let index = 0; index < randint(0, 5); index++) {
                Excercise()
            }
            score += 200
            start = true
        }
    }
})
function Giraffe_wakeup () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        # # # . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # . .
        # # # . .
        # . # . .
        `)
}
input.onGesture(Gesture.TiltRight, function () {
    if (input.lightLevel() >= 128) {
        for (let index = 0; index <= 2; index++) {
            music.playMelody("C5 G D C5 G D B F ", 259)
            Dance()
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    }
})
function Giraffe_turn () {
    basic.showLeds(`
        . . . . .
        # # . . .
        . # . . .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . . # . .
        . . # # #
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . # .
        . . . # #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . . . #
        . . . . #
        . . . . #
        `)
}
function Giraffe_enter () {
    basic.showLeds(`
        . . . . .
        # # . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . # . . .
        # # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # . .
        # # # . .
        # . # . .
        `)
}
function Excercise () {
    basic.showLeds(`
        . . # # .
        . . # . .
        # # # . .
        # . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # . .
        # # # . .
        # . # . .
        `)
}
function Water () {
    basic.showLeds(`
        . . . . .
        # # . . .
        # . . . .
        # . . . .
        # . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        # . # . .
        # . # # #
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # . . . .
        # . . . .
        # . # # #
        `)
}
function Food () {
    basic.showLeds(`
        . . . . .
        . . . # #
        . . . . #
        . . . . #
        # # # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . # . #
        # # # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . . . #
        . . . . #
        # # # . #
        `)
}
function Giraffe () {
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # . .
        # # # . .
        # . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # . .
        . . # . .
        # # # . .
        # . # . .
        `)
    basic.pause(1000)
}
let end = 0
let score = 0
let Water_food = 0
let Day_night = ""
let Time_passed = 0
let light2 = 0
let sleep = false
let start = false
start = false
sleep = false
light2 = input.lightLevel()
basic.forever(function () {
    while (Time_passed > 10) {
        led.plot(0, 0)
        basic.pause(200)
        led.unplot(0, 0)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (sleep == false && start == false) {
        Time_passed += 1
        basic.pause(1000)
    }
})
basic.forever(function () {
    if (start) {
        if (sleep) {
            while (sleep == true) {
                if (light2 == input.lightLevel()) {
                    Giraffe_sleep()
                } else if (input.pinIsPressed(TouchPin.P2)) {
                    start = false
                    sleep = false
                    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.OnceInBackground)
                    Time_passed = 0
                    Giraffe_wakeup()
                    score += 50
                    start = true
                }
            }
        }
        Giraffe()
        if (light2 != input.lightLevel()) {
            if (input.lightLevel() < 128) {
                basic.clearScreen()
                Day_night = "Night"
                for (let index = 0; index < 2; index++) {
                    Night()
                }
            } else if (input.lightLevel() >= 128) {
                basic.clearScreen()
                Day_night = "Day"
                for (let index = 0; index < 2; index++) {
                    Day()
                }
            }
            light2 = input.lightLevel()
        }
    } else if (end == 1) {
        basic.clearScreen()
    }
})
