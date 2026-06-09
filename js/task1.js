const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll(".card");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 1;
let isTransitioning = false;

const cardWidth = 300; // must match CSS card width exactly, no gap

function goTo(index, animate = true) {
    carousel.style.transition = animate ? "transform .5s ease" : "none";

    // offset: shift left by 1 card so the active card is centered in 900px wrapper
    // 900px wrapper shows 3 cards (left=300, center=300, right=300)
    // active card should be at position 1 (middle), so offset by -cardWidth to center it
    const offset = (900 - cardWidth) / 2;  // = 300, centers the active card
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