// main.js - Lógica global para todo el sitio Sekhmet

document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto en el Logo
    const logo = document.querySelector('.navbar-brand');
    if (logo) {
        logo.addEventListener('mouseover', () => {
            logo.style.textShadow = "0 0 15px #e4dfe6";
            logo.style.transition = "0.3s";
        });
        logo.addEventListener('mouseout', () => logo.style.textShadow = "none");
    }

    // 2. Easter Egg (Modo Neón)
    document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'v') {
            const titulos = document.querySelectorAll('h1, h2, h3, .navbar-brand');
            titulos.forEach(t => {
                t.style.color = "#FF00FF"; 
                t.style.textShadow = "0 0 10px #FF00FF, 0 0 20px #FF00FF";
            });
            alert("✨ Modo Neón Activado ✨");
        }
    });

    // 3. Log de contacto en Footer
    const linkContacto = document.querySelector('a[href^="mailto:"]');
    if (linkContacto) {
        linkContacto.addEventListener('click', () => {
            console.log("Evento Click: Contactando a soporte Sekhmet...");
        });
    }
});