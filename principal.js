// Verificar el sexo y edad
function verificarDatos() {
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var genero = document.querySelector('input[name="genero"]:checked').value;

    // Verificar si la edad es valida, tiene que ser mayor de edad para comprar algo
    if (!isNaN(edad)) {
        if (edad >= 18) {
            alert("Hola " + nombre + ", eres mayor de edad y eres " + genero + ".");
        } else {
            alert("Hola " + nombre + ", eres menor de edad y eres " + genero + ".");
        }
    } else {
        console.error("Por favor, ingresa una edad válida.");
    }
}

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario
    verificarDatos();
});

