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
    function getToken() public view returns(address){
        // KaiToken의 CA값
        return address(this);
    }

    // 해당 컨트랙트를 실행시킨 사람의 잔액을 보여주는 함수.
    function getBalance() public view returns (uint){
        return balanceOf(msg.sender);
    }

    // 해당 컨트랙트를 실행시킨 EOA계정을 가져옴
    function getMsgSender() public view returns (address){
        return msg.sender;
    }

    // 익명 함수
    // receive : 특정 계정에서 CA에 이더를 전송했을 때 실행되는 함수
    // external이 있다는건 이 컨트랙트 자체에서 실행하지 않는다는 것
    // 선언 해둠
    // 토큰 구매하는 방법 
    // 유적 스왑을 요청하고 이더를 KaiToken CA에 보내면 밑에 함수가 실행이 된다.
    function

    receive() external payable{
        // require true면 실행이고 false면 종료였다..
        // require true면 실행
        require(msg.value != 0, "Enter a nonzero value");
        uint amount = msg.value * rate;

        require(balanceOf(owner()) >= amount, "owner KaiToken is no amount"); 

        tokenTransferBuy(owner(),msg.sender, amount);

        if(msg.sender == owner()){
            _mint(owner(),amount);
        }
    }

    // 토큰 판매 함수
   function sellToken(uint256 _amount) public payable{
        require(balanceOf(msg.sender) >= _amount, "you fucking no Token ok?");
        uint256 etherAmount = _amount/rate;
        require(address(this).balance >= etherAmount, "CA no ether");
        tokenTransferSell(owner(),msg.sender, _amount);
        payable(msg.sender).transfer(etherAmount);
    }
    //ERC20에 밑에 두개 함수 추가 하기
    // token 구매
    // function tokenTransferBuy(address owner, address to, uint256 amount) public virtual {
    //     _balances[owner] -= amount;
    //     _balances[to] += amount;
    // }
    // token 판매
    // function tokenTransferSell(address owner, address to, uint256 amount) public virtual {
    //     _balances[owner] += amount;
    //     _balances[to] -= amount;
    // }
}

// (0) 0x1dAde3aDb027a4146A536E86d483A4B038C65f7f (100 ETH)
// (1) 0x80371011D24ac6aA7e819Bff1c6e2c8c055205a9 (100 ETH)
// (2) 0x647615372e329D6bd2E766db27c792e081E36a74 (100 ETH)
// (3) 0xbAC2439E9BD4F0e5bD167c7226619a4Fb34130F7 (100 ETH)
// (4) 0xE7b530544DD46d674186A89AE7446E637009DFED (100 ETH)
// (5) 0x9276C17616C8eFFB7A06474849004c0dDFE8472f (100 ETH)
// (6) 0x34649859c86F6a65092b0f426d9F2915a289B2ef (100 ETH)
// (7) 0x948b770591EdD826346Bd077aCe72ECc7e7851c6 (100 ETH)
// (8) 0x7Be35bbc59FAE7Af996f79C2C2F6F8Fe4bbA64F4 (100 ETH)
// (9) 0xe0bCBb3562FF3E2d09d1CDC8EBAD39d00a2433bE (100 ETH)

// Private Keys
// ==================
// (0) 0x755a10ddaf68f3e9759d6c4a1c6ad52e2cee44dffc170b5e5dfbfe07d26e1fbd
// (1) 0x530c91885450067a860788ca31f7087916d11eda9b16d2cefac5f90e6844a2d0
// (2) 0xfe3fd9467ac4dbcbc5a24c6b780dbbe56fe02354869d6f6d0a0f56768cb69552
// (3) 0x09a660edd72060f1cc8ac393f33f94906dc1c6aeebdb1733b0612ce96e255c89
// (4) 0xc6d52e5bcdf9121ac7064fc3a3843dd96b1e7c453d5623bd7867c242f9c2dbc9
// (5) 0x72f6fee1d98466def69bb226b75cb8b5ff69feb82470510e68a357a3b12a84d5
// (6) 0x65a6a8ba6257fe744a7544aa629e1992fa3c5318728235c2536beb6f7f61e16f
// (7) 0xf8c87e90d048f86d747cc18060316f7ac669e8224fc44f3fc9c75ce542723219
// (8) 0xb2211925e241e61fe58fa04fc9fa4c4134a244c019b1bc35bbe999d10c08b8ed
// (9) 0x3068f60392913670d33222e194a62f317a7155b05f770a5c31e4e461286c8662