
// PASO 1: MANIPULACIÓN DEL DOM

// condicional para que solo actúe si el contenedor existe en la página
const contenedor = document.getElementById('novedades-dinamicas');

if (contenedor) {
    const columna = document.createElement('div');
    columna.className = 'col-12 col-md-10 mt-4'; 

    columna.innerHTML = `
        <div class="card bg-dark border-info text-light shadow-lg">
            <div class="card-body text-center">
                <h4 class="card-title text-info">✨ Novedad de la Semana ✨</h4>
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
        logo.style.textShadow = "0 0 15px #7e0899";
        logo.style.transition = "0.3s";
    });
    logo.addEventListener('mouseout', () => {
        logo.style.textShadow = "none";
    });
}

// 2. Evento Click en Tarjetas de Reseñas
const botonesResena = document.querySelectorAll('.btn-outline-primary');
botonesResena.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log("Evento Click: Abriendo modal de detalles.");
    });
});

// 3. Evento Click en el enlace de contacto (Footer)
const linkContacto = document.querySelector('a[href="mailto:lili.zapata@duocuc.cl"]');
if (linkContacto) {
    linkContacto.addEventListener('click', () => {
        console.log("Evento Click: Contactando a soporte Sekhmet...");
    });
}

// 4. Evento Submit (Formulario de Colaboradores - Semana 5)
const formularioColab = document.getElementById('form-colaboradores');
const mensajeExito = document.getElementById('mensaje-exito');

if (formularioColab) {
    formularioColab.addEventListener('submit', (event) => {
        // Evitamos que la página se recargue (vital para una Single Page Application)
        event.preventDefault();

        // Extraemos los datos (esto simula la captura para un futuro envío a base de datos)
        const nombreVal = document.getElementById('nombre').value;
        const correoVal = document.getElementById('correo').value;
        const interesVal = document.getElementById('interes').value;

        console.log("--- Nueva Solicitud de Colaboración ---");
        console.log(`Usuario: ${nombreVal} (${correoVal})`);
        console.log(`Interés: ${interesVal}`);

        // Feedback visual: Ocultamos el formulario con una clase de Bootstrap y mostramos el éxito
        formularioColab.classList.add('d-none');
        if (mensajeExito) {
            mensajeExito.classList.remove('d-none');
            mensajeExito.innerHTML = `¡Gracias <strong>${nombreVal}</strong>! Tu solicitud para ser ${interesVal} ha sido recibida.`;
        }
    });
}


// 5. Evento Keydown (Easter Egg: Modo Neón)
document.addEventListener('keydown', (event) => {
    // Si el usuario presiona la tecla 'v'
    if (event.key === 'v' || event.key === 'V') {
        console.log("¡Easter Egg activado! Modo Neón de Sekhmet.");
        
        // Seleccionamos todos los títulos
        const titulos = document.querySelectorAll('h1, h2, h3, .navbar-brand');
        
        titulos.forEach(titulo => {
            // Cambiamos el color a un morado neón brillante
            titulo.style.color = "#FF00FF"; 
            titulo.style.textShadow = "0 0 10px #FF00FF, 0 0 20px #FF00FF";
        });

        // Mostramos una alerta discreta
        alert("✨ Has activado el Modo Neón de Sekhmet ✨");
    }
});

