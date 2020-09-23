const mongoose = require('mongoose')

const URL = 'mongodb+srv://db_airbnb_app:balineras1994@cluster0.nl0nc.mongodb.net/db_airbnb_app?retryWrites=true&w=majority'
mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => console.log('Error connecting with db'))
db.once('open', () => console.log('Connection with mongo success'))

module.exports = db