// Funcion para crear las tarjetas de la 2 en adelante
// Funcion para crear las tarjetas de la 2 en adelante
function crearTarjeta(contenedor, imgSrc, nombre, categoria, vendedor, precio) {//recibe el contenedor y los datos de la tarjeta
  const tarjeta = document.createElement("div");//crea un elemento div
  tarjeta.className = "d-none d-sm-none d-md-none d-lg-block col-sm-12 col-md-3 col-lg-3";//le asigna una clase al elemento div
  //innerHTML es una propiedad que define o devuelve el contenido HTML de un elemento
  tarjeta.innerHTML = `
      <div class="product-card">
        <div class="product-tumb">
          <img src="${imgSrc}" alt="">
        </div>
        <div class="product-details">
          <h4><a href="./producto.html">${nombre}</a></h4>
          <span class="product-catagory">${categoria}</span>
          <p class="txt14">${vendedor}</p>
          <div class="product-bottom-details">
            <div class="product-price"><small></small>${precio}</div>
            <div class="product-links">
              <a href="../../producto.html"><i class="fa fa-shopping-bag" id="icono-card"> </i></a>
            </div>
          </div>
        </div>
      </div>
    `;
  contenedor.appendChild(tarjeta);//agrega un nodo al final de la lista de hijos de un nodo padre especificado
}

// Función para crear la primera tarjeta de cada slide ya que siempre será visible
function crearPrimerTarjeta(contenedor, imgSrc, nombre, categoria, vendedor, precio) {//recibe el contenedor y los datos de la tarjeta
  const tarjeta = document.createElement("div");//crea un elemento div
  tarjeta.className = "col-9 col-sm-6 col-md-6 col-lg-3";//le asigna una clase al elemento div
  //innerHTML es una propiedad que define o devuelve el contenido HTML de un elemento
  tarjeta.innerHTML = `
      <div class="product-card">
        <div class="product-tumb">
          <img src="${imgSrc}" alt="">
        </div>
        <div class="product-details">
          <h4><a href="">${nombre}</a></h4>
          <span class="product-catagory">${categoria}</span>
          <p>${vendedor}</p>
          <div class="product-bottom-details">
            <div class="product-price"><small></small>${precio}</div>
            <div class="product-links">
              <a href="../../producto.html"><i class="fa fa-shopping-bag" id="icono-card"> </i></a>
            </div>
          </div>
        </div>
      </div>
    `;
  contenedor.appendChild(tarjeta);//agrega un nodo al final de la lista de hijos de un nodo padre especificado
}

// Función para pintar una fila de tarjetas
function pintarFila(contenedorId, datosArray) {//recibe el id del contenedor y un arreglo de objetos
  const contenedor = document.getElementById(contenedorId);//obtiene el elemento por su id
  const fila = document.createElement("div");//crea un elemento div
  let numTarjetas = 0;//inicializa la variable numTarjetas en 0
  fila.className = "row justify-content-center";//le asigna una clase al elemento div
  if (window.innerWidth < 768) {//si el ancho de la ventana es menor a 768px
    numTarjetas = 1;//numTarjetas es igual a 1
  } else {
    numTarjetas = 4;//numTarjetas es igual a 4
  }
  for (let i = 0; i < numTarjetas; i++) {
    if (i < datosArray.length) {//Verifica si aún hay objetos en el arreglo
      if (i == 0) {//si i es igual a 0
        crearPrimerTarjeta(//llama a la funcion crearPrimerTarjeta y le pasa el contenedor y los datos del primer objeto
          fila,
          datosArray[i].imgSrc,
          datosArray[i].nombre,
          datosArray[i].categoria,
          datosArray[i].vendedor,
          datosArray[i].precio
        );
      } else {
        crearTarjeta(//llama a la funcion crearTarjeta y le pasa el contenedor y los datos del objeto actual
          fila,
          datosArray[i].imgSrc,
          datosArray[i].nombre,
          datosArray[i].categoria,
          datosArray[i].vendedor,
          datosArray[i].precio
        );
      }
    }
  }
  contenedor.appendChild(fila);//agrega un nodo al final de la lista de hijos de un nodo padre especificado
}

