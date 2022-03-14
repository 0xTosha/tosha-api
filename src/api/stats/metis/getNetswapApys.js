const BigNumber = require('bignumber.js');
const { MultiCall } = require('eth-multicall');
const { metisWeb3: web3, multicallAddress } = require('../../../utils/web3');

const MasterChef = require('../../../abis/metis/NettChef.json');
const SimpleRewarder = require('../../../abis/avax/SimpleRewarderPerSec.json');
const ERC20 = require('../../../abis/ERC20.json');
const fetchPrice = require('../../../utils/fetchPrice');
const pools = require('../../../data/metis/netswapLpPools.json');
const { BASE_HPY, METIS_CHAIN_ID, DAILY_HPY } = require('../../../constants');
const { getTradingFeeApr } = require('../../../utils/getTradingFeeApr');

import { NET_LPF } from '../../../constants';
import { getFarmWithTradingFeesApy } from '../../../utils/getFarmWithTradingFeesApy';
import { getMetisToshaApy } from '../metis/getMetisToshaApy';
import { getTotalApy } from '../../../utils/getTotalApy';

const { netswapClient } = require('../../../apollo/client');
const { compound } = require('../../../utils/compound');

const masterchef = '0x9d1dbB49b2744A1555EDbF1708D64dC71B0CB052';
const oracleIdA = 'NETT';
const oracleA = 'tokens';
const DECIMALSA = '1e18';

const secondsPerBlock = 1;
const secondsPerYear = 31536000;

const liquidityProviderFee = NET_LPF;
const beefyPerformanceFee = 0.045;
const shareAfterBeefyPerformanceFee = 1 - beefyPerformanceFee;

const getNetswapApys = async () => {
  let apys = {};
  let apyBreakdowns = {};

  const tokenPriceA = await fetchPrice({ oracle: oracleA, id: oracleIdA });
  const { rewardPerSecond, totalAllocPoint } = await getMasterChefData();
  const { balances, allocPoints, tokenPerSecData } = await getPoolsData(pools);

  const pairAddresses = pools.map(pool => pool.address);
  const tradingAprs = await getTradingFeeApr(netswapClient, pairAddresses, liquidityProviderFee);

  //Fetching TOSHA Apr
  const toshaApyObj = await getMetisToshaApy();
  const toshaApr = new BigNumber(toshaApyObj['simpleApr']);
  const toshaApy = compound(toshaApr, DAILY_HPY, 1, 0.9995);

  for (let i = 0; i < pools.length; i++) {
    const pool = pools[i];

    const lpPrice = await fetchPrice({ oracle: 'lps', id: pool.name });
    const totalStakedInUsd = balances[i].times(lpPrice).dividedBy('1e18');

    const poolBlockRewards = rewardPerSecond.times(allocPoints[i]).dividedBy(totalAllocPoint);
    const yearlyRewards = poolBlockRewards.dividedBy(secondsPerBlock).times(secondsPerYear);
    const yearlyRewardsAInUsd = yearlyRewards.times(tokenPriceA).dividedBy(DECIMALSA);
    let yearlyRewardsBInUsd = new BigNumber(0);

    if (!tokenPerSecData[i].isNaN()) {
      let tokenBPerSec = tokenPerSecData[i];
      const tokenPriceB = await fetchPrice({ oracle: pool.oracleB, id: pool.oracleIdB });
      const yearlyRewardsB = tokenBPerSec.dividedBy(secondsPerBlock).times(secondsPerYear);
      yearlyRewardsBInUsd = yearlyRewardsB.times(tokenPriceB).dividedBy(pool.decimalsB);
    }

    const yearlyRewardsInUsd = yearlyRewardsAInUsd.plus(yearlyRewardsBInUsd);

    const simpleApr = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);
    // console.log('##############');
    // console.log(pool.name);
    // console.log(simpleApr);
    const vaultApr = simpleApr.times(shareAfterBeefyPerformanceFee);
    const vaultApy = compound(simpleApr, BASE_HPY, 1, shareAfterBeefyPerformanceFee);

    const tradingApr = tradingAprs[pool.address.toLowerCase()] ?? new BigNumber(0);
    // const totalApy = getFarmWithTradingFeesApy(
    //   simpleApr,
    //   tradingApr,
    //   BASE_HPY,
    //   1,
    //   shareAfterBeefyPerformanceFee
    // );
    const totalApy = getTotalApy(
      simpleApr,
      toshaApr,
      tradingApr,
      DAILY_HPY,
      shareAfterBeefyPerformanceFee
    );
    // Create reference for legacy /apy
    const legacyApyValue = { [pool.name]: totalApy };

    apys = { ...apys, ...legacyApyValue };

    // Create reference for breakdown /apy
    const componentValues = {
      [pool.name]: {
        vaultApr: vaultApr.toNumber(),
        compoundingsPerYear: BASE_HPY,
        beefyPerformanceFee: beefyPerformanceFee,
        vaultApy: vaultApy,
        lpFee: liquidityProviderFee,
        tradingApr: tradingApr.toNumber(),
        totalApy: totalApy,
      },
    };

    apyBreakdowns = { ...apyBreakdowns, ...componentValues };
  }

  // Return both objects for later parsing
  return {
    apys,
    apyBreakdowns,
  };
};

const getMasterChefData = async () => {
  const masterchefContract = new web3.eth.Contract(MasterChef, masterchef);
  const rewardPerSecond = new BigNumber(await masterchefContract.methods.nettPerSec().call());
  const totalAllocPoint = new BigNumber(await masterchefContract.methods.totalAllocPoint().call());
  return { rewardPerSecond, totalAllocPoint };
};

const getPoolsData = async pools => {
  const masterchefContract = new web3.eth.Contract(MasterChef, masterchef);
  const multicall = new MultiCall(web3, multicallAddress(METIS_CHAIN_ID));
  const balanceCalls = [];
  const poolInfoCalls = [];
  const tokenPerSecCalls = [];
  pools.forEach(pool => {
    const tokenContract = new web3.eth.Contract(ERC20, pool.address);
    balanceCalls.push({
      balance: tokenContract.methods.balanceOf(masterchef),
    });
    let poolInfo = masterchefContract.methods.poolInfo(pool.poolId);
    poolInfoCalls.push({
      poolInfo: poolInfo,
    });
  });

  const res = await multicall.all([balanceCalls, poolInfoCalls]);

  const balances = res[0].map(v => new BigNumber(v.balance));
  const allocPoints = res[1].map(v => v.poolInfo['1']);
  const rewarders = res[1].map(v => v.poolInfo[5]);

  rewarders.forEach(rewarder => {
    let rewarderContract = new web3.eth.Contract(SimpleRewarder, rewarder);
    let tokenPerSec = rewarderContract.methods.tokenPerSec();
    tokenPerSecCalls.push({
      tokenPerSec: tokenPerSec,
    });
  });

  const tokenPerSecData = (await multicall.all([tokenPerSecCalls]))[0].map(
    t => new BigNumber(t.tokenPerSec)
  );

  return { balances, allocPoints, tokenPerSecData };
};

module.exports = getNetswapApys;
