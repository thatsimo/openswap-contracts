require("@nomiclabs/hardhat-waffle");
require('hardhat-contract-sizer');

const INFURA_API_KEY = "";
const ACCOUNT_PRIVATE_KEY = "";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.5.16",
  paths : {
    artifacts: '.build',
  },
  networks: {
    ropsten: {
      url: INFURA_API_KEY,
      accounts: [ACCOUNT_PRIVATE_KEY]
    }
  }
};
