require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ACCOUNTS_FROM_ENV_MNEMONIC = {
  mnemonic: process.env.MNEMONIC ?? "",
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    besuPrivate: {
      url: process.env.BESU_PRIVATE_URL
    },
  },
};
