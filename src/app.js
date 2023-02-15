const express = require('express');
const transactionsRouter = require('./routers/transactionsRouter');

const app = express();

app.use(express.json());

app.use('/transactions', transactionsRouter);

module.exports = app;