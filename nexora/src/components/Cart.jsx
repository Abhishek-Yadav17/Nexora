import React, { useState, useEffect } from 'react';
import '../styles/Cart.scss';
import { getCart, updateCartItem, removeFromCart } from '../utils/api';

const Cart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (isOpen) fetchCart();
  }, [isOpen]);

  const fetchCart = async () => {
    try {
      const data = await getCart();
      setCartItems(data);
    } catch (err) {
      console.error('Failed to fetch cart', err);
    }
  };

  const handleRemove = async (id) => {
    try {
      await removeFromCart(id);
      setCartItems(cartItems.filter(item => item._id !== id));
    } catch (err) {
      console.error('Failed to remove item', err);
    }
  };

  const handleQuantityChange = async (id, qty) => {
    try {
      const updated = await updateCartItem(id, qty);
      setCartItems(cartItems.map(item => item._id === id ? updated : item));
    } catch (err) {
      console.error('Failed to update quantity', err);
    }
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
    alert('Checkout successful!');
    setEmail('');
    setName('');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Cart</h2>
        <button onClick={onClose}>X</button>
      </div>

      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item._id}>
            <img src={item.product.img} alt={item.product.name} />
            <div className='cart-item-details'>
              <h4>{item.product.name}</h4>
              <h4>${item.product.price}</h4>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={e => handleQuantityChange(item._id, +e.target.value || 1)}
              />
            </div>
            <button className="remove-item" onClick={() => handleRemove(item._id)}>
              <i className="ri-delete-bin-line"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="checkout">
        <h2>Subtotal: ${subtotal}</h2>
        <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Checkout</h2>
            <p>Total Amount: ${subtotal}</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
