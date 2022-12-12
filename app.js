const express = require('express');
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const dbConnection = require('./src/db/connection');
const debug = require('debug')('app')


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
dbConnection()
app.get('/', () => console.log(`Main page`))
app.get('/home', (req, res) => res.send('Hello to home page'))

module.exports = app
