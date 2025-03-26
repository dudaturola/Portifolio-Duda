let slideIndex = 1;
let slideInterval;

function plusSlides(n) {
    clearInterval(slideInterval); // Para o avanço automático quando o usuário interage
    showSlides(slideIndex += n);
    startAutoSlide(); // Reinicia o avanço automático
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    startAutoSlide();
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
    }
}

// Função para iniciar o avanço automático dos slides
function startAutoSlide() {
    slideInterval = setInterval(() => {
        showSlides(slideIndex += 1);
    }, 4000);
}

// Para o slide se o mouse estiver dentro do container
document.querySelector(".slideshow-container").addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
});

// Retoma o avanço automático quando o mouse sai do container
document.querySelector(".slideshow-container").addEventListener("mouseleave", () => {
    startAutoSlide();
});

// Inicializa os slides e o auto play
showSlides(slideIndex);
startAutoSlide();
