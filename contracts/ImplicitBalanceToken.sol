// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.6.5;

import './ERC20.sol';

abstract contract ImplicitBalanceToken is ERC20 {
  mapping (address => bool) internal _claimed;

  function balanceOf (address account) override public view returns (uint) {
    return _balances[account] + (_claimed[account] ? 0 : _implicitBalanceOf(account));
  }

  function _beforeTokenTransfer (address from, address to, uint amount) virtual override internal {
    if (!_claimed[from]) {
      uint implicitBalance = _implicitBalanceOf(from);
      _balances[from] += implicitBalance;
      _claimed[from] = true;
      _totalSupply += implicitBalance;
    }

    super._beforeTokenTransfer(from, to, amount);
  }

  function _implicitBalanceOf (address account) virtual internal view returns (uint);
}
