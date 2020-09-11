// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.7.0;

import '../ImplicitRandomBalanceToken.sol';

contract IRBT is ImplicitRandomBalanceToken {
  constructor (uint min, uint mod, uint mul)
  ERC20('', '')
  ImplicitRandomBalanceToken(min, mod, mul)
  {}
}
