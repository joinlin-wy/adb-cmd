/**
 * wang.yue 创建于 2017/12/30.
 */
const express = require('express')
const path = require('path')
const fs = require('fs')
const adb = require('./index')
const app = express()
app.use('/img', express.static(path.resolve(__dirname, './img')) )
app.get('/', function (req, res) {
    // fs.readFile('index.html', function (data) {
    //     res.send(data)
    // })
    res.sendFile(path.resolve(__dirname,'index.html'))
})
  .get('/getPic', function (req, res) {
      adb.shot(function () {
          res.send('ok')
      })
  })
  .get('/click', function (req, res) {
      adb.click(req.query.X,req.query.Y,function () {
          res.send('ok')
      })
  })
  .get('/swipe',function (req,res) {
      let params = req.query
      
      adb.swipe(params.X,params.Y,params.X,params.Y,params.time,function () {
          res.send('ok')
      })
  })
let port = 80
app.listen(port, function () {
    console.log(`serving on ${port}`)
})