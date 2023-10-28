//Observador de los elementos. Función callback en el constructor. Puede observar múltiples elementos o entradas a la vez. Como tendremos varias entradas de elementos, se usa un forEach para hacer un loop sobre ellos y agregarles o removerles clases cuando sea necesario, en este caso, para mostrarlos u ocultarlos. 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{

        //Si los elementos están intersectando el viewport, agregaremos la clase 'mostrar' para mostrarlos en el viewport
        if(entry.isIntersecting){
            entry.target.classList.add('mostrar');
        } else{
            entry.target.classList.remove('mostrar');
        }
    })
});

const elementosOcultos = document.querySelectorAll('.oculto');

//Función para observar todos los elementos ocultos.
elementosOcultos.forEach((elemento) => observer.observe(elemento));

