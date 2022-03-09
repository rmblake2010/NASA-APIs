//Declaring router
const router = require('express').Router()
const apod = require('../models/APOD')

//Routes

//Index Page
router.get('/', (req, res) => {
    console.log(apod)
    res.send('index page!')
})






//Exporting Router
module.exports = router