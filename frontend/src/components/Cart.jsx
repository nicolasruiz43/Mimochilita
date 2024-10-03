import React from 'react';
import { useCart } from './context/CartContext';

const Cart = () => {
    const { cartItems, total, checkout } = useCart();
    const [orderData, setOrderData] = React.useState({ name: '', address: '', paymentMethod: '', phoneNumber: '', locality: '' });

    const handleCheckout = () => {
        checkout(orderData);
    };

    return (
        <div>
            <h2>Tu Carrito</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.titulo} - Cantidad: {item.cantidad} - Precio: ${item.precio * item.cantidad}
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${total}</p>
                    <h3>Datos de la Orden</h3>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={orderData.name}
                        onChange={(e) => setOrderData({ ...orderData, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Dirección"
                        value={orderData.address}
                        onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Método de Pago"
                        value={orderData.paymentMethod}
                        onChange={(e) => setOrderData({ ...orderData, paymentMethod: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Número de Teléfono"
                        value={orderData.phoneNumber}
                        onChange={(e) => setOrderData({ ...orderData, phoneNumber: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Localidad"
                        value={orderData.locality}
                        onChange={(e) => setOrderData({ ...orderData, locality: e.target.value })}
                    />
                    <button onClick={handleCheckout}>Finalizar Compra</button>
                    <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                        <button>Contactar al vendedor</button>
                    </a>
                </div>
            )}
        </div>
    );
};

export default Cart;
