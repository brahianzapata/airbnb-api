require('../connection/connectionDB')
const bookingModel = require('../models/bookingModel')
const ExperiencesModel = require('../models/experiencesModel')

const bookingExperiences = async (idExperience, nombre, correo, fechaIngreso, 
    fechaSalida, telefono) => {
    
    const experiences =  await ExperiencesModel.findById( idExperience)

    if( experiences === undefined)
    {
        throw ('not found experiences')
    } else{
        let puedeReserva = true
        experiences.reservas.forEach(reserva => {
            if( (new Date(reserva.fechaIngreso).getTime() <=  new Date(fechaIngreso).getTime() && 
                new Date(fechaIngreso).getTime() <= new Date(reserva.fechaSalida).getTime()) || !puedeReserva)
            {   
               
                console.log('No Disponible 1')
                puedeReserva = false
                return
                
            }else{
                var dias =  (new Date(fechaSalida) - new Date(fechaIngreso))/(1000*60*60*24)
                var fecha = new Date(fechaIngreso)
                for (let index = 0; index < dias; index++) {
                    fecha.setDate(fecha.getDate() + 1)
                    if(new Date(reserva.fechaIngreso) <=  new Date(fecha)&& 
                    new Date(fecha)<= new Date(reserva.fechaSalida))
                    {
                        console.log('No Disponible 2')
                        puedeReserva = false
                        return 
                    }else
                    {
                        console.log('Disponible')
                        puedeReserva = true
                    }
                }       
            }
        })
        console.log(puedeReserva)
        if (puedeReserva){
            try {
                const booking = {
                    idExperience: idExperience,
                    nombre: nombre, 
                    correo: correo, 
                    fechaIngreso: fechaIngreso, 
                    fechaSalida: fechaSalida, 
                    telefono: telefono
                }
                await bookingModel(booking).save()
                return { success : 'Se reservo correctamente'} 
            } catch (error) {
                console.log('Error', error)
                return { success : 'No disponible'} 
            }
        }
    }
}

module.exports = {
    bookingExperiences
}