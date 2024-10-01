const axios = require('axios');
const { BadRequestError } = require('../utils/errors');
const Transaction = require('../models/Transactions');

exports.getTransactions = async () => {
  // Query
  let data = JSON.stringify({
    query:
      'query MyQuery {\n  ethereum(network: bsc) {\n    transactions(options: {limit: 10}) {\n      amount\n      sender(txSender: {in: "0xF6dDc8aCAFdA5BB95271CB73CFDe3AB7f67d3c99"}) {\n        address\n      }\n      gasValue\n      hash\n      currency {\n        symbol\n        address\n        name\n      }\n      index\n      to {\n        address\n        smartContract {\n          contractType\n          currency {\n            name\n            tokenType\n            symbol\n          }\n        }\n      }\n      block {\n        height\n      }\n    }\n  }\n}\n',
    variables: '{}',
  });
  //Auth config
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://graphql.bitquery.io',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': 'BQY1HteQWC74i59tnjsDaAjyVQFVJgQ2',
      Authorization:
        'Bearer ory_at_V9MUxKxu2w13AXvA7p6jhO0xP4_5UCoiLdAMam-Zgc8.V8yYupVWjOAYOqmDmdUI1X3sw0FuzlkduH5wFV-Mph0',
    },
    data: data,
  };

  try {
    const transactions = await axios.request(config).then((response) => {
      return response.data;
    });

    return transactions;
  } catch (error) {
    throw new BadRequestError('Something went wrong');
  }
};

exports.addTransaction = async (transaction) => {
  try {
    const newTransaction = await new Transaction(transaction).save();
    console.log('newTransaction', newTransaction);
    return newTransaction;
  } catch (error) {
    throw new BadRequestError('Something went wrong');
  }
};
