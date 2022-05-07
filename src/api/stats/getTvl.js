const getChainTvl = require('./getChainTvl.js');

const {
  CELO_CHAIN_ID,
  CELO_VAULTS_ENDPOINT,

  METIS_CHAIN_ID,
  METIS_VAULTS_ENDPOINT,
  OASIS_CHAIN_ID,
  OASIS_VAULTS_ENDPOINT,
} = require('../../constants');

const INIT_DELAY = 40 * 1000;
const REFRESH_INTERVAL = 15 * 60 * 1000;

let tvl = {};

const chains = [
  // {
  //   chainId: CELO_CHAIN_ID,
  //   vaultsEndpoint: CELO_VAULTS_ENDPOINT,
  //   governancePool: require('../../data/celo/governancePool.json'),
  // },
  {
    chainId: METIS_CHAIN_ID,
    vaultsEndpoint: METIS_VAULTS_ENDPOINT,
    // governancePool: require('../../data/metis/governancePool.json'),
  },
  {
    chainId: OASIS_CHAIN_ID,
    vaultsEndpoint: OASIS_VAULTS_ENDPOINT,
    // governancePool: require('../../data/moonbeam/governancePool.json'),
  },
];

const getTvl = () => {
  return tvl;
};

const updateTvl = async () => {
  console.log('> updating tvl');

  try {
    let promises = [];

    chains.forEach(chain => promises.push(getChainTvl(chain)));

    const results = await Promise.allSettled(promises);

    for (const result of results) {
      if (result.status !== 'fulfilled') {
        console.warn('getChainTvl error', result.reason);
        continue;
      }
      tvl = { ...tvl, ...result.value };
    }

    console.log('> updated tvl');
  } catch (err) {
    console.error('> tvl initialization failed', err);
  }

  setTimeout(updateTvl, REFRESH_INTERVAL);
};

setTimeout(updateTvl, INIT_DELAY);

module.exports = getTvl;
