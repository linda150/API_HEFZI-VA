/**
 * Método para crear las rutas de Cliente
 * @param {*} app => El objeto de Express que se se creó en el archivo index.js
 */

module.exports = (app) => {
    const clienteController = require ('../controllers/ClienteControllers')

    /*VERBOS DE HTTP (http: protocolo de red, por donde se comunica toda la internet, me permite transferir información)
    * POST: se utiliza para alamacenar información y trabajar con el login
    * GET: para obtener información- se trabaja a traves de la URL
    * PUT: se utiliza para modificar la información. Se envía la información por la URL, respecto a quien quiero modificar
    * DELETE: permite eliminar la información- se envía a quien queremos eliminar por la URL*/

    app.post('/cliente/create', clienteController.create)
    app.put('/cliente/update/:id', clienteController.update)
    app.get('/cliente/getAll', clienteController.findAll)
    app.delete('/cliente/deleteOne/:id', clienteController.deleteOne)
}