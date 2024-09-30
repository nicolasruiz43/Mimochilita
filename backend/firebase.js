// backend/firebase.js
const admin = require('firebase-admin');

// Inicializa Firebase Admin con tus credenciales
const serviceAccount = require('./path-to-your-firebase-adminsdk.json'); // Ruta a tus credenciales

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
