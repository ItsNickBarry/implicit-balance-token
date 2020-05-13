usePlugin('@nomiclabs/buidler-truffle5');
usePlugin('buidler-gas-reporter');
usePlugin('solidity-coverage');

module.exports = {
  solc: {
    version: '0.6.7',
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },

  networks: {
    generic: {
      // set URL for external network, such as Infura
      url: `${ process.env.URL }`,
      accounts: {
        mnemonic: `${ process.env.MNEMONIC }`,
      },
    },
  },

  gasReporter: {
    enabled: !!process.env.REPORT_GAS,
    gasPrice: 1,
  },
};
