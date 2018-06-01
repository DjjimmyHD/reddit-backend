const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const cors = require('cors')
const profile = require('./routes/profile')

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))


app.use(bodyParser.json())

app.use('/profile', profile)

app.listen(port, () =>{
    console.log(port + ' ' + ' spun up and ready to rock')
    
})