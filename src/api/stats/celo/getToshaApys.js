import BigNumber from 'bignumber.js';
import Web3 from 'web3';

// const { bscWeb3: web3 } = require('../../../../utils/web3');

const f1 = new Web3.providers.HttpProvider('https://forno.celo.org', {
  keepAlive: true,
  timeout: 10000,
});
const web3 = new Web3(f1);

// const PacocaFarm = require('../../../../abis/PacocaFarm.json');
// const AutoStrat = require('../../../../abis/AutoStratX.json');
const farmABI = [
  {
    type: 'constructor',
    stateMutability: 'nonpayable',
    inputs: [
      { type: 'address', name: '_ToshaToken', internalType: 'address' },
      { type: 'uint256', name: '_startBlock', internalType: 'uint256' },
    ],
  },
  {
    type: 'event',
    name: 'Deposit',
    inputs: [
      { type: 'address', name: 'user', internalType: 'address', indexed: true },
      { type: 'uint256', name: 'pid', internalType: 'uint256', indexed: true },
      { type: 'uint256', name: 'amount', internalType: 'uint256', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'EmergencyWithdraw',
    inputs: [
      { type: 'address', name: 'user', internalType: 'address', indexed: true },
      { type: 'uint256', name: 'pid', internalType: 'uint256', indexed: true },
      { type: 'uint256', name: 'amount', internalType: 'uint256', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      { type: 'address', name: 'previousOwner', internalType: 'address', indexed: true },
      { type: 'address', name: 'newOwner', internalType: 'address', indexed: true },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'SetAllocPoint',
    inputs: [
      { type: 'uint256', name: '_pid', internalType: 'uint256', indexed: true },
      { type: 'uint256', name: '_oldAllocPoint', internalType: 'uint256', indexed: false },
      { type: 'uint256', name: '_allocPoint', internalType: 'uint256', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'SetMaxSupply',
    inputs: [
      { type: 'uint256', name: 'oldSupply', internalType: 'uint256', indexed: false },
      { type: 'uint256', name: 'newSupply', internalType: 'uint256', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'SetTokenPerBlock',
    inputs: [
      { type: 'uint256', name: 'oldTokenPerBlock', internalType: 'uint256', indexed: false },
      { type: 'uint256', name: 'pacocaPerBlock', internalType: 'uint256', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Withdraw',
    inputs: [
      { type: 'address', name: 'user', internalType: 'address', indexed: true },
      { type: 'uint256', name: 'pid', internalType: 'uint256', indexed: true },
      { type: 'uint256', name: 'amount', internalType: 'uint256', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'TOSHA',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'addPool',
    inputs: [
      { type: 'uint256', name: '_allocPoint', internalType: 'uint256' },
      { type: 'address', name: '_tosha', internalType: 'contract IERC20' },
      { type: 'bool', name: '_withUpdate', internalType: 'bool' },
      { type: 'address', name: '_strat', internalType: 'address' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'availableAssets',
    inputs: [{ type: 'address', name: '', internalType: 'contract IERC20' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'burnAddress',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'deposit',
    inputs: [
      { type: 'uint256', name: '_pid', internalType: 'uint256' },
      { type: 'uint256', name: '_toshaAmt', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'emergencyWithdraw',
    inputs: [{ type: 'uint256', name: '_pid', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'getMultiplier',
    inputs: [
      { type: 'uint256', name: '_from', internalType: 'uint256' },
      { type: 'uint256', name: '_to', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'inCaseTokensGetStuck',
    inputs: [
      { type: 'address', name: '_token', internalType: 'address' },
      { type: 'uint256', name: '_amount', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'massUpdatePools',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'maxSupply',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'owner',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'ownerTokenReward',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'pendingToken',
    inputs: [
      { type: 'uint256', name: '_pid', internalType: 'uint256' },
      { type: 'address', name: '_user', internalType: 'address' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      { type: 'address', name: 'tosha', internalType: 'contract IERC20' },
      { type: 'uint256', name: 'allocPoint', internalType: 'uint256' },
      { type: 'uint256', name: 'lastRewardBlock', internalType: 'uint256' },
      { type: 'uint256', name: 'accTokenPerShare', internalType: 'uint256' },
      { type: 'address', name: 'strat', internalType: 'address' },
    ],
    name: 'poolInfo',
    inputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'poolLength',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'renounceOwnership',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'set',
    inputs: [
      { type: 'uint256', name: '_pid', internalType: 'uint256' },
      { type: 'uint256', name: '_allocPoint', internalType: 'uint256' },
      { type: 'bool', name: '_withUpdate', internalType: 'bool' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'setMaxSupply',
    inputs: [{ type: 'uint256', name: '_maxSupply', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'setTokenPerBlock',
    inputs: [{ type: 'uint256', name: '_tokenPerBlock', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'stakedTokens',
    inputs: [
      { type: 'uint256', name: '_pid', internalType: 'uint256' },
      { type: 'address', name: '_user', internalType: 'address' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'startBlock',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'tokenPerBlock',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'totalAllocPoint',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'transferOwnership',
    inputs: [{ type: 'address', name: 'newOwner', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'updatePool',
    inputs: [{ type: 'uint256', name: '_pid', internalType: 'uint256' }],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      { type: 'uint256', name: 'shares', internalType: 'uint256' },
      { type: 'uint256', name: 'rewardDebt', internalType: 'uint256' },
    ],
    name: 'userInfo',
    inputs: [
      { type: 'uint256', name: '', internalType: 'uint256' },
      { type: 'address', name: '', internalType: 'address' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'withdraw',
    inputs: [
      { type: 'uint256', name: '_pid', internalType: 'uint256' },
      { type: 'uint256', name: '_toshaAmt', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'withdrawAll',
    inputs: [{ type: 'uint256', name: '_pid', internalType: 'uint256' }],
  },
];
const stratABI = [
  {
    type: 'constructor',
    stateMutability: 'nonpayable',
    inputs: [
      { type: 'address', name: '_toshaToken', internalType: 'address' },
      { type: 'address', name: '_toshaFarmAddress', internalType: 'address' },
      { type: 'address', name: '_govAddress', internalType: 'address' },
    ],
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      { type: 'address', name: 'previousOwner', internalType: 'address', indexed: true },
      { type: 'address', name: 'newOwner', internalType: 'address', indexed: true },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Paused',
    inputs: [{ type: 'address', name: 'account', internalType: 'address', indexed: false }],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'SetGov',
    inputs: [{ type: 'address', name: '_govAddress', internalType: 'address', indexed: false }],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'SetSettings',
    inputs: [
      { type: 'uint256', name: '_entranceFeeFactor', internalType: 'uint256', indexed: false },
      { type: 'uint256', name: '_withdrawFeeFactor', internalType: 'uint256', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Unpaused',
    inputs: [{ type: 'address', name: 'account', internalType: 'address', indexed: false }],
    anonymous: false,
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'deposit',
    inputs: [
      { type: 'address', name: '_userAddress', internalType: 'address' },
      { type: 'uint256', name: '_toshaAmt', internalType: 'uint256' },
    ],
  },
  { type: 'function', stateMutability: 'nonpayable', outputs: [], name: 'earn', inputs: [] },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'entranceFeeFactor',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'entranceFeeFactorLL',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'entranceFeeFactorMax',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'govAddress',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'inCaseTokensGetStuck',
    inputs: [
      { type: 'address', name: '_token', internalType: 'address' },
      { type: 'uint256', name: '_amount', internalType: 'uint256' },
      { type: 'address', name: '_to', internalType: 'address' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'owner',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
    name: 'paused',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'renounceOwnership',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'setGov',
    inputs: [{ type: 'address', name: '_govAddress', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'setSettings',
    inputs: [
      { type: 'uint256', name: '_entranceFeeFactor', internalType: 'uint256' },
      { type: 'uint256', name: '_withdrawFeeFactor', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'sharesTotal',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'tokenAddress',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'tokenLockedTotal',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'address', name: '', internalType: 'address' }],
    name: 'toshaFarmAddress',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'transferOwnership',
    inputs: [{ type: 'address', name: 'newOwner', internalType: 'address' }],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'withdraw',
    inputs: [
      { type: 'address', name: '_userAddress', internalType: 'address' },
      { type: 'uint256', name: '_toshaAmt', internalType: 'uint256' },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'withdrawFeeFactor',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'withdrawFeeFactorLL',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'withdrawFeeFactorMax',
    inputs: [],
  },
];

// const { CELO_CHAIN_ID, APE_LPF } = require('../../../../constants');
// const getBlockNumber = require('../../../../utils/getBlockNumber');
// const { DAILY_HPY } = require('../../../constants');
const DAILY_HPY = 365;

// const { compound } = require('../../../utils/compound');

const farm = '0xA44055d76Aa4432479fB12505d599b3176431C2b';
const strat = '0x79a90A352F53ADd92063Cbf1db04B4ab6314FfF5';
const DECIMALS = '1e18';
const POOL_NAME = 'ALPHABETA';
const toshaPerformanceFee = 0.03;
const shareAfterToshaPerformanceFee = 1 - toshaPerformanceFee;

const getToshaApys = async () => {
  const yearlyRewardsInUsd = await getYearlyRewardsInUsd(farm, 0);
  const totalStakedInUsd = await getTotalLpStakedInUsd(strat);
  const simpleApr = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);
  const vaultApr = simpleApr.times(shareAfterToshaPerformanceFee);
  const vaultApy = compound(vaultApr, DAILY_HPY, 1, 1);

   console.log(vaultApr.toString());
   console.log(vaultApy.toString());

  const apys = { [POOL_NAME]: vaultApy };

  const apyBreakdowns = {
    [POOL_NAME]: {
      vaultApr: vaultApr.toNumber(),
      compoundingsPerYear: DAILY_HPY,
      toshaPerformanceFee: toshaPerformanceFee,
      vaultApy: vaultApy,
      lpFee: 0,
      tradingApr: 0,
      totalApy: vaultApy,
    },
  };

  return {
    apys,
    apyBreakdowns,
  };

  // return { POOL_NAME : vaultApy };
};

const getYearlyRewardsInUsd = async (farm, poolId) => {
  //TODO: fetch block number for celo chain and replace the hard coded 1 below
  const blockNum = 1; //await getBlockNumber(CELO_CHAIN_ID);
  const farmContract = new web3.eth.Contract(farmABI, farm);

  const multiplier = new BigNumber(
    await farmContract.methods.getMultiplier(blockNum - 1, blockNum).call()
  );

  let x = await farmContract.methods.tokenPerBlock().call();
  const blockRewards = new BigNumber(x);

  let { allocPoint } = await farmContract.methods.poolInfo(poolId).call();
  allocPoint = new BigNumber(allocPoint);

  const totalAllocPoint = new BigNumber(await farmContract.methods.totalAllocPoint().call());
  const poolBlockRewards = blockRewards
    .times(multiplier)
    .times(allocPoint)
    .dividedBy(totalAllocPoint);

  const secondsPerBlock = 5;
  const secondsPerYear = 31536000;
  const yearlyRewards = poolBlockRewards.dividedBy(secondsPerBlock).times(secondsPerYear);
  return yearlyRewards.dividedBy(DECIMALS);
};

const getTotalLpStakedInUsd = async strat => {
  const strategyContract = new web3.eth.Contract(stratABI, strat);
  const totalStaked = new BigNumber(await strategyContract.methods.tokenLockedTotal().call());
  return totalStaked.dividedBy('1e18');
};

function compound(r, n = 365, t = 1, c = 1) {
  return (1 + (r * c) / n) ** (n * t) - 1;
}

// console.log(getToshaApy())

module.exports = getToshaApys;
