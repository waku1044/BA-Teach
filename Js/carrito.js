const $btn_menu = document.querySelector('.btn_menu');
const $menu = document.querySelector('.menu');
const $icon = document.querySelector('.bi-cart-plus');
const $raya1 = document.querySelector('.raya1');
const $raya2 = document.querySelector('.raya2');
const $raya3 = document.querySelector('.raya3');
const $cantidadPedidos = document.querySelector(".cantidadPedidos");


$btn_menu.addEventListener('click', () => {
    if ($menu.style.display === 'flex' || $menu.style.display === '') {
        $menu.style.display = 'none';
        $raya2.style.display = 'flex';
        $raya1.style.transform = 'rotate(0deg)';
        $raya3.style.transform = 'rotate(0deg)';
        $raya3.style.bottom = '0px';
        $raya1.style.top = '0px';
        $icon.style.right = '40px';
        $icon.style.top = '30px';
        $cantidadPedidos.style.right = '50px';
        $cantidadPedidos.style.top = '35px';
    } else {
        $menu.style.display = 'flex'; // Muestra el menú
        $menu.style.position = 'relative';
        $menu.style.right = '230px';
        $raya2.style.display = 'none';
        $raya1.style.transform = 'rotate(45deg)';
        $raya3.style.transform = 'rotate(-45deg)';
        $raya3.style.bottom = '7px';
        $raya1.style.top = '7px';
        $icon.style.right = '250px';
        $icon.style.top = '210px';
        $cantidadPedidos.style.right = '260px';
        $cantidadPedidos.style.top = '215px';
    }});

    (function actualizarCarrito() {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        $cantidadPedidos.textContent = carrito.length; 
        // console.log(carrito);
      })();