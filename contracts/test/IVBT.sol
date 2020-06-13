pragma solidity ^0.6.5;

import '../ImplicitVariableBalanceToken.sol';

contract IVBT is ImplicitVariableBalanceToken {
  constructor (uint base) public
  ERC20('', '')
  ImplicitVariableBalanceToken(base)
  {}

  function setBase (uint base) external {
    _base = base;
  }
}