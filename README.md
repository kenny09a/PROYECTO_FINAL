# PROYECTO_FINAL
Tienda de Zapatos - KENshoes:
Este proyecto es un sistema de gestión de compras en línea diseñado para una tienda ficticia de zapatos, KENshoes. La aplicación permite a los usuarios seleccionar productos, agregar productos a un carrito, ver detalles de cada producto, realizar una compra con validaciones de presupuesto y cantidad de artículos, y seleccionar el método de entrega.

Funcionalidades:
-Formulario de Requerimientos de Compra:

Solicita datos del usuario, como el nombre, presupuesto máximo, cantidad máxima de artículos y dirección de envío.
Permite seleccionar el tipo de entrega: domicilio o recoger en tienda.
Valida los datos ingresados y guarda el presupuesto y tipo de entrega en localStorage.
Vista de Productos:

Muestra una lista de productos de diferentes marcas.
Incluye filtros para buscar productos por marca y rango de precio.
Implementa carga infinita, permitiendo visualizar más productos conforme el usuario hace scroll.
Permite ver los detalles de cada producto y agregarlo al carrito de compras.

-Carrito de Compras:

Muestra los productos seleccionados en una tabla, con el total de cada producto y la opción de eliminarlo.
Calcula el total de la compra, incluyendo un cargo adicional si el tipo de entrega es a domicilio.
Realiza validaciones finales de cantidad y presupuesto antes de ejecutar la compra.

-Proceso de Pago:

Simula el procesamiento de pago con validaciones en los campos de tarjeta de crédito.
Verifica el presupuesto máximo y la cantidad máxima de artículos permitidos.
Muestra un mensaje de éxito o error basado en las validaciones.

Tecnologías Usadas
-HTML: Estructura de la página y organización de secciones.
-CSS: Diseño visual, incluyendo uso de grid y estilos de botones, tablas y formularios.
-JavaScript: Lógica de la aplicación, manejo de eventos, almacenamiento local y validaciones.
