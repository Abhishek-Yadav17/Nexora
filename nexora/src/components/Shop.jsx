import React, { useState, useEffect } from 'react';
import '../styles/Shop.scss';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../utils/api';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <section className="shop">
      <div className="shop-header">
        <h1>Explore Our Products</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <i className="ri-search-line"></i>
        </div>
      </div>

      <div className="shop-cards">
        {filteredProducts.map(product => (
          <div className="shop-item"
            key={product._id}
            onClick={() => navigate(`/product/${product._id}`, { state: product })}
          >
            <div className="shop-card">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="shop-info">
              <p className="name">{product.name}</p>
              <p className="price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
