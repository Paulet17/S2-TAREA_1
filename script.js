// FORMULARIO
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let edad = document.getElementById("edad").value.trim();

    // Expresiones regulares
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
    const regexTelefono = /^[0-9]{10}$/;
    const regexEdad = /^[0-9]{1,2}$/;

    // Validación Nombre
    if(!regexNombre.test(nombre)){
        mensaje.style.color = "red";
        mensaje.textContent =
        "Ingrese un nombre válido (mínimo 3 letras).";
        return;
    }

    // Validación Teléfono
    if(!regexTelefono.test(telefono)){
        mensaje.style.color = "red";
        mensaje.textContent =
        "El teléfono debe contener exactamente 10 dígitos.";
        return;
    }

    // Validación Edad
    if(!regexEdad.test(edad)){
        mensaje.style.color = "red";
        mensaje.textContent =
        "La edad debe contener máximo 2 dígitos.";
        return;
    }

    mensaje.style.color = "green";
    mensaje.textContent =
    "Solicitud enviada correctamente.";

    formulario.reset();
});

// BLOQUEAR LETRAS EN TELÉFONO
const telefono = document.getElementById("telefono");

telefono.addEventListener("input", function(){
    this.value = this.value.replace(/[^0-9]/g, "");
});

// BLOQUEAR LETRAS EN EDAD
const edad = document.getElementById("edad");

edad.addEventListener("input", function(){
    this.value = this.value.replace(/[^0-9]/g, "");
});

// MOSTRAR / OCULTAR INFORMACIÓN
const botonInfo = document.getElementById("mostrarInfo");
const infoExtra = document.getElementById("infoExtra");

botonInfo.addEventListener("click", function(){

    if(infoExtra.style.display === "block"){
        infoExtra.style.display = "none";
        botonInfo.textContent = "Ver más información";
    }else{
        infoExtra.style.display = "block";
        botonInfo.textContent = "Ocultar información";
    }

});