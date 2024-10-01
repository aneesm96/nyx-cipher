const express = require('express');
// Local Imports
const TransactionController = require('../controllers/transactionsController');
// Router

const router = express.Router();

// Transaction List
router.get('/list', TransactionController.getTransactions);

module.exports = router;
