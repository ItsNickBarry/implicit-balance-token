// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.6.5;

import './ImplicitBalanceToken.sol';

abstract contract ImplicitFixedBalanceToken is ImplicitBalanceToken {
  uint internal immutable _base;

  constructor (uint base) internal {
    _base = base;
  }

  function _implicitBalanceOf (address account) override internal view returns (uint) {
    account = account;
    return _base;
  }
}
