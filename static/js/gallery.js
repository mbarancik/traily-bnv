const gridImages = Array.from(document.querySelectorAll('.grid img'));

const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (!gridImages.length || !lightbox || !lightboxImg || !closeBtn || !prevBtn || !nextBtn) {
    // No gallery content on this page.
} else {
let currentIndex = 0;

const getImageSrc = (img) => img.dataset.full || img.src;

const openLightbox = (index) => {
    currentIndex = index;
    lightbox.classList.add('open');
    lightboxImg.src = getImageSrc(gridImages[currentIndex]);
    lightboxImg.alt = gridImages[currentIndex].alt || '';
};

const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
    lightboxImg.alt = '';
};

const showPrev = () => {
    currentIndex = (currentIndex - 1 + gridImages.length) % gridImages.length;
    lightboxImg.src = getImageSrc(gridImages[currentIndex]);
    lightboxImg.alt = gridImages[currentIndex].alt || '';
};

const showNext = () => {
    currentIndex = (currentIndex + 1) % gridImages.length;
    lightboxImg.src = getImageSrc(gridImages[currentIndex]);
    lightboxImg.alt = gridImages[currentIndex].alt || '';
};

gridImages.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('open')) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
        if (e.key === 'ArrowLeft') {
            showPrev();
        }
        if (e.key === 'ArrowRight') {
            showNext();
        }
    }
});

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);
}