// main.js - Lógica global para todo el sitio Sekhmet

document.addEventListener('DOMContentLoaded', () => {               // Escucha que el HTML esté listo antes de ejecutar el código.
    // 1. SELECTOR ÚNICO DEL LOGO
    const logo = document.querySelector('.navbar-brand');           // Captura el logo (marca) de la barra de navegación.
    
    if (logo) {                                                     // Si el logo existe en la página actual:
        // Eventos de Mouse (Brillo)
        logo.addEventListener('mouseover', () => {                  // Cuando el mouse entra al logo:
            logo.style.textShadow = "0 0 15px #e4dfe6";             // Agrega un resplandor (sombra de texto) color blanquecino.
            logo.style.transition = "0.3s";                         // Hace que el brillo aparezca suavemente en 0.3 segundos.
        });
        logo.addEventListener('mouseout', () => logo.style.textShadow = "none"); // Al salir el mouse, quita el brillo de inmediato.

        // Evento de Toque (Easter Egg Móvil)
        let toqueCount = 0;                                         // Variable contador para rastrear cuántas veces se hace clic.
        logo.addEventListener('click', () => {                      // Escucha cada clic (o toque en móvil) sobre el logo.
            toqueCount++;                                           // Suma 1 al contador con cada toque.
            if (toqueCount === 3) {                                 // Si el usuario toca el logo 3 veces seguidas:
                activarModoNeon();                                  // Dispara la función especial del Modo Neón.
                toqueCount = 0;                                     // Resetea el contador a cero tras el éxito.
            }
            setTimeout(() => toqueCount = 0, 1000);                 // Si pasa 1 segundo sin más toques, el contador vuelve a cero.
        });
    }

    // 2. FUNCIÓN MODO NEÓN
    const activarModoNeon = () => {                                                        // Define la función especial que transforma la estética del sitio.
        const titulos = document.querySelectorAll('h1, h2, h3, h4, h5, .navbar-brand');    // Selecciona todos los encabezados (del 1 al 5) y también el logo de la barra de navegación.
        
        titulos.forEach(t => {                                                             // Recorre cada uno de los títulos encontrados:
            t.style.color = "#FF00FF";                                                   // Cambia el color del texto a un fucsia/neón brillante.
            t.style.textShadow = "0 0 10px #FF00FF, 0 0 20px #FF00FF";                 // Aplica una doble sombra de texto para crear el efecto de resplandor o "glow" del neón.
        });

        alert("✨ Modo Neón Activado ✨");                                               // Muestra un mensaje emergente confirmando que el truco funcionó.
    };

    // 3. EVENTO TECLADO (PC)
    document.addEventListener('keydown', (event) => {               // Escucha cuando el usuario presiona cualquier tecla en el teclado.
        if (event.key.toLowerCase() === 'v') activarModoNeon();     // Si la tecla presionada es la 'v', activa el efecto de luces neón.
    });

    // 4. LOG DE CONTACTO
    const linkContacto = document.querySelector('a[href^="mailto:"]'); // Busca el enlace que empieza con "mailto:" (el de correo).
    if (linkContacto) {                                                // Si el enlace de contacto existe en el HTML:
        linkContacto.addEventListener('click', () => {                 // Escucha cuando el usuario hace clic para enviar un correo.
            console.log("Evento Click: Contactando a soporte...");     // Registra un mensaje en la consola para auditoría/desarrollo.
        });
    }
});