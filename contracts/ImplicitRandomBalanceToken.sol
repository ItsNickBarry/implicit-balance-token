pragma solidity ^0.6.5;

import './ImplicitBalanceToken.sol';

abstract contract ImplicitRandomBalanceToken is ImplicitBalanceToken {
  uint internal immutable _min;
  uint internal immutable _mod;
  uint internal immutable _mul;

  constructor (uint min, uint mod, uint mul) internal {
    _min = min;
    _mod = mod;
    _mul = mul;
  }

  function _implicitBalanceOf (address account) override internal view returns (uint) {
    return (uint(account) % _mod + _min) * _mul;
  }
}
