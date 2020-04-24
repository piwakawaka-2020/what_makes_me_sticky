import {GET_CARDS} from '../actions'

function cards (state = '', action) {
    switch(action.type) {
        case GET_CARDS:
            return action.question
        default:
            return state
    }
}

export default cards