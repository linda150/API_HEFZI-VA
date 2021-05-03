const mongoose = require ('mongoose')

const clienteSchema = new mongoose.Schema({ /*lo que va despues del punto es un metodo y lo que va antes del mongoose es la clase */
    name: {type: String, require: true},
    lastname: {type:String, require:true},
    cellphone: {type:Number, require:true},
    canasta: {type:mongoose.Schema.Types.ObjectId, ref: 'Product'} /*un cliente solo puede seleccionar un producto*/

    /*canasta: [{type:mongoose.Schema.Types.ObjectId, ref: 'Cliente'}] relacionar un cliente puede seleccionar varios productos*/
})

module.exports = mongoose.model ('Cliente', clienteSchema) /*se le pide ayuda a mongoose porque se va a exportar un modelo que debe contener el nombre y extructura del modelo */