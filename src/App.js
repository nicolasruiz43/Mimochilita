import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';
import { db } from './firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { CartProvider } from './context/CartContext'; // Asegúrate de que la ruta sea correcta

const App = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(db, 'productos');
                const productSnapshot = await getDocs(productsCollection);
                const productList = productSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setItems(productList);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <CartProvider> {/* Asegúrate de envolver la aplicación con el proveedor */}
            <Router>
                <Navigation />
                <div className="container mt-4">
                    <Routes>
                        <Route path="/" element={loading ? <p>Cargando productos...</p> : <ItemList items={items} />} />
                        <Route path="/item/:id" element={<ItemDetail />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;
