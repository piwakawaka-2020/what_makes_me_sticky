import {combineReducers} from 'redux'

// Import your function here'
import cards from './cards'
import gifs from './gifs'
import players from './players'
import score from './score'

export default combineReducers({
    cards,
    gifs,
    players,
    score
})
