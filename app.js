const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const cors = require('cors')
const profile = require('./routes/profile.js')



app.use(cors())

app.use('/profile', profile)

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.listen(function () {
console.log("I am readyyyyyy " + port)

})
