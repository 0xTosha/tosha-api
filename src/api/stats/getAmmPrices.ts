`use strict`;

import { fetchAmmPrices } from '../../utils/fetchAmmPrices';
import { fetchCoinGeckoPrices } from '../../utils/fetchCoinGeckoPrices';
import getNonAmmPrices from './getNonAmmPrices';
import yuzuLpPools from '../../data/emerald/yuzuLpPools.json';
import yuzuDualPools from '../../data/emerald/yuzuDualLpPools.json';
const { getKey, setKey } = require('../../utils/redisHelper');

const INIT_DELAY = 2 * 1000;
const REFRESH_INTERVAL = 5 * 60 * 1000;

// FIXME: if this list grows too big we might hit the ratelimit on initialization everytime
// Implement in case of emergency -> https://github.com/beefyfinance/beefy-api/issues/103
const pools = [...yuzuLpPools, ...yuzuDualPools];

const coinGeckoCoins = [];

const knownPrices = {
  BUSD: 1,
  USDT: 1,
  HUSD: 1,
  DAI: 1,
  USDC: 1,
  USDN: 1,
  cUSD: 1,
  asUSDC: 1,
};

let tokenPricesCache: Promise<any>;
let lpPricesCache: Promise<any>;

const updateAmmPrices = async () => {
  console.log('> updating amm prices');
  let start = Date.now();
  try {
    const coinGeckoPrices = fetchCoinGeckoPrices(coinGeckoCoins);
    const ammPrices = fetchAmmPrices(pools, knownPrices);

    const tokenPrices = ammPrices.then(async ({ _, tokenPrices }) => {
      return {
        ...tokenPrices,
        ...(await coinGeckoPrices),
      };
    });

    const lpPrices = ammPrices.then(async ({ poolPrices, _ }) => {
      const nonAmmPrices = await getNonAmmPrices(await tokenPrices);
      return { ...poolPrices, ...nonAmmPrices };
    });

    await tokenPrices;
    await lpPrices;

    tokenPricesCache = tokenPrices;
    lpPricesCache = lpPrices;

    return {
      tokenPrices,
      lpPrices,
    };
  } catch (err) {
    console.error(err);
  } finally {
    setTimeout(updateAmmPrices, REFRESH_INTERVAL);
    console.log(`> updated amm prices (${(Date.now() - start) / 1000}s)`);
    saveToRedis();
  }
};

export const getAmmTokensPrices = async () => {
  return await tokenPricesCache;
};

export const getAmmLpPrices = async () => {
  return await lpPricesCache;
};

export const getAmmTokenPrice = async tokenSymbol => {
  const tokenPrices = await getAmmTokensPrices();
  if (tokenPrices.hasOwnProperty(tokenSymbol)) {
    return tokenPrices[tokenSymbol];
  }
  console.error(`Unknown token '${tokenSymbol}'. Consider adding it to .json file`);
};

export const getAmmLpPrice = async lpName => {
  const lpPrices = await getAmmLpPrices();
  if (lpPrices.hasOwnProperty(lpName)) {
    return lpPrices[lpName];
  }
  console.error(`Unknown liquidity pair '${lpName}'. Consider adding it to .json file`);
};

export const initPriceService = async () => {
  const tokenPrices = await getKey('TOKEN_PRICES');
  const lpPrices = await getKey('LP_PRICES');

  const init =
    // Flexible delayed initialization used to work around ratelimits
    new Promise((resolve, reject) => {
      setTimeout(resolve, INIT_DELAY);
    }).then(updateAmmPrices);

  tokenPricesCache = tokenPrices
    ? Promise.resolve(tokenPrices)
    : init.then(({ tokenPrices, lpPrices }) => tokenPrices);
  lpPricesCache = lpPrices
    ? Promise.resolve(lpPrices)
    : init.then(({ tokenPrices, lpPrices }) => lpPrices);
};

const saveToRedis = async () => {
  await setKey('TOKEN_PRICES', await tokenPricesCache);
  await setKey('LP_PRICES', await lpPricesCache);
  console.log('Prices saved to redis');
};
