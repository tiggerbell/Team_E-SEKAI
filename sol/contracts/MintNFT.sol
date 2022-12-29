// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/openzeppelin-solidity/contracts/utils/Strings.sol";
import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";
import "./KaiToken.sol";

contract MintNFT is ERC721Enumerable, Ownable {

    uint public totalNFT = 30; // nft 총개수
    // uint public mintPrice;
    string public metadataURI = "https://gateway.pinata.cloud/ipfs/QmSBzdVnV5ZEkWsEnGuSVBUhqnJW2FZTT4jTbySwxh3kYG/";
    
    KaiToken tokenContract;

    // 배포할때 받을 인자 설정해주는 부분 init 함수랑 같은 역할
    constructor(address _tokenAddress) ERC721("HajinChoi", "Choi") {
        metadataURI = metadataURI;
        totalNFT = totalNFT;
        tokenContract = KaiToken(payable(_tokenAddress));
    }

    // erc721에서 _mint 함수가 기본적으로 있지만 한번만 가능하기때문에 

    function mintNFT(uint mintValue, uint kaiSwap) public {
        require(totalNFT > totalSupply(), "No more mint."); // totalSupply() 지금까지 발행한 nft의 총 개수
        // require 
        for(uint i=0;i < mintValue; i++) {
            uint tokenId = totalSupply() + 1;
            _mint(msg.sender, tokenId);
        }
        tokenContract.buyNft(kaiSwap,msg.sender);
    }

    // nft json 설정
    function tokenURI(uint _tokenId) public override view returns (string memory) {
        return string(abi.encodePacked(metadataURI, '/', Strings.toString(_tokenId), '.json'));
    }
        // 권한 받는 함수, bool approved 이 값이 true여야 권한을 넘겨줌
        // 컨트랙트 자체에 권한을 이용
        // mintNFT 지갑주소나 
        // 컨트랙트 자체에 지갑에 대한 권한을 위임하는 것, 
        // 내가 올려놓은 nft를 구매하는 계정에 보내주려고 권한을 요청하는 것임
        // 이 권한이 없으면 구매하는 사람이 돈만 지불하는 트랜잭션만 발생하고 nft를 넘겨주지는 않음 
        // function setApprovalForAll(address operator, bool approved) public virtual override {
        // _setApprovalForAll(_msgSender(), operator, approved);
        // }

}