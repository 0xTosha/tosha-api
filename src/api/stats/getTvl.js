const getChainTvl = require('./getChainTvl.js');

const {
  CELO_CHAIN_ID,
  CELO_VAULTS_ENDPOINT,

  METIS_CHAIN_ID,
  METIS_VAULTS_ENDPOINT,
  OASIS_CHAIN_ID,
  OASIS_VAULTS_ENDPOINT,

  EMERALD_CHAIN_ID,
  EMERALD_VAULTS_ENDPOINT,

  MOONBEAM_CHAIN_ID,
  MOONBEAM_VAULTS_ENDPOINT,

  SYS_CHAIN_ID,
  //SYS_VAULTS_ENDPOINT,
} = require('../../constants');
const { getKey, setKey } = require('../../utils/redisHelper.js');

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
  {
    chainId: EMERALD_CHAIN_ID,
    vaultsEndpoint: EMERALD_VAULTS_ENDPOINT,
    // governancePool: require('../../data/moonbeam/governancePool.json'),
  },
  // {
  // chainId: SYS_CHAIN_ID,
  // vaultsEndpoint: SYS_VAULTS_ENDPOINT,
  // governancePool: require('../../data/sys/governancePool.json'),
  // },
];

const getTvl = () => {
  return tvl;
};

const updateTvl = async () => {
  console.log('> updating tvl');
  const start = Date.now();

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

    console.log(`> updated tvl (${(Date.now() - start) / 1000}s)`);
    saveToRedis();
  } catch (err) {
    console.error('> tvl initialization failed', err);
  }

  setTimeout(updateTvl, REFRESH_INTERVAL);
};

const initTvlService = async () => {
  const cachedTvl = await getKey('TVL');
  tvl = cachedTvl ?? {};

  setTimeout(updateTvl, INIT_DELAY);
};

const saveToRedis = async () => {
  await setKey('TVL', tvl);
  console.log('TVL saved to redis');
};

module.exports = { getTvl, initTvlService };
