const mongoose = require ('mongoose') /*Vamos a utilizar la libreria mongoose*/

const connectToDB = () => {
    mongoose.connect ('mongodb://127.0.0.1:27017/HEFZIVA', { useNewUrlParser: true, useUnifiedTopology: true }, (error)=>{
        if(error){
            console.log ('Tenemos un error', error)
        }else{
            console.log('Nos conectamos a la DB')
        }
    }) /*use permite que se analice desde express, permitiendole decir a mongo que tome la información la ponga en un objeto y la guarde */
} /*el metodo .conect nos va ayudar a conectar desde nuestro express */

module.exports = { connectToDB } 