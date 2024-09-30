// backend/index.js
const express = require('express');
const cors = require('cors');
const admin = require('./firebase');

const app = express();
app.use(cors());
app.use(express.json()); // Para manejar JSON en el body de las peticiones

// Ruta para registrar usuarios
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });
    res.status(201).json({ message: 'Usuario registrado con éxito', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para iniciar sesión (aquí simplemente verificarías con el frontend, o podrías generar tokens)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // En Firebase Admin no existe una función para login, necesitas verificar desde el frontend con tokens
  // Aquí puedes generar tokens personalizados
  try {
    const user = await admin.auth().getUserByEmail(email);
    res.status(200).json({ message: 'Inicio de sesión exitoso', user });
  } catch (error) {
    res.status(400).json({ error: 'Usuario no encontrado' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
