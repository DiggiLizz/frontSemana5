// ventas_bootstrap.js - Responsabilidad: Gestión de eCommerce de Figuritas Sekhmet

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DEFINICIÓN DE DATOS (Inventario)
    const catalogoFiguras = [
        {
            id: 1,
            titulo: "Figura Zenki - Edición Guardián",
            precio: 45000,
            imagen: "imagenes/figura_zenki.jpg",
            altText: "Figura coleccionable de Zenki en postura de ataque con detalles en relieve"
        },
        {
            id: 2,
            titulo: "Estatua EVA-01 Test Type",
            precio: 85000,
            imagen: "imagenes/figura_eva01.webp",
            altText: "Estatua metálica del EVA-01 de Evangelion sobre base de NERV"
        },
        {
            id: 3,
            titulo: "Nendoroid Hornet - Silksong",
            precio: 35000,
            imagen: "imagenes/figura_hornet.webp",
            altText: "Figura articulada Nendoroid de Hornet con su aguja y accesorios"
        },
        {
            id: 4,
            titulo: "Set Cartas Estan Arrestados",
            precio: 55000,
            imagen: "imagenes/figura_police.webp",
            altText: "Cartas coleccionables de Miyuki Kobayakawa en uniforme de policía con ilustraciones detalladas"
        },
        {
            id: 5,
            titulo: "Figura Rei Ayanami - Plugsuit Ver.",
            precio: 52000,
            imagen: "imagenes/figura_rei.jpg",
            altText: "Figura de Rei Ayanami con su traje de piloto negro sentada sobre la cabeza del EVA-00"
        },
        {
            id: 6,
            titulo: "The Knight - Estatua Hollow Knight",
            precio: 28000,
            imagen: "imagenes/figura_knight.webp",
            altText: "Figura del Caballero de Hollow Knight sosteniendo su aguijón de hueso"
        },
        {
            id: 7,
            titulo: "Figura Articulada Kyo Kusanagi",
            precio: 65000,
            imagen: "imagenes/figura_kyo.avif",
            altText: "Figura de acción de Kyo Kusanagi con efectos de llamas en las manos"
        },
        {
            id: 8,
            titulo: "Link: Breath of the Wild PVC",
            precio: 75000,
            imagen: "imagenes/figura_link_botw.webp",
            altText: "Figura de Link apuntando con el arco ancestral en una pose dinámica"
        },
        {
            id: 9,
            titulo: "Figura Asuka Langley - Test Suit",
            precio: 58000,
            imagen: "imagenes/figura_asuka.webp",
            altText: "Figura de Asuka Langley con su traje de piloto naranja de las películas Rebuild"
        },
        {
            id: 10,
            titulo: "Quirrel - Miniatura Coleccionable",
            precio: 22000,
            imagen: "imagenes/figura_quirrel.webp",
            altText: "Pequeña figura de Quirrel de Hollow Knight con su sombrero característicos"
        },
        {
            id: 11,
            titulo: "Mai Shiranui - Edición Aniversario",
            precio: 95000,
            imagen: "imagenes/figura_mai.jpg",
            altText: "Estatua detallada de Mai Shiranui sosteniendo su abanico de papel"
        },
        {
            id: 12,
            titulo: "Figura Mewtwo con efectos LED",
            precio: 110000,
            imagen: "imagenes/figura_mewtwo.avif",
            altText: "Figura de Mewtwo lanzando una bola sombra con iluminación LED real"
        },
        {
            id: 13,
            titulo: "Terry Bogard - Classic Ver.",
            precio: 62000,
            imagen: "imagenes/figura_terry.jpg",
            altText: "Figura de Terry Bogard con su gorra roja característica"
        },
        {
            id: 14,
            titulo: "Zelda: Twilight Princess Edition",
            precio: 82000,
            imagen: "imagenes/figura_zelda_tp.avif",
            altText: "Caja con figura de Zelda en su versión de Twilight Princess con iluminación LED"
        },
        {
            id: 15,
            titulo: "Figura 'Están Arrestados'",
            precio: 12000,
            imagen: "imagenes/figura_mini_police.webp",
            altText: "Mini figura coleccionable de Miyuki Kobayakawa y su compañera en uniforme de policía en formato"
        }
    ];

    // 2. ESTADO DEL CARRITO (Memoria volátil)
    let carrito = [];

    // 3. FUNCIONES DE RENDERIZADO
    const contenedorVentas = document.getElementById('contenedor-ventas');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    // Función para mostrar los productos en la tienda
    const renderizarTienda = (productos) => {
        if (!contenedorVentas) return;
        contenedorVentas.innerHTML = "";

        productos.forEach(prod => {
            const card = `
                <div class="col-md-6 col-lg-4">
                    <div class="card bg-dark text-white border-secondary h-100 shadow">
                        <img src="${prod.imagen}" class="card-img-top" alt="${prod.altText}" style="height: 250px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-info h6">${prod.titulo}</h5>
                            <p class="text-success fw-bold fs-5">$${prod.precio.toLocaleString('es-CL')}</p>
                            <button class="btn btn-primary mt-auto btn-agregar" data-id="${prod.id}">
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
                </div>`;
            contenedorVentas.innerHTML += card;
        });
        
        // Activar eventos de botones después de renderizar
        vincularBotonesAgregar();
    };

    // 4. LÓGICA DEL CARRITO (Agregar / Eliminar / Calcular)

    const vincularBotonesAgregar = () => {
        const botones = document.querySelectorAll('.btn-agregar');
        botones.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const idProd = parseInt(e.target.getAttribute('data-id'));
                const productoEncontrado = catalogoFiguras.find(p => p.id === idProd);
                
                if (productoEncontrado) {
                    agregarAlCarrito(productoEncontrado);
                }
            });
        });
    };

    const agregarAlCarrito = (producto) => {
        // Añadimos el objeto al array del carrito
        carrito.push(producto);
        actualizarInterfazCarrito();
        console.log("Carrito actualizado:", carrito);
    };

    const eliminarDelCarrito = (indice) => {
        // Acción Kinestésica: eliminamos por posición en el array
        carrito.splice(indice, 1);
        actualizarInterfazCarrito();
    };

    const actualizarInterfazCarrito = () => {
        if (!listaCarrito) return;
        listaCarrito.innerHTML = "";

        if (carrito.length === 0) {
            listaCarrito.innerHTML = `<li class="list-group-item bg-transparent text-secondary text-center py-4">El carrito está vacío.</li>`;
            totalCarrito.innerText = "$0";
            return;
        }

        let sumaTotal = 0;

        carrito.forEach((prod, index) => {
            const item = document.createElement('li');
            item.className = "list-group-item bg-transparent text-light d-flex justify-content-between align-items-center border-secondary px-0";
            item.innerHTML = `
                <div class="small">
                    <div class="fw-bold">${prod.titulo}</div>
                    <div class="text-success">$${prod.precio.toLocaleString('es-CL')}</div>
                </div>
                <button class="btn btn-sm btn-outline-danger btn-eliminar" data-index="${index}">×</button>
            `;
            listaCarrito.appendChild(item);
            sumaTotal += prod.precio;
        });

        totalCarrito.innerText = `$${sumaTotal.toLocaleString('es-CL')}`;

        // Vincular eventos de eliminación
        document.querySelectorAll('.btn-eliminar').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                eliminarDelCarrito(index);
            });
        });

        // Vaciar carrito 
        const btnVaciar = document.getElementById('btn-vaciar');
        if (btnVaciar) {
            btnVaciar.addEventListener('click', () => {
                carrito = [];
                actualizarInterfazCarrito();
                console.log("Carrito vaciado");
            });
        }
    };

    // 5. EVENTO DE BÚSQUEDA (Requisito Semana 6)
    const formBusqueda = document.getElementById('form-busqueda');
    if (formBusqueda) {
        formBusqueda.addEventListener('submit', (e) => {
            e.preventDefault();
            const termino = document.getElementById('input-busqueda').value.toLowerCase();
            
            const filtrados = catalogoFiguras.filter(p => 
                p.titulo.toLowerCase().includes(termino)
            );
            
            renderizarTienda(filtrados);
        });
    }

    // Inicializar tienda
    renderizarTienda(catalogoFiguras);
});