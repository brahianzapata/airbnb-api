require('./../connection/connectionDB')
const experiencesModel = require('./../models/experiencesModel')

const EXPERIENCES_REPOSITORY = require('./../repository/experiencesRepository')

const experiencesPopulate = () =>{
    
    EXPERIENCES_REPOSITORY.map(async experience => { 
        try {
            await experiencesModel(experience).save()
            console.log('populate experience', experience)
        } catch (error) {
            console.log('Error', error)
        }
    })
}

experiencesPopulate()