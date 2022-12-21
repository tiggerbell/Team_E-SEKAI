const express = require('express');

const router = express.Router();


const nftsController = require('../controllers/nfts')


router.get('/', nftsController.getNfts);


module.exports = router;