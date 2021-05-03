/**
 * Método para crear las rutas de Product
 * @param {*} app => El objeto de Express que se se creó en el archivo index.js
 */

 module.exports = (app) => {
    const productController = require ('../controllers/ProductControllers')

    /*VERBOS DE HTTP (http: protocolo de red, por donde se comunica toda la internet, me permite transferir información)
    * POST: se utiliza para alamacenar información y trabajar con el login
    * GET: para obtener información- se trabaja a traves de la URL
    * PUT: se utiliza para modificar la información. Se envía la información por la URL, respecto a quien quiero modificar
    * DELETE: permite eliminar la información- se envía a quien queremos eliminar por la URL*/

    app.post('/product/create', productController.create)
    app.put('/product/update/:id', productController.update)
    app.get('/product/getAll', productController.findAll)
    app.delete('/product/deleteOne/:id', productController.deleteOne)
}