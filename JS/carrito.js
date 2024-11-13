
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];


const presupuestoMaximo = parseFloat(localStorage.getItem("presupuesto")) || 0;
const cantidadMaximaArticulos = parseInt(localStorage.getItem("cantidad")) || 0;
const tipoEntrega = localStorage.getItem("tipoEntrega"); 

// Mostrar productos del carrito en la tabla
function mostrarCarrito() {
  const carritoTabla = document.getElementById("carritoTabla");
  carritoTabla.innerHTML = ""; 

  carrito.forEach((item, index) => {
    const fila = document.createElement("tr");
    const totalProducto = item.precio * item.cantidad;

    fila.innerHTML = `
        
        <td>${item.nombre}</td>
        <td>${item.codigo}</td>
        <td>$${item.precio.toLocaleString("es-CO")}</td>
        <td>${item.cantidad}</td>
        <td>$${totalProducto.toLocaleString("es-CO")}</td>
        <td><button onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
      `;
    carritoTabla.appendChild(fila);
  });

  actualizarResumen();
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar cambios
  mostrarCarrito();
}


function actualizarResumen() {
  const totalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalCompra = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
  const cargoDomicilio = tipoEntrega === "domicilio" ? 15000 : 0; 
  const totalFinal = totalCompra + cargoDomicilio;

  document.getElementById("totalProductos").innerText = totalProductos;
  document.getElementById("totalCompra").innerText =
    totalCompra.toLocaleString("es-CO");
  document.getElementById("totalFinal").innerText =
    totalFinal.toLocaleString("es-CO");
}

// Función para procesar el pago al hacer clic en "Ejecutar Compra"
function procesarPago() {
  return new Promise((resolve, reject) => {
    const numeroTarjeta = document.getElementById("numeroTarjeta").value;
    const fechaExpiracion = document.getElementById("fechaExpiracion").value;
    const codigoSeguridad = document.getElementById("codigoSeguridad").value;
    const nombreTitular = document.getElementById("nombreTitular").value;

    // Validación del número de tarjeta ( 16 dígitos)
    if (!/^\d{16}$/.test(numeroTarjeta)) {
      reject("El número de tarjeta debe tener exactamente 16 dígitos.");
      return;
    }

    // Validación de la fecha de expiración en formato MM/AA y no superior a 10/24
    const fechaRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!fechaRegex.test(fechaExpiracion)) {
      reject("La fecha de expiración debe estar en formato MM/AA.");
      return;
    }

    const [mesExp, anioExp] = fechaExpiracion.split("/").map(Number);
    if (anioExp < 24 || (anioExp === 24 && mesExp <= 10)) {
      
    } else {
      reject("La fecha de expiración no debe exceder 10/24.");
      return;
    }

    // Validación del código de seguridad ( 3 dígitos)
    if (!/^\d{3}$/.test(codigoSeguridad)) {
      reject("El código de seguridad debe tener exactamente 3 dígitos.");
      return;
    }

    // Validar que todos los campos estén completos
    if (!nombreTitular) {
      reject("Por favor, complete todos los campos de la tarjeta.");
      return;
    }

    // Validación del total de productos y presupuesto máximo
    const totalProductos = carrito.reduce(
      (acc, item) => acc + item.cantidad,
      0
    );
    const totalFinal =
      carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0) +
      (tipoEntrega === "domicilio" ? 15000 : 0);

    if (totalProductos > cantidadMaximaArticulos) {
      reject(
        `La cantidad total de artículos no debe exceder ${cantidadMaximaArticulos}.`
      );
      return;
    }

    if (totalFinal > presupuestoMaximo) {
      reject(
        `El total de la compra no debe exceder el presupuesto de $${presupuestoMaximo}.`
      );
      return;
    }

    // Si todas las validaciones pasan, procesar la compra
    setTimeout(() => {
      resolve("Pago realizado con éxito.");
    }, Math.random() * 1000 + 2000);
  });
}

// Event listener para el botón de ejecutar compra
document.getElementById("tarjetaForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Evitar el envío del formulario

  procesarPago()
    .then((mensaje) => {
      alert(mensaje);
      // Vaciar el carrito y redirigir a la página inicial
      localStorage.removeItem("carrito");
      window.location.href = "requerimientos.html";
    })
    .catch((error) => {
      alert(error);
    });
});

// Event listener para el botón de continuar comprando
document.getElementById("continuarComprando").onclick = function () {
  window.location.href = "productos.html"; 
};

// Event listener para el botón de cancelar compra
document.getElementById("cancelarCompra").onclick = function () {
  localStorage.removeItem("carrito"); 
  alert("La compra ha sido cancelada.");
  window.location.href = "requerimientos.html"; 
};

// Inicializar la página mostrando los productos en el carrito
document.addEventListener("DOMContentLoaded", mostrarCarrito);
