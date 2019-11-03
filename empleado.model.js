const mongoose = require('mongoose')

const EmpleadoSchema = mongoose.Schema({
    nombre    : { type: String, required: true },
    apellidos : { type: String, required: true }
})

module.exports = mongoose.model('Empleado', EmpleadoSchema)