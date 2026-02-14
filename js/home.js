// home.js - Lógica específica de la página de Inicio

document.addEventListener('DOMContentLoaded', () => {
    
    // --- PARTE 1: NOVEDADES DINÁMICAS (FETCH API) ---
    const contenedor = document.getElementById('novedades-dinamicas');

    if (contenedor) {
        fetch('novedades.json')
            .then(res => {
                if (!res.ok) throw new Error("No se pudo cargar el archivo");
                return res.json();
            })
            .then(datos => {
                const columna = document.createElement('div');
                columna.className = 'col-12 col-md-10 mt-4';
                columna.innerHTML = `
                    <div class="card bg-dark border-info text-light shadow-lg">
                        <img src="${datos.imagen}" alt="${datos.altText}" class="card-img" style="height: 200px; object-fit: cover; opacity: 0.6;">
                        <div class="card-img-overlay d-flex flex-column justify-content-center text-center">
                            <h4 class="card-title text-info">${datos.titulo}</h4>
                            <p class="card-text">${datos.descripcion}</p>
                            <button class="btn btn-info btn-sm btn-novedad w-50 mx-auto">Ver detalles</button>
                        </div>
                    </div>`;
                contenedor.appendChild(columna);

                columna.querySelector('.btn-novedad').addEventListener('click', () => {
                    alert(`Detalles: ${datos.titulo}\nJigoku Sensei Nube es un clásico anime de los 90...`);
                });
            })
            .catch(error => console.error("Error en Fetch:", error));
    }

    // --- PARTE 2: FORMULARIO DE COMUNIDAD (UNIFICADO) ---
    const form = document.getElementById('form-colaboradores');
    const mensajeExito = document.getElementById('mensaje-exito');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const nombreVal = document.getElementById('nombre').value;
            const correoVal = document.getElementById('correo').value;
            const interesVal = document.getElementById('interes').value;

            console.log("--- Nueva Solicitud de Colaboración ---");
            console.log(`Usuario: ${nombreVal} (${correoVal}) - Interés: ${interesVal}`);

            form.reset();
            form.classList.add('d-none'); 

            if (mensajeExito) {
                mensajeExito.classList.remove('d-none');
                mensajeExito.innerHTML = `¡Gracias <strong>${nombreVal}</strong>! Tu solicitud para ser ${interesVal} ha sido recibida.`;
                
                setTimeout(() => {
                    mensajeExito.classList.add('d-none');
                    form.classList.remove('d-none');
                }, 5000);
            }
        });
    }
});