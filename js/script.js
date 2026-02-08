// =========================================================
// PASO 1: MANIPULACIÓN DEL DOM
// =========================================================

// Usamos un condicional para que solo actúe si el contenedor existe en la página
const contenedor = document.getElementById('novedades-dinamicas');

if (contenedor) {
    const columna = document.createElement('div');
    columna.className = 'col-12 col-md-10 mt-4'; // Añadí un poco de margen superior

    columna.innerHTML = `
        <div class="card bg-dark border-info text-light shadow-lg">
            <div class="card-body text-center">
                <h4 class="card-title text-info">✨ Novedad de la Semana</h4>
                <p class="card-text">
                    ¡Atención Comunidad Sekhmet! Hemos añadido nuevas reseñas. 
                    No te pierdas el análisis especial de los clásicos.
                </p>
                <span class="badge bg-info text-dark">Nuevo contenido</span>
            </div>
        </div>
    `;
    contenedor.appendChild(columna);
}

// =========================================================
// PASO 2: IMPLEMENTACIÓN DE EVENTOS
// =========================================================

// 1. Evento mouseover en el Logo
const logo = document.querySelector('.navbar-brand');
if (logo) {
    logo.addEventListener('mouseover', () => {
        logo.style.textShadow = "0 0 15px #8B5CF6";
        logo.style.transition = "0.3s";
    });
    logo.addEventListener('mouseout', () => {
        logo.style.textShadow = "none";
    });
}

// 2. Evento Click en Tarjetas (Navegación o Modales)
// Para que funcione en tus páginas de Bootstrap, detectamos los botones de las reseñas
const botonesResena = document.querySelectorAll('.btn-outline-primary');
botonesResena.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log("Evento Click: Abriendo modal de detalles.");
    });
});

// 3. Evento Click en el enlace de contacto (Footer)
// Corregí el selector para que coincida con tu HTML actual
const linkContacto = document.querySelector('a[href="mailto:lili.zapata@duocuc.cl"]');
if (linkContacto) {
    linkContacto.addEventListener('click', () => {
        console.log("Evento Click: Contactando a soporte Sekhmet...");
    });
}