const express = require('express')
const request = require('superagent')

const fs = require('fs')

const router = express.Router()

router.use(express.json())

router.get('/randomCard', (req,res) => {
    //convert JSON file to JS object
    let cardJson = fs.readFileSync('./CAH.json')
    let cards = JSON.parse(cardsJson)
    return res.json('dummy card')


    // function randomNumber(max, min){
    // return Math.floor(math.random()*(max-min+1))+min
    // }
})

module.exports = router