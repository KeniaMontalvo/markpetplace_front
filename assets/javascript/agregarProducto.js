function openAlert() {
    var alert = document.getElementById('customAlert');
    alert.style.display = 'block';
}

function closeAlert() {
    var alert = document.getElementById('customAlert');
    alert.style.display = 'none';
}

function acceptAlert() {
    closeAlert();
}

window.onload = function () {
    openAlert();
}



$(document).ready(function () {

    // Abrir el inspector de archivos

    //Código que le da funcionalidad al cuadrito azul para agregar foto/imagen y contador de cantidad de imagenes subidas

    $(document).on("click", "#add-photo", function () {
        if (cont < 4) {
            cont++;
            $("#add-new-photo").click();
        } else {
            alert("Se ha llegado a la cantidad maxima de imagenes (4).")
        }
    });

    // Código que agrega una nueva foto y compara la extensión de la misma para verificar si es válida o no
    var cont = 0;
    $(document).on("change", "#add-new-photo", function () {

        console.log(this.files);
        var files = this.files;
        var element;
        var supportedImages = ["image/jpeg", "image/png", "image/gif"];
        var seEncontraronElementoNoValidos = false;


        //Código que selecciona el archivo
        console.log(cont);
        for (var i = 0; i < files.length; i++) {
            element = files[i];

            if (supportedImages.indexOf(element.type) != -1) {
                createPreview(element);
            }
            else {
                seEncontraronElementoNoValidos = true;
                alert("Ingrese un archivo válido");
                cont--;
            }
        }

    });


    // Eliminar previsualizaciones
    /* 
    Código que elimina la imagen ya subida, al hacer click en la misma imagen
    */
    $(document).on("click", "#Images .image-container", function (e) {
        $(this).parent().remove();
        cont--;
    });


});



//Genera las previsualizaciones de las imagenes
//Muestra las imagenes que se van cargando y seleccionado. 
function createPreview(file) {
    var imgCodified = URL.createObjectURL(file);
    var img = $('<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"><div class="image-container"> <figure> <img src="' + imgCodified + '" alt="Foto del usuario"> <figcaption> <i class="icon-cross"></i> </figcaption> </figure> </div></div>');
    $(img).insertBefore("#add-photo-container");
}

//Validaciones

let expresiones = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Obtén una referencia al formulario
const userForm = document.getElementById('container-form');

var contador = 0;
var bandera = false;


userForm.addEventListener('submit', function (event) {

    (function () {
        'use strict'
        // Fetch all the forms we want to apply custom Bootstrap validation styles to

        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.from(forms)
            .forEach(function (form) {

                form.addEventListener('submit', function (event) {
                    contador = 0;

                    Array.from(form.elements).forEach(function (element) {
                        if (element.checkValidity() === false) {
                            contador++;
                        }
                    });
                    if (contador === 0) {
                        bandera = true;
                    } else {

                    }
                    form.classList.add('was-validated');
                }, false);

            })


    })()
    if (bandera) {
        // Obtiene los valores de los campos del formulario
        const nombre = document.getElementById('inputName').value;
        const telefono = document.getElementById('inputnumber').value;
        const email = document.getElementById('inputemail').value;
        const pass = document.getElementById('password').value;
        const passConf = document.getElementById('confirmpassword').value;
        // Crea un objeto JSON con los valores del formulario
        if (pass === passConf) {
            const usuario = {
                nombre: nombre,
                telefono: telefono,
                email: email,
                pass: pass
            };

            localStorage.setItem('user', JSON.stringify(usuario));

        } else {
            alert("Las contraseñas no coinciden");
        }
    }

    event.preventDefault(); // Evita el envío predeterminado del formulario
    // Puedes realizar otras acciones aquí, como enviar el objeto JSON a un servidor
});

