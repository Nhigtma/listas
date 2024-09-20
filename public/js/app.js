const options = document.querySelectorAll('.option');
const descriptions = document.querySelectorAll('.description-container');

// Agrega el evento de clic a cada opción
options.forEach(option => {
    option.addEventListener('click', () => {
        console.log(`Clicked on: ${option.id}`); // Depuración: Muestra qué botón fue clickeado
        
        const targetId = `${option.id}-description`;
        descriptions.forEach(desc => {
            if (desc.id === targetId) {
                desc.classList.add('active');
            } else {
                desc.classList.remove('active');
            }
        });
    });
});

// Muestra la primera descripción al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    descriptions[0].classList.add('active');
});