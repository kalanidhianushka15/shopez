const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// Get user portfolio
router.get('/:userId', async (req, res) => {
  try {
    const portfolio = await Portfolio.find({ user: req.params.userId }).populate('stock');
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;