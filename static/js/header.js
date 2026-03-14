const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('header');
const mobileStatus = document.querySelector('.mobile-header .status');

menuBtn.addEventListener('click', () => {
    header.classList.toggle('open');
});

mobileStatus.addEventListener('click', () => {
    header.classList.remove('open');
});
