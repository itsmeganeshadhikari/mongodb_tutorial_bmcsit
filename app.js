const express = require('express');
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser');
const connection = require('./src/db/connection');
const dbConnection = require('./src/db/connection');
<<<<<<< HEAD
const  userRouter  = require('./src/routes/userRoutes');
const  productRouter  = require('./src/routes/productRoutes');
const roleRouter = require('./src/routes/roleRoute');
const debug = require('debug')('app')
=======
const userRoute = require('./src/routes/userRoutes');
const productRoute = require('./src/routes/productRoute');
const roleRoute = require('./src/routes/roleRoute');
>>>>>>> 5cb374518564d83343595a845f3690db230eeab8

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
dbConnection()


app.get('/', () => console.log(`Main page`))
app.get('/home', (req, res) => res.send('Hello to home page'))
<<<<<<< HEAD
app.use('/user',userRouter)
app.use('/product',productRouter)
app.use('/role',roleRouter)
=======
app.use('/user',userRoute)
app.use('/product',productRoute)
app.use('/role',roleRoute)
>>>>>>> 5cb374518564d83343595a845f3690db230eeab8

module.exports = app
