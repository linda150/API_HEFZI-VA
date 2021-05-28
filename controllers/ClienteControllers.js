/*variable uno (compuesta por dos palabras
    escribirla como: variableUno*/

const clienteModel = require ('../models/Cliente')// Vamos utilizar el modelo de Cliente 
/*C= crear una categoria
R= leer una categoria
U= Modificar una categoria
D= eliminar una categoria
 */

/**
 * Metdo para crear una nueva categoria
 * @param {*} req => Todos los datos y la información que el metodo va a recibir
 * @param {*} res => Todos lo que nosotros le vamos a devolver al usuario
 */
exports.create = (req, res) => {
    console.log('Que tiene el body', req.body)
    const cliente = new clienteModel ({
        name: req.body.name,
        lastname: req.body.lastname,
        cellphone: req.body.cellphone,
        canasta: req.body.canasta
    })
    /*Conteniendo la constante category y utilicando el método save de mongoose */
    cliente.save().then(
        data => {
            res.send(data)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: error.message
            })
        }
    )
}

/**
 * Metdo para listar todas las categorias
 * @param {*} req => Todos los datos y la información que el metodo va a recibir
 * @param {*} res => Todos lo que nosotros le vamos a devolver al usuario
 */
exports.findAll = (req, res) => {
    console.log('api')
    clienteModel.find({})
    .populate('canasta')
    .exec()
    .then(
        (clientes) => {
            res.send(clientes)
        }
    ).catch(
        (error) => {
            return res.status(500).send ({
                message: ('No se encontraron productos', error.message)
            })
        }
    )
}

/**
 * Metdo para modificar alguna categoria
 * @param {*} req => Todos los datos y la información que el metodo va a recibir
 * @param {*} res => Todos lo que nosotros le vamos a devolver al usuario
 */
exports.update = (req, res) => {
    const cliente = {
        name: req.body.name,
        lastname: req.body.lastname,
        cellphone: req.body.cellphone,
        canasta: req.body.canasta
    }

    /*EL findByIdAndUpdate debe tener 3 parametros:
    1 => A quien quiero modificar
    2 => Por quien lo quiero modificar.
    3 => (opcional) indica que los datos que se vam a devolver son los actualizados*/
    clienteModel.findByIdAndUpdate( req.params.id, cliente, {new: true}).then (
        data => {
            res.send(data)
        }
    ).catch(
        (error) => {
            return res.status(500).send({
                message: ("Error al modificar ->", error.message)
            })
        }
    )
}

/**
 * Metdo para eliminar alguna categoria
 * @param {*} req => Todos los datos y la información que el metodo va a recibir
 * @param {*} res => Todos lo que nosotros le vamos a devolver al usuario
 */
exports.deleteOne = (req, res) => {
    /*El findByIdAndRemove recibe un parametro: 
    1=> A quien voy a eliminar */
    clienteModel.findByIdAndRemove(req.params.id).then(
        clienteDeleted => {
            res.send (clienteDeleted)
        }
    ).catch(
        (error) =>{
            return res.status(500).send({
                message: ('No se eliminó ninguna categoria', error.message)
            })
        }
    )
}