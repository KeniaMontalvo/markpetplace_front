/* barra de navegación */

const navbarContainer = document.getElementById('navbar-container');

const navbarURL = 'navbar.html';

fetch(navbarURL)
    .then(response => response.text())
    .then(data => {
        navbarContainer.innerHTML = data;
    })
    .catch(error => {
        console.log("Error al cargar la barra de navegación", error);
    })
    

/* footer */

const footerContainer = document.getElementById('my-footer');

const footerURL = 'footer.html';

fetch(footerURL)
    .then(response => response.text())
    .then(data => {
        footerContainer.innerHTML = data;
    })
    .catch(error => {
        console.log("Error al cargar el footer", error);
    })


