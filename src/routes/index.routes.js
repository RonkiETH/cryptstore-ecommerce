const { Router } = require('express')
const router = Router();

const { renderIndex, renderAbout, renderSignIn, renderProducts } = require('../controllers/index.controller')

router.get('/', renderIndex);

router.get('/products', renderProducts);

module.exports = router;