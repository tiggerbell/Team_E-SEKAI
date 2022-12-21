const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addNftt(id, nftPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { nfts : [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingNftIndex = cart.nfts.findIndex(
        prod => prod.id === id
      );
      const existingNft = cart.nfts[existingNftIndex];
      let updatedNft;
      // Add new product/ increase quantity
      if (existingNft) {
        updatedNft = { ...existingProduct };
        updatedNft.qty = updatedNft.qty + 1;
        cart.products = [...cart.nfts];
        cart.products[existingNftIndex] = updatedNft;
      } else {
        updatedNft = { id: id, qty: 1 };
        cart.nfts = [...cart.nfts, updatedNft];
      }
      cart.totalPrice = cart.totalPrice + + nftPrice;
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }

  static deleteNft(id, nftPrice) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return;
      }
      const updatedCart = { ...JSON.parse(fileContent) };
      const nft = updatedCart.nfts.find(prod => prod.id === id);
      if (!nft) {
          return;
      }
      const nftQty = nft.qty;
      updatedCart.nfts = updatedCart.nfts.filter(
        prod => prod.id !== id
      );
      updatedCart.totalPrice =
        updatedCart.totalPrice - nftPrice * nftQty;

      fs.writeFile(p, JSON.stringify(updatedCart), err => {
        console.log(err);
      });
    });
  }

  static getCart(cb) {
    fs.readFile(p, (err, fileContent) => {
      const cart = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(cart);
      }
    });
  }
};
