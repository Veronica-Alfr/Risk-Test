const { denyManyTransactions, allData, isChargebacks } = require('../services/transactionsService');
const dataClients = require('../models/transactionsModel');

const datas = (req, res) => {
    const data = allData();
    return res.status(200).json(data);
};

const denyManyTransactionsController = (req, res) => {
    const dataUserId = denyManyTransactions(req.body.user_id, req.body.transaction_date);
    const quantityTransactions = [...dataUserId, Number(req.body.user_id)];

    const userFraudulent = isChargebacks(req.body.user_id);

    if (userFraudulent) {
        return res.status(401)
        .json({ message: 'Sorry, there seems to be something wrong with your transactions.' });
    }

    if (quantityTransactions.length > 4) {
        return res.status(401).json({ message: 'Transaction Denied' });
    }

    dataClients.push(req.body);
    return res.status(200).json({ message: 'Transaction Approved' });
};

module.exports = { denyManyTransactionsController, datas };
