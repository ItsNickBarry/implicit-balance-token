// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.7.0;

import './ImplicitBalanceToken.sol';

abstract contract ImplicitVariableBalanceToken is ImplicitBalanceToken {
  uint internal _base;

  constructor (uint base) {
    _base = base;
  }

  function _implicitBalanceOf (address) virtual override internal view returns (uint) {
    return _base;
  }
}
