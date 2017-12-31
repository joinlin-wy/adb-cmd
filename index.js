/**
 * wang.yue 创建于 2017/12/30.
 */
const c = require('child_process')
let picName = '0.jpg'
let shot = 'adb shell screencap -p /sdcard/shortcuts/'+picName
let pull = 'adb pull sdcard/shortcuts/'+picName+' '+__dirname+'\\img'
exports.shot = function (callback) {
    c.exec(shot)
    console.log(shot)
    setTimeout(function () {
        c.exec(pull)
        console.log(pull)
        if(callback) callback()
    },2000)
}
exports.click = function (X, Y, callback) {
    var click = 'adb shell input tap ' + X + ' ' + Y
    c.exec(click)
    console.log(click)
    if(callback) callback()
}
exports.swipe = function (X1,Y1,X2,Y2,time,func) {
    var swipe = 'adb shell input swipe '+X1+' '+Y1+' '+X2+' '+Y2+' '+time
    c.exec(swipe)
    console.log(swipe)
    if(func) func()
}
// let schedule = require('node-schedule');
// console.log(schedule)
// let j = schedule.scheduleJob('*/5 * * * * *', function(){
//     console.log('The answer to life, the universe, and everything!');
// });