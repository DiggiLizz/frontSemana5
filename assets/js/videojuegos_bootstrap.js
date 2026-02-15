document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DEFINICIÓN DE DATOS
    const catalogoVideojuegos = [
        {
            id: 1,
            titulo: "Hollow Knight: SilkSong",
            descripcion: "Silksong es la épica secuela de Hollow Knight, la galardonada aventura de acción. Viaja a tierras inexploradas, descubre poderes nuevos, lucha contra vastas hordas de bichos y bestias y descubre secretos relacionados con tu naturaleza y tu pasado.",
            opinionPersonal: "SilkSong me ha resultado muy entretenido y desafiante. Es un juego que requiere coordinación, memoria y un buen control, ya que se requiere poder jugar en zonas muy pequeñas, con enemigos que te atacan por todos lados.",
            imagen: "assets/imagenes/PortadaSilksong.jpg",
            alt: "Portada de Hollow Knight: SilkSong",
            link: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/"

        },
        {
            id: 2,
            titulo: "Pokemon GO",
            descripcion: "Pokémon GO es un juego móvil gratuito de realidad aumentada (iOS/Android) desarrollado por Niantic que utiliza GPS para localizar, capturar y entrenar personajes en el mundo real. Los jugadores exploran su entorno para atrapar criaturas salvajes, visitar Poképaradas para obtener objetos y combatir en gimnasios. ",
            opinionPersonal: "Es una forma divertida de hacer ejercicio y socializar. Me gusta descubrir nuevos lugares. también esta la opción de poder jugar sin salir de la casa, solo hay que tener cuidado de que no te baneen la cuenta.",
            imagen: "assets/imagenes/PortadaPokemonGO.jpg",
            alt: "Portada de Pokemon GO",
            link: "https://pokemongo.com/es"

        },
        {
            id: 3,
            titulo: "Dragon Trail",
            descripcion: "Dragon Trail 2: Fantasy World (también conocido como Dragon Hunters: Heroes Legend) es un MMORPG de acción 3D gratuito para Android e iOS, lanzado en agosto de 2022 y centrado en la exploración, recolección de mascotas y combate en un mundo fantástico. Ofrece juego en modo vertical y horizontal, con gráficos detallados, clima cambiante y clases de personajes basadas en elementos. ",
            opinionPersonal: "Permite conocer nuevas culturas al jugar con gente de otros países. Muy recomendado.",
            imagen: "assets/imagenes/PortadaDragonTrail.jpg",
            alt: "Portada de Dragon Trail",
            link: "https://dt.wattgaming.com/"
        },
        {
            id: 4,
            titulo: "Hollow Knight",
            descripcion: "Hollow Knight es un aclamado videojuego de acción-aventura tipo metroidvania en 2D, destacado por su exploración, combate preciso y atmósfera melancólica. Desarrollado por Team Cherry, el jugador controla a un pequeño caballero explorando el vasto reino subterráneo de Hallownest, luchando contra criaturas corrompidas y descubriendo secretos. Incluye desafíos exigentes, gráficos dibujados a mano y una banda sonora épica. ",
            opinionPersonal: "Es increíble y desafiante. Me falta poco para completarlo al 120%.",
            imagen: "assets/imagenes/PortadaHollow.avif",
            alt: "Portada de Hollow Knight",
            link: "https://hollow-knight.softonic.com/"
            
        },
        {
            id: 5,
            titulo: "The King of Fighters",
            descripcion: "The King of Fighters (KOF) es una icónica serie de videojuegos de lucha desarrollada por SNK, iniciada en 1994, famosa por sus batallas de equipos de tres contra tres (3v3). Mezcla personajes originales con luchadores de otras franquicias de SNK como Fatal Fury y Art of Fighting. Es reconocida por su velocidad, combos complejos y su gran elenco. ",
            opinionPersonal: "Desde el arcade hasta hoy, me encanta realizar los combos de cada personaje, aunque muchas veces los hago sin darme cuenta, y cuando los intento, ya no salen.",
            imagen: "assets/imagenes/PortadaKOF.webp",
            alt: "Portada de The King of Fighters",
            link: "https://www.snk-corp.co.jp/es-es/games/kof-portal/series/"
            
        },
        {
            id: 6,
            titulo: "The Legend of Zelda",
            descripcion: "La Princesa Zelda es una figura central y recurrente en la serie de videojuegos de Nintendo The Legend of Zelda, caracterizada como la gobernante hyliana del reino de Hyrule, portadora de la Trifuerza de la Sabiduría y encarnación de la Diosa Hylia. A menudo actúa como guía, sabia gobernante o damisela en apuros, siendo fundamental en la lucha contra Ganondorf. ",
            opinionPersonal: "Me encanta jugarlo en 3DS. Esa sensación de exploración libre es única, buscando cada rincón del mapa, encontrando secretos y enfrentando desafíos. Es un juego que siempre me sorprende con su mundo abierto y su historia envolvente.",
            imagen: "assets/imagenes/PortadaZelda.jpg",
            alt: "Portada de The Legend of Zelda",
            link: "https://zelda.nintendo.com/"
            
        }
    ];

    // 2. FUNCIÓN DE RENDERIZADO
    const renderizarVideojuegos = () => {
        const contenedor = document.getElementById('contenedor-videojuegos');
        if (!contenedor) return;

        contenedor.innerHTML = "";
        
        catalogoVideojuegos.forEach(juego => {
            const card = `
                <div class="col-md-6 col-lg-4">
                    <div class="card bg-dark text-white border-secondary h-100 shadow">
                        <img src="${juego.imagen}" class="card-img-top" alt="${juego.titulo}" style="height: 250px; object-fit: cover;">
                        <div class="card-body d-flex flex-column text-center p-0">
                            <div class="bg-secondary bg-opacity-25 py-3 border-bottom border-top border-primary">
                                <h5 class="card-title text-info fw-bold mb-0">${juego.titulo}</h5>
                            </div>
                            <div class="p-3 d-flex flex-column flex-grow-1">
                                <button class="btn btn-outline-info w-100 mt-auto btn-leer-mas" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#modalAnalisis" 
                                        data-id="${juego.id}">
                                    Ver Análisis
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;
            contenedor.innerHTML += card;
        });

        vincularEventosModales();
    };

    // 3. LÓGICA DEL MODAL
    const vincularEventosModales = () => {
        const botones = document.querySelectorAll('.btn-leer-mas');
        botones.forEach(boton => {
            boton.onclick = (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                const juego = catalogoVideojuegos.find(j => j.id == id);
                
                if (juego) {
                    document.getElementById('modalTitulo').innerText = juego.titulo;
                    document.getElementById('modalDescripcion').innerText = juego.descripcion;
                    document.getElementById('modalOpinion').innerText = juego.opinionPersonal;
                    
                    const linkModal = document.getElementById('modalLink');
                    if (linkModal) {
                        linkModal.href = juego.link; 
                    }

                    const imgModal = document.getElementById('modalImagen');
                    if (imgModal) {
                        imgModal.src = juego.imagen;
                        imgModal.alt = juego.titulo;
                    }
                }
            };
        });
    };

    renderizarVideojuegos();
});