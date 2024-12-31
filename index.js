const $btn_menu = document.querySelector('.btn_menu');
const $menu = document.querySelector('.menu');
const $raya1 = document.querySelector('.raya1');
const $raya2 = document.querySelector('.raya2');
const $raya3 = document.querySelector('.raya3');
const $listaA = document.querySelector('li a');
const $fondo_section = document.querySelector('.fondo_section');

import {ProductosPorCategoria, cardProducto, cardProductoReseña} from './ListaDeProductos.js'
// const productos = ProductosPorCategoria;



 
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


// Pagina Inicial
    ProductosPorCategoria.pizzas
    .map((producto) => 
        
        $fondo_section.appendChild(cardProducto( producto.id, producto.nombre, producto.img))
    );
    ProductosPorCategoria.empanadas
    .map((producto) => 
        
        $fondo_section.appendChild(cardProducto( producto.id,producto.nombre, producto.img))
    );
    
    ProductosPorCategoria.bebidas
    .map((producto) => 
        
        $fondo_section.appendChild(cardProducto(producto.id, producto.nombre, producto.img))
    );

    ProductosPorCategoria.postres
    .map((producto) => {
        $fondo_section.appendChild(cardProducto( producto.id,producto.nombre, producto.img))
    });

    


$listaA.addEventListener('click',()=>{
    $menu.style.display = 'none'; // Oculta el menú
})