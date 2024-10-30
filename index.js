const $btn_menu = document.querySelector('.btn_menu');
const $menu = document.querySelector('.menu');
const $raya1 = document.querySelector('.raya1');
const $raya2 = document.querySelector('.raya2');
const $raya3 = document.querySelector('.raya3');
const $listaA = document.querySelector('li a');

 
$btn_menu.addEventListener('click', () => {
    if ($menu.style.display === 'flex' || $menu.style.display === '') {
        $menu.style.display = 'none';
        $raya2.style.display = 'flex';
        $raya1.style.transform = 'rotate(0deg)';
        $raya3.style.transform = 'rotate(0deg)';
        $raya3.style.bottom = '0px';
        $raya1.style.top = '0px';
    } else {
        $menu.style.display = 'flex'; // Muestra el menú
        $raya2.style.display = 'none';
        $raya1.style.transform = 'rotate(45deg)';
        $raya3.style.transform = 'rotate(-45deg)';
        $raya3.style.bottom = '7px';
        $raya1.style.top = '7px';
    }});


$listaA.addEventListener('click',()=>{
    $menu.style.display = 'none'; // Oculta el menú
})