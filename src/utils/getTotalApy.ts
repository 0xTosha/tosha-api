import { compound } from './compound';

export const getTotalApy = (
  farmApr,
  toshaApr,
  tradingApr: number | undefined,
  compoundingsPerYear,
  shareAfterBeefyPerformanceFee
) => {
  const dailyStakingReward = farmApr / compoundingsPerYear;
  const dailyToshaReward = toshaApr / compoundingsPerYear;
  let totalAPY = dailyStakingReward * shareAfterBeefyPerformanceFee;

  for (const i of Array(compoundingsPerYear - 1))
    totalAPY =
      totalAPY + totalAPY * dailyToshaReward + dailyStakingReward * shareAfterBeefyPerformanceFee;

  const finalAPY = (1 + totalAPY) * (1 + Number(tradingApr || 0)) - 1;
  return finalAPY;
};