// Datos específicos para cada categoría
const datosPerro1 = {//objeto con los datos de la tarjeta de perro 
  imgSrc:
    "./assets/img/seccion_perros/ProductoAlimentacion.jpg",
  nombre: "Sport Man's Choise",
  categoria: "Alimentación",
  vendedor: "Kenia",
  precio: "$1357.00",
};

const datosPerro2 = {//objeto con los datos de la tarjeta de perro 
  imgSrc:
    "./assets/img/seccion_perros/ProductoAccesorios.jpg",
  nombre: "Correa Perro Roja",
  categoria: "Accesorios",
  vendedor: "Alexis",
  precio: "$124.98",
};

const datosPerro3 = {//objeto con los datos de la tarjeta de perro 
  imgSrc:
    "./assets/img/seccion_perros/ProductoCuidadoeHigiene.jpg",
  nombre: "Pet Shapoo puppies",
  categoria: "Cuidado e Higiene",
  vendedor: "Berenice",
  precio: "$113.16",
};

const datosPerro4 = {//objeto con los datos de la tarjeta de perro 
  imgSrc:
    "./assets/img/seccion_perros/ProductoEntrenamiento.jpg",
  nombre: "Premios Entrenamiento",
  categoria: "Entrenamiento",
  vendedor: "Antonio",
  precio: "$110.00",
};

const datosPerro5 = {//objeto con los datos de la tarjeta de perro 
  imgSrc:
    "./assets/img/seccion_perros/ProductoAlimentacion2.jpg",
  nombre: "Plaisir Dog",
  categoria: "Alimentación",
  vendedor: "Antonio",
  precio: "$130.40",
};

const datosPerro6 = {//objeto con los datos de la tarjeta de perro 
  imgSrc:
    "./assets/img/seccion_perros/ProductoAccesorios2.jpg",
  nombre: "Cama para perro",
  categoria: "Accesorios",
  vendedor: "Alexis",
  precio: "$645.80",
};

const datosPerro7 = {//objeto con los datos de la tarjeta de perro 
  imgSrc:
    "./assets/img/seccion_perros/ProductoCuidadoeHigiene2.jpg",
  nombre: "Cepillo para perro",
  categoria: "Cuidado e Higiene",
  vendedor: "Alejandra",
  precio: "$78.50",
};

const datosPerro8 = {//objeto con los datos de la tarjeta de perro 
  imgSrc:
    "./assets/img/seccion_perros/ProductoEntrenamiento2.jpg",
  nombre: "Adiestramiento desde cero",
  categoria: "Entrenamiento",
  vendedor: "Edna",
  precio: "$350.00",
};

const datosGato1 = {//objeto con los datos de la tarjeta de gato
  imgSrc: "./assets/img/productoArbolGato/producto-1.jpg",
  nombre: "Árbol forma de cactus",
  categoria: "Accesorios",
  vendedor: "Kenia",
  precio: "$370.00",
};

const datosGato2 = {//objeto con los datos de la tarjeta de gato
  imgSrc: "./assets/img/seccion_gatos/accesoriogato1.jpg",
  nombre: "Castillo café para gato",
  categoria: "Accesorios",
  vendedor: "Antonio",
  precio: "$1499.00",
};

const datosGato3 = {//objeto con los datos de la tarjeta de gato
  imgSrc: "./assets/img/seccion_gatos/alimentogato1.jpg",
  nombre: "Marca Purina Gati adulto",
  categoria: "Alimentación",
  vendedor: "Alejandra",
  precio: "$255.00",
};

const datosGato4 = {//objeto con los datos de la tarjeta de gato
  imgSrc: "./assets/img/seccion_gatos/ropagato1.jpg",
  nombre: "Traje de Dinosaurio",
  categoria: "Ropa y Moda",
  vendedor: "Uriel",
  precio: "$199.99",
};

