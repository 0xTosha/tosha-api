const BigNumber = require('bignumber.js');
const { celoWeb3: web3, web3Factory } = require('../../../utils/web3');

const IRewardPool = require('../../../abis/IRewardPool.json');
const fetchPrice = require('../../../utils/fetchPrice');
const ERC20 = require('../../../abis/ERC20.json');

const ORANGE = '0xd2aC99BaFC5CeB9b0295fB4ff23Ec2592a90113d'; //0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C';
const REWARDS = '0xed5e9bE145Ea11772Fed7F3ef2e8D03Fd62a040a'; // '0x2D250016E3621CfC50A0ff7e5f6E34bbC6bfE50E';
const ORACLE = 'tokens';
const ORACLE_ID = 'ORA';
const DECIMALS = '1e18';
const BLOCKS_PER_DAY = 28800;

const getCeloOrangeGovApy = async () => {
  const [yearlyRewardsInUsd, totalStakedInUsd] = await Promise.all([
    getYearlyRewardsInUsd(),
    getTotalStakedInUsd(),
  ]);

  const apr = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);

  return {
    apys: {
      'celo-orange-gov': apr,
    },
    apyBreakdowns: {
      'celo-orange-gov': {
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

  const tokenContract = new web3.eth.Contract(ERC20, ORANGE);
  const totalStaked = new BigNumber(await tokenContract.methods.balanceOf(REWARDS).call());
  console.log('getTotalStakedInUsd>>>>>>>>>');
  const tokenPrice = await fetchPrice({ oracle: ORACLE, id: ORACLE_ID });

  return totalStaked.times(tokenPrice).dividedBy(DECIMALS);
};

module.exports = { getCeloOrangeGovApy };
