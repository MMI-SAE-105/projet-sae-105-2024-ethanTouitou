// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;
        // Mise à jour des attributs ARIA pour accessibilité
        toggle.ariaExpanded = isClosed;
        nav.ariaHidden = isOpen;
        page.classList.toggle("noscroll", isClosed);
    });
}

// Script JS pour le carrousel
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const carouselImages = document.querySelector(".carousel-images");

let index = 0;

prevBtn.addEventListener("click", () => {
    index = (index > 0) ? index - 1 : 2; // Revient à la dernière image si à la première
    updateCarousel();
});

nextBtn.addEventListener("click", () => {
    index = (index < 2) ? index + 1 : 0; // Revient à la première image si à la dernière
    updateCarousel();
});

function updateCarousel() {
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}
