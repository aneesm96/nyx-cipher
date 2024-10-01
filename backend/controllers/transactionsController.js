const TransactionService = require('../services/TransactionsService');

exports.getTransactions = async (req, res) => {
  const transactions = await TransactionService.getTransactions();
  console.log('transactions', transactions);
  res.status(200).json(transactions);
};
