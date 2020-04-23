const path = require('path')
const express = require('express')

const server = express()

const gameRoute = require('./routes/game')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'))
})

module.exports = server

