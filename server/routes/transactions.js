const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const Portfolio = require('../models/Portfolio');
const User = require('../models/User');
const Stock = require('../models/Stock');

// Buy or Sell stock
router.post('/', async (req, res) => {
  try {
    const { userId, stockId, type, quantity } = req.body;

    const user = await User.findById(userId);
    const stock = await Stock.findById(stockId);

    if (!user || !stock) return res.status(404).json({ msg: 'User or Stock not found' });

    const totalCost = stock.price * quantity;

    if (type === 'buy') {
      if (user.balance < totalCost) return res.status(400).json({ msg: 'Insufficient balance' });
      user.balance -= totalCost;

      let portfolio = await Portfolio.findOne({ user: userId, stock: stockId });
      if (portfolio) {
        portfolio.avgPrice = ((portfolio.avgPrice * portfolio.quantity) + totalCost) / (portfolio.quantity + quantity);
        portfolio.quantity += quantity;
        await portfolio.save();
      } else {
        portfolio = new Portfolio({ user: userId, stock: stockId, quantity, avgPrice: stock.price });
        await portfolio.save();
      }
    }

    if (type === 'sell') {
      let portfolio = await Portfolio.findOne({ user: userId, stock: stockId });
      if (!portfolio || portfolio.quantity < quantity) return res.status(400).json({ msg: 'Not enough stocks to sell' });
      portfolio.quantity -= quantity;
      user.balance += totalCost;
      await portfolio.save();
    }

    await user.save();

    const transaction = new Transaction({ user: userId, stock: stockId, type, quantity, price: stock.price });
    await transaction.save();

    res.json({ msg: `${type} successful`, balance: user.balance });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get user transactions
router.get('/:userId', async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.params.userId }).populate('stock');
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;