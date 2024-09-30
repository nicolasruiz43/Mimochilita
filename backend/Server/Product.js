const express = require('express');

module.exports = (db) => {
  const router = express.Router();

  // Obtener todos los productos
  router.get('/', async (req, res) => {
    try {
      const snapshot = await db.collection('products').get();
      const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(products);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  // Agregar un nuevo producto
  router.post('/', async (req, res) => {
    try {
      const product = req.body;
      const docRef = await db.collection('products').add(product);
      res.status(201).send(`Product added with ID: ${docRef.id}`);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  return router;
};
