document.getElementById("rojo").innerHTML = "Adios";

document.getElementById("rojo").style.color = "orange";

const boton = document.getElementById("boton-color");

const cambioColor = document.getElementById("rojo");

boton.addEventListener('click', () => {
    cambioColor.style.color = "brown"
});