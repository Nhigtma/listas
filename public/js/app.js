const options = document.querySelectorAll('.option');
const descriptionContainer = document.getElementById('description');

// Contenidos para cada opción
const content = {
    "concepto-lista": `
        <h2>Concepto de lista</h2>
        <p>Una lista en programación es una estructura de datos que almacena una colección de elementos ordenados...</p>
        <img src="/img/concepto1.jpg" alt="Concepto de lista">
    `,
    "lista-enlazada": `
        <h2>Lista enlazada</h2>
        <p>Una lista enlazada es una estructura de datos compuesta por nodos, donde cada nodo contiene un valor...</p>
        <img src="/img/enlazada1.jpg" alt="Lista enlazada">
    `,
    "lista-doble-enlazada": `
        <h2>Lista doblemente enlazada</h2>
        <p>Una lista doblemente enlazada es una variante de la lista enlazada...</p>
        <img src="/img/doble1.jpg" alt="Lista doblemente enlazada">
    `,
    "lista-enlazada-circular": `
        <h2>Lista enlazada circular</h2>
        <p>Una lista circular es una estructura de datos en la que los nodos están conectados de manera que el último nodo apunta de nuevo...</p>
        <img src="/img/circular1.jpg" alt="Lista enlazada circular">
    `
};

// Agregar evento click a cada botón
options.forEach(option => {
    option.addEventListener('click', () => {
        // Mostrar el contenido correspondiente
        descriptionContainer.innerHTML = content[option.id];
        descriptionContainer.style.display = 'block';
    });
});