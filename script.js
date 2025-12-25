// Lógica del contador
let cuenta = 0;

// Referencias a los elementos del HTML
const boton = document.getElementById('miBoton');
const display = document.getElementById('contador');

// Función que se ejecuta al hacer clic
boton.addEventListener('click', () => {
    cuenta++;
    display.textContent = cuenta;
    
    // Cambiar color cada 10 clics
    if (cuenta % 10 === 0) {
        display.style.color = '#e74c3c'; // Rojo
    } else {
        display.style.color = '#333';
    }

    console.log("La cuenta actual es: " + cuenta);
});
