document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-videojuegos');

    // 1. Función para cargar datos (FETCH API)
    const cargarVideojuegos = async () => {
        try {
            const respuesta = await fetch('assets/data/videojuegos.json'); // Ruta al nuevo archivo JSON
            if (!respuesta.ok) throw new Error("No se pudo obtener la lista de videojuegos");
            
            const datos = await respuesta.json();
            
            // Pasamos los datos recibidos a la función de renderizado
            renderizarVideojuegos(datos); 
        } catch (error) {
            console.error("Error en la carga:", error);
            if (contenedor) {
                contenedor.innerHTML = `<p class="text-danger text-center">Lo sentimos, no pudimos cargar los videojeugos en este momento.</p>`;
            }
        }
    };

    // 2. Función para renderizar las tarjetas (Recibe el catálogo por parámetro)
    const renderizarVideojuegos = (catalogoVideojuegos) => { 
        if (contenedor) {
            contenedor.innerHTML = ""; 
            
            catalogoVideojuegos.forEach(juegos => {
                const card = `
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card bg-dark text-white border-secondary h-100 shadow">
                            <img src="${juegos.imagen}" class="card-img-top" alt="${juegos.titulo}" style="height: 250px; object-fit: cover;">
                            <div class="card-body d-flex flex-column text-center p-0">
                                <div class="bg-secondary bg-opacity-25 py-3 border-bottom border-top border-primary">
                                    <h5 class="card-title text-info fw-bold mb-0">${juegos.titulo}</h5>
                                </div>
                                <div class="p-3 d-flex flex-column flex-grow-1">
                                    <button class="btn btn-outline-info w-100 mt-auto btn-leer-mas" 
                                            data-bs-toggle="modal" 
                                            data-bs-target="#modalAnalisis" 
                                            data-id="${juegos.id}">
                                        Leer análisis
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>`;
                contenedor.innerHTML += card;
            });

            // IMPORTANTE: Pasamos el catálogo a la función de eventos para que pueda buscar el ID
            vincularEventosModales(catalogoVideojuegos);
        }
    };

    // 3. Función para los eventos del modal (Recibe el catálogo para buscar)
    const vincularEventosModales = (catalogoVideojuegos) => {
        const botones = document.querySelectorAll('.btn-leer-mas');
        
        botones.forEach(boton => {
            boton.onclick = (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                // Buscamos dentro del catálogo que recibimos del fetch
                const juegoEncontrado = catalogoVideojuegos.find(a => a.id == id);
                
                if (juegoEncontrado) {
                    document.getElementById('modalTitulo').innerText = juegoEncontrado.titulo;
                    document.getElementById('modalDescripcion').innerText = juegoEncontrado.descripcion;
                    document.getElementById('modalOpinion').innerText = juegoEncontrado.opinionPersonal;
                    
                    const linkModal = document.getElementById('modalLink');
                    if (linkModal) linkModal.href = juegoEncontrado.link;

                    const imgModal = document.getElementById('modalImagen');
                    if (imgModal) {
                        imgModal.src = juegoEncontrado.imagen;
                        imgModal.alt = juegoEncontrado.titulo;
                    }
                } else {
                    console.error("No se encontró el videojuego con ID:", id);
                }
            };
        });
    };

    // Iniciamos la cadena de eventos llamando al fetch
    cargarVideojuegos();
});