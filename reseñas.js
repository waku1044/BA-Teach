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

function agregarCantidad() {
  let actualizando = parseInt($cantidad.textContent);
  $cantidad.textContent = actualizando + 1;
}

function sacarCantidad() {
  let actualizando = parseInt($cantidad.textContent);
  if (actualizando > 0) {
    $cantidad.textContent = actualizando - 1;
  }
}

$mas.addEventListener("click", ()=>agregarCantidad);
$menos.addEventListener("click", sacarCantidad);
