const express = require('express')
const database = require('./database')
const rutas   = require('./empleado.route')

// Inicializar Express
const app = express()

// Midlewares
app.use(express.json())

// Aplicamos las rutas
app.use('/', rutas)

app.listen(3000, ()=>{
    console.log("App running on port 3000")
})