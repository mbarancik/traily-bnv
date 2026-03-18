const cardGrid = document.querySelector('.card-grid');
const cards = document.querySelectorAll('.card');
const cardWrappers = document.querySelectorAll('.card-wrapper');

cardWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        wrapper.classList.toggle('open');
    });
});