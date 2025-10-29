const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

router.get('/', async (req, res) => {
  try {
    const cart = await CartItem.find().populate('product');
    const validCart = cart.filter(item => item.product !== null);
    const total = validCart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    res.json({ cart: validCart, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching cart' });
  }
});

router.post('/', async (req, res) => {
  const { productId, qty } = req.body;
  let item = await CartItem.findOne({ product: productId });
  if (item) item.quantity += qty;
  else item = new CartItem({ product: productId, quantity: qty });
  await item.save();
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item removed' });
});

router.post('/checkout', async (req, res) => {
  const cart = await CartItem.find().populate('product');
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const receipt = { total, timestamp: new Date() };
  await CartItem.deleteMany();
  res.json(receipt);
});

router.put('/:id', async (req, res) => {
  const { qty } = req.body;
  try {
    const item = await CartItem.findByIdAndUpdate(
      req.params.id,
      { quantity: qty },
      { new: true }
    ).populate('product');
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update quantity' });
  }
});

module.exports = router;
