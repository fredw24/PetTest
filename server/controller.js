const Pet = require("./model")

module.exports = {

    allPets: (req,res)=>{
        Pet.find({})
                .then(data=>res.json(data))
                .catch(err=>res.json(err))

    },
    createPets: (req,res)=>{
        Pet.create(req.body)
                .then(data=>res.json(data))
                .catch(err=>res.json(err))

    },
    onePet: (req, res)=>{
        Pet.findById(req.params.id)
                .then(data=>res.json(data))
                .catch(err=>res.json(err))

    },
    updatePets: (req, res)=>{
        Pet.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
                .then(data=>res.json(data))
                .catch(err=>res.json(err))

    },
    deletePets:(req, res)=>{
        Pet.findByIdAndDelete(req.params.id)
                .then(data=>res.json(data))
                .catch(err=>res.json(err))
    },


}