import { useCart } from '../hooks/useCart';
import CategorySection from '../components/catalog/CategorySection';
import ProductCard from '../components/catalog/ProductCard';

const living = [
  {
    id: 1,
    nombre: 'Sofá Nórdico de 3 Cuerpos',
    descripcion: 'Lino natural · beige arena',
    precio: 489000,
    etiquetaImagen: 'Sofá',
  },
  {
    id: 2,
    nombre: 'Mesa de Centro en Roble',
    descripcion: 'Roble macizo · tono miel',
    precio: 187500,
    etiquetaImagen: 'Mesa',
  },
  {
    id: 3,
    nombre: 'Sillón Bergère Tostado',
    descripcion: 'Bouclé · terracota suave',
    precio: 215000,
    etiquetaImagen: 'Sillón',
  },
  {
    id: 4,
    nombre: 'Estantería Baja Avena',
    descripcion: 'Pino cepillado · natural',
    precio: 142900,
    etiquetaImagen: 'Estantería',
  },
];

const dormitorio = [
  {
    id: 5,
    nombre: 'Cama Queen Lino Crudo',
    descripcion: 'Roble y lino · crudo',
    precio: 620000,
    etiquetaImagen: 'Cama',
  },
  {
    id: 6,
    nombre: 'Cómoda Cuatro Cajones',
    descripcion: 'Nogal · herrajes bronce',
    precio: 268000,
    etiquetaImagen: 'Cómoda',
  },
  {
    id: 7,
    nombre: 'Mesa de Luz Escondida',
    descripcion: 'Fresno · cajón oculto',
    precio: 96400,
    etiquetaImagen: 'Mesa de luz',
  },
];

function Home() {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <CategorySection titulo="Living y Sofás">
        {living.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            onAddToCart={addToCart}
          />
        ))}
      </CategorySection>

      <CategorySection titulo="Dormitorio">
        {dormitorio.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            onAddToCart={addToCart}
          />
        ))}
      </CategorySection>
    </div>
  );
}

export default Home;
