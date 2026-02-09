🐺 Proyecto Sekhmet: Bitácora de Desarrollo Frontend

¡Bienvenidos! Este repositorio es la evolución de mi aprendizaje. Aquí he integrado mi experiencia en clínica veterinaria con la ingeniería, construyendo un sitio que no solo es visual, sino funcional y reactivo.

📋 Glosario Técnico de Sekhmet
Para entender este proyecto, primero debemos conocer sus componentes:

1. Modelo de Cajas (The Box Model)
Es la regla de oro del diseño web. Todo en una página es, en el fondo, una caja.

En Veterinaria: Imagina un paciente en una camilla.

* Content: Es el paciente.
* Padding (Relleno): Es la manta que envuelve al paciente (espacio interno).
* Border (Borde): Son los barandales de la camilla.
* Margin (Margen): Es la distancia de seguridad entre esa camilla y la siguiente.

2. Semántica (El Nombre Correcto)
Es usar etiquetas que describen su contenido, no solo su apariencia.

En Veterinaria: Es como llamar a cada instrumento por su nombre técnico (bisturí, pinza, fórceps) en lugar de decir "la cosa de metal". Usar <header> en lugar de un <div> genérico ayuda a que Google y los lectores de pantalla entiendan tu página.

3. Asincronía (La Sala de Espera)
Es cuando una tarea se ejecuta en segundo plano sin detener el resto del programa.

En Veterinaria: Es como mandar una muestra de sangre al laboratorio. No te quedas mirando el tubo hasta que llegue el resultado; sigues atendiendo otros pacientes (la página sigue funcionando) y cuando el resultado llega (el fetch termina), actúas en consecuencia.

4. Responsividad / Media Queries (Adaptación Biológica)
Es la capacidad de la página para cambiar su forma según el dispositivo.

En Veterinaria: Es como la pupila de un gato; se adapta a la luz ambiental para seguir funcionando. En código, las Media Queries detectan el tamaño de la pantalla y cambian el diseño (de 3 columnas en PC a 1 columna en móvil) para que siempre sea legible.

5. Atributos (Las Constantes del Paciente)
Son propiedades adicionales que les das a las etiquetas HTML (como src, href, id).

En Veterinaria: Son los datos fijos en la ficha: Peso: 5kg, Color: Atigrado. En tu código, el atributo src en una imagen le dice al navegador exactamente de dónde sacar la "foto del paciente".

6. Framework (El Protocolo Médico)
Es un conjunto de reglas y herramientas ya establecidas que te facilitan el trabajo (como Bootstrap).

En Veterinaria: Es como seguir un protocolo de reanimación ya probado. No inventas los pasos cada vez; sigues una guía estándar que sabes que funciona para ahorrar tiempo y evitar errores.

🛠️ Evolución del Sistema (Semanas 1 a 5)
🦴 Semana 1: La Anatomía Básica (HTML)
Creamos el esqueleto usando HTML Semántico. Usamos etiquetas con nombre propio (<header>, <nav>, <section>) para que el navegador sepa exactamente qué órgano está procesando.

🎨 Semana 2: La Estética y el Pelaje (CSS)
Aplicamos el Modelo de Cajas para controlar márgenes (margin) y rellenos (padding), asegurando que cada órgano tenga su espacio vital. Usamos un degradado de azul a morado para darle una identidad visual única.

📱 Semana 3: Adaptabilidad y Fisiología (Responsive Design)
Buscamos la homeostasis del sitio. Mediante Flexbox y CSS Grid, logramos que la página mantenga su equilibrio y orden sin importar si se ve en un celular pequeño o en un monitor de PC.

🏥 Semana 4: El Hospital Modular (Bootstrap 5)
Integramos tecnología de punta para mejorar la navegación:

Navbar: Una barra de navegación colapsable (adaptable).

Carousel: Un carrusel dinámico que cambia imágenes automáticamente cada 3 segundos.

Cards: Tarjetas organizadas para las reseñas de anime y juegos.

🧠 Semana 5: El Sistema Nervioso (DOM & Fetch API)
Le dimos vida al sitio mediante JavaScript:

Eventos: Programamos reflejos ante el click, el mouseover (brillo en el logo) y el submit (envío de formularios sin recargar la página).

Fetch API: El sistema ahora puede "ir al laboratorio" (archivo novedades.json) a buscar datos de forma asíncrona. Esto permite actualizar noticias sin tocar el código fuente.

🚀 Funcionalidades Especiales
Easter Egg: Presiona la tecla "V" para activar el Modo Neón. Es un pequeño truco de ingeniería que cambia la estética de los títulos al instante.

Formulario de Colaboradores: Captura de datos en tiempo real con validación dinámica.