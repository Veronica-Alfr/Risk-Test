const fs = require('fs');

const jsonData = fs.readFileSync('./src/data/transactional-sample.json', 'utf8');
const data = JSON.parse(jsonData);

module.exports = data;
