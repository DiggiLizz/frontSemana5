
// =========================================================
// PASO 1: MANIPULACIÓN DEL DOM + FETCH API
// =========================================================
const contenedor = document.getElementById('novedades-dinamicas');

if (contenedor) {
    fetch('novedades.json')
        .then(respuesta => {
            if (!respuesta.ok) throw new Error("No se pudo cargar el archivo");
            return respuesta.json();
        })
        .then(datos => {
            const columna = document.createElement('div');
            columna.className = 'col-12 col-md-10 mt-4';

            // Agregamos el botón "Ver más" en el HTML dinámico
            columna.innerHTML = `
                <div class="card bg-dark border-info text-light shadow-lg">
                    <img src="${datos.imagen}" class="card-img-top" alt="Novedad" style="height: 200px; object-fit: cover;">
                    <div class="card-body text-center">
                        <h4 class="card-title text-info">${datos.titulo}</h4>
                        <p class="card-text">${datos.descripcion}</p>
                        <span class="badge bg-info text-dark mb-3">${datos.etiqueta}</span>
                        <br>
                        <button class="btn btn-outline-info btn-sm btn-novedad">Ver detalles</button>
                    </div>
                </div>
            `;
            contenedor.appendChild(columna);

            // --- PASO 2: ACTIVAR EL BOTÓN RECIÉN CREADO ---
            const botonNuevo = columna.querySelector('.btn-novedad');
            botonNuevo.addEventListener('click', () => {
                alert(`Detalles adicionales: ${datos.titulo}\nHell Teacher: Jigoku Sensei Nube es un clásico anime shonen de terror/comedia de los 90, centrado en Meisuke Nueno ("Nube"), un profesor de primaria que usa su mano demoníaca sellada para proteger a sus alumnos de espíritus y fantasmas. La serie mezcla humor, elementos educativos y historias episódicas de miedo. Es conocida por su carismático protagonista, su atmósfera única y su capacidad para equilibrar el terror con momentos cómicos. ¡Una joya del anime que sigue siendo querida por los fans!`);
            });
        })
        .catch(error => {
            console.error("Error en la Fetch API:", error);
        });
}

// =========================================================
// PASO 2: IMPLEMENTACIÓN DE EVENTOS
// =========================================================

// 1. Evento mouseover en el Logo
const logo = document.querySelector('.navbar-brand');
if (logo) {
    logo.addEventListener('mouseover', () => {
        logo.style.textShadow = "0 0 15px #e4dfe6";
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

