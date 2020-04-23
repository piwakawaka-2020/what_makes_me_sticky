const path = require('path')
const express = require('express')

const giphyRoutes = require('./giphy')
const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1/giphy', giphyRoutes)

module.exports = server
