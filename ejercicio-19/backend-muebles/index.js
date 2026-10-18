const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

// Base de datos simulada en memoria
let productos = [
  { id: 1, nombre: 'Mesa de comedor de roble' },
  { id: 2, nombre: 'Silla ergonómica de oficina' },
];

// Endpoint GET que debe devolver JSON
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

// Endpoint POST para registrar muebles
app.post('/api/productos', (req, res) => {
  const { nombre } = req.body;
  const nuevoMueble = { id: productos.length + 1, nombre };
  productos.push(nuevoMueble);
  res.status(201).json({ id: nuevoMueble.id, mensaje: 'Guardado con éxito' });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
