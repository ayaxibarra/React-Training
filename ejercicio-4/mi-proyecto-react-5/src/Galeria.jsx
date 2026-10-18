// src/Galeria.jsx
import PersonajeCard from './PersonajeCard';

function Galeria() {
  // Array de objetos con la información de los personajes
  const personajes = [
    { id: 1, nombre: 'Gandalf', rol: 'Mago' },
    { id: 2, nombre: 'Aragorn', rol: 'Guerrero' },
    { id: 3, nombre: 'Legolas', rol: 'Arquero' },
    { id: 4, nombre: 'Gimli', rol: 'Enano Guerrillero' },
  ];

  return (
    <div
      style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}
    >
      <h2>Galería de Personajes</h2>

      {/* Contenedor flexible para alinear las tarjetas */}
      <div
        style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '20px',
        }}
      >
        {personajes.map((personaje) => (
          <PersonajeCard
            key={personaje.id}
            nombre={personaje.nombre}
            rol={personaje.rol}
          />
        ))}
      </div>
    </div>
  );
}

export default Galeria;
