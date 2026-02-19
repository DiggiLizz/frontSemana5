document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-animes');

    // 1. Función para cargar datos (FETCH API)
    const cargarAnimes = async () => {
        try {
            const respuesta = await fetch('assets/data/anime.json'); // Ruta al nuevo archivo JSON
            if (!respuesta.ok) throw new Error("No se pudo obtener la lista de animes");
            
            const datos = await respuesta.json();
            
            // Pasamos los datos recibidos a la función de renderizado
            renderizarAnimes(datos); 
        } catch (error) {
            console.error("Error en la carga:", error);
            if (contenedor) {
                contenedor.innerHTML = `<p class="text-danger text-center">Lo sentimos, no pudimos cargar los animes en este momento.</p>`;
            }
        }
    };

    // 2. Función para renderizar las tarjetas (Recibe el catálogo por parámetro)
    const renderizarAnimes = (catalogoAnimes) => { 
        if (contenedor) {
            contenedor.innerHTML = ""; 
            
            catalogoAnimes.forEach(anime => {
                const card = `
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card bg-dark text-white border-secondary h-100 shadow">
                            <img src="${anime.imagen}" class="card-img-top" alt="${anime.titulo}" style="height: 250px; object-fit: cover;">
                            <div class="card-body d-flex flex-column text-center p-0">
                                <div class="bg-secondary bg-opacity-25 py-3 border-bottom border-top border-primary">
                                    <h5 class="card-title text-info fw-bold mb-0">${anime.titulo}</h5>
                                </div>
                                <div class="p-3 d-flex flex-column flex-grow-1">
                                    <button class="btn btn-outline-info w-100 mt-auto btn-leer-mas" 
                                            data-bs-toggle="modal" 
                                            data-bs-target="#modalAnalisis" 
                                            data-id="${anime.id}">
                                        Leer análisis
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>`;
                contenedor.innerHTML += card;
            });

            // IMPORTANTE: Pasamos el catálogo a la función de eventos para que pueda buscar el ID
            vincularEventosModales(catalogoAnimes);
        }
    };

    // 3. Función para los eventos del modal (Recibe el catálogo para buscar)
    const vincularEventosModales = (catalogoAnimes) => {
        const botones = document.querySelectorAll('.btn-leer-mas');
        
        botones.forEach(boton => {
            boton.onclick = (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                // Buscamos dentro del catálogo que recibimos del fetch
                const animeEncontrado = catalogoAnimes.find(a => a.id == id);
                
                if (animeEncontrado) {
                    document.getElementById('modalTitulo').innerText = animeEncontrado.titulo;
                    document.getElementById('modalDescripcion').innerText = animeEncontrado.descripcion;
                    document.getElementById('modalOpinion').innerText = animeEncontrado.opinionPersonal;
                    
                    const linkModal = document.getElementById('modalLink');
                    if (linkModal) linkModal.href = animeEncontrado.link;

                    const imgModal = document.getElementById('modalImagen');
                    if (imgModal) {
                        imgModal.src = animeEncontrado.imagen;
                        imgModal.alt = animeEncontrado.titulo;
                    }
                } else {
                    console.error("No se encontró el anime con ID:", id);
                }
            };
        });
    };

    // Iniciamos la cadena de eventos llamando al fetch
    cargarAnimes();
});