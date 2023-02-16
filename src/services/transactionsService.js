const dataClients = require('../models/transactionsModel');

const denyManyTransactions = (id, dateBody) => {
   const dataByUser = dataClients.filter((client) => Number(client.user_id) === Number(id));

   const thirtyMinutes = new Date(new Date(dateBody) - new Date(1800000));
   const dataByDate = dataByUser.filter((client) => {
      if (new Date(client.transaction_date) >= thirtyMinutes) {
         return true;
      }
      return false;
   });

   const data = dataByDate.map((client) => client.user_id);

   return data;
};

const datesTransaction = (id) => {
   const dataByUser = dataClients.filter((client) => Number(client.user_id) === Number(id));
   const dates = dataByUser.map((customer) => new Date(customer.transaction_date));
   const sortDates = dates.sort((a, b) => a - b);
   return sortDates;
};

const isChargebacks = (id) => {
   const getCbk = dataClients.filter((client) => client.has_cbk === 'TRUE');
   const findUserFraudulent = getCbk.find((client) => client.user_id === id);
   return findUserFraudulent;
};

module.exports = { denyManyTransactions, datesTransaction, isChargebacks };