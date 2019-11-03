const Empleado = require('./empleado.model')

const Router = require('express').Router
const router = new Router()

router.get('/empleados',async (req, res)=>{
   const empleados = await Empleado.find()
    //Enviamos los datos
   res.json(empleados)
})
 

router.post('/empleado', (req, res)=>{
    console.log(req.body)

    // Guardar empleado
    const empleado = new Empleado(req.body)
    empleado.save()
    .then((info=>{
        // Enviamos informacion de la operacion al cliente
        res.json(info)
    }))
})

module.exports = router