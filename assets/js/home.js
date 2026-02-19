document.addEventListener("DOMContentLoaded", () => {
    // --- PARTE 1: CARGA DE NOVEDADES ---
    const contenedor = document.getElementById("novedades-dinamicas");

    if (contenedor) { // Verificamos que el contenedor exista
        fetch("assets/data/novedades.json") 
            .then(response => {
                if (!response.ok) throw new Error("Error al cargar el JSON");
                return response.json();
            })
            .then(data => {
                contenedor.innerHTML = "";
                data.forEach(novedad => {
                    const card = `
                        <div class="col-12 col-md-4">
                            <div class="card bg-dark text-light border-secondary h-100 shadow-sm">
                                <img src="${novedad.imagen}" class="card-img-top" alt="${novedad.titulo}">
                                <div class="card-body">
                                    <h5 class="card-title text-info">${novedad.titulo}</h5>
                                    <p class="card-text small">${novedad.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    contenedor.innerHTML += card;
                });
            })
            .catch(error => console.error("Error cargando novedades:", error));
    }

    // --- PARTE 2: FORMULARIO DE COMUNIDAD ---
    const form = document.getElementById('form-colaboradores');
    const mensajeExito = document.getElementById('mensaje-exito');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombreVal = document.getElementById('nombre').value;
            const correoVal = document.getElementById('correo').value;
            const interesVal = document.getElementById('interes').value;

            console.log("--- Nueva Solicitud ---");
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
}); // <--- Este es el único cierre que debe ir al final de todo