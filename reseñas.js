import {
  ProductosPorCategoria,
  cardProducto,
  cardProductoReseña,
} from "./ListaDeProductos.js";
const section_pizzas = document.querySelector(".pizzas");
const section_empanadas = document.querySelector(".empanadas");
const section_bebidas = document.querySelector(".bebidas");
const section_postres = document.querySelector(".postres");
const $cantidadPedidos = document.querySelector(".cantidadPedidos");
const $cantidad = document.querySelector(".cantidad");
const $mas = document.querySelector(".mas");
const $menos = document.querySelector(".menos");
const $btn_menu = document.querySelector('.btn_menu');
const $menu = document.querySelector('.menu');
const $icon = document.querySelector('.bi-cart-plus');
const $raya1 = document.querySelector('.raya1');
const $raya2 = document.querySelector('.raya2');
const $raya3 = document.querySelector('.raya3');


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

// Pagina de Reseñas
ProductosPorCategoria.pizzas.map((producto) => {
  section_pizzas.appendChild(
    cardProductoReseña(
      producto.id,
      producto.nombre,
      producto.img,
      producto.descripcion,
      producto.precio
    )
  );
});

ProductosPorCategoria.empanadas.map((producto) => {
  section_empanadas.appendChild(
    cardProductoReseña(
      producto.id,
      producto.nombre,
      producto.img,
      producto.descripcion,
      producto.precio
    )
  );
});

ProductosPorCategoria.bebidas.map((producto) => {
  section_bebidas.appendChild(
    cardProductoReseña(
      producto.id,
      producto.nombre,
      producto.img,
      producto.descripcion,
      producto.precio
    )
  );
});

ProductosPorCategoria.postres.map((producto) => {
  section_postres.appendChild(
    cardProductoReseña(
      producto.id,
      producto.nombre,
      producto.img,
      producto.descripcion,
      producto.precio
    )
  );
});

(function actualizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    $cantidadPedidos.textContent = carrito.length; 
    // console.log(carrito);
  })();


// 
