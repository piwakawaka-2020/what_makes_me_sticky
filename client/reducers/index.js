import {combineReducers} from 'redux'

// Import your function here'

import gifs from './gifs'
import players from './players'
import score from './score'

export default combineReducers({
    gifs,
    players,
    score
})
