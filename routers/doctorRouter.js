const express = require('express')
const doctorRouter = express.Router()
const doctorController = require('../controllers/doctorController')
const validator = require('../config/validator.js')


doctorRouter.get('/doctors',doctorController.getAllDoctors)
doctorRouter.post('/doctors',doctorController.addDoctors)

doctorRouter.get('/doctors/:id',doctorController.getDoctor)
doctorRouter.put('/doctors/:id',doctorController.updateDoctor)
doctorRouter.delete('/doctors/:id',doctorController.deleteDoctor)

module.exports = doctorRouter
  

 
