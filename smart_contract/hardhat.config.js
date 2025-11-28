require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.METAMASK_PRIVATE_KEY],
      // url: 'https://eth-sepolia.g.alchemy.com/v2/zJV4Qa1l4Ya8FI-Bkej2v',
      // account: ['ad9ed7c86ce543cbef80b5a0b4c8777d4a1647d3712d6f867bcc43eac62b6229']
    },
  },
};
