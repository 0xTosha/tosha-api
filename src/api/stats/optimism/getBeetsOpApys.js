import { MultiCall } from 'eth-multicall';
const { optimismWeb3: web3 } = require('../../../utils/web3');
import { getTotalStakedInUsd, getYearlyRewardsInUsd } from '../common/curve/getCurveApyData';
import getApyBreakdown from '../common/getApyBreakdown';
import BigNumber from 'bignumber.js';
import { multicallAddress } from '../../../utils/web3';
import { OPTIMISM_CHAIN_ID } from '../../../constants';
const fetch = require('node-fetch');
import { beetOpClient } from '../../../apollo/client';
const { getTradingFeeAprBalancer } = require('../../../utils/getTradingFeeApr');

const pools = require('../../../data/optimism/beethovenxLpPools.json');

const liquidityProviderFee = 0.0075;

const getBeetsOpApys = async () => {
  const pairAddresses = pools.map(pool => pool.address);
  const tradingAprs = await getTradingFeeAprBalancer(
    beetOpClient,
    pairAddresses,
    liquidityProviderFee,
    10
  );

  // console.log(tradingAprs);

  const farmApys = await getPoolApys(pools);
  const poolsMap = pools.map(p => ({ name: p.name, address: p.address }));
  return getApyBreakdown(poolsMap, tradingAprs, farmApys[0], liquidityProviderFee, farmApys[1]);
};

const getPoolApys = async pools => {
  const apys = [];
  const lsAprs = [];

  let promises = [];
  pools.forEach(pool => promises.push(getPoolApy(pool)));
  const values = await Promise.all(promises);
  values.forEach(item => {
    apys.push(item[0]);
    lsAprs.push(item[1]);
  });

  return [apys, lsAprs];
};

const getPoolApy = async pool => {
  if (pool.status === 'eol') return new BigNumber(0);
  const [yearlyRewardsInUsd, totalStakedInUsd] = await Promise.all([
    getYearlyRewardsInUsd(web3, new MultiCall(web3, multicallAddress(OPTIMISM_CHAIN_ID)), pool),
    getTotalStakedInUsd(web3, pool),
  ]);
  let rewardsApy = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);
  let aprFixed = 0;
  if (pool.lidoUrl) {
    const response = await fetch(pool.lidoUrl).then(res => res.json());
    const apr = response.data.steth;

    pool.balancerChargesFee ? (aprFixed = apr / 100 / 4) : (aprFixed = apr / 100 / 2);
  }

  if (pool.overnight) {
    try {
      const usdPlusResponse = await fetch(
        'https://api.overnight.fi/optimism/usd+/fin-data/avg-apr/week'
      ).then(res => res.json());
      const usdPlusApr = usdPlusResponse.value;

      //  console.log(usdPlusResponse);

      const usdPlusFixed = usdPlusApr / 100 / 4;

      const daiPlusResponse = await fetch(
        'https://api.overnight.fi/optimism/dai+/fin-data/avg-apr/week'
      ).then(res2 => res2.json());
      const daiPlusApr = daiPlusResponse.value;

      //  console.log(daiPlusResponse);

      const daiPlusFixed = daiPlusApr / 100 / 4;

      aprFixed = usdPlusFixed + daiPlusFixed;
    } catch (e) {
      console.error(`Overnight APR error`);
    }
  }
  // console.log(pool.name, rewardsApy.toNumber(), totalStakedInUsd.valueOf(), yearlyRewardsInUsd.valueOf());
  return [rewardsApy, aprFixed];
};

module.exports = getBeetsOpApys;
