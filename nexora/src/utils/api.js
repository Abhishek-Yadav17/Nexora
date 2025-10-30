import axios from 'axios';

const BASE_URL = 'https://nexora-zaer.onrender.com/api';

export const getProducts = async () => {  
  const res = await axios.get(`${BASE_URL}/products`);
  return res.data;
};

export const getCart = async () => {
  const res = await axios.get(`${BASE_URL}/cart`);
  return res.data.cart;
};

export const addToCart = async (productId, qty = 1) => {
  const res = await axios.post(`${BASE_URL}/cart`, { productId, qty });
  return res.data;
};

export const updateCartItem = async (id, qty) => {
  const res = await axios.put(`${BASE_URL}/cart/${id}`, { qty });
  return res.data;
};

export const removeFromCart = async (id) => {
  const res = await axios.delete(`${BASE_URL}/cart/${id}`);
  return res.data;
};

export const checkoutCart = async (cartItems) => {
  const res = await axios.post(`${BASE_URL}/cart/checkout`, { cartItems });
  return res.data;
};
