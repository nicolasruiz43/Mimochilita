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
        
        let newCartItems;
        
        if (existingItem) {
            // Si el artículo ya existe, incrementar su cantidad
            existingItem.cantidad += cantidad; 
            newCartItems = [...cartItems]; // Copiar el arreglo existente
        } else {
            // Si no existe, agregar un nuevo artículo al carrito
            newCartItems = [...cartItems, { ...item, cantidad }]; 
        }
        
        setCartItems(newCartItems); // Actualizar el estado del carrito
        calculateTotal(newCartItems); // Calcular el total usando el nuevo carrito
    };

    const calculateTotal = (items) => {
        // Calcular el total basado en los artículos actuales en el carrito
        const newTotal = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
        setTotal(newTotal); // Actualizar el total
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
