var nombre = document.getElementById("nombre");

var apellido = document.getElementById("apellido");

var numero = document.getElementById("numero");

function enviarformulario() {
    console.log("Enviar formulario");

    if (nombre.value.length <= 0 || apellido.value.length <= 0 || numero.value.length <= 0){
        swal("Ingrese datos", "nombre, apellido, celular");

    }else{

    }
}