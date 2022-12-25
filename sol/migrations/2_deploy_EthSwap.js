const KaiToken = artifacts.require("KaiToken");
const MintNFT = artifacts.require("MintNFT");
const Sale = artifacts.require("Sale");

module.exports = async function (deployer){
    // KaiToken 배포 진행
    await deployer.deploy(KaiToken);
    // 배포된 인스턴스 가져오기
    const token = await KaiToken.deployed();
    // KaiToken.address // 배포된 컨트랙트의 CA 값이 가져와짐
}