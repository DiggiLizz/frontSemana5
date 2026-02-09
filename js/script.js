// PASO 1: MANIPULACIÓN DEL DOM + FETCH API
const contenedor = document.getElementById('novedades-dinamicas'); // Contenedor donde se insertará el HTML dinámico

if (contenedor) {                       // Verificamos que el contenedor exista antes de intentar manipularlo
    fetch('novedades.json')             // Realizamos la petición al archivo JSON
        .then(respuesta => {            // Verificamos que la respuesta sea exitosa
            if (!respuesta.ok) throw new Error("No se pudo cargar el archivo");   // Si la respuesta es correcta, convertimos el JSON a un objeto JavaScript
            return respuesta.json();    // Si la respuesta es correcta, convertimos el JSON a un objeto JavaScript
        })
        .then(datos => {                // Aquí es donde manipulamos el DOM para agregar el nuevo contenido dinámico
            const columna = document.createElement('div');     // Creamos un nuevo div para la tarjeta de novedad
            columna.className = 'col-12 col-md-10 mt-4';       // Asignamos las clases de Bootstrap para el diseño responsivo

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
            `; // Insertamos la nueva columna con la tarjeta de novedad al final del contenedor
            contenedor.appendChild(columna);    // Agregamos la nueva columna al contenedor principal

            // --- PASO 2: ACTIVAR EL BOTÓN RECIÉN CREADO ---
            const botonNuevo = columna.querySelector('.btn-novedad');      // Seleccionamos el botón recién creado dentro de la nueva columna
            botonNuevo.addEventListener('click', () => {                   // Agregamos un evento click al botón para mostrar una alerta con detalles adicionales
                alert(`Detalles adicionales: ${datos.titulo}\nHell Teacher: Jigoku Sensei Nube es un clásico anime shonen de terror/comedia de los 90, centrado en Meisuke Nueno ("Nube"), un profesor de primaria que usa su mano demoníaca sellada para proteger a sus alumnos de espíritus y fantasmas. La serie mezcla humor, elementos educativos y historias episódicas de miedo. Es conocida por su carismático protagonista, su atmósfera única y su capacidad para equilibrar el terror con momentos cómicos. ¡Una joya del anime que sigue siendo querida por los fans!`);
            });  // Agregamos un evento click al botón para mostrar una alerta con detalles adicionales
        })
        .catch(error => {                                     // Si ocurre un error durante la petición o manipulación del DOM, lo capturamos aquí y mostramos un mensaje de error en la consola
            console.error("Error en la Fetch API:", error);  
        });
}

// PASO 2: IMPLEMENTACIÓN DE EVENTOS

// 1. Evento mouseover en el Logo
const logo = document.querySelector('.navbar-brand');   // Seleccionamos el elemento del logo en la barra de navegación
if (logo) {                                             // Verificamos que el logo exista antes de intentar agregar eventos
    logo.addEventListener('mouseover', () => {          // Agregamos un evento mouseover para aplicar un efecto de resplandor al logo
        logo.style.textShadow = "0 0 15px #e4dfe6";   // Aplicamos un efecto de resplandor al logo
        logo.style.transition = "0.3s";                 // Agregamos una transición suave para el efecto
    });
    logo.addEventListener('mouseout', () => {           // Agregamos un evento mouseout para eliminar el efecto de resplandor cuando el mouse salga del logo
        logo.style.textShadow = "none";                 // Eliminamos el efecto de resplandor al salir del logo
    });
}

// 2. Evento Click en Tarjetas de Reseñas
const botonesResena = document.querySelectorAll('.btn-outline-primary');   // Seleccionamos todos los botones de reseñas (en este caso, los botones con la clase 'btn-outline-primary' dentro de las tarjetas de reseñas)
botonesResena.forEach(boton => {                                           // Iteramos sobre cada botón de reseña para agregar un evento click que muestre una alerta con detalles adicionales
    boton.addEventListener('click', () => {                                
        console.log("Evento Click: Abriendo modal de detalles.");          // En lugar de una alerta, aquí podríamos abrir un modal con más información sobre la reseña, pero por simplicidad, solo mostramos un mensaje en la consola
    });
});

// 3. Evento Click en el enlace de contacto (Footer)
const linkContacto = document.querySelector('a[href="mailto:lili.zapata@duocuc.cl"]'); // Seleccionamos el enlace de contacto en el footer utilizando un selector de atributo para encontrar el enlace que tiene el atributo href con el valor "mailto:lili.zapata@duocuc.cl"
if (linkContacto) {                                             // Verificamos que el enlace de contacto exista antes de intentar agregar un evento
    linkContacto.addEventListener('click', () => {              // Agregamos un evento click al enlace de contacto para mostrar un mensaje en la consola cuando el usuario haga clic en el enlace, indicando que se está contactando a soporte Sekhmet
        console.log("Evento Click: Contactando a soporte Sekhmet...");  // Aquí podríamos agregar un seguimiento adicional, como abrir un formulario de contacto o redirigir a una página de soporte, pero por simplicidad, solo mostramos un mensaje en la consola
    });
}

// 4. Evento Submit (Formulario de Colaboradores - Semana 5)
const formularioColab = document.getElementById('form-colaboradores'); // Seleccionamos el formulario de colaboradores utilizando su ID para agregar un evento submit que capture los datos ingresados por el usuario y muestre un mensaje de éxito personalizado, además de ocultar el formulario después de la sumisión para mejorar la experiencia del usuario. También se simula la captura de datos para un futuro envío a una base de datos, aunque en este caso solo se muestra en la consola para fines demostrativos.
const mensajeExito = document.getElementById('mensaje-exito');         // Seleccionamos el elemento donde se mostrará el mensaje de éxito después de que el usuario envíe el formulario, para proporcionar feedback visual y mejorar la experiencia del usuario al confirmar que su solicitud ha sido recibida correctamente.

if (formularioColab) {                                      // Verificamos que el formulario de colaboradores exista antes de intentar agregar un evento
    formularioColab.addEventListener('submit', (event) => { // Agregamos un evento submit al formulario de colaboradores para capturar los datos ingresados por el usuario y mostrar un mensaje de éxito personalizado, además de ocultar el formulario después de la sumisión para mejorar la experiencia del usuario. También se simula la captura de datos para un futuro envío a una base de datos, aunque en este caso solo se muestra en la consola para fines demostrativos.
        // Evitamos que la página se recargue (vital para una Single Page Application)
        event.preventDefault();

        // Extraemos los datos (esto simula la captura para un futuro envío a base de datos)
        const nombreVal = document.getElementById('nombre').value;     // Capturamos el valor del campo de nombre ingresado por el usuario en el formulario de colaboradores para simular la captura de datos que eventualmente podrían ser enviados a una base de datos, aunque en este caso solo se muestra en la consola para fines demostrativos.
        const correoVal = document.getElementById('correo').value;     // Capturamos el valor del campo de correo electrónico ingresado por el usuario en el formulario de colaboradores para simular la captura de datos que eventualmente podrían ser enviados a una base de datos, aunque en este caso solo se muestra en la consola para fines demostrativos.
        const interesVal = document.getElementById('interes').value;   // Capturamos el valor del campo de interés seleccionado por el usuario en el formulario de colaboradores para simular la captura de datos que eventualmente podrían ser enviados a una base de datos, aunque en este caso solo se muestra en la consola para fines demostrativos.

        console.log("--- Nueva Solicitud de Colaboración ---");      // Mostramos un mensaje en la consola para indicar que se ha recibido una nueva solicitud de colaboración, lo que ayuda a simular el proceso de captura de datos para un futuro envío a una base de datos, aunque en este caso solo se muestra en la consola para fines demostrativos.
        console.log(`Usuario: ${nombreVal} (${correoVal})`);        // Mostramos el nombre y correo electrónico del usuario que ha enviado la solicitud de colaboración en la consola para simular la captura de datos que eventualmente podrían ser enviados a una base de datos, aunque en este caso solo se muestra en la consola para fines demostrativos.
        console.log(`Interés: ${interesVal}`);                      // Mostramos el interés seleccionado por el usuario en la consola para simular la captura de datos que eventualmente podrían ser enviados a una base de datos, aunque en este caso solo se muestra en la consola para fines demostrativos.

        // Feedback visual: Ocultamos el formulario con una clase de Bootstrap y mostramos el éxito
        formularioColab.classList.add('d-none');
        if (mensajeExito) {                             // Verificamos que el elemento de mensaje de éxito exista antes de intentar mostrarlo para evitar errores en la consola si el elemento no está presente en el DOM.
            mensajeExito.classList.remove('d-none');    // Mostramos el mensaje de éxito al usuario después de que envíe el formulario de colaboradores para proporcionar feedback visual y confirmar que su solicitud ha sido recibida correctamente, mejorando así la experiencia del usuario.
            mensajeExito.innerHTML = `¡Gracias <strong>${nombreVal}</strong>! Tu solicitud para ser ${interesVal} ha sido recibida.`;  // Personalizamos el mensaje de éxito con el nombre del usuario y su interés para hacerlo más amigable y personalizado, lo que mejora la experiencia del usuario al confirmar que su solicitud ha sido recibida correctamente.
        }
    });
}


// 5. Evento Keydown (Easter Egg: Modo Neón)
document.addEventListener('keydown', (event) => {             // Agregamos un evento keydown a todo el documento para detectar cuando el usuario presiona la tecla 'v' y activar un Easter Egg que cambia el estilo de los títulos a un modo neón inspirado en Sekhmet, proporcionando una experiencia divertida y visualmente atractiva para los usuarios que descubran esta función oculta.
    // Si el usuario presiona la tecla 'v'
    if (event.key === 'v' || event.key === 'V') {               // Verificamos si la tecla presionada es 'v' (en mayúscula o minúscula) para activar el Easter Egg del Modo Neón de Sekhmet, lo que añade un toque divertido y visualmente atractivo a la experiencia del usuario al cambiar el estilo de los títulos en la página.
        console.log("¡Easter Egg activado! Modo Neón de Sekhmet.");  // Mostramos un mensaje en la consola para indicar que el Easter Egg del Modo Neón de Sekhmet ha sido activado, lo que añade un toque divertido y visualmente atractivo a la experiencia del usuario al cambiar el estilo de los títulos en la página.
        
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

