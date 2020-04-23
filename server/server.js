const path = require('path')
const express = require('express')

const giphyRoutes = require('./giphy')
const questionRoutes = require('./blackcards')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/giphy', giphyRoutes)
server.use('/api/v1/blackcards', questionRoutes)

module.exports = server
