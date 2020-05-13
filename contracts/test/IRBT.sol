pragma solidity ^0.6.5;

import '../ImplicitRandomBalanceToken.sol';

contract IRBT is ImplicitRandomBalanceToken {
  constructor (uint min, uint mod) public
  ERC20('', '')
  ImplicitRandomBalanceToken(min, mod)
  {}
}
