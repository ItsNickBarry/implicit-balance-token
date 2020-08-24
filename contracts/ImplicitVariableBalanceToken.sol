// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.6.5;

import './ImplicitBalanceToken.sol';

abstract contract ImplicitVariableBalanceToken is ImplicitBalanceToken {
  uint internal _base;

  constructor (uint base) internal {
    _base = base;
  }

  function _implicitBalanceOf (address) virtual override internal view returns (uint) {
    return _base;
  }
}
