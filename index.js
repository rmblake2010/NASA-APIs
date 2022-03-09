//Declare Dependencies
require('dotenv').config()
const express = require('express')
const app = express()

//Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers & Routes
app.use('/apis', require('./controllers/apis'))

app.get('/', (req, res) => {
    res.redirect('/apis')
})

app.listen(process.env.PORT)