// Sistema para hacer un slider de imágenes con ayuda de un forEach
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});


function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);


//Manipulación de DOM para reviews

// Funcionamiento de recibir puntaje de reviews
const puntaje = document.querySelectorAll('.seccReview .review')
const puntajeValor = document.querySelector('.seccReview input')

puntaje.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		puntajeValor.value = idx + 1

		puntaje.forEach(i=> {
			i.classList.replace('reviewIcon', 'reviewIconSelected')
			i.classList.remove('reviewActive')
		})
		for(let i=0; i<puntaje.length; i++) {
			if(i <= idx) {
				puntaje[i].classList.replace('reviewIconSelected', 'reviewIcon')
				puntaje[i].classList.add('reviewActive')
			} else {
				puntaje[i].style.setProperty('--i', click);
				click++
			}
		}
	})
})

// Recibir los datos de inputs de formulario de Reviews
let puntajeReview = document.getElementById("puntajeReview");
let nombreReview = document.getElementById("nombreReview");
let mensajeReview = document.getElementById("mensajeReview");
const tiempoHoy = Date.now();
const fechaActual = new Date(tiempoHoy);
let btnRegistroReview = document.getElementById("btnRegistroReview");

let seccionsinReviews = document.getElementById("sinReviews");

let reviews = [];

//Función para registrar reseñas
function registrarReview(){
    let puntajeReviewValue = puntajeReview.value;
    let nombreReviewValue = nombreReview.value;
    let mensajeReviewValue = mensajeReview.value;

    //Array para guardar la info de la reseña
    let review = {
        puntaje : puntajeReviewValue,
        nombre : nombreReviewValue,
        fecha : fechaActual.toLocaleDateString(),
        mensaje : mensajeReviewValue
    };
    seccionsinReviews.classList.add("d-none");
    reviews.push(review);
    // 1. Muestro la info en consola.
    mostrarReview(review); //Invocación de otra función para mostrar la info en consola
    // 2. Mensaje de confirmación (textContext)
    //mensajeConfirmacion.textContent = "Reseña registrada correctamente";
    // 3. Generar la tarjeta
    generarTarjetaReview(review); //Invocación de una funci+pn para generar tarjetas
    // 4. Retorno
    return review;
}

function mostrarReview(review) {
    console.log("Puntaje: " + review.puntaje);
    console.log("Nombre: " + review.nombre);
    console.log("Fecha: ", review.fecha); 
    console.log("Mensaje: ", review.mensaje); 
}

//Función para generar las reviews
function generarTarjetaReview(review){
    //crear
    let reviewDiv = document.createElement("div");
    reviewDiv.className = "col-12 col-md-6 mb-3";

    //crear el contenido de la tarjeta
    //Se usan las backsticks porque ya se unan las comillas. Alt + 96 
    reviewDiv.innerHTML=`
        <div class="card rounded-4">                     
            <div class="card-body d-flex flex-column">
                <div class="h-100">
                    <p class="align-items-center align-bottom txt14 d-none"> 0 / 5
                        <img src="./assets/img/huellaReview.svg" alt="Huella para review" class="huellaVacia">
                        <img src="./assets/img/huellaReview.svg" alt="Huella para review" class="huellaVacia">
                        <img src="./assets/img/huellaReview.svg" alt="Huella para review" class="huellaVacia">
                        <img src="./assets/img/huellaReview.svg" alt="Huella para review" class="huellaVacia">
                        <img src="./assets/img/huellaReview.svg" alt="Huella para review" class="huellaVacia">
                    </p>
                    <h6 class="txt16_SB mb-2">${review.nombre}</h6><!-- Usuario de review --> 
                    <p class="txt14N">${review.fecha}</p> <!-- fecha -->
                    <p class="txt16">${review.mensaje}</p> <!-- mensaje -->
                </div>
            </div>
        </div>
    `
    //Aquí se especifica bajo qué div o sección del HTML se añadirá
    contenedorReviews.appendChild(reviewDiv);
}

btnRegistroReview.addEventListener('click', registrarReview);

function copyAutoresponseToInput() {
    const autoresponseDiv = document.getElementById('autoresponseDiv');
    const autoresponseField = document.getElementById('autoresponseField');
    autoresponseField.value = autoresponseDiv.innerHTML;
}

