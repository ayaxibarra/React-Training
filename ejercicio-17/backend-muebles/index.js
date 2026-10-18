const express = require('express');
const app = express();
const PORT = 4000;

// Middleware para que Express sepa interpretar datos en formato JSON
app.use(express.json());

// Array simulando nuestra base de datos en memoria
let productos = [
  { id: 1, nombre: 'Mesa de comedor de roble' },
  { id: 2, nombre: 'Silla ergonómica de oficina' },
  { id: 3, nombre: 'Estantería flotante minimalista' },
];

// 1. Endpoint GET: Devuelve la lista de productos
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

// 2. Endpoint POST: Recibe un nuevo mueble y lo agrega a la lista
app.post('/api/productos', (req, res) => {
  const { nombre } = req.body;

  if (!nombre) {
    return res
      .status(400)
      .json({ error: 'El nombre del mueble es obligatorio.' });
  }

  const nuevoMueble = {
    id: productos.length + 1,
    nombre: nombre,
  };

  productos.push(nuevoMueble);

  // Respondemos con éxito y devolvemos el ID generado
  res.status(201).json({
    mensaje: 'Mueble guardado con éxito',
    id: nuevoMueble.id,
    producto: nuevoMueble,
  });
});

// Iniciar el servidor en el puerto 4000
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
