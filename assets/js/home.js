// home.js - Lógica específica de la página de Inicio

document.addEventListener('DOMContentLoaded', () => {                               // Nos aseguramos de que el DOM esté completamente cargado antes de ejecutar cualquier código para evitar errores relacionados con elementos que aún no existen en el DOM.
    
    // --- PARTE 1: NOVEDADES DINÁMICAS (FETCH API) ---
    const contenedor = document.getElementById('novedades-dinamicas');              // Seleccionamos el contenedor donde se mostrarán las novedades dinámicas utilizando su ID para asegurarnos de que estamos apuntando al elemento correcto en el DOM.

    if (contenedor) {                                                               // Verificamos que el contenedor exista antes de intentar modificarlo para evitar errores si el elemento no se encuentra en el DOM.
            .then(res => {                                                          // Verificamos que la respuesta de la solicitud sea exitosa antes de intentar procesar los datos. Si la respuesta no es exitosa, lanzamos un error para manejarlo adecuadamente en el bloque catch.
                if (!res.ok) throw new Error("No se pudo cargar el archivo");       // Si la respuesta es exitosa, convertimos el cuerpo de la respuesta a formato JSON para poder trabajar con los datos de las novedades dinámicas en JavaScript.
                return res.json();                                                  // Convertimos la respuesta a formato JSON para poder trabajar con los datos de las novedades dinámicas en JavaScript. Esto nos permitirá acceder a las propiedades de cada novedad y mostrarlas dinámicamente en la página.
            })
            .then(datos => {                                                        // Una vez que tenemos los datos de las novedades dinámicas en formato JSON, iteramos sobre cada novedad para crear y mostrar su contenido dinámicamente en el contenedor seleccionado
                const columna = document.createElement('div');                      // Creamos un nuevo elemento div que servirá como columna para cada novedad dinámica.
                columna.className = 'col-12 col-md-10 mt-4';                        // Asignamos las clases de Bootstrap a la columna para que ocupe todo el ancho en pantallas pequeñas y un ancho más reducido en pantallas medianas, además de agregar un margen superior para separar cada novedad visualmente.
                // Aquí se crea la estructura HTML de cada tarjeta utilizando template literals para insertar los datos de cada novedad dinámica, como la imagen, el título, la descripción y un botón para ver detalles
                columna.innerHTML = `                   
                    <div class="card bg-dark border-info text-light shadow-lg">
                        <img src="${datos.imagen}" alt="${datos.altText}" class="card-img" style="height: 200px; object-fit: cover; opacity: 0.6;">
                        <div class="card-img-overlay d-flex flex-column justify-content-center text-center">
                            <h4 class="card-title text-info">${datos.titulo}</h4>
                            <p class="card-text">${datos.descripcion}</p>
                            <button class="btn btn-info btn-sm btn-novedad w-50 mx-auto">Ver detalles</button>
                        </div>
                    </div>`;
                contenedor.appendChild(columna);                                    // Agregamos la columna con la tarjeta de la novedad dinámica al contenedor seleccionado para que se muestre en la página. Esto permitirá que los usuarios vean la información de cada novedad de manera atractiva y organizada.

                columna.querySelector('.btn-novedad').addEventListener('click', () => {                             // Agregamos un evento de clic al botón "Ver detalles" de cada novedad dinámica para mostrar un mensaje de alerta con más información sobre la novedad cuando el usuario haga clic en el botón. 
                    alert(`Detalles: ${datos.titulo}\nJigoku Sensei Nube es un clásico anime de los 90...`);        // Aquí puedes personalizar el mensaje de alerta con la información que desees mostrar sobre cada novedad dinámica. 
                });
            })
            .catch(error => console.error("Error en Fetch:", error));              // Si ocurre un error durante la solicitud o el procesamiento de los datos, lo capturamos y mostramos un mensaje de error en la consola para ayudar a depurar el problema y entender qué salió mal. 
    }

    // --- PARTE 2: FORMULARIO DE COMUNIDAD (UNIFICADO) ---
    const form = document.getElementById('form-colaboradores');                     // Seleccionamos el formulario de colaboradores utilizando su ID para asegurarnos de que estamos apuntando al elemento correcto en el DOM. 
    const mensajeExito = document.getElementById('mensaje-exito');                  // Seleccionamos el elemento donde se mostrará el mensaje de éxito después de que el usuario envíe el formulario.

    if (form) {                                                                     // Verificamos que el formulario exista antes de intentar agregar un evento de envío para evitar errores si el elemento no se encuentra en el DOM. 
        form.addEventListener('submit', (e) => {                                    // Agregamos un evento de envío al formulario para manejar la lógica de procesamiento de las solicitudes de colaboración cuando el usuario envíe el formulario. 
            e.preventDefault();                                                     // Evitamos que el formulario se envíe de la manera tradicional para poder manejar el proceso de envío de manera personalizada y mostrar un mensaje de éxito sin recargar la página.

            const nombreVal = document.getElementById('nombre').value;              // Obtenemos el valor ingresado en el campo de nombre para incluirlo en el mensaje de éxito y en la consola
            const correoVal = document.getElementById('correo').value;              // Obtenemos el valor ingresado en el campo de correo electrónico para incluirlo en la consola
            const interesVal = document.getElementById('interes').value;            // Obtenemos el valor seleccionado en el campo de interés para incluirlo en el mensaje de éxito y en la consola

            console.log("--- Nueva Solicitud de Colaboración ---");                         // Imprimimos un encabezado en la consola para identificar claramente cada nueva solicitud de colaboración que se recibe
            console.log(`Usuario: ${nombreVal} (${correoVal}) - Interés: ${interesVal}`);   // Imprimimos la información de la solicitud de colaboración en la consola, incluyendo el nombre del usuario, su correo electrónico y su área de interés

            form.reset();                                                           // Restablecemos el formulario para que esté listo para una nueva solicitud después de que el usuario envíe su solicitud de colaboración
            form.classList.add('d-none');                                           // Ocultamos el formulario después de que el usuario envíe su solicitud de colaboración para mostrar solo el mensaje de éxito

            if (mensajeExito) {                                                     // Verificamos que el elemento del mensaje de éxito exista antes de intentar mostrarlo para evitar errores si el elemento no se encuentra en el DOM. 
                mensajeExito.classList.remove('d-none');                            // Mostramos el mensaje de éxito al usuario después de que envíe su solicitud de colaboración, lo que proporcionará una retroalimentación inmediata y personalizada para mejorar la experiencia del usuario. 
                mensajeExito.innerHTML = `¡Gracias <strong>${nombreVal}</strong>! Tu solicitud para ser ${interesVal} ha sido recibida.`;       // Personalizamos el mensaje de éxito con el nombre del usuario y su área de interés para hacer la retroalimentación más relevante y personalizada
                
                setTimeout(() => {                                                  // Después de mostrar el mensaje de éxito durante 5 segundos, ocultamos el mensaje y mostramos nuevamente el formulario para que el usuario pueda enviar otra solicitud si lo desea
                    mensajeExito.classList.add('d-none');                           // Ocultamos el mensaje de éxito después de 5 segundos para limpiar la interfaz y permitir que el usuario se enfoque nuevamente en el formulario si desea enviar otra solicitud de colaboración.
                    form.classList.remove('d-none');                                // Mostramos nuevamente el formulario después de ocultar el mensaje de éxito para que el usuario pueda enviar otra solicitud de colaboración si lo desea
                }, 5000);                                                           
            }
        });
    }
});