// Validación del formulario al enviarlo
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores de los campos
    let nombre = document.getElementById("nombre").value;
    let motivo = document.getElementById("motivo").value;
    let correo = document.getElementById("correo").value;

    // Validar que todos los campos estén completos
    if (nombre && motivo && correo) {
        alert("Formulario enviado correctamente. ¡Gracias por contactarme!");
    } else {
        alert("Por favor, complete todos los campos.");
    }
});