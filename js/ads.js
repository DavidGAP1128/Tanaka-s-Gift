const adImages = [
    
    'images/mk.webp',
    'images/anti.jpeg',
    'images/caliente.jpg',
    'images/cigarrattes.png',
    'images/cli.jpeg',
    'images/cr7.webp',
    'images/crv.jpeg',
    'images/gucci.jpeg',
    'images/raw.jpg',
    'images/tequila.jpg',
    'images/ultra.jpg'
];

// Función para mostrar un anuncio aleatorio
function displayRandomAd() {
    const adContainer = document.getElementById('ad-container');
    
    // Selecciona una imagen al azar
    const randomIndex = Math.floor(Math.random() * adImages.length);
    const randomAd = adImages[randomIndex];
    
    // Inserta la imagen seleccionada en el contenedor
    adContainer.innerHTML = `<img src="${randomAd}" alt="Anuncio">`;
}

// Llama a la función para mostrar un anuncio al cargar la página
window.onload = displayRandomAd;