const mongoose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema({
    nombre: String, 
    correo: String, 
    fechaIngreso: Date, 
    fechaSalida: Date, 
    telefono: Number,
    experiences_id: String
})

const BookingModel= mongoose.model('booking', BookingSchema)

module.exports = BookingModel
