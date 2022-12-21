const Nft = require('../models/nft')

// 등록
exports.getAddNft = (req, res, next) =>{
    res.render('add-nft',{
        pageTitle : 'Add-Nft',
        path: '/admin/add-nft',
        activeAddNft: true,
    })
}

// 조회
exports.postAddNft = (req, res, next) => {
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const price = req.body.price;
    const description = req.body.description;
    Nft.create({
        title: title,
        price : price,
        imageURL : imageURL,
        description : description,
        // nft uid같은거 값뽑아다가 넣을 수 있나...?
    }).then().catch(err =>{
        console.log(err);
    });

}

exports.getNfts= (req, res, next) =>{
    // const nfts = adminData.nfts;
    res.render('nfts', {
        pageTitle : 'Nfts',
        path: '/',
        hasNfts : nfts.length >0,
        activeShop : true
    })
}