import React, { useEffect, useState } from 'react';
import '../styles/ProductList.scss';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../utils/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  return (
    <section className="product-list">
      <h4>Our Collection</h4>
      <h1>Featured Products</h1>
      <div className="cards">
        {products.slice(0, 3).map(product => (
          <div
            className="product-item"
            key={product._id}
            onClick={() => navigate(`/product/${product._id}`, { state: product })}
          >
            <div className="product-card">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="product-info">
              <p className="name">{product.name}</p>
              <p className="price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => { window.location.href = '/shop' }}>
        Explore More <i className="ri-arrow-right-up-long-line"></i>
      </button>
    </section>
  );
};

export default ProductList;
