const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Bundler = require('parcel-bundler')
const path = require('path')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const file = path.join(__dirname, '../client/index.html') // Parcel endpoint file path
const options = {} // Parcel options

// Initialize a parcel bundler
const bundler = new Bundler(file, options)

// Static assets
app.use('/static' ,express.static(path.join(__dirname, '../client/public')))

// Middleware
app.use(bodyParser.json())
app.use(cors())
app.use(bundler.middleware()) // Takes over scope - register server routes and static before this!

const port = process.env.PORT || 8080

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})