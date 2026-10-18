// src/App.js
import './App.css';
import Bio from './Bio'; // 1. Importamos el componente Bio

function App() {
  return (
    <div className="App">
      <h1>Mi Primera App en React</h1>
      <p>Ayax Franklin Ibarra Ruveda</p>

      {/* 2. Renderizamos nuestro nuevo componente Bio */}
      <Bio />
    </div>
  );
}

export default App;
