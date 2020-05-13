const {
  constants,
  BN,
} = require('@openzeppelin/test-helpers');

const IFBT = artifacts.require('IFBT');
const IRBT = artifacts.require('IRBT');

contract('ImplicitBalanceToken', function (accounts) {
  const BASE = new BN(100);

  let instance;

  beforeEach(async function () {
    instance = await IFBT.new(BASE, { from: accounts[0] });
  });

  // describe('#balanceOf'); // see mock contract tests

  describe('#totalSupply', function () {
    it('increments on contract interaction', async function () {
      assert((await instance.totalSupply.call()).isZero());

      // transfer less than implicit balance
      await instance.transfer(accounts[1], BASE.sub(new BN(1)), { from: accounts[0] });

      // entire implicit balance is recorded
      assert((await instance.totalSupply.call()).eq(BASE));
    });
  });

  describe('#transfer', function () {
    it('transfers implicit balance', async function () {
      let sender = accounts[0];
      let receiver = accounts[1];

      let initialBalance = await instance.balanceOf.call(receiver);
      await instance.transfer(receiver, BASE, { from: sender });
      let finalBalance = await instance.balanceOf.call(receiver);

      assert(initialBalance.add(BASE).eq(finalBalance));
    });
  });

  describe('#transferFrom', function () {
    it('transfers implicit balance', async function () {
      let sender = accounts[0];
      let receiver = accounts[1];

      await instance.approve(receiver, constants.MAX_UINT256, { from: sender });

      let initialBalance = await instance.balanceOf.call(receiver);
      await instance.transferFrom(sender, receiver, BASE, { from: receiver });
      let finalBalance = await instance.balanceOf.call(receiver);

      assert(initialBalance.add(BASE).eq(finalBalance));
    });
  });
});

contract('ImplicitFixedBalanceToken', function (accounts) {
  describe('#balanceOf', function () {
    it('returns base value by default', async function () {
      const BASE = new BN(1);

      let instance = await IFBT.new(BASE);

      for (let account of accounts.concat([constants.ZERO_ADDRESS])) {
        assert((await instance.balanceOf.call(account)).eq(BASE));
      }
    });
  });
});

contract('ImplicitRandomBalanceToken', function (accounts) {
  describe('#balanceOf', function () {
    it('returns pseudorandom value based on address', async function () {
      const MIN = new BN(5);
      const MOD = new BN(17);

      let instance = await IRBT.new(MIN, MOD);

      for (let account of accounts.concat([constants.ZERO_ADDRESS])) {
        let value = new BN(web3.utils.hexToNumberString(account)).mod(MOD).add(MIN);
        assert((await instance.balanceOf.call(account)).eq(value));
      }
    });
  });
});
