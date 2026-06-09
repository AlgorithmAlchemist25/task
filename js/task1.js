const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll(".card");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 1;
let isTransitioning = false;

const cardWidth = 300;

function goTo(index, animate = true) {
    carousel.style.transition = animate ? "transform .5s ease" : "none";

   
    const offset = (900 - cardWidth) / 2;  
    carousel.style.transform = `translateX(${-index * cardWidth + offset}px)`;
}

function updateActiveCard() {
    cards.forEach(card => card.classList.remove("active"));
    cards[currentIndex].classList.add("active");
}

goTo(currentIndex, false);
updateActiveCard();

nextBtn.addEventListener("click", () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex++;
    goTo(currentIndex);
});

prevBtn.addEventListener("click", () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex--;
    goTo(currentIndex);
});

carousel.addEventListener("transitionend", () => {
    if (currentIndex === cards.length - 1) {
        currentIndex = 1;
        goTo(currentIndex, false);
    }

    if (currentIndex === 0) {
        currentIndex = cards.length - 2;
        goTo(currentIndex, false);
    }

    updateActiveCard();
    isTransitioning = false;
});