const {
  constants,
  BN,
  expectRevert,
} = require('@openzeppelin/test-helpers');

const IRBT = artifacts.require('IRBT');

contract('ImplicitRandomBalanceToken', function (accounts) {
  describe('constructor', function () {
    describe('reverts if', function () {
      it('mod is equal to zero', async function () {
        await expectRevert(
          IRBT.new(0, 0, 0),
          'ImplicitRandomBalanceToken: mod must be greater than zero'
        );
      });
    });
  });

  describe('#balanceOf', function () {
    it('returns pseudorandom value based on address', async function () {
      const MIN = new BN(5);
      const MOD = new BN(17);
      const MUL = new BN(web3.utils.toWei('1'));

      let instance = await IRBT.new(MIN, MOD, MUL);

      for (let account of accounts.concat([constants.ZERO_ADDRESS])) {
        let value = new BN(web3.utils.hexToNumberString(account)).mod(MOD).add(MIN).mul(MUL);
        assert((await instance.balanceOf.call(account)).eq(value));
      }
    });
  });
});