const datosGato5 = {//objeto con los datos de la tarjeta de gato
  imgSrc: "./assets/img/seccion_gatos/accesoriogato2.jpg",
  nombre: "gigwi varilla para gato",
  categoria: "Accesorios",
  vendedor: "Kenia",
  precio: "$105.80",
};

const datosGato6 = {//objeto con los datos de la tarjeta de gato
  imgSrc: "./assets/img/seccion_gatos/accesoriogato3.jpg",
  nombre: "Collar para gato",
  categoria: "Accesorios",
  vendedor: "Alexis",
  precio: "$80.00",
};

const datosGato7 = {//objeto con los datos de la tarjeta de gato
  imgSrc: "./assets/img/seccion_gatos/alimentogato2.jpg",
  nombre: "Nutrience grain free",
  categoria: "Alimentación",
  vendedor: "Alejandra",
  precio: "$500.00",
};

const datosGato8 = {//objeto con los datos de la tarjeta de gato
  imgSrc: "./assets/img/seccion_gatos/ropagato2.jpg",
  nombre: "Suéter para gato",
  categoria: "Ropa y Moda",
  vendedor: "Uriel",
  precio: "$250.00",
};

const datosPez1 = {//objeto con los datos de la tarjeta de pez
  imgSrc:
    "./assets/img/seccion_peces/alimentopez1.png",
  nombre: "Wardley DISCO Algas",
  categoria: "Alimentación",
  vendedor: "Edna",
  precio: "$45.00",
};

const datosPez2 = {//objeto con los datos de la tarjeta de pez
  imgSrc:
    "./assets/img/seccion_peces/accesoriopez1.jpg",
  nombre: "Acuario con luz led",
  categoria: "Accesorios",
  vendedor: "Berenice",
  precio: "$3192.00",
};

const datosPez3 = {//objeto con los datos de la tarjeta de pez
  imgSrc:
    "./assets/img/seccion_peces/cuidadopez1.jpg",
  nombre: "Tetra Aquasafe plus",
  categoria: "Cuidado e Higiene",
  vendedor: "Kenia",
  precio: "$299.00",
};

const datosPez4 = {//objeto con los datos de la tarjeta de pez
  imgSrc:
    "./assets/img/seccion_peces/saludpez1.jpg",
  nombre: "Embotellado Flourish",
  categoria: "Salud",
  vendedor: "Antonio",
  precio: "$173.00",
};

const datosPez5 = {//objeto con los datos de la tarjeta de pez
  imgSrc:
    "./assets/img/seccion_peces/alimentopez2.webp",
  nombre: "Vipagram alimento base",
  categoria: "Alimentación",
  vendedor: "Edna",
  precio: "$62.60",
};

const datosPez6 = {//objeto con los datos de la tarjeta de pez
  imgSrc:
    "./assets/img/seccion_peces/accesoriopez2.jpg",
  nombre: "Flores y plantas artificiales",
  categoria: "Accesorios",
  vendedor: "Berenice",
  precio: "$145.00",
};

const datosPez7 = {//objeto con los datos de la tarjeta de pez
  imgSrc:
    "./assets/img/seccion_peces/cuidadopez2.jpg",
  nombre: "hygger limpiador electrico",
  categoria: "Cuidado e Higiene",
  vendedor: "Kenia",
  precio: "$1000.00",
};

const datosPez8 = {//objeto con los datos de la tarjeta de pez
  imgSrc:
    "./assets/img/seccion_peces/saludpez2.jpg",
  nombre: "Bomba de aire",
  categoria: "Salud",
  vendedor: "Uriel",
  precio: "$315.50",
};

const datosConejo1 = {//objeto con los datos de la tarjeta de conejo
  imgSrc: "./assets/img/seccion_conejos/ProductoAccesorio.jpg",
  nombre: "Arnés rosa para conejo",
  categoria: "Accesorios",
  vendedor: "Edna",
  precio: "$110.00",
};

const datosConejo2 = {//objeto con los datos de la tarjeta de conejo
  imgSrc: "./assets/img/seccion_conejos/ProductoAlimentación.jpg",
  nombre: "Vitakraft Menu vital",
  categoria: "Alimentación",
  vendedor: "Berenice",
  precio: "$275.50",
};

