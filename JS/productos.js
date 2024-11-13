// Array de 40 productos (simplificado)
const productos = [
    {
      nombre: "Nike Air Max 90",
      cantidadDisponible: 10,
      precio: 220000,
      imagen: "https://cf.shopee.com.mx/file/br-11134201-23030-5fjxso6zo5nv32",
      marca: "Nike",
      disponibilidad: true,
      codigo: "NIKE-001",
    },
    {
      nombre: "Jordan Air Zoom",
      cantidadDisponible: 8,
      precio: 250000,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmog_0JKSWukZVyHi81_dvQr1ym81bjxUxA&s",
      marca: "Jordan",
      disponibilidad: true,
      codigo: "JORD-002",
    },
    {
      nombre: "Adidas Ultraboost 22",
      cantidadDisponible: 15,
      precio: 240000,
      imagen:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ca56ffeb5554f9dad08af70010d84c3_9366/Tenis_Ultraboost_22_Negro_HQ8593_01_standard.jpg",
      marca: "Adidas",
      disponibilidad: true,
      codigo: "ADID-003",
    },
    {
      nombre: "Fila Disruptor II",
      cantidadDisponible: 12,
      precio: 180000,
      imagen: "https://m.media-amazon.com/images/I/51kHV9dpWBL._AC_SL1500_.jpg",
      marca: "Fila",
      disponibilidad: true,
      codigo: "FILA-004",
    },
    {
      nombre: "Nike Revolution 5",
      cantidadDisponible: 5,
      precio: 130000,
      imagen: "https://m.media-amazon.com/images/I/71peb+H+V+L.jpg",
      marca: "Nike",
      disponibilidad: true,
      codigo: "NIKE-005",
    },
    {
      nombre: "Jordan Max Aura",
      cantidadDisponible: 7,
      precio: 230000,
      imagen:
        "https://champsstore.com.co/cdn/shop/products/DN3687-006_1_1000x1200_crop_center.jpg?v=1669833955",
      marca: "Jordan",
      disponibilidad: true,
      codigo: "JORD-006",
    },
    {
      nombre: "Adidas NMD_R1",
      cantidadDisponible: 20,
      precio: 200000,
      imagen:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/76752172861843209f02aef900fd6858_9366/Tenis_NMD_R1_Blanco_HQ4451_01_standard.jpg",
      marca: "Adidas",
      disponibilidad: true,
      codigo: "ADID-007",
    },
    {
      nombre: "Fila Ray Tracer",
      cantidadDisponible: 10,
      precio: 160000,
      imagen: "https://static.dafiti.com.co/p/fila-3088-9212631-1-product.jpg",
      marca: "Fila",
      disponibilidad: true,
      codigo: "FILA-008",
    },
    {
      nombre: "Nike Air Force 1",
      cantidadDisponible: 12,
      precio: 210000,
      imagen: "https://www.neverrsad.co/cdn/shop/files/IMG_9690.jpg?v=1700840534",
      marca: "Nike",
      disponibilidad: true,
      codigo: "NIKE-009",
    },
    {
      nombre: "Jordan Jumpman 2021",
      cantidadDisponible: 10,
      precio: 240000,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLPvGP_Vs7iukTwyHqdNzmVtWBY7L6iM7UQ&s",
      marca: "Jordan",
      disponibilidad: true,
      codigo: "JORD-010",
    },
    {
      nombre: "Adidas Superstar",
      cantidadDisponible: 14,
      precio: 180000,
      imagen:
        "https://cdn.baguer.co/uploads/2023/08/tenis-superstar-adidas-blanco-108491BL.jpg_sj8xwC3EDiozNVWVBkKHR7sSDwExQWcMEPOXBahOeRY40aayxa.jpg",
      marca: "Adidas",
      disponibilidad: true,
      codigo: "ADID-011",
    },
    {
      nombre: "Fila Original Fitness",
      cantidadDisponible: 8,
      precio: 150000,
      imagen:
        "https://i.ebayimg.com/thumbs/images/g/dOEAAOSwKbpjFKV4/s-l1200.jpg",
      marca: "Fila",
      disponibilidad: true,
      codigo: "FILA-012",
    },
    {
      nombre: "Nike Blazer Mid 77",
      cantidadDisponible: 9,
      precio: 190000,
      imagen:
        "https://nikeco.vtexassets.com/arquivos/ids/532725-800-auto?v=638457632810770000&width=800&height=auto&aspect=true",
      marca: "Nike",
      disponibilidad: true,
      codigo: "NIKE-013",
    },
    {
      nombre: "Jordan Delta 2",
      cantidadDisponible: 11,
      precio: 250000,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8unGxzMsFKvZ8_12VyUF2VEMn8AkDZjRpEg&s",
      marca: "Jordan",
      disponibilidad: true,
      codigo: "JORD-014",
    },
    {
      nombre: "Adidas Gazelle",
      cantidadDisponible: 13,
      precio: 160000,
      imagen:
        "https://standshop.com.co/wp-content/uploads/2021/10/cf3b7055-7c03-47e8-b6fe-362446e6e8f2.jpg",
      marca: "Adidas",
      disponibilidad: true,
      codigo: "ADID-015",
    },
    {
      nombre: "Fila Mindblower",
      cantidadDisponible: 6,
      precio: 170000,
      imagen:
        "https://i.pinimg.com/originals/16/a6/3f/16a63fc48a083a3bbb77d4495f8f637c.jpg",
      marca: "Fila",
      disponibilidad: true,
      codigo: "FILA-016",
    },
    {
      nombre: "Nike Pegasus 37",
      cantidadDisponible: 9,
      precio: 220000,
      imagen:
        "https://down-co.img.susercontent.com/file/5f927638f698a5fe92b66f754fc7316a",
      marca: "Nike",
      disponibilidad: true,
      codigo: "NIKE-017",
    },
    {
      nombre: "Jordan One Take",
      cantidadDisponible: 10,
      precio: 230000,
      imagen:
        "https://www.roninsniper.com.co/wp-content/uploads/2024/08/jordan-one-take-4-de-russell-uva-pago-contra-entrega-a-credito-1.webp",
      marca: "Jordan",
      disponibilidad: true,
      codigo: "JORD-018",
    },
    {
      nombre: "Adidas Yeezy Boost 350",
      cantidadDisponible: 5,
      precio: 250000,
      imagen:
        "https://colstore.com.co/wp-content/uploads/2016/12/WhatsApp-Image-2016-12-06-at-2.56.32-PM-1.jpeg.webp",
      marca: "Adidas",
      disponibilidad: true,
      codigo: "ADID-019",
    },
    {
      nombre: "Fila Venom",
      cantidadDisponible: 14,
      precio: 140000,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRVTd9bZZcT_bY2FTkQ5g5htOE3-v1K7o41Q&s",
      marca: "Fila",
      disponibilidad: true,
      codigo: "FILA-020",
    },
    {
      nombre: "Nike SB Dunk Low",
      cantidadDisponible: 9,
      precio: 230000,
      imagen:
        "https://tuofferta.com/wp-content/uploads/2023/12/Nike-SB-Dunk-Low-Parra-Blanco-Azul-Rojo-tenis-para-mujer-Trainers-Sneakers-online-tenis-zapatillas-shoes-tienda-en-colombia-en-oferta2.jpg",
      marca: "Nike",
      disponibilidad: true,
      codigo: "NIKE-021",
    },
    {
      nombre: "Jordan Air 200E",
      cantidadDisponible: 8,
      precio: 240000,
      imagen: "https://www.nicekicks.com/files/2022/04/lead-2-30.jpg",
      marca: "Jordan",
      disponibilidad: true,
      codigo: "JORD-022",
    },
    {
      nombre: "Adidas Stan Smith",
      cantidadDisponible: 18,
      precio: 200000,
      imagen: "https://zshopp.com/wp-content/uploads/2021/02/blanco1-4.jpg",
      marca: "Adidas",
      disponibilidad: true,
      codigo: "ADID-023",
    },
    {
      nombre: "Fila Heritage",
      cantidadDisponible: 10,
      precio: 150000,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOCjZPOusoNZV9jSkP6PBUaatqysumdpg1VQ&s",
      marca: "Fila",
      disponibilidad: true,
      codigo: "FILA-024",
    },
    {
      nombre: "Nike Kyrie 7",
      cantidadDisponible: 8,
      precio: 210000,
      imagen:
        "https://www.roninsniper.com.co/wp-content/uploads/2024/08/nike-kyrie-7-expressions-pago-contra-entrega-a-credito-1.webp",
      marca: "Nike",
      disponibilidad: true,
      codigo: "NIKE-025",
    },
    {
      nombre: "Jordan Westbrook One",
      cantidadDisponible: 7,
      precio: 240000,
      imagen:
        "https://www.nicekicks.com/files/2021/02/Jordan-Westbrook-One-Take-II-CW2457-300-00.jpg",
      marca: "Jordan",
      disponibilidad: true,
      codigo: "JORD-026",
    },
    {
      nombre: "Adidas Continental 80",
      cantidadDisponible: 15,
      precio: 190000,
      imagen:
        "https://media.revistagq.com/photos/63049dd5dedc8819b70cf208/3:2/w_1455,h_970,c_limit/adidas%20continental%2080%20comprar.jpg",
      marca: "Adidas",
      disponibilidad: true,
      codigo: "ADID-027",
    },
    {
      nombre: "Fila Teratach 600",
      cantidadDisponible: 12,
      precio: 180000,
      imagen:
        "https://boathousefootwear.com/cdn/shop/files/FIA-1BM02036-166-PNK-2_1000x.jpg?v=1724079377",
      marca: "Fila",
      disponibilidad: true,
      codigo: "FILA-028",
    },
    {
      nombre: "Nike React Infinity",
      cantidadDisponible: 5,
      precio: 250000,
      imagen:
        "https://i0.wp.com/www.manvmiles.co.uk/wp-content/uploads/2020/01/Nike_React_Infinity_Run.jpg?fit=1050%2C591&ssl=1",
      marca: "Nike",
      disponibilidad: true,
      codigo: "NIKE-029",
    },
    {
      nombre: "Jordan Z Code",
      cantidadDisponible: 6,
      precio: 230000,
      imagen:
        "https://images.squarespace-cdn.com/content/v1/5bcdedf3b10f25252d38e94c/1618797092746-L93LNPGHOLL3IDGQF4NW/Jordan-Z-Code-First-Look-1.jpg",
      marca: "Jordan",
      disponibilidad: true,
      codigo: "JORD-030",
    },
    {
      nombre: "Adidas ZX 750",
      cantidadDisponible: 9,
      precio: 200000,
      imagen:
        "https://i.pinimg.com/736x/12/a4/55/12a45516207c433e4fce9057077bc1e5.jpg",
      marca: "Adidas",
      disponibilidad: true,
      codigo: "ADID-031",
    },
    {
      nombre: "Fila Sky Runner",
      cantidadDisponible: 14,
      precio: 160000,
      imagen:
        "https://www.fila-uk.com/images/fila-uk/Fila%20Women%20s%20Skyrunner%202A%2093%20Heritag%20235.jpg",
      marca: "Fila",
      disponibilidad: true,
      codigo: "FILA-032",
    },
    {
      nombre: "Nike Free RN 5.0",
      cantidadDisponible: 8,
      precio: 190000,
      imagen:
        "https://zshopp.com/wp-content/uploads/2019/10/512kPGbYDAL._AC_UL1000_.jpg",
      marca: "Nike",
      disponibilidad: true,
      codigo: "NIKE-033",
    },
    {
      nombre: "Jordan React Elevation",
      cantidadDisponible: 7,
      precio: 250000,
      imagen:
        "https://i.pinimg.com/originals/21/8c/60/218c60d1530cade29e08f83e5637b1a5.jpg",
      marca: "Jordan",
      disponibilidad: true,
      codigo: "JORD-034",
    },
    {
      nombre: "Adidas X9000L4",
      cantidadDisponible: 11,
      precio: 230000,
      imagen:
        "https://rukminim2.flixcart.com/image/850/1000/kg9qbgw0-0/shoe/k/t/d/fw8413-6-adidas-cblack-cblack-sigorg-original-imafwgwrnp5rcghf.jpeg?q=90&crop=false",
      marca: "Adidas",
      disponibilidad: true,
      codigo: "ADID-035",
    },
    {
      nombre: "Fila Cage",
      cantidadDisponible: 9,
      precio: 170000,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9-ucw2LXkodWR_v3Wzgp3DdAH1MK7d5QKQ&s",
      marca: "Fila",
      disponibilidad: true,
      codigo: "FILA-036",
    },
    {
      nombre: "Nike Zoom Fly 3",
      cantidadDisponible: 12,
      precio: 250000,
      imagen:
        "https://i.ebayimg.com/thumbs/images/g/f80AAOSw8t9jG9eN/s-l1200.jpg",
      marca: "Nike",
      disponibilidad: true,
      codigo: "NIKE-037",
    },
    {
      nombre: "Jordan Proto-Max 720",
      cantidadDisponible: 6,
      precio: 240000,
      imagen:
        "https://nl.kicksmaniac.com/zdjecia/2019/08/01/308/04/NIKE_AIR_JORDAN_PROTO_MAX_720_PALE_IVORY-mini.jpg",
      marca: "Jordan",
      disponibilidad: true,
      codigo: "JORD-038",
    },
    {
      nombre: "Adidas Alphaedge 4D",
      cantidadDisponible: 7,
      precio: 250000,
      imagen:
        "https://i.ebayimg.com/thumbs/images/g/kzUAAOSwDihm9t0V/s-l1200.jpg",
      marca: "Adidas",
      disponibilidad: true,
      codigo: "ADID-039",
    },
    {
      nombre: "Fila Targa",
      cantidadDisponible: 10,
      precio: 150000,
      imagen:
        "https://images.novelship.com/product/fila_targa__white_green_korean_edition__1tm01822f__2_72254.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=400",
      marca: "Fila",
      disponibilidad: true,
      codigo: "FILA-040",
    },
  ];
  let carrito = [];
  let productosMostrados = 0;
  const productosPorPagina = 15; // Número de productos que se mostrarán inicialmente y en cada carga adicional
  
  // Función para mostrar productos con carga infinita
  function mostrarProductos(productosFiltrados = productos) {
    const productosList = document.querySelector(".productos-list");
  
    for (
      let i = productosMostrados;
      i < productosMostrados + productosPorPagina &&
      i < productosFiltrados.length;
      i++
    ) {
      const producto = productosFiltrados[i];
      const productoDiv = document.createElement("div");
      productoDiv.classList.add("producto");
  
      productoDiv.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio.toLocaleString("es-CO")}</p>
          <p>Cantidad disponible: ${producto.cantidadDisponible}</p>
          <button class="ver-detalle" data-codigo="${
            producto.codigo
          }">Ver Detalle</button>
        `;
      productosList.appendChild(productoDiv);
    }
  
    productosMostrados += productosPorPagina;
  
    if (productosMostrados >= productosFiltrados.length) {
      const finMensaje = document.createElement("p");
      finMensaje.textContent = "No hay más productos para cargar.";
      productosList.appendChild(finMensaje);
      document
        .querySelector(".productos-list-container")
        .removeEventListener("scroll", cargarMasProductos);
    }
  }
  
  // Función para manejar el scroll infinito en el contenedor
  function cargarMasProductos() {
    const contenedorScroll = document.querySelector(".productos-list-container");
  
    // Verifica si el usuario llegó al final del contenedor
    if (
      contenedorScroll.scrollTop + contenedorScroll.clientHeight >=
      contenedorScroll.scrollHeight
    ) {
      mostrarProductos();
    }
  }
  
  // Inicializar la página mostrando los primeros productos y configurando el evento de scroll en el contenedor
  document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos();
    document
      .querySelector(".productos-list-container")
      .addEventListener("scroll", cargarMasProductos);
  });
  
  // Ver detalle del producto
  function verDetalleProducto(codigo) {
    const producto = productos.find((p) => p.codigo === codigo);
    if (producto) {
      document.getElementById("productoNombre").innerText = producto.nombre;
      document.getElementById("productoMarca").innerText = producto.marca;
      document.getElementById(
        "productoPrecio"
      ).innerText = `$${producto.precio.toLocaleString("es-CO")}`;
      document.getElementById("productoDisponibilidad").innerText =
        producto.disponibilidad ? "Disponible" : "Agotado";
      document.getElementById("productoStock").innerText =
        producto.cantidadDisponible;
      document.getElementById("productoCodigo").innerText = producto.codigo;
      document.getElementById("productoImagen").src = producto.imagen;
  
      document.getElementById("agregarCarrito").onclick = () => {
        agregarAlCarrito(producto);
      };
    }
  }
  
  // Agregar al carrito
  function agregarAlCarrito(producto) {
    const cantidad =
      parseInt(document.getElementById("cantidadProducto").value) || 1;
  
    if (cantidad <= 0) {
      alert("La cantidad debe ser un número positivo.");
      return;
    }
  
    if (cantidad <= producto.cantidadDisponible) {
      carrito.push({
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad,
        codigo: producto.codigo,
      });
      alert(`${producto.nombre} ha sido añadido al carrito.`);
    } else {
      alert("No hay suficientes productos en stock.");
    }
  }
  
  // Filtrar productos
  function filtrarProductos() {
    const filtroMarca = document.getElementById("filtroMarca").value;
    const filtroPrecio = document.getElementById("filtroPrecio").value;
  
    const productosFiltrados = productos.filter((producto) => {
      const cumpleMarca =
        filtroMarca === "todos" || producto.marca === filtroMarca;
      const cumplePrecio =
        filtroPrecio === "todos" ||
        (filtroPrecio === "80000-150000" &&
          producto.precio >= 80000 &&
          producto.precio <= 150000) ||
        (filtroPrecio === "160000-250000" &&
          producto.precio >= 160000 &&
          producto.precio <= 250000) ||
        (filtroPrecio === "260000-350000" &&
          producto.precio >= 260000 &&
          producto.precio <= 350000);
  
      return cumpleMarca && cumplePrecio;
    });
  
    productosMostrados = 0;
    document.querySelector(".productos-list").innerHTML = ""; // Limpiar la lista de productos
    mostrarProductos(productosFiltrados);
  }
  
  // Limpiar filtros
  function limpiarFiltros() {
    document.getElementById("filtroMarca").value = "todos";
    document.getElementById("filtroPrecio").value = "todos";
    productosMostrados = 0;
    document.querySelector(".productos-list").innerHTML = ""; // Limpiar la lista de productos
    mostrarProductos(); // Mostrar todos los productos nuevamente
  }
  
  // Manejo de eventos para los filtros
  document.getElementById("filtrar").addEventListener("click", filtrarProductos);
  document
    .getElementById("limpiarFiltros")
    .addEventListener("click", limpiarFiltros);
  
  // Event listener para los botones de Ver Detalle
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("ver-detalle")) {
      const codigo = e.target.getAttribute("data-codigo");
      verDetalleProducto(codigo);
    }
  });
  
  // Navegación
  document.getElementById("cancelarCompra").onclick = function () {
    window.location.href = "requerimientos.html"; // Regresar a la página inicial
  };
  
  document.getElementById("completarCompra").onclick = function () {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    window.location.href = "carrito.html"; // Redirigir a la página del carrito de compras
  };
  