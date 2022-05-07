const BigNumber = require('bignumber.js');
const { metisWeb3: web3, web3Factory } = require('../../../utils/web3');

const IRewardPool = require('../../../abis/IRewardPoolORA.json');
const fetchPrice = require('../../../utils/fetchPrice');
const ERC20 = require('../../../abis/ERC20.json');

const TOSHA = '0x79801BFFA6699d2Be730f818e9A0ad49BBc65951'; //';
const REWARDS = '0x7e2381c135B8eBe702bD1555259c4c432b889930'; // ;
const ORACLE = 'tokens';
const ORACLE_ID = 'TOSHA';
const DECIMALS = '1e18';
const BLOCKS_PER_DAY = 28800; // TODO:

const getOasisToshaGovApy = async () => {
  const [yearlyRewardsInUsd, totalStakedInUsd] = await Promise.all([
    getYearlyRewardsInUsd(),
    getTotalStakedInUsd(),
  ]);

  const apr = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);

  return {
    apys: {
      'oasis-tosha-gov': apr,
    },
    apyBreakdowns: {
      'oasis-tosha-gov': {
        vaultApr: apr,
      },
    },
  };
};

const getYearlyRewardsInUsd = async () => {
  const price = await fetchPrice({ oracle: ORACLE, id: 'ROSE' });

  const rewardPool = new web3.eth.Contract(IRewardPool, REWARDS);
  const rewardRate = new BigNumber(await rewardPool.methods.rewardRate().call());
  const yearlyRewards = rewardRate.times(3).times(BLOCKS_PER_DAY).times(365);
  const yearlyRewardsInUsd = yearlyRewards.times(price).dividedBy(DECIMALS);

  return yearlyRewardsInUsd;
};

const getTotalStakedInUsd = async () => {
  const web3 = web3Factory(1088);

  const tokenContract = new web3.eth.Contract(ERC20, TOSHA);
  const totalStaked = new BigNumber(await tokenContract.methods.balanceOf(REWARDS).call());
  console.log('getTotalStakedInUsd>>>>>>>>>');
  const tokenPrice = await fetchPrice({ oracle: ORACLE, id: ORACLE_ID });
  console.log(tokenPrice);

  return totalStaked.times(tokenPrice).dividedBy(DECIMALS);
};

module.exports = { getOasisToshaGovApy, getTotalStakedInUsd, getYearlyRewardsInUsd };
