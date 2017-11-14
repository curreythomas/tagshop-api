require('dotenv').config()
const port = process.env.PORT || 5000
const {} = require('./dal.js')
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const { map } = require('ramda')

app.use(bodyParser.json())

app.get('/', (req, res, next) => res.send('Tagshop welcomes you to the API'))
