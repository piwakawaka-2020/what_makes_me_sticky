const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/:searchTerm', (req, res) => {
    request
    .get(`https://api.giphy.com/v1/gifs/search?api_key=ZMmzueEn8CvyZ0WfNEHoFImEi9eA4424&q=${req.params.searchTerm}&limit=7&offset=0&rating=PG-13&lang=en`)
    .end((err, result) => {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.json(result.body.data)
        }
    })
})

