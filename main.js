const menu = document.querySelector('.open-menu');
const close = document.querySelector('.close-menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})