function gifs(state = [], action) {
    switch (action.type) {
        case 'GET_GIFS':
            return action.gifs
        default:
            return state
    }
}

export default gifs