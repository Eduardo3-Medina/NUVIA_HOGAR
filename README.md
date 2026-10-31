# Nuvia Hogar — Tienda virtual académica

Proyecto de Programación Web desarrollado con HTML5, CSS3, JavaScript y Bootstrap 5.

## Requisitos
- Visual Studio Code (o editor equivalente).
- Navegador moderno.
- Conexión a Internet para cargar Bootstrap, Google Fonts e imágenes externas.

## Cómo ejecutar
1. Descomprime el proyecto.
2. Abre la carpeta `nuvia-hogar` en Visual Studio Code.
3. Abre `index.html` en el navegador. Se recomienda utilizar la extensión Live Server.
4. Navega por el catálogo, agrega productos al carrito y prueba el proceso de compra simulado.

## Estructura
- `index.html`: página de inicio.
- `pages/`: catálogo, carrito, checkout, nosotros y contacto.
- `css/styles.css`: estilos personalizados y diseño responsive.
- `js/products.js`: catálogo de productos de demostración.
- `js/cart.js`: funciones compartidas del carrito y almacenamiento local.
- `js/main.js`: inicialización y productos destacados.
- `js/catalog.js`: búsqueda, filtros, ordenamiento y modal de detalles.
- `js/cart-page.js`: cantidades, eliminación y resumen del carrito.
- `js/checkout.js`: validación y simulación del pedido.
- `js/contact.js`: validación del formulario de contacto.

## Tecnologías y alcance
- HTML5 semántico.
- CSS3 con variables, Flexbox, Grid y media queries.
- JavaScript ES6+ y manipulación del DOM.
- Bootstrap 5.3.3 mediante CDN: navbar responsive, grid, formularios, modal, toast y utilidades.
- `localStorage` para persistir el carrito en el navegador.

## Consideraciones
Es una demostración académica frontend. No existe backend, inventario real, envío de correos ni pasarela de pagos. Los productos e imágenes son ilustrativos. El formulario de compra genera un pedido local de demostración y no solicita información bancaria.

## Revisión visual — versión 2
- Se sustituyeron fotografías que no correspondían claramente con algunos productos.
- Se normalizó la proporción visual de las imágenes del catálogo.
- Se mejoraron los estados de foco visibles para navegación con teclado.
- Se reforzó la lectura segura del carrito desde localStorage.

## Informe académico
El informe editable en Word se encuentra en `docs/Informe_Nuvia_Hogar.docx`. Completa los datos de la portada y agrega capturas propias antes de presentar.
