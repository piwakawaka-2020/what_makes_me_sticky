import request from 'superagent'

export const GET_CARDS = 'GET_CARDS'

export const getGifs = (gifs) => {
    return {
        type: 'GET_GIFS',
        gifs: gifs
    }
}

export const getQuestion = (card) => {
    return {
        type: 'GET_CARDS',
        question: card
    }
}

export function fetchGifs(searchTerm) {
    return (dispatch) => {
        return request
        .get(`/api/v1/giphy/${searchTerm}`)
            // .get(`/api/v1/giphy/hello`)
            .then(res => {
                dispatch(getGifs(res.body))
            })
    }
}

export function getRandomCard() {
    return (dispatch) => {
        return request
        .get('/api/v1/blackcards/randomCard')
        .then(res => {
            dispatch(getQuestion(res.body))
        })
    }
}