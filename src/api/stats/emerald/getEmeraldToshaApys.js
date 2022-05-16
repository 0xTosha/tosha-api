const { emeraldWeb3: web3 } = require('../../../utils/web3');

import { addressBook } from '../../../../packages/address-book/address-book';
import { getEDecimals } from '../../../utils/getEDecimals';
import { getToshaApys } from '../common/getToshaApys';

const {
  emerald: {
    platforms: {
      toshaio: { rewardPool },
    },
    tokens: { ORANGE },
  },
} = addressBook;

const getEmeraldToshaApys = async () => {
  return getToshaApys({
    tosha: ORANGE.address,
    rewardPool: rewardPool,
    rewardId: ORANGE.symbol, // TBC
    rewardDecimals: getEDecimals(ORANGE.decimals),
    chain: 'emerald',
    web3: web3,
  });
};

module.exports = getEmeraldToshaApys;
