const {
  constants,
  BN,
} = require('@openzeppelin/test-helpers');

const IVBT = artifacts.require('IVBT');

contract('ImplicitVariableBalanceToken', function (accounts) {
  describe('#balanceOf', function () {
    it('returns current base value by default', async function () {
      let instance = await IVBT.new(new BN(1));

      let addresses = accounts.concat([constants.ZERO_ADDRESS]);

      for (let i = 0; i < addresses.length; i++) {
        let base = new BN(i);
        await instance.setBase(base);

        assert((await instance.balanceOf.call(addresses[i])).eq(base));
      }
    });
  });
});
