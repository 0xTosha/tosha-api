import {
  BASE_HPY,
  BEEFY_PERFORMANCE_FEE,
  DAILY_HPY,
  SHARE_AFTER_PERFORMANCE_FEE,
} from '../../../constants';

import BigNumber from 'bignumber.js';
import { compound } from '../../../utils/compound';
import { getTotalApy } from '../../../utils/getTotalApy';

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
  toshaApr?: number,
  toshaApy?: number,
  performanceFee: number = BEEFY_PERFORMANCE_FEE
): ApyBreakdownResult => {
  const result: ApyBreakdownResult = {
    apys: {},
    apyBreakdowns: {},
  };

  pools.forEach((pool, i) => {
    const simpleApr = farmAprs[i]?.toNumber();
    const vaultApr = simpleApr * SHARE_AFTER_PERFORMANCE_FEE;
    const vaultApy = compound(simpleApr, BASE_HPY, 1, SHARE_AFTER_PERFORMANCE_FEE);
    const tradingApr: number | undefined = tradingAprs[pool.address.toLowerCase()]?.toNumber();

    const totalApy = getTotalApy(
      simpleApr,
      toshaApr,
      tradingApr,
      DAILY_HPY,
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
