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
document.addEventListener('DOMContentLoaded', function () {
    const videos = document.getElementsByClassName('video-mp4');

    // Utilizando IntersectionObserver para detectar cuando el video está en el viewport
    const observer0 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videos[0].play();  // Reproducir videos cuando está visible
            } else {
                videos[0].pause(); // Pausar videos cuando sale del viewport
            }
        });
    }, {
        threshold: 0.5 // El videos debe estar al menos un 50% visible para reproducirse
    });

    observer0.observe(videos[0]);

    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videos[1].play();  // Reproducir videos cuando está visible
            } else {
                videos[1].pause(); // Pausar videos cuando sale del viewport
            }
        });
    }, {
        threshold: 0.5 // El videos debe estar al menos un 50% visible para reproducirse
    });

    observer1.observe(videos[0]);

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videos[2].play();  // Reproducir videos cuando está visible
            } else {
                videos[2].pause(); // Pausar videos cuando sale del viewport
            }
        });
    }, {
        threshold: 0.5 // El videos debe estar al menos un 50% visible para reproducirse
    });

    observer2.observe(videos[2]);
});
