pragma solidity =0.5.16;

import '../OpenswapERC20.sol';

contract ERC20 is OpenswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
