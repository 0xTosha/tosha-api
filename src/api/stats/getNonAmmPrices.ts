'use strict';

import getAlpacaIbPrices from './bsc/alpaca/getAlpacaIbPrices';
import getBeltPrices from './bsc/belt/getBeltPrices';
import getCurveArbitrumPrices from './arbitrum/getCurvePrices';
import getCurveFantomPrices from './fantom/getCurvePrices';
import getCurvePolygonPrices from './matic/getCurvePrices';
import getDopplePrices from './bsc/dopple/getDopplePrices';
import getEllipsisPrices from './bsc/ellipsis/getEllipsisPrices';
import getFroyoPrices from './fantom/getFroyoPrices';
import getGondolaPrices from './avax/getGondolaPrices';
import getIronSwapPrices from './matic/getIronSwapPrices';
import getSnob3PoolPrice from './avax/getSnob3PoolPrice';
import getToshaPrices from './celo/getToshaPrices';

const getNonAmmPrices = async tokenPrices => {
  let prices = {};

  const promises = [
    // getBeltPrices(tokenPrices),
    // getEllipsisPrices(),
    // getSnob3PoolPrice(),
    // getFroyoPrices(),
    // getGondolaPrices(tokenPrices),
    getToshaPrices(tokenPrices),
    // getCurvePolygonPrices(tokenPrices),
    // getCurveFantomPrices(tokenPrices),
    // getCurveArbitrumPrices(tokenPrices),
    // getDopplePrices(),
    // getIronSwapPrices(),
    // getAlpacaIbPrices(tokenPrices),
  ];

  // Setup error logs
  promises.forEach(p => p.catch(e => console.warn('getNonAmmPrices error', e)));

  const results = await Promise.allSettled(promises);

  results
    .filter((r): r is PromiseFulfilledResult<any> => r.status === 'fulfilled')
    .forEach(r => {
      console.log('NON AMM PRICES');
      console.log(r);
      Object.assign(prices, r.value);
    });

  return prices;
};

export default getNonAmmPrices;
