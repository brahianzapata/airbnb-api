const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors())
const port = 3001

// Mongo Connection
require('./connection/connectionDB')


// Routes
const experiencesRoutes = require('./routes/experiences')
const bookingRoutes = require('./routes/booking')


app.use('/experiences', experiencesRoutes)
/* Sample endpoints:
    -localhost:3001/experiences/all
    -localhost:3001/experiences/top5
    -localhost:3001/experiences/detail/1
*/

app.use('/booking', bookingRoutes)
/* Sample endpoints:
    -localhost:3001/booking/reserva
    -localhost:3001/booking/
    -localhost:3001/booking/1
*/



app.listen(port, () =>{
    console.log(`Server running ${port}`)
})