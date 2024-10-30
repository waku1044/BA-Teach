const $btn_menu = document.querySelector('.btn_menu');
const $menu = document.querySelector('.menu');

$btn_menu.addEventListener('click', () => {
    if ($menu.style.display === 'flex' || $menu.style.display === '') {
        $menu.style.display = 'none'; // Oculta el menú
    } else {
        $menu.style.display = 'flex'; // Muestra el menú
    }});