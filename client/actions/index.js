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
  console.log(searchTerm)
  return (dispatch) => {
    return request
      .get(`/api/v1/giphy/${searchTerm}`)
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
        return dispatch(getQuestion(res.body))
      })
  }
}