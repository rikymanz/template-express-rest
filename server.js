// file .env
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// connessione a moongose
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const customersRouter = require('./routes/customers')
app.use('/customers', customersRouter)
// risposta del server http://localhost:3000
app.listen(3000, () => console.log('server started'))