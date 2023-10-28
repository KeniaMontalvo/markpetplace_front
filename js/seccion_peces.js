function crearTarjeta(contenedor, imgSrc, nombre, categoria, vendedor, precio) {//recibe el contenedor y los datos de la tarjeta
    const tarjeta = document.createElement("div"); //crea un elemento div
    tarjeta.className = "col-9 col-sm-6 col-md-6 col-lg-3"; //le asigna una clase al elemento div
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
    fila.className = "row"; //le asigna una clase al elemento div

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
const datosPezAlimentacion = [
    {
        imgSrc: "/assets/img/seccion_peces/alimentopez1.png",
        nombre: "Algas para pez de artemia liofilizados",
        categoria: "Alimentacion",
        vendedor: "Kenia",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_peces/alimentopez2.webp",
        nombre: "Comida en Pellets para Peces de Fondo",
        categoria: "Alimentacion",
        vendedor: "Berenice",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_peces/alimentopez3.jpg",
        nombre: "Alimento en Escamas para Peces Tropicales",
        categoria: "Alimentacion",
        vendedor: "Antonio",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_peces/alimentopez4.jpg",
        nombre: "Comida para Peces de Agua Fría premium",
        categoria: "Alimentacion",
        vendedor: "Alejandra",
        precio: "$00.00",
    }
];

const datosPezAccesorios = [
    {
        imgSrc: "/assets/img/seccion_peces/accesoriopez1.jpg",
        nombre: "Acuario con Sistema de Filtración",
        categoria: "Accesorios",
        vendedor: "Uriel",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_peces/accesoriopez2.jpg",
        nombre: "Plantas Artificiales para Acuario",
        categoria: "Accesorios",
        vendedor: "Alexis",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_peces/accesoriopez3.jpg",
        nombre: "Termómetro digital flotante especial",
        categoria: "Accesorios",
        vendedor: "Edna",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_peces/accesoriopez4.jpg",
        nombre: "Red de resguardo para captura de Peces",
        categoria: "Accesorios",
        vendedor: "Kenia",
        precio: "$00.00",
    }
];

const datosPezCuidadoEHigiene = [
    {
        imgSrc: "/assets/img/seccion_peces/cuidadopez1.jpg",
        nombre: "Acondicionador VIP para Acuario",
        categoria: "Cuidado e Higiene",
        vendedor: "Berenice",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_peces/cuidadopez2.jpg",
        nombre: "Limpiador de Grava para Acuario",
        categoria: "Cuidado e Higiene",
        vendedor: "Antonio",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_peces/cuidadopez3.jpg",
        nombre: "Kit de Pruebas de Agua",
        categoria: "Cuidado e Higiene",
        vendedor: "Alejandra",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_peces/cuidadopez4.jpg",
        nombre: "Medicación para Peces Enfermos",
        categoria: "Cuidado e Higiene",
        vendedor: "Uriel",
        precio: "$00.00",
    }
];

const datosPezSaludYBienestar = [
    {
        imgSrc: "/assets/img/seccion_peces/saludpez1.jpg",
        nombre: "Tratamiento para Enfermedades de Peces",
        categoria: "Salud y Bienestar",
        vendedor: "Alexis",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_peces/saludpez2.jpg",
        nombre: "Aireador de Acuario mediano Silencioso",
        categoria: "Salud y Bienestar",
        vendedor: "Edna",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_peces/saludpez3.png",
        nombre: "Suplemento Multivitamínico para Peces",
        categoria: "Salud y Bienestar",
        vendedor: "Kenia",
        precio: "$00.00",
    },
    {
        imgSrc: "/assets/img/seccion_peces/saludpez4.jpg",
        nombre: "Termostato de Precisión para Acuario",
        categoria: "Salud y Bienestar",
        vendedor: "Berenice",
        precio: "$00.00",
    }
];

// Pintar las filas de tarjetas con los datos específicos de cada categoría
pintarFila("tarjeta-pez-contenedor1", datosPezAlimentacion);
pintarFila("tarjeta-pez-contenedor2", datosPezAccesorios);
pintarFila("tarjeta-pez-contenedor3", datosPezCuidadoEHigiene);
pintarFila("tarjeta-pez-contenedor4", datosPezSaludYBienestar);
pintarFila("tarjeta-pez-contenedor5", datosPezRopaYModa);
pintarFila("tarjeta-pez-contenedor6", datosPezEntrenamiento);
// Llama a la función pintarFila con los contenedores y arreglos de objetos para todas las categorías