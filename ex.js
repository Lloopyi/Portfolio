const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');
let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextButton.addEventListener('click', () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});
