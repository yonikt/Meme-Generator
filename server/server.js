const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const app = express()
const port = 4976


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  next()
})


app.get('/memes', function (req, res) {
    request.get("https://api.imgflip.com/get_memes", function (error, response) {
        let resp = JSON.parse(response.body)
        res.send(resp)

    })
})


app.listen(port, function () {
  console.log("Server is up on port " + port)
})