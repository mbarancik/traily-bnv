const gridImages = document.querySelectorAll('.grid img');

const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

gridImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('open');
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('open');
        lightboxImg.src = '';
    }
});

document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('open')) {
        if (e.key === 'Escape') {
            lightbox.classList.remove('open');
            lightboxImg.src = '';
        }
    }
});

prevBtn.addEventListener('click', () => {
    const currentIndex = Array.from(gridImages).findIndex(img => img.src === lightboxImg.src);
    const prevIndex = (currentIndex - 1 + gridImages.length) % gridImages.length;
    lightboxImg.src = gridImages[prevIndex].src;
});

nextBtn.addEventListener('click', () => {
    const currentIndex = Array.from(gridImages).findIndex(img => img.src === lightboxImg.src);
    const nextIndex = (currentIndex + 1) % gridImages.length;
    lightboxImg.src = gridImages[nextIndex].src;
});