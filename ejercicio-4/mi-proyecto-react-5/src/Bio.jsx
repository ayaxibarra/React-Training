// src/Bio.js

function Bio() {
  // 1. Objeto con la información del usuario
  const usuario = {
    nombre: 'Clark Kent',
    avatarURL: 'https://via.placeholder.com/150',
    trabajo: 'Reportero en el Daily Planet',
  };

  // 2. Objeto de estilos en línea (en JSX se usa camelCase para propiedades como borderRadius)
  const cardStyles = {
    border: '2px solid #eee',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    width: '300px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  return (
    <div style={cardStyles}>
      {/* Atributo src dinámico usando llaves */}
      <img
        src={usuario.avatarURL}
        alt="Avatar"
        style={{ borderRadius: '50%', width: '100px' }}
      />
      <h1>{usuario.nombre}</h1>
      <p>{usuario.trabajo}</p>
    </div>
  );
}

export default Bio;
