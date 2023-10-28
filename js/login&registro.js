const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// LocaStorage SignIn

const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  const email = document.querySelector('#email1').value
  const password = document.querySelector('#password1').value
  const Users = JSON.parse(localStorage.getItem('users')) || []
  const validUser = Users.find(user => user.email === email && user.password === password)
  if(!validUser){
    window.location.href = 'index.html'
  }
  alert(`Bienvenido ${validUser.name}`)
  localStorage.setItem('login_success', JSON.stringify(validUser))
  window.location.href = 'index.html'

})

// LocaStorage SignUp

// const signupForm = document.querySelector('#signupForm')
// signupForm.addEventListener('submit', (e)=>{
//   e.preventDefault()
//   const name = document.querySelector('#name').value
//   const email = document.querySelector('#email').value
//   const password = document.querySelector('#password').value

//   const Users = JSON.parse(localStorage.getItem('users')) || []
//   const isUserRegistered = Users.find(user => user.email === email)
//   if(isUserRegistered){
//     return alert('El usuario ya esta registrado!')
//   }

//   Users.push({name: name, email: email, password: password})
//   localStorage.setItem('users', JSON.stringify(Users))
//   alert('Registro Exitoso!')
//   // window.location.href = 'index.html'
//   //Redireccion a pagina principal
// })
//Modal 
// ---


//Base de datos - Registro
const signupForm = document.getElementById('submit');

signupForm.addEventListener("click", (e) => {
e.preventDefault()  
    const nombre = document.getElementById('firstName');
    const apellido = document.getElementById('lastName');
    const correo = document.getElementById('email');
    const direccion = document.getElementById('address');
    const telefono = document.getElementById('phone');
console.log(nombre, apellido, email, address, telefono);

// Necesito asignar estas constantes a un Objeto que se va a enviar a mi servidor y posteriormente, convertir este Objeto e un formato que mi servidor pueda leer

const cliente = {
    nombreUsuario: nombre.value,
    contrasenia: apellido.value,
    apellido: direccion.value,
    telefono: correo.value,
    correo: telefono.value,
};
console.log(cliente);
//fetch API(url, method, headers, (json), body, then, catch)
// const url = "http://localhost:8080/users/clients";

fetch("http://localhost:8080/users", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(cliente)
})  
    .then(response => {
        return response.text();
    })
    .then(cliente =>{
        console.log("Si fine", cliente);
        window.location.href = 'index.html'
        return cliente;
    })
    .catch(error => {
        console.log("Aqui hay un error", error);
        window.location.href = 'index.html'
    })
});

document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    const userInfo = document.getElementById('userInfo');

    userForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const url = `http://localhost:8080/users/clients/byEmail?email=${email}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    // Mostrar la información del usuario en el elemento "userInfo"
                    userInfo.innerHTML = `
                        <h3>Información del Usuario:</h3>
                        <p>Nombre: ${data.firstName} ${data.lastName}</p>
                        <p>Dirección: ${data.address}</p>
                        <p>Teléfono: ${data.phone}</p>
                        <p>Correo Electrónico: ${data.email}</p>
                    `;
                } else {
                    // Mostrar un mensaje de usuario no encontrado si no se encontró el usuario
                    userInfo.innerHTML = "Usuario no encontrado";
                }

                
            })
            .catch(error => {
                console.error(error);
            });
            window.location.href = 'index.html'
    });
});