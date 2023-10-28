// Ejemplo de Bootstrap para deshabilitar el enviado de formulario si los campos son inválidos. En función flecha
(() => {
    'use strict'
  
    // Añadimos todos los formularios al que le queramos aplicar validación personalizada. En este caso, con la clase needs-validation
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop en los campos cada vez que se presiona el boton de submit para prevenir el envío de datos inválidos
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
        
      }, false)
      
    })
  })()



