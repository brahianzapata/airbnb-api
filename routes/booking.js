var router = require('express').Router()
const {  booking } = require('./../controllers/bookingCtrl')


router.post('/reserva', booking)


module.exports = router