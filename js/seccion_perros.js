function crearTarjeta(contenedor, imgSrc, nombre, categoria, vendedor, precio) {//recibe el contenedor y los datos de la tarjeta
    const tarjeta = document.createElement("div"); //crea un elemento div
    tarjeta.className = "col-8 col-sm-6 col-md-6 col-lg-3"; //le asigna una clase al elemento div
    //innerHTML es una propiedad que define o devuelve el contenido HTML de un elemento
    tarjeta.innerHTML = `
      <div class="product-card">
        <div class="product-tumb">
          <img src="${imgSrc}" id="img-fluid" alt="">
        </div>
        <div class="product-details">
          <h4><a href="./productoPerro.html">${nombre}</a></h4>
          <span class="product-catagory">${categoria}</span>
          <p>${vendedor}</p>
          <div class="product-bottom-details">
            <div class="product-price"><small></small>${precio}</div>
            <div class="product-links">
              <a href="./productoPerro.html"><i class="fa fa-shopping-bag" id="icono-card"> </i></a>
            </div>
          </div>
        </div>
      </div>
    `;
    contenedor.appendChild(tarjeta); //agrega un nodo al final de la lista de hijos de un nodo padre especificado
}

// Función para pintar una fila de tarjetas
function pintarFila(contenedorId, datosArray) { //recibe el id del contenedor y los datos de la tarjeta
    const contenedor = document.getElementById(contenedorId); //obtiene el elemento por su id
    const fila = document.createElement("div"); //crea un elemento div
    fila.className = "row justify-content-center"; //le asigna una clase al elemento div

    for (let i = 0; i < datosArray.length; i++) {
        const datos = datosArray[i];
        crearTarjeta(
            fila,
            datos.imgSrc,
            datos.nombre,
            datos.categoria,
            datos.vendedor,
            datos.precio
        );
    }

    contenedor.appendChild(fila);
}


// Datos específicos para cada categoría
const datosPerroAlimentacion = [
    {
        imgSrc: "./assets/img/seccion_perros/ProductoAlimentacion.jpg",
        nombre: "Croquetas Sportman's Choice",
        categoria: "Alimentacion",
        vendedor: "Kenia",
        precio: "$230.99",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoAlimentacion2.jpg",
        nombre: "Sobre Plaisir Adulto de Res",
        categoria: "Alimentacion",
        vendedor: "Berenice",
        precio: "$20.00",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoAlimentacion3.jpg",
        nombre: "Croquetas FullTrust Perro Grande",
        categoria: "Alimentacion",
        vendedor: "Antonio",
        precio: "$300.00",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoAlimentacion4.jpg",
        nombre: "Galletas Gourmet Bakes",
        categoria: "Alimentacion",
        vendedor: "Alejandra",
        precio: "$30.00",
    }
];

const datosPerroAccesorios = [
    {
        imgSrc: "./assets/img/seccion_perros/ProductoAccesorios.jpg",
        nombre: "Correa Grande para razas grandes",
        categoria: "Accesorios",
        vendedor: "Uriel",
        precio: "$160.50",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoAccesorios2.jpg",
        nombre: "Camita mediana para razas pequeñas",
        categoria: "Accesorios",
        vendedor: "Alexis",
        precio: "$270.50",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoAccesorios3.jpg",
        nombre: "Juguete de pelota plástico azul",
        categoria: "Accesorios",
        vendedor: "Edna",
        precio: "$270.50",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoAccesorios4.jpg",
        nombre: "Plato de Comida Metal acero inoxidable",
        categoria: "Accesorios",
        vendedor: "Kenia",
        precio: "$49.97",
    }
];

