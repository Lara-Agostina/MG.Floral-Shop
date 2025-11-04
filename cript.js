// ===============================================
// 1. MENÚ RESPONSIVE CON BOTÓN DE HAMBURGUESA
// ===============================================

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle'); // El botón ☰
    const navMenu = document.getElementById('main-nav'); // El menú completo

    if (toggleButton && navMenu) {
        // Inicialmente, el menú podría estar oculto en CSS para móviles
        // Aquí añadimos el evento al botón
        toggleButton.addEventListener('click', function() {
            // Añade o quita la clase 'active' al menú. 
            // El CSS definirá si se muestra o se oculta.
            navMenu.classList.toggle('active');
        });
        
        // Opcional: Cerrar el menú si se hace clic fuera de él (útil en móviles)
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !toggleButton.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }


    // ===============================================
    // 2. VALIDACIÓN SIMPLE EN PÁGINA DE CONTACTO
    // ===============================================

    const contactForm = document.querySelector('.formulario-contacto');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Previene el envío inmediato del formulario para hacer la validación
            event.preventDefault(); 

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Validación muy básica
            if (nombre.length < 2) {
                alert('Por favor, ingresa tu nombre completo.');
            } else if (!email.includes('@') || !email.includes('.')) {
                alert('Por favor, ingresa un correo electrónico válido.');
            } else if (mensaje.length < 10) {
                alert('Tu mensaje es muy corto. Por favor, sé más específico.');
            } else {
                // Si la validación pasa, aquí podrías enviar los datos a un servidor
                // Por ahora, solo mostramos un mensaje de éxito:
                alert(`¡Gracias por tu mensaje, ${nombre}! Lo hemos recibido y te contactaremos pronto.`);
                
                // Reinicia el formulario
                contactForm.reset(); 
            }
        });
    }
});