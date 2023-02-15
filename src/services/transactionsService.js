const dataClients = require('../models/transactionsModel');

const allData = () => dataClients;

const denyManyTransactions = (id) => {
   const dataByUser = dataClients.filter((client) => Number(client.user_id) === Number(id));

   const thirtyMinutes = new Date(new Date() - new Date(1800000));
   const dataByDate = dataByUser.filter((client) => {
      if (new Date(client.transaction_date) >= thirtyMinutes) {
         return true;
      }
      return false;
   });

   const data = dataByDate.map((client) => client.user_id);

   return data;
};

const datesTransaction = (id) => { // desabilitado retorno de callback para arrays
   const dataByUser = dataClients.filter((client) => Number(client.user_id) === Number(id));
   const dates = dataByUser.map((customer) => new Date(customer.transaction_date));
   const sortDates = dates.sort((a, b) => a - b);
   return sortDates;
};

module.exports = { denyManyTransactions, datesTransaction, allData };