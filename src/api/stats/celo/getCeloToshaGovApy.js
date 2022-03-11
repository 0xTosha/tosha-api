const BigNumber = require('bignumber.js');
const { celoWeb3: web3, web3Factory } = require('../../../utils/web3');

const IRewardPool = require('../../../abis/IRewardPoolORA.json');
const fetchPrice = require('../../../utils/fetchPrice');
const ERC20 = require('../../../abis/ERC20.json');

const TOSHA = '0x50359e800aCde1D93BB673E235Bafb86D0846c14'; //0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C';
const REWARDS = '0x45851e9fE54F052a375865b3A8920a56FFb0C00E'; // '0x2D250016E3621CfC50A0ff7e5f6E34bbC6bfE50E';
const ORACLE = 'tokens';
const ORACLE_ID = 'ORANGE';
const DECIMALS = '1e18';
const BLOCKS_PER_DAY = 28800;

const getCeloToshaGovApy = async () => {
  const [yearlyRewardsInUsd, totalStakedInUsd] = await Promise.all([
    getYearlyRewardsInUsd(),
    getTotalStakedInUsd(),
  ]);

  const apr = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);

  return {
    apys: {
      'celo-tosha-gov': apr,
    },
    apyBreakdowns: {
      'celo-tosha-gov': {
        vaultApr: apr,
      },
    },
  };
};

const getYearlyRewardsInUsd = async () => {
  const celoPrice = await fetchPrice({ oracle: ORACLE, id: 'CELO' });

  const rewardPool = new web3.eth.Contract(IRewardPool, REWARDS);
  const rewardRate = new BigNumber(await rewardPool.methods.rewardRate().call());
  const yearlyRewards = rewardRate.times(3).times(BLOCKS_PER_DAY).times(365);
  const yearlyRewardsInUsd = yearlyRewards.times(celoPrice).dividedBy(DECIMALS);

  return yearlyRewardsInUsd;
};

const getTotalStakedInUsd = async () => {
  const web3 = web3Factory(42220);

  const tokenContract = new web3.eth.Contract(ERC20, TOSHA);
  const totalStaked = new BigNumber(await tokenContract.methods.balanceOf(REWARDS).call());
  const tokenPrice = await fetchPrice({ oracle: ORACLE, id: ORACLE_ID });
  return totalStaked.times(tokenPrice).dividedBy(DECIMALS);
};

module.exports = { getCeloToshaGovApy, getTotalStakedInUsd, getYearlyRewardsInUsd };
