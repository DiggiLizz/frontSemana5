
// ventas_bootstrap.js - Responsabilidad: Gestión de eCommerce de Figuritas Sekhmet

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DEFINICIÓN DE DATOS (Inventario)
    let catalogoFiguras = []; // MODIFICADO: Ahora empieza vacío porque los datos vendrán del JSON

    // 2. ESTADO DEL CARRITO (Memoria volátil)
    let carrito = [];                                                          // Array para almacenar los productos que el usuario ha agregado al carrito durante su sesión 

    // 3. Selectores del DOM
    const contenedorVentas = document.getElementById('contenedor-ventas');      // Contenedor principal donde se mostrarán las tarjetas de los productos disponibles en la tienda 
    const listaCarrito = document.getElementById('lista-carrito');              // Elemento de la lista donde se mostrarán los productos que el usuario ha agregado al carrito para que pueda ver su selección actual y el total acumulado de su compra.
    const totalCarrito = document.getElementById('total-carrito');              // Elemento donde se mostrará el total acumulado del carrito 
    const formBusqueda = document.getElementById('form-busqueda');              // Formulario de búsqueda para que el usuario pueda filtrar los productos disponibles en la tienda según sus intereses
    const btnFinalizar = document.getElementById('btn-finalizar');              // Botón para finalizar la compra  
    const btnVaciar = document.getElementById('btn-vaciar');     
    
    // --- NUEVA FUNCIÓN: Carga de datos desde JSON ---
    const cargarDatosDesdeJSON = async () => {
        try {
            const respuesta = await fetch('ventas.json'); // Busca el archivo
            if (!respuesta.ok) throw new Error("Error al cargar el catálogo");
            
            catalogoFiguras = await respuesta.json(); // Guarda los datos en nuestra variable global
            renderizarTienda(catalogoFiguras); // Dibuja la tienda por primera vez
            
        } catch (error) {
            console.error("Error:", error);
            if (contenedorVentas) {
                contenedorVentas.innerHTML = `<p class="text-danger">Error al cargar productos. Inténtalo más tarde.</p>`;
            }
        }
    };    
    
    // 4. FUNCIONES DE RENDERIZADO
    const renderizarTienda = (productos) => {       // función que recibe una lista de productos como parámetro
        if (!contenedorVentas) return;              // verificamos que si el contenedos no existe, se detiene la funcion return para evitar que el codigi falle o arroje errores
        contenedorVentas.innerHTML = "";            // Se borra todo el contenido previo dentro del contenedor

        if (productos.length === 0) {               // Verificacón si la lista de productos esta vacia
            contenedorVentas.innerHTML = `<p class="text-center text-secondary">No se encontraron productos.</p>`;  // Se genera un alerta para avisar al usuario que no hubo coindicidencias
            return;                                 // Se usa return si no hay nada si la lista esta vacia
        }

        productos.forEach(prod => {                 // iteracion que recorre cada producto
            // se define la constante card que guarda el molde de la tarjeta, usando Template Literal, que permite inyectar variables
            const card = `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card bg-dark text-white border-secondary h-100 shadow">
                        <img src="${prod.imagen}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="${prod.altText}">
                        <div class="card-body d-flex flex-column text-center p-0">
                            <div class="bg-secondary bg-opacity-25 py-2 border-bottom border-primary">
                                <h5 class="card-title text-truncate px-2">${prod.titulo}</h5>
                            </div>
                            <div class="p-3">
                                <p class="text-success fw-bold">$${prod.precio.toLocaleString('es-CL')}</p>
                                <button class="btn btn-outline-info btn-sm w-100 mb-2 btn-ver-detalle" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#modalDetalleVenta" 
                                        data-id="${prod.id}">Ver Detalle</button>
                                <button class="btn btn-info btn-sm w-100 btn-agregar" data-id="${prod.id}">Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>`;
            contenedorVentas.innerHTML += card;         // se toma el molde de la tarjeta y se suma con +- al contenedor, para que las trajetas no se sobrepongan
        });

        vincularBotonesAgregar();    // esta funcion busca los botones de agregar, para poder agregar productos
        vincularModalVentas();       // esta funcion busca los botones de ver detalle para la figura que se ha seleccionado
    }; 

    // 5. VINCULACIÓN DE EVENTOS
    const vincularModalVentas = () => {                                         // funcion que conecta los botones de detalle con el modal de bootstrap
        const botonesDetalle = document.querySelectorAll('.btn-ver-detalle');   // se captura los botones que vean el detalle que se hayan creado antes
        botonesDetalle.forEach(boton => {                                       // se recorre cada boton para asignarle una instruccion individual
            boton.onclick = (e) => {                                            // cuando se haga click en el boton especifico
                const id = e.currentTarget.getAttribute('data-id');             // se rescata el id en el atributo data id del bptn
                const producto = catalogoFiguras.find(p => p.id == id);         // se busca los datos en el catalogo que coincida con el id
                if (producto) {                                                 // se verifiva que exista el producto
                    document.getElementById('modalTitulo').innerText = producto.titulo;     //se obtiene el tutulo de la imagen modal
                    document.getElementById('modalPrecio').innerText = `$${producto.precio.toLocaleString('es-CL')}`;  // se obtiene el precio de la imagen
                    const imgModal = document.getElementById('modalImagen');    // se busca la imagen del modal
                    if (imgModal) {                                             // si se encuentra la imagen modal
                        imgModal.src = producto.imagen;                         // se actualiza la imagen y el alt de  la misma 
                        imgModal.alt = producto.titulo;
                    }
                }
            };
        });
    };

    const actualizarInterfazCarrito = () => {
        if (!listaCarrito) return;                                         // Si no existe el lugar donde mostrar el carrito, se sale.
        listaCarrito.innerHTML = "";                                       // Limpia la lista visual para no repetir productos anteriores.

        if (carrito.length === 0) {                                        // Si el carrito está vacío (largo 0):
            listaCarrito.innerHTML = `<li class="...">Carrito vacío</li>`; // Inyecta el mensaje de aviso en el HTML.
            totalCarrito.innerText = "$0";                                 // Resetea el contador visual a cero.
            return;                                                        // Termina la función aquí mismo.
        }

        let sumaTotal = 0;                                                 // Crea una variable para ir sumando los precios.
        carrito.forEach((prod, index) => {                                 // Recorre cada producto guardado en el carrito:
            const item = document.createElement('li');                     // Crea un nuevo elemento de lista (LI) en memoria.
            item.className = "list-group-item ...";                        // Le asigna el diseño de Bootstrap (colores y bordes).
            item.innerHTML = `
                <div class="small">
                    <div class="fw-bold">${prod.titulo}</div>
                    <div class="text-success">$${prod.precio.toLocaleString('es-CL')}</div>
                </div>
                <button class="btn btn-sm btn-outline-danger btn-eliminar" data-index="${index}">×</button>`; // Crea el botón X con su posición (index).
        
            listaCarrito.appendChild(item);                                // Pega el nuevo ítem creado dentro de la lista real.
            sumaTotal += prod.precio;                                      // Suma el precio del producto al acumulador.
        });
        

        totalCarrito.innerText = `$${sumaTotal.toLocaleString('es-CL')}`;  // Escribe el resultado final de la suma en pantalla.
        vincularBotonesEliminar();                                         // Activa los botones X para que realmente puedan borrar.
    };
            

    const vincularBotonesAgregar = () => {                                      // vincula el boton agregar para la interaccion
        
        document.querySelectorAll('.btn-agregar').forEach(boton => {            // Selecciona todos los botones ".btn-agregar" creados y los recorre uno por uno.
            boton.onclick = (e) => {                                            // Asigna la función de clic a cada botón usando el evento (e)
                const idProd = parseInt(e.target.getAttribute('data-id'));      // Obtiene el ID del atributo 'data-id' y lo convierte a número entero.
                const producto = catalogoFiguras.find(p => p.id === idProd);    // Busca en el catálogo general la figura que tenga el mismo ID que el botón.
                
                
                if (producto) {                                                 // Si el producto fue encontrado en el catálogo:
                    carrito.push(producto);                                     // Agrega el objeto completo al array del carrito.
                    actualizarInterfazCarrito();                                // Llama a la función para refrescar la lista visual.
                    
                    
                    alert(`Has agregado "${producto.titulo}" al carrito.`);     // Muestra un aviso de confirmación con el nombre del producto agregado.
                }
            };
        });
    };

    const vincularBotonesEliminar = () => {                             // Declaramos la función que gestiona la eliminación de productos.
        document.querySelectorAll('.btn-eliminar').forEach(btn => {     // Busca todos los botones "X" en el DOM y empieza a recorrerlos uno por uno.
            btn.onclick = (e) => {                                      // Asigna la función de clic a cada botón de eliminación:
                const index = e.target.getAttribute('data-index');      // Rescata la posición (índice) del producto dentro del array 'carrito'.
                carrito.splice(index, 1);                               // Elimina exactamente 1 elemento del array en la posición indicada (index).
                actualizarInterfazCarrito();                            // Llama a la función para redibujar el carrito y actualizar el total.
            };
        });
    };

    // 6. INICIALIZACIÓN DE EVENTOS GLOBALES
    if (formBusqueda) {                                                 // Verifica que el formulario de búsqueda exista en el HTML.
        formBusqueda.addEventListener('submit', (e) => {                // escuha cuando el usuario presiona enter o el boton de buscar
            e.preventDefault();                                         // evita que la pagin se recargue 
            const termino = document.getElementById('input-busqueda').value.toLowerCase().trim();        // captura el tecto ingresado, y lo cambia a minusculas y quita espacio vacios    
            const filtrados = catalogoFiguras.filter(p => p.titulo.toLowerCase().includes(termino));     // filtra el catalogo, creando una nueva lista que contenga el texto bsucado     
            renderizarTienda(filtrados);                                                                 // dibuja la tienda, pero solo con las imagenes encontradas
        });
    }

    if (btnVaciar) {                                                  // valida el boton vaciar
        btnVaciar.addEventListener('click', () => {                   // sise hace un clik en el boton sigue el siguiente if
            if (carrito.length === 0) {                               // valida si el carro esta vacio, arroja una alerta
                alert("El carrito ya está vacío.");
                return;
            }
            
            // Acción: Resetear el array y actualizar la vista
            carrito = [];                                           // deja el carrito vacio
            actualizarInterfazCarrito();                            // se actualiza la interfaz del carrito
            alert("El carrito ha sido vaciado.");                   // alerta de vaciado del carrito
        });
    }

    if (btnFinalizar) {                                             // Verifica que el botón de finalizar compra exista en el HTML.
        btnFinalizar.addEventListener('click', () => {              // Escucha el clic del usuario para procesar el pago/cierre.
            
            if (carrito.length === 0) {                             // Control de seguridad: revisa si el carrito tiene productos.
                alert("Tu carrito está vacío.");                    // Si no hay nada, avisa al usuario mediante una alerta.
                return;                                             // Detiene la función (no permite comprar aire).
            }

            // Muestra un mensaje de éxito usando el monto final que ya está calculado en la pantalla.
            alert(`¡Gracias por tu compra, te enviaremos un email para el despacho`);

            // Por esto (Validación de cortocircuito):
            const totalTexto = totalCarrito ? totalCarrito.innerText : "$0";
            alert(`¡Tu compra es por un total de: ${totalTexto}!`);
            
            carrito = [];                                           // Vacía el array del carrito (limpieza de datos en memoria).
            actualizarInterfazCarrito();                            // Refresca la pantalla para que la lista visual aparezca vacía.
        });
    }

    cargarDatosDesdeJSON(); // Orden con "espera"                            // Carga todos los productos por primera vez apenas se abre la página.
}); 