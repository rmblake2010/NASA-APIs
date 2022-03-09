const nodeFetch = require('node-fetch')

async function getApi (url) {
    let response = await fetch(url)
    data = await response.json()
    return data
}

let apod = getApi('https://api.nasa.gov/planetary/apod?api_key=UnDx4iebwh6FfVcaEYbfNRaB5MZRnsheFo9IPDaY').then(data => {
    apod = data
    module.exports = apod
})





