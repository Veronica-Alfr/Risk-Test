const { denyManyTransactions } = require('../services/transactionsService');

const denyManyTransactionsController = (_req, res) => {
    const data = denyManyTransactions();

    return res.status(200).json(data);
};

module.exports = { denyManyTransactionsController };
