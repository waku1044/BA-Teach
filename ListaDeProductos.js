export const ProductosPorCategoria = {
  pizzas: [
    {
      id: 1,
      nombre: "Muzzarella",
      precio: 500,
      img: "./assets/img/muzzarella.jpg",
      descripcion: `La pizza de muzzarella es un clásico que nunca decepciona. Su base, perfectamente dorada y crujiente, se complementa con una salsa de tomate fresca y bien sazonada, que aporta un equilibrio ideal entre acidez y dulzura.`,
    },
    {
      id: 2,
      nombre: "Jamón y Morrón",
      precio: 600,
      img: "./assets/img/jamonymorron.jpg",
      descripcion: `La pizza de jamón y morrón es una opción deliciosa que combina sabores frescos y salados en cada bocado. La base de la pizza, bien cocida y crujiente, proporciona el soporte perfecto para los ingredientes.`,
    },
    {
      id: 3,
      nombre: "Napolitana",
      precio: 550,
      img: "./assets/img/napolitana.jpg",
      descripcion: `La pizza napolitana es un clásico de la gastronomía italiana, reconocida por su masa delgada y suave, con un borde esponjoso y dorado. Se elabora con ingredientes simples de alta calidad, como harina, agua, sal y levadura.`,
    },
    {
      id: 4,
      nombre: "Palmitos",
      precio: 650,
      img: "./assets/img/muzzarella.jpg",
      descripcion: `La pizza de palmitos es una deliciosa opción que combina una base crujiente con una salsa de tomate fresca. Los palmitos, tiernos y sabrosos, se distribuyen generosamente añadiendo una textura única.`,
    },
  ],
  empanadas: [
    {
      id: 5,
      nombre: "Atún",
      precio: 120,
      img: "./assets/img/empanada_atun.jpg",
      descripcion: `La empanada de atún es un delicioso manjar que combina una masa crujiente con un sabroso relleno de atún, cebolla, pimientos y especias.`,
    },
    {
      id: 6,
      nombre: "Carne",
      precio: 110,
      img: "./assets/img/empanada_carne.jpg",
      descripcion: `La empanada de carne es un delicioso plato que destaca por su masa crujiente y relleno de carne jugosa con cebolla, pimientos y especias aromáticas.`,
    },
    {
      id: 7,
      nombre: "Jamón y Queso",
      precio: 115,
      img: "./assets/img/empanada_jamonyqueso.jpg",
      descripcion: `La empanada de jamón y queso combina una masa dorada con un relleno cremoso y sabroso, ideal para disfrutar en cualquier momento.`,
    },
    {
      id: 8,
      nombre: "Humita",
      precio: 130,
      img: "./assets/img/empanada_jamonyqueso.jpg",
      descripcion: `La empanada de humita combina una masa tierna con un relleno cremoso de maíz, queso y especias. Su sabor suave y dulce es único.`,
    },
  ],
  bebidas: [
    {
      id: 9,
      nombre: "Agua",
      precio: 100,
      img: "./assets/img/agua.png",
      descripcion: `La botella de agua de 500 cm³ es una opción práctica y compacta, ideal para mantenerse hidratado en cualquier momento del día.`,
    },
    {
      id: 10,
      nombre: "Cerveza",
      precio: 200,
      img: "./assets/img/cerveza.png",
      descripcion: `La cerveza es una bebida refrescante conocida por su diversidad de estilos y sabores que van desde suave hasta intenso.`,
    },
    {
      id: 11,
      nombre: "Gaseosa",
      precio: 150,
      img: "./assets/img/gaseosa.png",
      descripcion: `Refresca tu día con nuestra gaseosa de 500 ml. Su sabor único y burbujeante es perfecto para saciar tu sed.`,
    },
  ],
  postres: [
    {
      id: 12,
      nombre: "Almendrado",
      precio: 300,
      img: "./assets/img/almendrado.jpg",
      descripcion: `El helado almendrado combina la suavidad del helado de vainilla con trozos crujientes de almendra. Su sabor dulce es único.`,
    },
    {
      id: 13,
      nombre: "Bombones",
      precio: 350,
      img: "./assets/img/bombones.jpg",
      descripcion: `Los bombones helados combinan el placer del helado con la riqueza del chocolate, creando un delicioso contraste de sabores.`,
    },
    {
      id: 14,
      nombre: "Palito Bombón",
      precio: 250,
      img: "./assets/img/helado.png",
      descripcion: `El palito bombón es un postre helado recubierto de chocolate, con sabores como vainilla, chocolate o fresa.`,
    },
  ],
};

export const cardProducto = (id, nombre, img) => {
  let article = document.createElement("article");

  let template = `<div class="card card_producto">
    <img
      src=${img}
      style="width: 100%"
      alt=${nombre}
      class="${id >= 9 && id <= 11 ? "giro" : ""}"
    />
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
    </div>
  </div>`;

  article.innerHTML = template;

  return article;
};

export const cardProductoReseña = (id, nombre, img, descripcion, precio) => {
  let article = document.createElement("article");

  let template = `<div class="card ">
    <img
      src=  ${img}
      style="width: 100%"
      alt=${nombre}
      class="${id >= 9 && id <= 11 ? "giro" : ""}"
    />
    <div class="card-body ">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text ">
        ${descripcion}
      </p>
      <div class="card-cuadro">
        <h2>Precio: $${precio}</h2>
        <div class="cuadro">
          <div class="menos">-</div>
          <div class="cantidad">0</div>
          <div class="mas">+</div>
        </div>
        <button class="btn_agregar">Agregar al carrito</button>
      </div>
    </div>
  </div>`;

  article.innerHTML = template;
  
  // Obtener las referencias a los elementos 'mas' y 'menos' dentro de la tarjeta
  const $mas = article.querySelector(".mas");
  const $menos = article.querySelector(".menos");
  const $cantidad = article.querySelector(".cantidad");
  const $btn_agregar = article.querySelector(".btn_agregar");
  const $cantidadPedidos = document.querySelector(".cantidadPedidos");

  // Función para agregar el producto al carrito
  $btn_agregar.addEventListener("click", () => {
    let cantidad = parseInt($cantidad.textContent);

    if (cantidad > 0) {
      let producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
      };

      // Agregar el producto al carrito
      agregarProducto(producto);

      // Actualizar cantidad
      actualizarCarrito();
    }
  });

  // Función para agregar el producto al carrito
  function agregarProducto(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado al carrito");
    
    actualizarCarrito();
  }

  // Actualizar cantidad
  function actualizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    $cantidadPedidos.textContent = carrito.length; 
  }

    

  // Función para aumentar la cantidad
  function agregarCantidad() {
    let actualizando = parseInt($cantidad.textContent);
    $cantidad.textContent = actualizando + 1;
  }

  // Función para disminuir la cantidad
  function sacarCantidad() {
    let actualizando = parseInt($cantidad.textContent);
    if (actualizando > 0) {
      $cantidad.textContent = actualizando - 1;
    }
  }

  // Asignar los event listeners a los botones 'mas' y 'menos'
  $mas.addEventListener("click", agregarCantidad);
  $menos.addEventListener("click", sacarCantidad);

  return article;
};

