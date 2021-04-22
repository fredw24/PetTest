const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test', (err)=>{

    console.log("connected to Mongodb", err);

})

const SkillSchema = new mongoose.Schema({
    skill: {type:String},
})

const PetSchema = new mongoose.Schema({
    name: {type: String, minlength:[3, "Longer than 3 characters on name Please!!!"]},
    type: {type: String, minlength:[3, "Longer than 3 characters on type for type"]},
    description: {type: String, minlength:[3, "longer than 3 characters on description about the pet"]},
    skills:[SkillSchema]

})
module.exports = mongoose.model("Pet", PetSchema)