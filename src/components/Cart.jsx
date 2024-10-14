import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css'; // Asegúrate de que el CSS esté correcto

const Cart = () => {
    const { cartItems, total, checkout } = useCart();
    const [orderData, setOrderData] = React.useState({ name: '', address: '', paymentMethod: '', phoneNumber: '', locality: '' });

    const handleCheckout = () => {
        checkout(orderData);
    };

    return (
        <div className="cart-container"> {/* Añade una clase para aplicar el CSS */}
            <h2 className="cart-title">Tu Carrito</h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart">No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul className="cart-items-list">
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <span className="cart-item-title">{item.titulo}</span>
                                <span className="cart-item-quantity">Cantidad: {item.cantidad}</span>
                                <span className="cart-item-price">Precio: ${item.precio * item.cantidad}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="cart-total">Total: ${total}</p>
                    <h3 className="order-data-title">Datos de la Orden</h3>
                    <div className="order-data-form">
                        <input
                            className="order-input"
                            type="text"
                            placeholder="Nombre"
                            value={orderData.name}
                            onChange={(e) => setOrderData({ ...orderData, name: e.target.value })}
                        />
                        <input
                            className="order-input"
                            type="text"
                            placeholder="Dirección"
                            value={orderData.address}
                            onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}
                        />
                        <input
                            className="order-input"
                            type="text"
                            placeholder="Método de Pago"
                            value={orderData.paymentMethod}
                            onChange={(e) => setOrderData({ ...orderData, paymentMethod: e.target.value })}
                        />
                        <input
                            className="order-input"
                            type="text"
                            placeholder="Número de Teléfono"
                            value={orderData.phoneNumber}
                            onChange={(e) => setOrderData({ ...orderData, phoneNumber: e.target.value })}
                        />
                        <input
                            className="order-input"
                            type="text"
                            placeholder="Localidad"
                            value={orderData.locality}
                            onChange={(e) => setOrderData({ ...orderData, locality: e.target.value })}
                        />
                        <button className="checkout-button" onClick={handleCheckout}>Finalizar Compra</button>
                        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                            <button className="contact-button">Contactar al vendedor</button>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
