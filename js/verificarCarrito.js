function crearContador(contadorId) {
    const restarButton = document.getElementById("restar" + contadorId);
    const sumarButton = document.getElementById("sumar" + contadorId);
    const cantidadSpan = document.getElementById("cantidad" + contadorId);
  
    let cantidad = 1;
  
    function restar() {
      if (cantidad > 1) {
        cantidad--;
        actualizarCantidad();
      }
    }
  
    function sumar() {
      cantidad++;
      actualizarCantidad();
    }
  
    function actualizarCantidad() {
      cantidadSpan.textContent = cantidad;
    }
  
    restarButton.addEventListener("click", restar);
    sumarButton.addEventListener("click", sumar);
  
    // Llamamos a actualizarCantidad para inicializar el valor
    actualizarCantidad();
  }
  
  // Crear contadores
  crearContador(1);
  crearContador(2);
  crearContador(3);
  crearContador(4);