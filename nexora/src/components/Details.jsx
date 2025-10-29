import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Details.scss';
import { addToCart } from '../utils/api';

const Details = () => {
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    const { state: product } = useLocation();

    if (!product) return <p>Product not found!</p>;

    const handleAddToCart = async () => {
        try {
            await addToCart(product._id, quantity);
            setAdded(true);
            setTimeout(() => setAdded(false), 1500);
        } catch (err) {
            console.error(err);
            alert('Failed to add to cart');
        }
    };

    return (
        <section className="details">
            <div className="details-top">
                <div className="details-left">
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="details-right">
                    <h1>{product.name}</h1>
                    <h4 className="desc">{product.desc}</h4>
                    <h4 className="price">{product.price}</h4>
                    <div className="quantity">
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        />
                        <button className="add-cart" onClick={handleAddToCart}>
                            {added ? <i className="ri-checkbox-circle-line"></i> : 'Add to Cart'}
                        </button>
                    </div>
                    <div className="feature-details">
                        <h2>Return & Exchange</h2>
                        <h4>• Easy 10-day return policy</h4>
                        <h4>• Exchange available for size issues</h4>
                    </div>

                    <div className="features">
                        <img src="/feature.svg" alt="feature" />
                        <img src="/feature1.svg" alt="feature" />
                        <img src="/feature3.svg" alt="feature" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
