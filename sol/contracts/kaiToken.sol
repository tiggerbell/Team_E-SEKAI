// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// // import를 하는데 nodeModules/openzeppelin/contracts/token/ERC20을 가져와주자
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";


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

// (0) 0x40E802e691E9ECfE87f1A1809b04C26DaAAAbE54 (100 ETH)
// (1) 0xa8AE7b65398faE340b4dB7048Abd8f67142B6f0C (100 ETH)
// (2) 0x81D15Ec64CB9C9d0AD5faA2c513477e5664e53A3 (100 ETH)
// (3) 0x66705Ef95315a8E2AcB7A616122ffbA27faF1E72 (100 ETH)
// (4) 0xa16bc3E9a92448667F21aAE2576cC07D35E41CD4 (100 ETH)
// (5) 0x8661c541d59D7607bCdBc11ed157835a945e374d (100 ETH)
// (6) 0xF340D84e398770032De101b75519144Dc3309957 (100 ETH)
// (7) 0x7eb6f9362cd5050E276539B97DA59d9B21Efcbfe (100 ETH)
// (8) 0x4D70086E62e28EE33219C72f2b0Fbd883da30C92 (100 ETH)
// (9) 0xA7761Ad23dca6283FECe36f5E84cF32Ec0A95A1b (100 ETH)

// Private Keys
// ==================
// (0) 0xe468d051d34c27e5ae186f7ff9d0d96973eb124f60e31cbb735b2862488c88c0
// (1) 0x4d38e70d0d82b60e0c47a90aff852bdcb9e6ab0a9a9260ddfd0fae2969d3bf09
// (2) 0x109a9e1a94b4939d2ec0536c0a9d1291086a308e97296276dbe6d9ec9a06125d
// (3) 0x117c56d80babfa6216314657305ae0e4a91c2a99cbea5b7b05927bdd9772ace8
// (4) 0x54dc49fe084244a42bf9becd1580e81ca5153ac6b4b44c7641fce549b1a53ac2
// (5) 0x3dc428ad41914dc002b4b1046e38925936013045284f12e92b961caaa63dafb7
// (6) 0x00e368f01ff3080031eb202ce729c5d33815ca6ea0a4125d82403f2bd64ea5d3
// (7) 0x3f3b70da6d438a8698b67f67ca433285ad023a250dd1028b4b85f27dd7d281c9
// (8) 0x056148555c276e4e3ca5928531ffaecec1412b6249cfb9dc3d81437e416827d0
// (9) 0xdfc206fe954f7a3a644fa3d0b4e2952a7a1ffb730f15b9f4a3cf67cb25f95763