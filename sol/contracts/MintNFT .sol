// // SPDX-License-Identifier: MIT

// pragma solidity ^0.8.7;

// import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// import "../node_modules/openzeppelin-solidity/contracts/utils/Strings.sol";
// import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";

//     contract MintNFT is ERC721Enumerable, Ownable {

//     uint public totalNFT;
//     // uint public mintPrice;
//     string public metadataURI;
    

//     constructor(string memory _metadataURI, uint _totalNFT) ERC721("HajinChoi", "Choi") {
//         metadataURI = _metadataURI;
//         totalNFT = _totalNFT;
//         // mintPrice = _mintPrice;
//     }

//     function mintNFT(uint a) public {
//         require(totalNFT > totalSupply(), "No more mint.");

//         for(uint i=0;i < a;i++) {
//             uint tokenId = totalSupply() + 1;
//             _mint(msg.sender, tokenId);

//         }
//     }

//     function tokenURI(uint _tokenId) public override view returns (string memory) {
//         return string(abi.encodePacked(metadataURI, '/', Strings.toString(_tokenId), '.json'));
//     }

//     function setApprovalForAll(address operator, bool approved) public virtual override {
//         _setApprovalForAll(_msgSender(), operator, approved);
//     }
    
// }