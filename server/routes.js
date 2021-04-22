const controller = require("./controller")

module.exports = function(app){
    app.get('/api/pets', controller.allPets)
    app.post('/api/pets', controller.createPets)
    app.get('/api/pets/:id', controller.onePet)
    app.put('/api/pets/:id', controller.updatePets)
    app.delete('/api/pets/:id', controller.deletePets)
}