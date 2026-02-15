// animes_bootstrap.js - Responsabilidad: Gestionar el catálogo de la página de Animes

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Definición de Datos (Aquí puedes agregar más animes fácilmente)
    const catalogoAnimes = [
        {
            id: 1, // ID único para cada anime
            titulo: "Neon Genesis Evangelion", // Título del anime
            // descripción breve del anime
            descripcion: "En el año 2015 la humanidad intenta recuperarse del «Segundo impacto», una catástrofe provocada por la caída de un meteorito en la Antártida años atrás. Tras sobrevivir al deshielo de los polos y a una inmediata sucesión de guerras sin fin, los seres humanos deben enfrentarse a un nuevo y mortal peligro. Unos misteriosos seres denominados Ángeles aparecen de improvisto llevando la destrucción por donde pasan. Para frenar esta amenaza, el científico Gendoh Ikari ha desarrollado los Evangelion, gigantescos robots que se convierten en la última línea de defensa para la humanidad. Uno de los primeros pilotos escogidos recibe el nombre de «Tercer Elegido». Shinji Ikari, hijo que Gendoh abandonó, se verá obligado a sondear las profundidades de sus propios recursos internos y así encontrar el valor y la fuerza, no sólo para luchar… sino para sobrevivir o arriesgarse a perderlo todo.",
            opinionPersonal: "Es anime clasico de los 90s, con robots (que al final no lo son), angeles apocalipticos, adolescentes con problemas psicológicos de distinta indole. Tematicas existencialistas que te dejan pensando, realmente que es lo que pasó. La remasterización de este anime, también la encuntro buena. Es un anime que se debe ver con calma y atención a los detalles.",
            imagen: "imagenes/PortadaNGE.jpg", // ruta de imagen
            altText: "Portada oficial del videojuego Hollow Knight Silksong mostrando a Hornet", // texto alternativo para la imagen
            link: "https://www.youtube.com/watch?v=_FmUpViWDX4" // enlace a video relacionado
        },
        {   // la estructura se repite en cada anime, lo que facilita la adición de nuevos animes al catálogo            
            id: 2,
            titulo: "Estan Arrestados",
            descripcion: "Natsumi Tsujimoto, una joven policía, se traslada a la prefectura de Bokuto. Allí conoce a Miyuki, su nueva compañera. En un inicio, ambas no se llevan bien porque Natsumi cree que son demasiado distintas para congeniar, pero no tardan mucho en aprender a trabajar como un equipo. Quieran o no hay cosas que también las unen y, tras su primera misión, se da cuenta de que Miyuki puede ser un gran apoyo. Después de esto, su día a día se convierte en una rutina donde hay un poco de todo: ayudar a gatos y niños en peligro, detener a infractores, perseguir criminales y hasta prestar atención a los asuntos personales. Cada día es una novedad, así que le echarán ganas para afrontarlo.",
            opinionPersonal: "Un anime a mi gusto genial, buen desarrollo de los personajes, muy comico sin ser burdo, diversas situaciones que te hacen reír. En si es un anime con una historia completa, pero la mayoria de los capitulos tienen temática, ahora para poder entender bien algunas de las relaciones interpersonales, es necesario ver varios capítulos para podor entender bien como se desarrollaron. Los OVAs son igualmente entrenido, y la tercera temporada, si alguien la tiene completa, me gustaría verla.",
            imagen: "imagenes/PortadaEstanArrestados.jpg",
            altText: "Portada oficial del anime Estan Arrestados con Natsumi y Miyuki",
            link: "https://www.youtube.com/watch?v=qsE_DbAjYOw"
        },
        {
            id: 3,
            titulo: "Zenki",
            descripcion: "La historia nos cuenta las aventuras de Cherry Night cuyo antepasado era conocidos por ser un poderoso hechicero, Ozuno combatía con los demonios con la ayuda de su fiel demonio Zenki, después de cumplir con su misión al ver que Zenki se volvía más y más violento, decide sellarlo hasta que sus servicios sean requeridos de nuevo. Luego de mucho tiempo de tranquilidad, en una ciudad donde vivía el gran hechicero Ozuno, dos monjes en busca de poder, deciden usurpar un templo con un sello en el, para encontrar ese nuevo poder. Dentro se encontraba a lo que se llama «las semillas del mal», son semillas que con los deseos de personas malas, se alimentan de ellos y los transforman en demonios. Estos demonios primero intentan atacar a Cherry y a su familia, ella tenía poco conocimiento de la magia, pero al verse ella y su abuela en peligro, el pilar donde se encontraba sellado el demonio Zenki, le otorga un brazalete con el cual despierta al demonio.",
            opinionPersonal: "Este anime tambíen tiene escenas muy comicas a mi gutso, pero tambien tiene su toque de magia y acción. Zenki es un demonio muy poderoso que protege a Cherry, aunque la hace rabiar muchas veces porque no le hace caso. Muy buenos villanos, y buena trama en general.",
            imagen: "imagenes/PortadaZenki.jpg",
            altText: "Portada oficial del anime Zenki, mostrando a Zenki",
            link: "https://www.youtube.com/watch?v=tTyqk9yArqw"
        },
        {
            id: 4,
            titulo: "Ranma 1/2",
            descripcion: "Ranma 1/2 es una serie de anime que sigue las aventuras de Ranma Saotome, un joven que tras caer en un pozo mágico se convierte en una chica. La historia combina comedia, acción y romance mientras Ranma intenta resolver sus problemas con la ayuda de su novia Akane.",
            opinionPersonal: "Este anime, trae mezcla de artes marciales, comedia y romance. Las situaciones cómicas que surgen de la transformación de Ranma son muy entretenidas, esta muy presente el echi, por lo que se debe tener cuidado con los nños. Si te gustan las artes marciales y la comedia, este anime es para ti.",
            imagen: "imagenes/PortadaRanma12.jpg",
            altText: "Portada oficial del anime Ranma 1/2, mostrando a Ranma y a otros personajes principales",
            link: "https://www.youtube.com/watch?v=pZ3qsLzssKI"
        },
        {
            id: 5,
            titulo: "Escaflowne",
            descripcion: "Al igual que casi todo el mundo, Hitomi Kanzaki cree ser alguien normal. Ella es una estudiante y miembro del club de atletismo de su instituto. Sin embargo, aparte de amar el deporte también está enamorada del capitán, Akira Amano. Durante una práctica, Hitomi contempla unas visiones sobre un desconocido mundo en guerra. El incidente parecía un simple sueño, así que decidió olvidarlo. Más adelante, al enterarse de la marcha del capitán del país, Hitomi decide declararse y pedirle su primer beso si logra bajar de los 13 segundos en una carrera. Lamentablemente la aparición repentina de un joven misterioso y un dragón impide a Hitomi terminar la carrera. Cuando este joven, Van Fanel, logra derrotar al monstruo, Hitomi es teletransportada junto a él hacia otro mundo que recibe el nombre de Gaia. En esa tierra mágica, Hitomi, junto a Van, se verán implicados en un conflicto que decidirá el destino de Gaia.",
            opinionPersonal: "Anime que mezcla mechas, fantasía y romance. Solo se que me gusta, pero ya van varios años desde que lo vi por primera vez, por lo que no pordría dar una opinión mas actualizada. Lo que si para que lo veas, te dejo la versión remasterizada para que puedas ver. Si logras encontrar la original, podras ver la difencia ademas de la calidad de la imagen, como eran dibujados hace años los personajes.",
            imagen: "imagenes/PortadaEscaflowne.jpg",
            altText: "Portada oficial del anime Escaflowne, mostrando a Van Fanel y a otros personajes principales",
            link: "https://www.youtube.com/watch?v=pU-k30r9jeE"
        },
        {
            id: 6,
            titulo: "Digimon",
            descripcion: "La historia se centra en siete niños de Japón, que son transportados al Mundo digital después de encontrar unos Digivice y ser arrastrados por una gran ola, llegando así a la Isla File. Allí encuentran a sus compañeros Digimon, y con su ayuda, aprenderán a sobrevivir pese a las adversidades de estar en un mundo desconocido. Conforme avanza la serie, descubren que son los Niños elegidos. A mitad de la serie se integra el octavo niño elegido con su Digimon. Los ocho niños tendrán que luchar contra las fuerzas de la oscuridad que quieren apoderarse del mundo digital y el mundo real.",
            opinionPersonal: "Primer anime de la franquicia Digimon, y a gusto personal, el mejor de todos. Cada franquicia tiene su encanto, pero este es el que tiene la mejor historia, desarrollo de personajes y la mejor música. También tocan temas sensibles como la pérdida, la amistad y el crecimiento personal. Y como todo anime de los 90s, tiene su toque de comedia que no está de más.",
            imagen: "imagenes/PortadaDigimon.avif",
            altText: "Portada oficial del anime Digimon, mostrando a los personajes principales",
            link: "https://www.youtube.com/watch?v=7PXb7ZHwITg"
        }
    ];

    // 2. Función para renderizar las tarjetas
    const renderizarAnimes = () => {
        const contenedor = document.getElementById('contenedor-animes'); 
        if (contenedor) {
            contenedor.innerHTML = ""; 
            catalogoAnimes.forEach(anime => {
                const card = `
                    <div class="col-md-6 col-lg-4">
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
            vincularEventosModales();
        }
    };

    const vincularEventosModales = () => {
    const botones = document.querySelectorAll('.btn-leer-mas');
    
    botones.forEach(boton => {
        boton.onclick = (e) => {
            // CAMBIO CLAVE: usamos currentTarget para asegurar que siempre lea el ID del botón
            const id = e.currentTarget.getAttribute('data-id');
            
            // Verificamos en consola si el ID está llegando (F12 para ver)
            console.log("ID capturado:", id); 

            const animeEncontrado = catalogoAnimes.find(a => a.id == id);
            
            if (animeEncontrado) {
                // Inyección de textos
                document.getElementById('modalTitulo').innerText = animeEncontrado.titulo;
                document.getElementById('modalDescripcion').innerText = animeEncontrado.descripcion;
                document.getElementById('modalOpinion').innerText = animeEncontrado.opinionPersonal;
                
                // Inyección de imagen
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

    renderizarAnimes();
});