// PASO 1: MANIPULACIÓN DEL DOM
// Seleccionamos el contenedor que dejaste listo en el HTML
const contenedor = document.getElementById('novedades-dinamicas');

// Creamos el elemento dinámicamente
const columna = document.createElement('div');
columna.className = 'col-12 col-md-10';

// Insertamos el contenido usando innerHTML
columna.innerHTML = `
    <div class="card bg-dark border-info text-light shadow-lg">
        <div class="card-body">
            <h4 class="card-title text-info">✨ Novedad de la Semana</h4>
            <p class="card-text">
                ¡Atención Comunidad Sekhmet! Hemos añadido nuevas reseñas en la sección de Anime. 
                No te pierdas el análisis especial de los clásicos de los 90s.
            </p>
            <span class="badge bg-info text-dark">Nuevo contenido</span>
        </div>
    </div>
`;

// Agregamos el elemento al DOM
contenedor.appendChild(columna);

// PASO 2: IMPLEMENTACIÓN DE EVENTOS

// 1. Evento mouseover: Mostrar un mensaje secreto al pasar sobre el logo
const logo = document.querySelector('.navbar-brand');
logo.addEventListener('mouseover', () => {
    console.log("¡Has descubierto el logo de Sekhmet!");
    logo.style.textShadow = "0 0 10px #8B5CF6"; // Efecto de brillo extra
});

// 2. Evento click: Ya lo tienes en tus tarjetas (toggle('open'))
// Solo asegúrate de que el script esté vinculado.

// 3. Evento submit: Validación de contacto (Si decides agregar un formulario)
const footerLink = document.querySelector('.footer__link');
footerLink.addEventListener('click', (e) => {
    // Ejemplo de interactividad en enlaces
    console.log("Abriendo correo de contacto...");
});