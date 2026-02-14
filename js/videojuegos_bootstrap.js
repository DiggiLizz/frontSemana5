// videojuegos_bootstrap.js - Responsabilidad: Gestionar el catálogo de la página de videojuegos

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Definición de Datos 
    const catalogoVideojuegos = [
        {
            titulo: "Hollow Knight: SilkSong", // Título del videojuego
            // descripción breve del videojuego
            descripcion: "Silksong expande el universo de Hollow Knight con una protagonista distinta, un mundo nuevo y mecánicas más rápidas.",
            opinionPersonal: "SilkSong me ha resultado muy entretenido y desafiante. Es un juego que requiere coordinación y memoria.",
            imagen: "imagenes/PortadaSilkSong.jpg", // ruta de imagen
            altText: "Portada oficial del videojuego Hollow Knight Silksong mostrando a Hornet", // texto alternativo para la imagen
            link: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/" // enlace a video relacionado
        },
        {
            titulo: "Pokemon GO", // Título del videojuego
            // descripción breve del videojuego
            descripcion: "Juego de realidad aumentada que permite capturar Pokémon en el mundo real.",
            opinionPersonal: "Es una forma divertida de hacer ejercicio y socializar. Me gusta descubrir nuevos lugares.",
            imagen: "imagenes/PortadaPokemonGO.jpg", // ruta de imagen
            altText: "Portada oficial del videojuego Pokemon GO", // texto alternativo para la imagen
            link: "https://dt.wattgaming.com/" // enlace a video relacionado
        },
        {
            titulo: "Dragon Trail", // Título del videojuego
            // descripción breve del videojuego
            descripcion: "Explora la Astroisla en este mundo abierto lleno de poderes elementales.",
            opinionPersonal: "Permite conocer nuevas culturas al jugar con gente de otros países. Muy recomendado., descargar de páginas habilitadas",
            imagen: "imagenes/PortadaDragonTrail.jpg", // ruta de imagen
            altText: "Portada oficial del videojuego Dragon Trail",
            link: "https://www.youtube.com/watch?v=_FmUpViWDX4" // enlace a video relacionado
        },
        {
            titulo: "Hollow Knight", // Título del videojuego
            // descripción breve del videojuego
            descripcion: "El metroidvania clásico donde exploras el reino caído de Hallownest.",
            opinionPersonal: "Es increíble y desafiante. Me falta poco para completarlo al 100%.",
            imagen: "imagenes/PortadaHollowKnight.avif", // ruta de imagen
            altText: "Portada oficial del videojuego Hollow Knight",
            link: "https://hollow-knight.softonic.com/" // enlace a video relacionado
        },
        {
            titulo: "The King of Fighters", // Título del videojuego
            // descripción breve del videojuego
            descripcion: "Serie mítica de lucha por equipos de SNK con una gran historia.",
            opinionPersonal: "Desde el arcade hasta hoy, me encanta realizar los combos de cada personaje.",
            imagen: "imagenes/PortadaKOF.webp", // ruta de imagen
            altText: "Portada oficial del videojuego The King of Fighters",
            link: "https://www.snk-corp.co.jp/es-es/games/kof-portal/series/" // enlace a video relacionado
        },
        {
            titulo: "The Legend of Zelda", // Título del videojuego
            // descripción breve del videojuego
            descripcion: "Las heroicas aventuras de Link para salvar Hyrule y a la Princesa Zelda.",
            opinionPersonal: "Me encanta jugarlo en 3DS. Esa sensación de exploración libre es única.",
            imagen: "imagenes/PortadaLegendOfZelda.jpg", // ruta de imagen
            altText: "Portada oficial del videojuego The Legend of Zelda",
            link: "https://zelda.nintendo.com/" // enlace a video relacionado
        }
    ];

    // 2. Función para renderizar las tarjetas
    const renderizarVideoJuegos = () => {
        const contenedor = document.getElementById('contenedor-videojuegos'); 
        
        if (contenedor) {
            contenedor.innerHTML = ""; 
            console.log("Renderizando catálogo de videojuegos...");
            
            catalogoVideojuegos.forEach(videojuego => {
                const card = `
                    <div class="col-md-6 col-lg-4">
                        <div class="card bg-dark text-white border-secondary h-100 shadow">
                            <img src="${videojuego.imagen}" class="card-img-top" alt="${videojuego.altText}" style="height: 350px; object-fit: cover;">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-info fw-bold">${videojuego.titulo}</h5>
                                <p class="card-text small flex-grow-1">${videojuego.descripcion.substring(0, 150)}...</p>
                                <hr class="border-secondary">
                                <p class="card-text x-small text-secondary italic"><strong>Mi opinión:</strong> ${videojuego.opinionPersonal.substring(0, 100)}...</p>
                                <a href="${videojuego.link}" target="_blank" class="btn btn-outline-primary mt-auto">Ver video</a>
                            </div>
                        </div>
                    </div>`;
                contenedor.innerHTML += card;
            });
        }
    };

    renderizarVideoJuegos();
});