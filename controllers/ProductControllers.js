const productModel = require('../models/Product')
const product = require('../Routes/product')

/**
 * Metdo para crear una nueva categoria
 * @param {*} req => Todos los datos y la información que el metodo va a recibir
 * @param {*} res => Todos lo que nosotros le vamos a devolver al usuario
 */
 exports.create = (req, res) => {
    console.log('Que tiene el body', req.body)
    const product = new productModel ({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image
    })
    /*Conteniendo la constante category y utilicando el método save de mongoose */
    product.save().then(
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
 * Metdo para listar todas los productos
 * @param {*} req => Todos los datos y la información que el metodo va a recibir
 * @param {*} res => Todos lo que nosotros le vamos a devolver al usuario
 */
 exports.findAll = (req, res) => {
    productModel.find().then(
        product => {
            res.send(product)
        }
    ).catch(
        error => {
            return res.status(500).send ({
                message: 'Error al listar los productos'
            })
        }
    )
}

/**
 * Metdo para modificar algun producto
 * @param {*} req => Todos los datos y la información que el metodo va a recibir
 * @param {*} res => Todos lo que nosotros le vamos a devolver al usuario
 */
exports.update = (req, res) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image
    }

    /*EL findByIdAndUpdate debe tener 3 parametros:
    1 => A quien quiero modificar
    2 => Por quien lo quiero modificar.
    3 => (opcional) indica que los datos que se vam a devolver son los actualizados*/
    productModel.findByIdAndUpdate( req.params.id, product, {new: true}).then (
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
 * Metdo para eliminar algun producto
 * @param {*} req => Todos los datos y la información que el metodo va a recibir
 * @param {*} res => Todos lo que nosotros le vamos a devolver al usuario
 */
exports.deleteOne = (req, res) => {
    /*El findByIdAndRemove recibe un parametro: 
    1=> A quien voy a eliminar */
    productModel.findByIdAndRemove(req.params.id).then(
        productDelete => {
            res.send (productDeleted)
        }
    ).catch(
        error =>{
            return res.status(500).send({
                message: 'No se eliminó ningun producto'
            })
        }
    )
}