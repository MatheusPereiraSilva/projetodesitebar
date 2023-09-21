const totalSLides = document.querySelectorAll('.foto-principal img').length;
const slideContainer = document.querySelector('.foto-principal');
let currentSlide = 0; 

function updateMargin() {
    const newMargin = currentSlide * -100;
    slideContainer.style.transform = `translateX(${newMargin}%)`;
}

function mudarSlide(index) {
    currentSlide = index;
    updateMargin();
}

const thumbnails = document.querySelectorAll('.slider-item img');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        mudarSlide(index);
    });
});

function avancarSlideAutomaticamente() {
    currentSlide++; 
    if (currentSlide >= totalSLides) {
        currentSlide = 0;
    }
    mudarSlide(currentSlide);
}

setInterval(avancarSlideAutomaticamente, 4000);

window.addEventListener('scroll', () => {
    // Verifique a posição dos elementos em relação à janela de visualização
    const elementos = document.querySelectorAll('.elemento');
    elementos.forEach(elemento => {
        const posicao = elemento.getBoundingClientRect().top;
        const alturaJanela = window.innerHeight;

        // Verifique se o elemento está visível na janela de visualização
        if (posicao < alturaJanela) {
            elemento.style.opacity = 1;
            elemento.style.transform = 'translateY(0)';
        }
    });
});