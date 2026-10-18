// src/App.js
import './App.css';
import TarjetaPresentacion from './TarjetaPresentacion'; // 1. Importamos el componente

function App() {
  return (
    <div className="App">
      <h1>Mi Primera App en React</h1>
      <p>Ayax Franklin Ibarra Ruveda</p>

      {/* 2. Usamos el componente varias veces seguidas */}
      <TarjetaPresentacion />
      <TarjetaPresentacion />
      <TarjetaPresentacion />
    </div>
  );
}

export default App;
