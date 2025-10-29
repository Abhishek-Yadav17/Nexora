import React, { useState } from 'react';
import '../styles/Navbar.scss';
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">nexora</div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <h4 onClick={() => { navigate('/'); setMenuOpen(false); }}>HOME</h4>
          <h4 onClick={() => { navigate('/shop'); setMenuOpen(false); }}>PRODUCTS</h4>
        </div>

        <div className="cart-icon" onClick={() => setCartOpen(true)}>
          <i className="ri-shopping-cart-fill"></i>
        </div>
      </nav>

      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
