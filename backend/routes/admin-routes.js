const express = require('express');

const path = require('path')

const nftController = require('../controllers/nfts');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-nft', nftController.getAddNft);

router.post('/add-nft', nftController.postAddNft);


module.exports = router;