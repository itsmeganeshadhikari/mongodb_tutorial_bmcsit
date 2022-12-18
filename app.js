const express = require('express');
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser');
const connection = require('./src/db/connection');
const dbConnection = require('./src/db/connection');
const userRoute = require('./src/routes/userRoutes');
const productRoute = require('./src/routes/productRoute');
const roleRoute = require('./src/routes/roleRoute');


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
dbConnection()

app.get('/', () => console.log(`Main page`))
app.get('/home', (req, res) => res.send('Hello to home page'))
app.use('/user',userRoute)
app.use('/product',productRoute)
app.use('/role',roleRoute)

module.exports = app
