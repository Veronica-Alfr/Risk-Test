const { denyManyTransactions, allData } = require('../services/transactionsService');
const dataClients = require('../models/transactionsModel');

const datas = (req, res) => {
    const data = allData();
    return res.status(200).json(data);
};

const denyManyTransactionsController = (req, res) => {
    const dataUserId = denyManyTransactions(req.body.user_id);
    const quantityTransactions = [...dataUserId, Number(req.body.user_id)];

    // const dates = datesTransaction(req.body.user_id);

    // const dateLast = dates[dates.length - 1];
    // const dateCurrent = new Date(req.body.transaction_date);

    // const diffMilliseconds = dateCurrent - dateLast;
    // const diffMinutes = Math.round(diffMilliseconds / (1000 * 60));
    // console.log(diffMinutes);

    if (quantityTransactions.length > 4) {
        return res.status(401).json({ message: 'Transaction Denied' });
    }

    dataClients.push(req.body);
    return res.status(200).json({ message: 'Transaction Approved' });
};

module.exports = { denyManyTransactionsController, datas };
