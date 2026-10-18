// src/Producto.js
function Producto() {
  // Definimos las variables de JavaScript
  const nombreProducto = 'Teclado Mecánico RGB';
  const descripcion = 'Un teclado increíble para gaming y programación.';
  const precio = 125;

  return (
    <div className="product-card">
      <h3>{nombreProducto}</h3>
      <p>{descripcion}</p>
      <h4>Precio: ${precio} USD</h4>
    </div>
  );
}

export default Producto;
