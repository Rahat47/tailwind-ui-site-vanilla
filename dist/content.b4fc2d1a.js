const flyoutMenu = document.querySelectorAll('#flyoutMenu');
flyoutMenu.forEach((item)=>item.addEventListener('click', (e)=>{
        // select the button inside the flyout menu
        const button = item.querySelector('#flyout-button');
        const menu1 = item.querySelector('#flyout-menu');
        if (!menu1) return;
        if (menu1.classList.contains('invisible') && menu1.classList.contains('scale-0')) {
            menu1.classList.remove('invisible');
            menu1.classList.remove('scale-0');
            menu1.classList.remove('opacity-0');
            menu1.classList.add('visible');
            menu1.classList.add('scale-100');
            menu1.classList.add('opacity-100');
        } else {
            menu1.classList.remove('visible');
            menu1.classList.remove('scale-100');
            menu1.classList.remove('opacity-100');
            menu1.classList.add('invisible');
            menu1.classList.add('scale-0');
            menu1.classList.add('opacity-0');
        }
    })
);
const menuButton = document.querySelector('#menu-button');
const closeButton = document.querySelector('#close-button');
const menu = document.querySelector('#menu');
menuButton.addEventListener('click', (e)=>{
    menu.classList.remove('invisible');
    menu.classList.remove('opacity-0');
    menu.classList.remove('-translate-y-full');
    menu.classList.add('visible');
    menu.classList.add('opacity-100');
    menu.classList.add('translate-y-0');
});
closeButton.addEventListener('click', (e)=>{
    menu.classList.remove('visible');
    menu.classList.remove('opacity-100');
    menu.classList.remove('translate-y-0');
    menu.classList.add('invisible');
    menu.classList.add('opacity-0');
    menu.classList.add('-translate-y-full');
});

//# sourceMappingURL=content.b4fc2d1a.js.map
