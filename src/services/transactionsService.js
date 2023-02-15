const dataClients = require('../data/transactional-sample.json');

const denyManyTransactions = () => {
   return dataClients;
};

// denyManyTransactions().then((arr) => {
//      console.log(arr); // array preenchido com os dados do arquivo CSV
//    }).catch((error) => {
//      console.error(error); // tratamento do erro
//    });

module.exports = { denyManyTransactions };