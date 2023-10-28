const insigniaRadio1 = document.getElementById('insignia1_radio');
const insigniaRadio2 = document.getElementById('insignia2_radio');
const insigniaRadio3 = document.getElementById('insignia3_radio');
const insigniaRadio4 = document.getElementById('insignia4_radio');

const botonComprar1 = document.getElementById('botonComprar1');
const botonComprar2 = document.getElementById('botonComprar2');
const botonComprar3 = document.getElementById('botonComprar3');
const botonComprar4 = document.getElementById('botonComprar4');

insigniaRadio1.addEventListener("change", function () {
    if (insigniaRadio1.checked) {
        botonComprar1.style.display = "block";
    } else {
        botonComprar1.style.display = "none";
    }
}
);

insigniaRadio2.addEventListener("change", function () {
    if (insigniaRadio2.checked) {
        botonComprar2.style.display = "block";
    } else {
        botonComprar2.style.display = "none";
    }
}
);

insigniaRadio3.addEventListener("change", function () {
    if (insigniaRadio3.checked) {
        botonComprar3.style.display = "block";
    } else {
        botonComprar3.style.display = "none";
    }
}
);

insigniaRadio4.addEventListener("change", function () {
    if (insigniaRadio4.checked) {
        botonComprar4.style.display = "block";
    } else {
        botonComprar4.style.display = "none";
    }
}
);