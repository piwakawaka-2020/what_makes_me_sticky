import request from 'superagent'

export const getGifs = (gifs) => {
    return {
        type: 'GET_GIFS',
        gifs: gifs
    }
}



export function fetchGifs(searchTerm) {
    return (dispatch) => {
        return request
        // .get(`/api/v1/giphy/${searchTerm}`)
            .get(`/api/v1/giphy/hello`)
            .then(res => {
                dispatch(getGifs(res.body))
            })
    }
}