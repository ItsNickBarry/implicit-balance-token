// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.7.0;

import '../ImplicitFixedBalanceToken.sol';

contract IFBT is ImplicitFixedBalanceToken {
  constructor (uint base) public
  ERC20('', '')
  ImplicitFixedBalanceToken(base)
  {}
}
