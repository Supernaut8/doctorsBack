const mongoose = require('mongoose')

const planSchema = new mongoose.Schema({
    planName: {type:String},
    description: {type:String},
    coverage: [{type:String}],
    cost: {type:Number}
  });
  mongoose.model('planes', planSchema)
const doctorsSchema = new mongoose.Schema({
    name : {type:String, required:true},
    lastName : {type:String, required:true},
    email : {type:String, required:true},
    specialty : {type:String, required:true},    
    description : {type:String, default:"no description"},
    image : {type:String, default:"no image"},
    dni : {type:Number, required:true},
    license : {type:Number, required:true},
    meetCost : {type:Number, required:true},
    plan:[{ type: mongoose.Types.ObjectId, ref: 'planes'}]
})

const Doctors = mongoose.model('doctors', doctorsSchema)
module.exports = Doctors
