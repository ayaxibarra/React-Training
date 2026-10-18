function formatPrecio(precio) {
  return `$ ${precio.toLocaleString('es-AR')}`;
}

function ProductCard({ producto, onAddToCart }) {
  const { nombre, descripcion, precio, etiquetaImagen = 'Imagen' } = producto;

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="w-full aspect-square bg-gray-200 flex items-center justify-center text-gray-400">
        {etiquetaImagen}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{nombre}</h3>
        <p className="text-sm text-gray-500">{descripcion}</p>
        <p className="text-xl font-bold text-amber-700 mt-2">
          {formatPrecio(precio)}
        </p>
        <button
          type="button"
          className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800"
          onClick={() => onAddToCart(producto)}
        >
          Agregar al Carrito
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
