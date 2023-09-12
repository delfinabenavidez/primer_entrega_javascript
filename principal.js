// Procesamos el pago aquí
function procesarPago() {
    let nombre;
    let edad;
    let genero;
    let tarjeta;
    let codigo;
    let direccion;
    let monto;

    // While para que los datos sean validos
    while (true) {
        nombre = document.getElementById("nombre").value;
        edad = parseInt(document.getElementById("edad").value);
        genero = document.querySelector('input[name="genero"]:checked');
        tarjeta = document.getElementById("tarjeta").value;
        codigo = document.getElementById("codigo").value;
        direccion = document.getElementById("direccion").value;
        monto = parseFloat(document.getElementById("monto").value);

        // Nos aseguramos que el nombre no tenga números
        if (/\d/.test(nombre)) {
            alert("El nombre no puede contener números. Por favor, corrige el nombre.");
            continue; // Volver a solicitar los datos si el nombre es inválido
        }

        // Verificamos si los datos estan completos 
        if (!nombre || isNaN(edad) || !genero || !tarjeta || !codigo || !direccion || isNaN(monto) || monto <= 0) {
            alert("Por favor, completa todos los campos correctamente antes de realizar el pago.");
            continue; // Volver a solicitar los datos si falta alguno
        }

        // Si todos estan bien, salimos del bucle
        break;
    }

    // Si todos los datos son válidos, mostrar el mensaje
    const mensaje = `Hola ${nombre}, has realizado un pago de $${monto.toFixed(2)} con éxito utilizando la tarjeta ${tarjeta}. El paquete se enviará a la dirección: ${direccion}.`;
    
    // Mostrar el mensaje en el elemento div con el id "mensaje"
    const mensajeElement = document.getElementById("mensaje");
    mensajeElement.textContent = mensaje;
    mensajeElement.style.display = "block"; // Mostrar el mensaje
}

// enviar formulario
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que se envie solo
    procesarPago();
});
