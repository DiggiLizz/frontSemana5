// main.js - Lógica global para todo el sitio Sekhmet

document.addEventListener('DOMContentLoaded', () => {               //
    // 1. SELECTOR ÚNICO DEL LOGO
    const logo = document.querySelector('.navbar-brand');
    
    if (logo) {
        // Eventos de Mouse (Brillo)
        logo.addEventListener('mouseover', () => {
            logo.style.textShadow = "0 0 15px #e4dfe6";
            logo.style.transition = "0.3s";
        });
        logo.addEventListener('mouseout', () => logo.style.textShadow = "none");

        // Evento de Toque (Easter Egg Móvil)
        let toqueCount = 0;
        logo.addEventListener('click', () => {
            toqueCount++;
            if (toqueCount === 3) {
                activarModoNeon();
                toqueCount = 0;
            }
            setTimeout(() => toqueCount = 0, 1000); 
        });
    }

    // 2. FUNCIÓN MODO NEÓN
    const activarModoNeon = () => {
        const titulos = document.querySelectorAll('h1, h2, h3, h4, h5, .navbar-brand');
        titulos.forEach(t => {
            t.style.color = "#FF00FF"; 
            t.style.textShadow = "0 0 10px #FF00FF, 0 0 20px #FF00FF";
        });
        alert("✨ Modo Neón Activado ✨");
    };

    // 3. EVENTO TECLADO (PC)
    document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'v') activarModoNeon();
    });

    // 4. LOG DE CONTACTO
    const linkContacto = document.querySelector('a[href^="mailto:"]');
    if (linkContacto) {
        linkContacto.addEventListener('click', () => {
            console.log("Evento Click: Contactando a soporte Sekhmet...");
        });
    }
});