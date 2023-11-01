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
const datosConejoAlimentacion = [
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoAlimentación.jpg",
        nombre: "Alimento con Cereales, Manzanas y Verduras",
        categoria: "Alimentacion",
        vendedor: "Kenia",
        precio: "$200.00",
    },
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoAlimentación2.jpg",
        nombre: "Crispy Muesli Conejo - 20 kg",
        categoria: "Alimentacion",
        vendedor: "Berenice",
        precio: "$300.00",
    },
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoAlimentación3.jpg",
        nombre: "Alimento Nature Conejo Rebalance",
        categoria: "Alimentacion",
        vendedor: "Antonio",
        precio: "$95.00",
    },
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoAlimentación4.jpg",
        nombre: "Deuka nin Basis Plus Comida para Conejos",
        categoria: "Alimentacion",
        vendedor: "Alejandra",
        precio: "$100.00",
    }
];

const datosConejoAccesorios = [
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoAccesorio.jpg",
        nombre: "Arnés para Conejo",
        categoria: "Accesorios",
        vendedor: "Uriel",
        precio: "$165.00",
    },
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoAccesorio2.jpg",
        nombre: "Jaula para Conejo",
        categoria: "Accesorios",
        vendedor: "Alexis",
        precio: "$201.50",
    },
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoAccesorio3.jpg",
        nombre: "Bebedero para Conejo",
        categoria: "Accesorios",
        vendedor: "Edna",
        precio: "$138.29",
    },
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoAccesorio4.jpg",
        nombre: "Carrier para Conejo",
        categoria: "Accesorios",
        vendedor: "Kenia",
        precio: "$400.00",
    }
];

const datosConejoCuidadoEHigiene = [
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoCuidadoeHigiene.jpg",
        nombre: "Arenero para Conejo fácil limpiado",
        categoria: "Cuidado e Higiene",
        vendedor: "Berenice",
        precio: "$267.90",
    },
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoCuidadoeHigiene2.jpg",
        nombre: "Producto contra olores",
        categoria: "Cuidado e Higiene",
        vendedor: "Antonio",
        precio: "$169.00",
    },
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoCuidadoeHigiene3.jpg",
        nombre: "Cepillo auto limpiado para conejo",
        categoria: "Cuidado e Higiene",
        vendedor: "Alejandra",
        precio: "$88.70",
    },
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoCuidadoeHigiene4.jpg",
        nombre: "Men For San Shampoo para conejo",
        categoria: "Cuidado e Higiene",
        vendedor: "Uriel",
        precio: "$403.00",
    }
];

const datosConejoSaludYBienestar = [
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoSalud.jpg",
        nombre: "Multivitamínico beaphar",
        categoria: "Salud y Bienestar",
        vendedor: "Alexis",
        precio: "$204.10",
    },
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoSalud2.jpg",
        nombre: "Desparasitante Fenben Lab",
        categoria: "Salud y Bienestar",
        vendedor: "Edna",
        precio: "$308.40",
    },
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoSalud3.jpg",
        nombre: "Desparasitante beaphar",
        categoria: "Salud y Bienestar",
        vendedor: "Kenia",
        precio: "$250.60",
    },
    {
        imgSrc: "./assets/img/seccion_conejos/ProductoSalud4.jpg",
        nombre: "Gotitas para los ojos lacrifresh",
        categoria: "Salud y Bienestar",
        vendedor: "Berenice",
        precio: "$196.00",
    }
];



// Pintar las filas de tarjetas con los datos específicos de cada categoría
pintarFila("tarjeta-conejo-contenedor1", datosConejoAlimentacion);
pintarFila("tarjeta-conejo-contenedor2", datosConejoAccesorios);
pintarFila("tarjeta-conejo-contenedor3", datosConejoCuidadoEHigiene);
pintarFila("tarjeta-conejo-contenedor4", datosConejoSaludYBienestar);
// Llama a la función pintarFila con los contenedores y arreglos de objetos para todas las categorías