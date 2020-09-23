require('../connection/connectionDB')
const bookingModel = require('../models/bookingModel')

const EXPERIENCES_REPOSITORY = require('../repository/experiencesRepository')

const bookingPopulate = () =>{
    
    EXPERIENCES_REPOSITORY.map(async experience => { 
        try {
            if ( experience.reservas.length === 0 ){
                console.log('No hay reservas')
            }else{
                experience.reservas.map( async booking => {
                    await bookingModel(booking).save()
                    console.log('populate booking', booking)
                })
            }
        } catch (error) {
            console.log('Error', error)
        }
    })
}

bookingPopulate()