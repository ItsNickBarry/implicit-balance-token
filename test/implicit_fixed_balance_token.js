const {
  constants,
  BN,
} = require('@openzeppelin/test-helpers');

const IFBT = artifacts.require('IFBT');

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
