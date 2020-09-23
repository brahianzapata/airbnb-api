const EXPERIENCES = require('./../repository/experiencesRepository')

const findAllExperiences = () => {
    return { experiences: EXPERIENCES}
}

const findTop5Experiences = () => {
    console.log(EXPERIENCES.sort())
    
    const experiencesSort = EXPERIENCES.sort((a, b) => {
        if(a.score < b.score)
            return 1;
        if(a.score > b.score)
            return -1;
        return 0;
    });
    const top5Experiences = experiencesSort.slice(0, 5);
    return { top5: top5Experiences };
}

const findDetailExperiences = (id) => {
    const experiences = EXPERIENCES.find( el => {
        return el.id === Number(id)
    })
    if( experiences === undefined) throw ('not found')
    return { experiences } // return { experiences: experiences }
}

module.exports = {
    findAllExperiences,
    findTop5Experiences,
    findDetailExperiences
}