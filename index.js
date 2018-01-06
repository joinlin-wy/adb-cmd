/**
 * wang.yue 创建于 2017/12/30.
 */
const c = require('child_process')
let picName = '0.jpg'
let shot = `adb shell screencap -p /sdcard/shortcuts/${picName}`
let pull = `adb pull sdcard/shortcuts/${picName} ${__dirname}\\img`
exports.shot = function (callback) {
    c.exec(shot,(error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            if(callback) callback()
            return;
        }
        c.exec(pull,(error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            if(callback) callback()
        })
        console.log(pull)
    });
    console.log(shot)
}
exports.click = function (X, Y, callback) {
    let click = `adb shell input tap ${X} ${Y}`
    c.exec(click)
    console.log(click)
    if (callback) {
        callback()
    }
}
exports.swipe = function (X1, Y1, X2, Y2, time, func) {
    let swipe = `adb shell input swipe ${X1} ${Y1} ${X2} ${Y2} ${time}`
    c.exec(swipe)
    console.log(swipe)
    if (func) {
        func()
    }
}
