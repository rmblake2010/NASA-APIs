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

app.get('/', (req, res) => {
    res.send(`
        <h1>Front Page</h1>
    `)
})

app.listen(process.env.PORT)