const express = require('express');
const userRoutes = require('./routes/v1/users.route');

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/v1/users', userRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Workout Tracker API activa 🚀');
});

// Middleware de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;
