import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar'; // Asegúrate de que la ruta sea correcta
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'; // Asegúrate de que este componente exista
import Nosotros from './components/Nosotros'; // Asegúrate de que este componente exista
import Contacto from './components/Contacto'; // Asegúrate de que este componente exista
import { db } from './firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { CartProvider } from './context/CartContext';
import './styles/categories.css'; // Asegúrate de que la ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

const categories = [
    "Mochilas para damas",
    "Mochilas para caballeros",
    "Mochilas coreanas",
    "Mochilas para niños",
    "Mochilas maternales",
    "Mochilas básicas"
];

const App = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');

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

    // Filtrar los productos por categoría
    const filteredItems = selectedCategory
        ? items.filter(item => item.categoria === selectedCategory)
        : items;

    return (
        <CartProvider>
            <Router>
                <div className="App">
                    {/* Navegación */}
                    <Navigation />
                    
                    <div className="container mt-4">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <div>
                                        <div className="category-container">
                                            <h3>Filtrar por categoría</h3>
                                            <select
                                                value={selectedCategory}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                                className="form-select mb-3"
                                            >
                                                <option value="">Todas las categorías</option>
                                                {categories.map(category => (
                                                    <option key={category} value={category}>
                                                        {category}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        {loading ? <p>Cargando productos...</p> : <ItemList items={filteredItems} />}
                                    </div>
                                }
                            />
                            <Route path="/item/:id" element={<ItemDetail />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/nosotros" element={<Nosotros />} />
                            <Route path="/contacto" element={<Contacto />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;
