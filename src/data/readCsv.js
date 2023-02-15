const csvtojson = require('csvtojson');
const fs = require('fs');

const csvFilePath = './transactional-sample.csv';
const jsonFilePath = '.transactional-sample.json';

csvtojson()
  .fromFile(csvFilePath)
  .then((json) => {
    fs.writeFileSync(jsonFilePath, JSON.stringify(json));
    console.log('Conversion complete');
  })
  .catch((err) => {
    console.log(err); // usar async-error-express
  });

// Ao rodar o comando node readCsv.js é criado o arquivo json

// const fs = require('fs');
// const parse = require('csv-parser');

// const dataClients = async () => new Promise((resolve, reject) => {
//     const arr = [];
//     fs.createReadStream('./transactional-sample.csv')
//       .pipe(parse({ delimiter: ',', from_line: 1 }))
//       .on('data', (row) => {
//         arr.push(row);
//       })
//       .on('end', () => {
//         console.log('finished');
//         resolve(arr);
//       })
//       .on('error', (error) => {
//         console.log('ERROR:', error.message); // tratar o error com Throw
//         reject(error);
//       });
//   });

// dataClients().then((arr) => {
//   console.log(arr); // array preenchido com os dados do arquivo CSV
// }).catch((error) => {
//   console.error(error); // tratamento do erro
// });

// module.exports = dataClients;
