const mongoose = require('mongoose')
const { Schema } = mongoose
var Booking = require('./bookingModel')

const ExperienceSchema = new Schema({
    image: String,
    title: String,
    description: String,
    place: String,
    score: Number,
    users: Number,
    reservas:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking'}]
})

const experiencesModel = mongoose.model('experiences', ExperienceSchema)

module.exports = experiencesModel