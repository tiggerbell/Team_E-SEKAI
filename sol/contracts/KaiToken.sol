// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// import를 하는데 nodeModules/openzeppelin/contracts/token/ERC20을 가져와주자
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract KaiToken is ERC20{
    string public _name = "KaiToken";
    string public _symbol = "STK";
    uint public _totalSupply = 10000 * (10 ** decimals());

    constructor() ERC20(_name, _symbol){
        _mint(msg.sender, _totalSupply);
    }
}