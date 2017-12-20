window.onload = function() {
    function toggleMenu() {
        document.querySelector('.menu').classList.toggle('menu_opened');
    }

    document.querySelector('.menu__toggle-link').onclick = toggleMenu;
    document.querySelector('.nav__burger').onclick = toggleMenu;
    
}