const datosConejo3 = {//objeto con los datos de la tarjeta de conejo
  imgSrc: "./assets/img/seccion_conejos/ProductoSalud.jpg",
  nombre: "beaphar multi-vit + vit c",
  categoria: "Salud",
  vendedor: "Uriel",
  precio: "$18.99",
};

const datosConejo4 = {//objeto con los datos de la tarjeta de conejo
  imgSrc: "./assets/img/seccion_conejos/ProductoCuidadoeHigiene.jpg",
  nombre: "Caja de arena conejo",
  categoria: "Cuidado e Higiene",
  vendedor: "Alejandra",
  precio: "$980.20",
};

const datosConejo5 = {//objeto con los datos de la tarjeta de conejo
  imgSrc: "./assets/img/seccion_conejos/ProductoAccesorio2.jpg",
  nombre: "Jaula para conejo",
  categoria: "Accesorios",
  vendedor: "Edna",
  precio: "$3500.00",
};

const datosConejo6 = {//objeto con los datos de la tarjeta de conejo
  imgSrc: "./assets/img/seccion_conejos/ProductoAlimentación2.jpg",
  nombre: "conejo crispy",
  categoria: "Alimentación",
  vendedor: "Berenice",
  precio: "$150.75",
};

const datosConejo7 = {//objeto con los datos de la tarjeta de conejo
  imgSrc: "./assets/img/seccion_conejos/ProductoSalud2.jpg",
  nombre: "Desparasitante Fenben Labt",
  categoria: "Salud y Bienestar",
  vendedor: "Edna",
  precio: "$308.40",
};

const datosConejo8 = {//objeto con los datos de la tarjeta de conejo
  imgSrc: "./assets/img/seccion_conejos/ProductoCuidadoeHigiene2.jpg",
  nombre: "Producto contra olores",
  categoria: "Cuidado e Higiene",
  vendedor: "Antonio",
  precio: "$169.00",
};

// Pintar las filas de tarjetas con los datos específicos de cada categoría


pintarFila("tarjeta-perro-contenedor1", [datosPerro1, datosPerro2, datosPerro3, datosPerro4]);
pintarFila("tarjeta-gato-contenedor1", [datosGato1, datosGato2, datosGato3, datosGato4]);
pintarFila("tarjeta-pez-contenedor1", [datosPez1, datosPez2, datosPez3, datosPez4]);
pintarFila("tarjeta-conejo-contenedor1", [datosConejo1, datosConejo2, datosConejo3, datosConejo4]);

pintarFila("tarjeta-perro-contenedor2", [datosPerro5, datosPerro6, datosPerro7, datosPerro8]);
pintarFila("tarjeta-gato-contenedor2", [datosGato5, datosGato6, datosGato7, datosGato8]);
pintarFila("tarjeta-pez-contenedor2", [datosPez5, datosPez6, datosPez7, datosPez8]);
pintarFila("tarjeta-conejo-contenedor2", [datosConejo5, datosConejo6, datosConejo7, datosConejo8]);



/*
pintarFila("tarjeta-perro-contenedor1", datosPerro);//llama a la funcion pintarFila y le pasa el id del contenedor y los datos de la tarjeta
pintarFila("tarjeta-perro-contenedor2", datosPerro);
pintarFila("tarjeta-perro-contenedor3", datosPerro);

pintarFila("tarjeta-gato-contenedor1", datosGato);
pintarFila("tarjeta-gato-contenedor2", datosGato);
pintarFila("tarjeta-gato-contenedor3", datosGato);

pintarFila("tarjeta-pez-contenedor1", datosPez);
pintarFila("tarjeta-pez-contenedor2", datosPez);
pintarFila("tarjeta-pez-contenedor3", datosPez);

pintarFila("tarjeta-conejo-contenedor1", datosConejo);
pintarFila("tarjeta-conejo-contenedor2", datosConejo);
pintarFila("tarjeta-conejo-contenedor3", datosConejo);
*/