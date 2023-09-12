// Función para procesar el pago y mostrar un mensaje personalizado
function procesarPago() {
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const tarjeta = document.getElementById("tarjeta").value;
    const codigo = document.getElementById("codigo").value;
    const direccion = document.getElementById("direccion").value;
    const monto = parseFloat(document.getElementById("monto").value);

    // Validar el nombre para asegurarse de que no contiene números
    if (/\d/.test(nombre)) {
        alert("El nombre no puede contener números. Por favor, corrige el nombre.");
        return; // Salir de la función si el nombre es inválido
    }

    // Verificar si los campos obligatorios están completos
    if (!nombre || isNaN(edad) || !genero || !tarjeta || !codigo || !direccion || isNaN(monto) || monto <= 0) {
        alert("Por favor, completa todos los campos correctamente antes de realizar el pago.");
        return; // Salir de la función si falta algún dato
    }

    // Si todos los datos son válidos, mostrar el mensaje
    const mensaje = `Hola ${nombre}, has realizado un pago de $${monto.toFixed(2)} con éxito utilizando la tarjeta ${tarjeta}. El paquete se enviará a la dirección: ${direccion}.`;
    
    // Mostrar el mensaje en el elemento div con el id "mensaje"
    const mensajeElement = document.getElementById("mensaje");
    mensajeElement.textContent = mensaje;
    mensajeElement.style.display = "block"; // Mostrar el mensaje
}

// Escuchar el envío del formulario
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario
    procesarPago();
});
