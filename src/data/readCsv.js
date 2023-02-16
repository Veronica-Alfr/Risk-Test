const csvtojson = require('csvtojson');
const fs = require('fs');

const csvFilePath = './transactional-sample.csv';
const jsonFilePath = '.transactional-sample.json';

csvtojson()
  .fromFile(csvFilePath)
  .then((json) => {
    fs.writeFileSync(jsonFilePath, JSON.stringify(json));
  })
  .catch((err) => {
    throw new Error(err);
  });
