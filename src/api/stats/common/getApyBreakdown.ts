import BigNumber from 'bignumber.js';

import { getFarmWithTradingFeesApy } from '../../../utils/getFarmWithTradingFeesApy';
import { getTotalStakedInUsd, getYearlyRewardsInUsd } from '../celo/getCeloOrangeGovApy';

import { compound } from '../../../utils/compound';
const { DAILY_HPY } = require('../../../constants');

import { BASE_HPY, BEEFY_PERFORMANCE_FEE, SHARE_AFTER_PERFORMANCE_FEE } from '../../../constants';

export interface ApyBreakdown {
  vaultApr?: number;
  compoundingsPerYear?: number;
  beefyPerformanceFee?: number;
  vaultApy?: number;
  lpFee?: number;
  tradingApr?: number;
  totalApy?: number;
  toshaApr?: number;
  toshaApy?: number;
}

export interface ApyBreakdownResult {
  apys: Record<string, number>;
  apyBreakdowns: Record<string, ApyBreakdown>;
}

export const getApyBreakdown = (
  pools: { name: string; address: string }[],
  tradingAprs: Record<string, BigNumber>,
  farmAprs: BigNumber[],
  providerFee: number,
  performanceFee: number = BEEFY_PERFORMANCE_FEE
): ApyBreakdownResult => {
  const result: ApyBreakdownResult = {
    apys: {},
    apyBreakdowns: {},
  };

  pools.forEach(async (pool, i) => {
    const simpleApr = farmAprs[i]?.toNumber();
    const vaultApr = simpleApr * SHARE_AFTER_PERFORMANCE_FEE;
    const vaultApy = compound(simpleApr, BASE_HPY, 1, SHARE_AFTER_PERFORMANCE_FEE);
    const tradingApr: number | undefined = tradingAprs[pool.address.toLowerCase()]?.toNumber();
    const yearlyRewardsInUsd = await getYearlyRewardsInUsd();
    const totalStakedInUsd = await getTotalStakedInUsd();
    const toshaApr = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);
    const toshaApy = compound(toshaApr, DAILY_HPY, 1, 0.9995);

    const totalApy = getFarmWithTradingFeesApy(
      simpleApr,
      tradingApr,
      BASE_HPY,
      1,
      SHARE_AFTER_PERFORMANCE_FEE
    );

    // Add token to APYs object
    result.apys[pool.name] = totalApy;
    result.apyBreakdowns[pool.name] = {
      vaultApr: vaultApr,
      compoundingsPerYear: BASE_HPY,
      beefyPerformanceFee: performanceFee,
      vaultApy: vaultApy,
      lpFee: providerFee,
      tradingApr: tradingApr,
      totalApy: totalApy,
      toshaApr: toshaApr,
      toshaApy: toshaApy,
    };
  });

  return result;
};

export default getApyBreakdown;
