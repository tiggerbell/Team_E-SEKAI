// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";
import "./MintNFT.sol";

import "../node_modules/openzeppelin-solidity/contracts/utils/Strings.sol";

// operator address 를
contract Sale is Ownable {
    address mintAddress;
    
    MintNFT mintContract; // import한 것

    //  property의 타입 => value의 타입
    // tokenID : price
    mapping(uint => uint) public tokenPrices; // 각각에 대한 가격 업데이트 하려고 mapping 사용
    // 배열의 인덱스 값에 uint를 집어넣어서 연산한 결과값이 uint라는 뜻??

    constructor(address _mintAddress) {
        mintAddress = _mintAddress;
        mintContract = MintNFT(_mintAddress); // mintNFT 에 만들어둔 함수를 사용할 수 있게 됨
        // mintNFT.함수명으로 다른 컨트랙트에 있는 함수를 사용할 수 있음
    }

    // Token info 구조체
    struct TokenInfo{
        uint tokenId;
    }

    function setPermission() public {
        mintContract.setApprovalForAll(address(this), true);
    }

    function setForSale(uint _tokenId, uint _price) public  {

        address tokenOwner = mintContract.ownerOf(_tokenId); // ownerOf() 기본제공 함수, 해당토큰 소유자의 주소를 리턴해줌
        require(tokenOwner == msg.sender, "Not owner.");
        require(_price > 0, "Price type is only uint without 0"); // 가격이 0이면 리스팅이 안된 상태이기 때문에 에러 띄워줌
        require(tokenPrices[_tokenId] == 0, "already sale.");
        require(mintContract.isApprovedForAll(tokenOwner, address(this)), "Not approved."); // 판매자에게서 구매자에게 토큰을 넘겨줄 수 있는지 컨트랙트에 권한을 위임받았는지 확인

        tokenPrices[_tokenId] = _price * 10 ** 18; // 토큰아이디의 주인이 누군지 확인을 다 거친다음 가격 저장
    }

    function test() public view returns(address) {
        return address(this);
    }


    function purchase(uint _tokenId) public payable {
        uint price = tokenPrices[_tokenId]; // 해당 토큰의 가격
        address tokenOwner = mintContract.ownerOf(_tokenId); // 토큰의 주인 확인

        require(price > 0, "not sale."); // 리스팅이 되어있는지 확인
        require(price <= msg.value, "more bnb."); // msg.value : 토큰 구매하려고 한 사람이 담아보낸 돈 , 현재는 price보다 이상이면 주건 ㅇㅋ임
        require(tokenOwner != msg.sender, "owner not buy."); // 토큰주인 != 구매자 인지 확인

        // payable(owner()).tranfer(100);
        payable(tokenOwner).transfer(msg.value); // 토큰 주인에게 msg.value를 준다.
        mintContract.safeTransferFrom(tokenOwner, msg.sender, _tokenId); // 토큰 주인이 구매자에게 해당 nft를 보낸다

        // 토큰 구매자에게 넘겨줄때 리스팅이 안된 상태로 넘겨줘야 하기때문에, 안그러면 누군가가 바로 구매하면 소유권이 넘어갈 수 있기 때문임
        tokenPrices[_tokenId] = 0; // 가격을 0으로 바꿔줘서 토큰이 리스팅 안되어있다고 설정해줘야함

    }

    // 소유한 nft 보여주는 함수
        function getOwnerToken(address _tokenOwner) public view returns (TokenInfo[] memory){
        uint balance = mintContract.balanceOf(_tokenOwner);
        require(balance != 0);
        // balance크기의 빈 배열 만들기 list
        TokenInfo[] memory list = new TokenInfo[](balance);

        for (uint i = 0; i < balance; i++) {
            // 토큰 소유자의 토큰을 순서대로 가져올 아이디
            uint tokenId = mintContract.tokenOfOwnerByIndex(_tokenOwner, i);

            list[i] = TokenInfo(tokenId);
        }
        return list;
    }
}
