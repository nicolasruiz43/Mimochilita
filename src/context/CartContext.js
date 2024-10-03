// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';
import { db } from '../firebase/config'; 
import { collection, addDoc } from 'firebase/firestore';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (item, cantidad) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.cantidad += cantidad; // Aumentar cantidad si el artículo ya existe en el carrito
        } else {
            setCartItems([...cartItems, { ...item, cantidad }]); // Agregar nuevo artículo
        }
        calculateTotal(); // Calcular el total después de agregar al carrito
    };

    const calculateTotal = () => {
        const newTotal = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
        setTotal(newTotal);
    };

    const checkout = async (orderData) => {
        try {
            const ordersRef = collection(db, 'orders'); // Referencia a la colección de órdenes en Firestore
            await addDoc(ordersRef, { ...orderData, items: cartItems, total }); // Crear nueva orden
            alert('Orden creada con éxito');
            setCartItems([]); // Limpiar el carrito después de la compra
            setTotal(0); // Reiniciar total
        } catch (error) {
            console.error("Error creando la orden:", error);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, total, addToCart, checkout }}>
            {children}
        </CartContext.Provider>
    );
};