const datosPerroCuidadoEHigiene = [
    {
        imgSrc: "./assets/img/seccion_perros/ProductoCuidadoeHigiene.jpg",
        nombre: "Shampoo Orgánico para cachorro",
        categoria: "Cuidado e Higiene",
        vendedor: "Berenice",
        precio: "$165.00",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoCuidadoeHigiene2.jpg",
        nombre: "Cepillo Negro para Perro",
        categoria: "Cuidado e Higiene",
        vendedor: "Antonio",
        precio: "$115.80",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoCuidadoeHigiene3.jpg",
        nombre: "Pasta Dental Blanqueadora Trixie",
        categoria: "Cuidado e Higiene",
        vendedor: "Alejandra",
        precio: "$85.00",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoCuidadoeHigiene4.jpg",
        nombre: "Pasto Sintético Pet Loo Verde",
        categoria: "Cuidado e Higiene",
        vendedor: "Uriel",
        precio: "$560.00",
    }
];

const datosPerroSaludYBienestar = [
    {
        imgSrc: "./assets/img/seccion_perros/ProductoSaludyBienestar.jpg",
        nombre: "Desparasitante Simparica TRIO",
        categoria: "Salud y Bienestar",
        vendedor: "Alexis",
        precio: "$305.00",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoSaludyBienestar2.jpg",
        nombre: "Antibiótico Clinda Pet's NRV",
        categoria: "Salud y Bienestar",
        vendedor: "Edna",
        precio: "$166.00",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoSaludyBienestar3.jpg",
        nombre: "Antinflamatorio Cortipet",
        categoria: "Salud y Bienestar",
        vendedor: "Kenia",
        precio: "$238.00",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoSaludyBienestar4.jpg",
        nombre: "Diurético Dirulán Tabletas",
        categoria: "Salud y Bienestar",
        vendedor: "Berenice",
        precio: "$120.00",
    }
];

const datosPerroRopaYModa = [
    {
        imgSrc: "./assets/img/seccion_perros/ProductoRopayModa.jpg",
        nombre: "Chamarra Verde Mediana",
        categoria: "Ropa y Moda",
        vendedor: "Antonio",
        precio: "$799.00",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoRopayModa2.jpg",
        nombre: "Chamarra Negra con Peluche Chica",
        categoria: "Ropa y Moda",
        vendedor: "Alejandra",
        precio: "$799.00",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoRopayModa3.jpg",
        nombre: "Bandana Chica Azul Marino",
        categoria: "Ropa y Moda",
        vendedor: "Uriel",
        precio: "$200.00",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoRopayModa4.jpg",
        nombre: "Set Impermeable y Botas",
        categoria: "Ropa y Moda",
        vendedor: "Alexis",
        precio: "$400.00",
    }
];

const datosPerroEntrenamiento = [
    {
        imgSrc: "./assets/img/seccion_perros/ProductoEntrenamiento.jpg",
        nombre: "Treats Hill's Suaves de Pollo",
        categoria: "Entrenamiento",
        vendedor: "Edna",
        precio: "$105.00",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoEntrenamiento2.jpg",
        nombre: "Guía de Adiestramiento desde cero",
        categoria: "Entrenamiento",
        vendedor: "Kenia",
        precio: "$95.00",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoEntrenamiento3.jpg",
        nombre: "Clicker Naranja con Silbato",
        categoria: "Entrenamiento",
        vendedor: "Berenice",
        precio: "$93.00",
    },
    {
        imgSrc: "./assets/img/seccion_perros/ProductoEntrenamiento4.jpg",
        nombre: "Repelente Natural !Ahí No! 750 ml",
        categoria: "Entrenamiento",
        vendedor: "Antonio",
        precio: "$599.00",
    }
];

// Pintar las filas de tarjetas con los datos específicos de cada categoría
pintarFila("tarjeta-perro-contenedor1", datosPerroAlimentacion);
pintarFila("tarjeta-perro-contenedor2", datosPerroAccesorios);
pintarFila("tarjeta-perro-contenedor3", datosPerroCuidadoEHigiene);
pintarFila("tarjeta-perro-contenedor4", datosPerroSaludYBienestar);
pintarFila("tarjeta-perro-contenedor5", datosPerroRopaYModa);
pintarFila("tarjeta-perro-contenedor6", datosPerroEntrenamiento);
// Llama a la función pintarFila con los contenedores y arreglos de objetos para todas las categorías