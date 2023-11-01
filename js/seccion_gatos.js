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
          <h4><a href="">${nombre}</a></h4>
          <span class="product-catagory">${categoria}</span>
          <p>${vendedor}</p>
          <div class="product-bottom-details">
            <div class="product-price"><small></small>${precio}</div>
            <div class="product-links">
              <a href=""><i class="fa fa-shopping-bag" id="icono-card"> </i></a>
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
const datosGatoAlimentacion = [
    {
        imgSrc: "./assets/img/seccion_gatos/alimentogato1.jpg",
        nombre: "Croquetas Premium para Gatos",
        categoria: "Alimentacion",
        vendedor: "Kenia",
        precio: "$00.00",
    },
    {
        imgSrc: "./assets/img/seccion_gatos/alimentogato2.jpg",
        nombre: "Snacks de Pescado Liofilizados Calidad Alta",
        categoria: "Alimentacion",
        vendedor: "Berenice",
        precio: "$00.00",
    },
    {
        imgSrc: "./assets/img/seccion_gatos/alimentogato4.jpg",
        nombre: "Comida Húmeda Gourmet para Gatos",
        categoria: "Alimentacion",
        vendedor: "Antonio",
        precio: "$00.00",
    },
    {
        imgSrc: "./assets/img/seccion_gatos/alimentogato3.jpg",
        nombre: "Suplemento Nutricional Vital para Gatos",
        categoria: "Alimentacion",
        vendedor: "Alejandra",
        precio: "$00.00",
    }
];

const datosGatoAccesorios = [
    {
        imgSrc: "./assets/img/seccion_gatos/accesoriogato1.jpg",
        nombre: "Rascador Grande de Sisal para Gatos",
        categoria: "Accesorios",
        vendedor: "Uriel",
        precio: "$00.00",
    },
    {
        imgSrc: "./assets/img/seccion_gatos/accesoriogato2.jpg",
        nombre: "Juguete Sencillo e Interactivo con Plumas",
        categoria: "Accesorios",
        vendedor: "Alexis",
        precio: "$00.00",
    },
    {
        imgSrc: "./assets/img/seccion_gatos/accesoriogato3.jpg",
        nombre: "Collar de Tela con Campana color naranja",
        categoria: "Accesorios",
        vendedor: "Edna",
        precio: "$00.00",
    },
    {
        imgSrc: "./assets/img/seccion_gatos/accesoriogato4.jpg",
        nombre: "Cama de Gato con Diseño especial de esfera",
        categoria: "Accesorios",
        vendedor: "Kenia",
        precio: "$00.00",
    }
];

const datosGatoCuidadoEHigiene = [
    {
        imgSrc: "./assets/img/seccion_gatos/cuidadogato1.jpg",
        nombre: "Arena Absorbente Premium",
        categoria: "Cuidado e Higiene",
        vendedor: "Berenice",
        precio: "$00.00",
    },
    {
        imgSrc: "./assets/img/seccion_gatos/cuidadogato2.jpg",
        nombre: "Champú Suave para Gatos",
        categoria: "Cuidado e Higiene",
        vendedor: "Antonio",
        precio: "$00.00",
    },
    {
        imgSrc: "./assets/img/seccion_gatos/cuidadogato3.jpg",
        nombre: "Cepillo de Masaje Desenredante",
        categoria: "Cuidado e Higiene",
        vendedor: "Alejandra",
        precio: "$00.00",
    },
    {
        imgSrc: "./assets/img/seccion_gatos/cuidadogato4.jpg",
        nombre: "Toallitas de Limpieza",
        categoria: "Cuidado e Higiene",
        vendedor: "Uriel",
        precio: "$00.00",
    }
];

const datosGatoSaludYBienestar = [
    {
        imgSrc: "./assets/img/seccion_gatos/saludgato1.jpg",
        nombre: "Suplemento de Omega-3",
        categoria: "Salud y Bienestar",
        vendedor: "Alexis",
        precio: "$00.00",
    },
    {
        imgSrc: "./assets/img/seccion_gatos/saludgato2.jpg",
        nombre: "Fuente de Agua con Filtro",
        categoria: "Salud y Bienestar",
        vendedor: "Edna",
        precio: "$00.00",
    },
    {
        imgSrc: "./assets/img/seccion_gatos/saludgato3.jpg",
        nombre: "Cama Ortopédica para Gatos",
        categoria: "Salud y Bienestar",
        vendedor: "Kenia",
        precio: "$00.00",
    },
    {
        imgSrc: "./assets/img/seccion_gatos/saludgato4.jpg",
        nombre: "Kit de Cepillado y Masaje para Gatos",
        categoria: "Salud y Bienestar",
        vendedor: "Berenice",
        precio: "$00.00",
    }
];

const datosGatoRopaYModa = [
    {
        imgSrc: "./assets/img/seccion_gatos/ropagato1.jpg",
        nombre: "Pijama de Terciopelo para Gatos",
        categoria: "Ropa y Moda",
        vendedor: "Antonio",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_gatos/ropagato2.jpg",
        nombre: "Juego de sueters de lana 100% algodon",
        categoria: "Ropa y Moda",
        vendedor: "Alejandra",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_gatos/ropagato3.jpg",
        nombre: "Corbata de Gato con Estampado sencilo",
        categoria: "Ropa y Moda",
        vendedor: "Uriel",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_gatos/ropagato4.jpg",
        nombre: "Gorro de obeja Terciopelo para Gatos",
        categoria: "Ropa y Moda",
        vendedor: "Alexis",
        precio: "$00.00",
    }
];

const datosGatoEntrenamiento = [
    {
        imgSrc: "/assets/img/seccion_gatos/entrenamientogato1.jpg",
        nombre: "Juguete Interactivo",
        categoria: "Entrenamiento",
        vendedor: "Edna",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_gatos/entrenamientogato2.jpg",
        nombre: "Puzzle de Entrenamiento",
        categoria: "Entrenamiento",
        vendedor: "Kenia",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_gatos/entrenamientogato3.jpg",
        nombre: "Rueda de Ejercicio para Gatos",
        categoria: "Entrenamiento",
        vendedor: "Berenice",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_gatos/entrenamientogato4.jpg",
        nombre: "Kit de Agility para Gatos",
        categoria: "Entrenamiento",
        vendedor: "Antonio",
        precio: "$00.00",
    }
];

// Pintar las filas de tarjetas con los datos específicos de cada categoría
pintarFila("tarjeta-gato-contenedor1", datosGatoAlimentacion);
pintarFila("tarjeta-gato-contenedor2", datosGatoAccesorios);
pintarFila("tarjeta-gato-contenedor3", datosGatoCuidadoEHigiene);
pintarFila("tarjeta-gato-contenedor4", datosGatoSaludYBienestar);
pintarFila("tarjeta-gato-contenedor5", datosGatoRopaYModa);
pintarFila("tarjeta-gato-contenedor6", datosGatoEntrenamiento);
// Llama a la función pintarFila con los contenedores y arreglos de objetos para todas las categorías