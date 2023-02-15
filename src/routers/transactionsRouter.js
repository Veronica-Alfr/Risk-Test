const { Router } = require('express');
const { denyManyTransactionsController } = require("../controllers/transactionsController");

const router = Router();

router.get("/", denyManyTransactionsController) // fazer callback async aawait ?

// router.post('/transactions', transactionsController.denyManyTransactions);

module.exports = router;
