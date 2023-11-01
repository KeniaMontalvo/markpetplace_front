//PARA MOSTRAR EN UN CARRITO

document.addEventListener('DOMContentLoaded', function () {
    const btnCarrito = document.getElementById('productoCarrito');
    const product = document.getElementById('product-1');
    const bodyCarrito = document.getElementById('bodyCarrito');
    const offcanvasCarrito = document.getElementById('offcanvasCarrito');

    btnCarrito.addEventListener('click', function (event) {
        event.preventDefault();

        // Mostrar la información del usuario en el elemento "bodyCarrito"
        bodyCarrito.innerHTML = `
            <div class="col-12"> <!-- Producto -->
            <!-- Card -->
                <div class="card rounded-4"> 
                    <div class="row g-0">
                        <!-- Imagen de producto -->
                        <div class="col-3 col-md-4">
                        <img src="../assets/img/productoArbolGato/producto-1.jpg" class="card-img rounded-start-4 horizontal" alt="Arbol para gato con forma de cactus">
                        </div>
                        <!-- Información de producto -->
                        <div class="col-9 col-md-8">
                            <div class="card-body d-flex flex-column">
                                <div class="h-100">
                                <h6 class="titulosH6">Árbol para gato con forma de cactus</h6>
                                <div class="d-flex justify-content-between">
                                    <p class="txt18_SB">$370.00</p> <!-- Precio -->
                                    <div class="col-4">
                                        <input class="form-control form-control-sm" type="number" name="" id="" value="1">
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- Cierre de producto -->

        `;
                
    });




    // Función para traer desde la DB un producto al carrito, FETCH API.
    // btnCarrito.addEventListener('click', function (event) {
    //     event.preventDefault();

    //     const productId = document.getElementById('productoCarrito').value;
    //     const url = `http://localhost:8080/productos/${productId}`;

    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data) {
    //                 // Mostrar la información del usuario en el elemento "bodyCarrito"
    //                 bodyCarrito.innerHTML = `
    //                     <div class="col-12"> <!-- Producto -->
    //                     <!-- Card -->
    //                         <div class="card rounded-4"> 
    //                             <div class="row g-0">
    //                                 <!-- Imagen de producto -->
    //                                 <div class="col-3 col-md-4">
    //                                 <img src="${data.imagen}" class="card-img rounded-start-4 horizontal" alt="Arbol para gato con forma de cactus">
    //                                 </div>
    //                                 <!-- Información de producto -->
    //                                 <div class="col-9 col-md-8">
    //                                     <div class="card-body d-flex flex-column">
    //                                         <div class="h-100">
    //                                         <h6 class="titulosH6">${data.nombre_producto}</h6>
    //                                         <div class="d-flex justify-content-between">
    //                                             <p class="txt18_SB">$${data.precio}</p> <!-- Precio -->
    //                                             <div class="col-4">
    //                                                 <input class="form-control form-control-sm" type="number" name="" id="" value="1">
    //                                             </div>
    //                                         </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div> <!-- Cierre de producto -->

    //                 `;
    //             } else {
    //                 // Mostrar un mensaje de usuario no encontrado si no se encontró el usuario
    //                 bodyCarrito.innerHTML = "Usuario no encontrado";
    //             }
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // });
});