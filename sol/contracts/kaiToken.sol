// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.17;

// // import를 하는데 nodeModules/openzeppelin/contracts/token/ERC20을 가져와주자
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";


pragma solidity ^0.8.17;

// 컨트랙트 상속 is로 SOONToken에 ERC20를 상속 
contract KaiToken is ERC20, Ownable {
    string public _name = "KaiToken";
    string public _symbol = "KAI";
    uint256 public _totalSupply = 10000 * (10**decimals());

    uint256 public rate = 100; // 1ETH 당 200토큰

    constructor() ERC20(_name, _symbol){
        // ERC20 상속 받아서 있는 것0
        _name = _name;
        _symbol = _symbol;
        // mint 함수 만들 예정
        mint(owner(), _totalSupply);
    }

    // 익명 함수
    // receive : 특정 계정에서 CA에 이더를 전송했을 때 실행되는 함수
    // external이 있다는건 이 컨트랙트 자체에서 실행하지 않는다는 것
    // 선언 해둠
    // 토큰 구매하는 방법 
    // 유적 스왑을 요청하고 이더를 KaiToken CA에 보내면 밑에 함수가 실행이 된다.
    receive() external payable{
        // require true면 실행이고 false면 종료였다..
        // require true면 실행
        require(msg.value != 0, "Enter a nonzero value");
        uint amount = msg.value * rate;

        require(balanceOf(owner()) >= amount, "owner KaiToken is no amount"); 

        tokentransfer(owner(),msg.sender, amount);

        if(msg.sender == owner()){
            _mint(owner(),amount);
        }
    }

        // 토큰 판매 함수
    function sellToken(uint256 _amount) public payable{
        require(balanceOf(msg.sender) >= _amount);
        uint256 etherAmount = _amount/rate;
        require(address(this).balance >= etherAmount);
        transferFrom(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(etherAmount);
    }
}

// (0) 0x5e5e6f059CE704Ab186402c0fd3153BE76FA00F6 (100 ETH)
// (1) 0x99CFAA1E63132C22A45b251EC5F925B3770792FE (100 ETH)
// (2) 0xdD2A5c73eC4C73d3226DafA805031f0f174ab0c3 (100 ETH)
// (3) 0x00e10cdce56d5EF25428Bb7cFF1451cB72d70d29 (100 ETH)
// (4) 0xfD82a9508287dd65f67E6752ee97cc13826367aA (100 ETH)
// (5) 0xa4f7d58dC15d0f2273bE760c7778A65e2E9F6f00 (100 ETH)
// (6) 0x1C8D32ADdB66fD8a4740aFD63D6980659F7a5A85 (100 ETH)
// (7) 0xfed1315BEFFb6A32820E2930FBaA839d59De6Ba0 (100 ETH)
// (8) 0x105a7099325d7609aEf74D0bfEb3ebd5B7D78259 (100 ETH)
// (9) 0x309c0A6Efb1ba978404949A3A8934cc09e83c604 (100 ETH)

// Private Keys
// ==================
// (0) 0xd478d3486055b35bf71aa3cebc7af59b6df240674b839a694a180c3706cfab12
// (1) 0x5c579894b6ea0f648729d631bf6789c79162eddcec56bfe05ef45ad01f77070f
// (2) 0x142a66182dabc3d600f55fe20ed25878073cbe3e563b4e4062961439286b1cc3
// (3) 0x2c8204122ad044fb422a544486a0b3fa14675fc4ee355d3e99c8009c4cd3bc2a
// (4) 0xdec6b98e64ee1167ceea5ea413f45b7aa9a4478f6f8bf343ee6a13ebfaed69f6
// (5) 0x6ccb4d2aeb1d0a625db8ee9f6f76077f4c99af449e7d4a101e9051b3bcbd4651
// (6) 0x1a71a8da3c00542a1c5adb9ad8e9b68493d30a2f4419daacdce4d1ca66470474
// (7) 0x22911ba60acf21a828f6483cda5d3730e5d220145c91ddf93ec7fb6cccc202aa
// (8) 0x5dc73e008db123cd1a2fbaf67d2712d912128498f82ec61d9af8a22a70de509f
// (9) 0x244faf2038c87ff122252f8de931fe5a589ff89df4bdd8239d94b19bc14a7dc3