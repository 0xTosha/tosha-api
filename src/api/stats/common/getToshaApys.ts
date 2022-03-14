const BigNumber = require('bignumber.js');

import Web3 from 'web3';
import { convertTypeAcquisitionFromJson } from 'typescript';

const IRewardPool = require('../../../abis/IRewardPool.json');
const fetchPrice = require('../../../utils/fetchPrice');
const { compound } = require('../../../utils/compound');
const { DAILY_HPY } = require('../../../constants');
const ERC20 = require('../../../abis/ERC20.json');
const secondsPerYear = 31536000;

interface ToshaApyParams {
  tosha: string; // address
  rewardPool: string; // address
  rewardId: string; // address
  rewardDecimals: string; // 1e18
  chain: string; // i.e. celo
  web3: Web3;
}

export const getToshaApys = async (params: ToshaApyParams) => {
  const [yearlyRewardsInUsd, totalStakedInUsd] = await Promise.all([
    getYearlyRewardsInUsd(params),
    getTotalStakedInUsd(params),
  ]);
  const simpleApy = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);
  const apy = compound(simpleApy, DAILY_HPY, 1, 0.9995); // TODO:

  return { [params.chain + '-tosha']: apy, simpleApr: simpleApy };
};

const getYearlyRewardsInUsd = async (params: ToshaApyParams) => {
  const rewardPrice = await fetchPrice({ oracle: 'tokens', id: params.rewardId });

  const rewardPool = new params.web3.eth.Contract(IRewardPool, params.rewardPool);
  const rewardRate = new BigNumber(await rewardPool.methods.rewardRate().call());
  const yearlyRewards = rewardRate.times(secondsPerYear);
  const yearlyRewardsInUsd = yearlyRewards.times(rewardPrice).dividedBy(params.rewardDecimals);

  return yearlyRewardsInUsd;
};

const getTotalStakedInUsd = async (params: ToshaApyParams) => {
  const tokenContract = new params.web3.eth.Contract(ERC20, params.tosha);

  const totalStaked = new BigNumber(
    await tokenContract.methods.balanceOf(params.rewardPool).call()
  );

  const tokenPrice = await fetchPrice({ oracle: 'tokens', id: 'TOSHA' });

  return totalStaked.times(tokenPrice).dividedBy('1e18');
};
