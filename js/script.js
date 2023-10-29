/* barra de navegación para todas las páginas*/

const navbarContainer = document.getElementById('navbar-container');

const navbarURL = './navbar.html';

fetch(navbarURL)
    .then(response => response.text())
    .then(data => {
        navbarContainer.innerHTML = data;
    })
    .catch(error => {
        console.log("Error al cargar la barra de navegación", error);
    })


/*barra de navegación para index*/

const navbarContainerPrincipal = document.getElementById('navbar-container-principal');

const navbarURLIndex = './html/navbarIndex.html';

fetch(navbarURLIndex)
    .then(response => response.text())
    .then(data => {
        navbarContainerPrincipal.innerHTML = data;
    })
    .catch(error => {
        console.log("Error al cargar la barra de navegación", error);
    })
    

/* footer para todas las páginas*/

const footerContainer = document.getElementById('my-footer');

const footerURL = './footer.html';

fetch(footerURL)
    .then(response => response.text())
    .then(data => {
        footerContainer.innerHTML = data;
    })
    .catch(error => {
        console.log("Error al cargar el footer", error);
    })

/* footer para index*/

const footerContainerPrincipal = document.getElementById('my-footer-principal');

const footerURLIndex = './html/footerIndex.html';

fetch(footerURLIndex)
    .then(response => response.text())
    .then(data => {
        footerContainerPrincipal.innerHTML = data;
    })
    .catch(error => {
        console.log("Error al cargar el footer", error);
    })

