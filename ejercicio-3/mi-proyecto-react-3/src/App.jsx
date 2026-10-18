// src/App.js
import './App.css';
import Producto from './Producto'; // 1. Importamos el componente Producto

function App() {
  return (
    <div className="App">
      <h1>Mi Primera App en React</h1>
      <p>Ayax Franklin Ibarra Ruveda</p>

      {/* 2. Renderizamos nuestro nuevo componente Producto */}
      <Producto />
    </div>
  );
}

export default App;
