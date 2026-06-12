const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Cart = require('../models/Cart');

// Place order
router.post('/', async (req, res) => {
  try {
    const { userId, items, totalAmount, address, paymentMethod } = req.body;
    const order = new Order({
      user: userId,
      items,
      totalAmount,
      address,
      paymentMethod
    });
    await order.save();

    // Clear cart after order
    const cart = await Cart.findOne({ user: userId });
    if (cart) { cart.items = []; await cart.save(); }

    res.json({ msg: 'Order placed successfully', order });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get user orders
router.get('/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId })
      .populate('items.product')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Update order status (admin)
router.put('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});
// Get ALL orders (admin)
router.get('/all', async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('items.product')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});
module.exports = router;