const {  bookingExperiences} = require('./../bussinessLogic/bookingBL')


const booking= (req, res) =>{
    // console.log(new Date())
    const { idExperience,  nombre, correo, fechaIngreso, 
        fechaSalida, telefono} = req.body
    try {
        const response = bookingExperiences(idExperience, nombre, correo, fechaIngreso, 
            fechaSalida, telefono) // experiences : {}
        res.json( response )
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {
    booking 
}