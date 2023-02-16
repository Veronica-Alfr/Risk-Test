const { Router } = require('express');
const { denyManyTransactionsController } = require('../controllers/transactionsController');

const router = Router();

router.post('/', denyManyTransactionsController);

module.exports = router;
