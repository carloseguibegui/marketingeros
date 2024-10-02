function sendEmail(event) {
    event.preventDefault();  // Evita que el formulario recargue la página
    // Mostrar el indicador de carga
    document.querySelector(".loading").style.display = "block";
    
    // Recoge los datos del formulario
    const templateParams = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value   
    };
    
    // Enviar correo a través de EmailJS
    emailjs.send("service_3hgo7aj", "template_e8swpti", templateParams)
        .then(function(response) {
            // Ocultar la carga y mostrar mensaje de éxito
            document.querySelector(".loading").style.display = "none";
            document.querySelector(".sent-message").style.display = "block";
        }, function(error) {
            // Ocultar la carga y mostrar mensaje de error
            document.querySelector(".loading").style.display = "none";
            document.querySelector(".error-message").innerText = "Hubo un error al enviar el mensaje. Inténtalo nuevamente.";
            document.querySelector(".error-message").style.display = "block";
        });
}
