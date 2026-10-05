// Agarro el formulario por su id
let formulario = document.getElementById("formulario");

// Cuando se envía el formulario, se ejecuta esta función
formulario.addEventListener("submit", function (evento) {
    // Evito que la página se recargue
    evento.preventDefault();

    // Una variable por cada caja de texto
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    // Reviso que no estén vacías
    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor completa todos los campos");
        return;
    }

    // Uso las variables en console.log y en alert
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);
    alert("Gracias " + nombre + ", te escribiremos a " + correo);
});