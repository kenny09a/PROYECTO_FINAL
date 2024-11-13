document
  .getElementById("requerimientosForm")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener valores
    const nombre = document.getElementById("nombre").value.trim();
    const presupuesto = parseFloat(
      document.getElementById("presupuesto").value
    );
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const direccion = document.getElementById("direccion").value.trim();
    const tipoEntrega = document.querySelector('input[name="entrega"]:checked');
    const errorMensaje = document.getElementById("error-mensaje");

    // Validaciones
    if (
      !nombre ||
      nombre.length > 20 ||
      isNaN(presupuesto) ||
      presupuesto <= 0 ||
      isNaN(cantidad) ||
      cantidad <= 0 ||
      cantidad > 20 ||
      !direccion ||
      !tipoEntrega
    ) {
      errorMensaje.textContent =
        "Por favor, complete todos los campos correctamente.";
      return;
    }

    // Guardar el presupuesto, cantidad y tipo de entrega en localStorage
    localStorage.setItem("presupuesto", presupuesto);
    localStorage.setItem("cantidad", cantidad);
    localStorage.setItem("tipoEntrega", tipoEntrega.value); // Guardar el tipo de entrega

    // Redirigir si los datos son válidos
    window.location.href = "productos.html";
  });

document.getElementById("requerimientosForm").addEventListener("reset", () => {
  document.getElementById("error-mensaje").textContent = "";
});
