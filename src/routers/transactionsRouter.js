const { Router } = require('express');
const { denyManyTransactionsController, datas } = require('../controllers/transactionsController');

const router = Router();

router.get('/', datas);
router.post('/', denyManyTransactionsController);

module.exports = router;
