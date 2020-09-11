// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.7.0;

import '../ImplicitVariableBalanceToken.sol';

contract IVBT is ImplicitVariableBalanceToken {
  constructor (uint base)
  ERC20('', '')
  ImplicitVariableBalanceToken(base)
  {}

  function setBase (uint base) external {
    _base = base;
  }
}
