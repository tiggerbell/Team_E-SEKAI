// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// // import를 하는데 nodeModules/openzeppelin/contracts/token/ERC20을 가져와주자
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";


// 컨트랙트 상속 is로 SOONToken에 ERC20를 상속 
contract Kai2Token is ERC20, Ownable {
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

    // NFT 구매 했을 때 토큰 교환
    function buyNft(uint256 _amount, address from) public payable{
        require(balanceOf(from) >= _amount*rate, "you fucking no Token ok?");
        tokenTransferSell(owner(),from, _amount*rate);
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