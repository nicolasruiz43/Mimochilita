// backend/server.js
app.post('/add-product', async (req, res) => {
    const { name, price, description, imageUrl } = req.body;
  
    try {
      const newProduct = await db.collection('products').add({
        name,
        price,
        description,
        imageUrl,
      });
      res.status(201).send(`Producto agregado con ID: ${newProduct.id}`);
    } catch (error) {
      res.status(400).send('Error al agregar producto: ' + error.message);
    }
  });
  