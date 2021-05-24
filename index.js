const express = require('express') /*require muestra que requerimos y utilizamos algo, en este caso express */
const bodyParser = require ('body-parser')
const cors = require('cors') //Seguridad que uno le da a los proyectos


const {connectToDB} = require ('./db')
//const { json } = require('body-parser')


const app = express () /*Convertimos en un objeto para utilizar todas las herramientas que tiene */

app.use(cors)
app.use(bodyParser.json())
connectToDB()

require('./Routes/cliente')(app)//Se esta cargando el archivo de rutas de las categorias y se envia una variable llamada app.
require('./Routes/product')(app)//Se esta cargando el archivo de rutas de product y se envia una variable llamada app.

app.listen(3000, () => {
    console.log ('Nos conectamos!')
}) /*El puerto es (3000) siempre se hace con números enteros, permiten un acceso */
