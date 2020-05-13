pragma solidity ^0.6.5;

import '../ImplicitFixedBalanceToken.sol';

contract IFBT is ImplicitFixedBalanceToken {
  constructor (uint base) public
  ERC20('', '')
  ImplicitFixedBalanceToken(base)
  {}
}
