const path = require('path')
const express = require('express')
const request = require('superagent')

const fs = require('fs')

const router = express.Router()

router.use(express.json())

router.get('/randomCard', (req,res) => {
    //convert JSON file to JS object
    let cardsJson = fs.readFileSync(path.resolve(__dirname, '../public/CAH.json'))
    let cards = JSON.parse(cardsJson)
    let randomCard = Math.floor(Math.random()*(cards.blackCards.length - 0 + 1)) + 0
    return res.json(cards.blackCards[randomCard].text)

})

module.exports = router


//ALICES CODE 


// REDUCER
// import {  } from "../components/Question"

// const initialState = []


// //This gets question, adds question and deletes question
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_QUESTION:
//       return action.question
//     case ADD_QUESTION:
//       return action.question
//     case 'DEL_QUESTION':
//       return state.filter((question) => question !== action.question)
//     default:
//       return state
//   }
// }

// export default reducer