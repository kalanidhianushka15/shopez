const express = require('express');
const router = express.Router();
const Stock = require('../models/Stock');

// Get all stocks
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get single stock
router.get('/:id', async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);
    if (!stock) return res.status(404).json({ msg: 'Stock not found' });
    res.json(stock);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Add stock (admin)
router.post('/', async (req, res) => {
  try {
    const stock = new Stock(req.body);
    await stock.save();
    res.json(stock);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;