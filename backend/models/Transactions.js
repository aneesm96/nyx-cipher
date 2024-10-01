const mongoose = require('mongoose');
const { Schema } = mongoose;

// Sub-schema for currency information
const CurrencySchema = new Schema(
  {
    symbol: String,
    address: String,
    name: String,
    tokenType: String,
  },
  { _id: false }
);

// Sub-schema for recipient and smart contract details
const RecipientSchema = new Schema(
  {
    address: String,
    smartContract: {
      contractType: String,
      currency: CurrencySchema,
    },
  },
  { _id: false }
);

// Main Transaction Schema
const TransactionSchema = new Schema({
  amount: Number,
  sender: {
    address: String,
  },
  gasValue: Number,
  hash: { type: String, unique: true }, // Hash as a unique identifier
  currency: CurrencySchema,
  index: Number,
  to: RecipientSchema,
  block: {
    height: Number,
  },
});

// Creating the model from the schema
const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
