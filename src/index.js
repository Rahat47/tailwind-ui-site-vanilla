// Mobile Menu Toggle
const menuButton = document.querySelector('#menu-button');
const closeButton = document.querySelector('#close-button');
const mobileMenu = document.querySelector('#mobile-menu');


menuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('opacity-0');
    mobileMenu.classList.remove('scale-85');
    mobileMenu.classList.remove('-translate-y-full');

    mobileMenu.classList.add('opacity-100');
    mobileMenu.classList.add('scale-100');
    mobileMenu.classList.add('translate-y-0');
});


closeButton.addEventListener('click', () => {

    mobileMenu.classList.remove('opacity-100');
    mobileMenu.classList.remove('scale-100');
    mobileMenu.classList.remove('translate-y-0');

    mobileMenu.classList.add('opacity-0');
    mobileMenu.classList.add('scale-85');
    mobileMenu.classList.add('-translate-y-full');
})