const { metisWeb3: web3 } = require('../../../utils/web3');

import { addressBook } from '../../../../packages/address-book/address-book';
import { getEDecimals } from '../../../utils/getEDecimals';
import { getToshaApys } from '../common/getToshaApys';

const {
  metis: {
    platforms: {
      toshaio: { rewardPool },
    },
    tokens: { ORANGE },
  },
} = addressBook;

export const getMetisToshaApy = () => {
  return getToshaApys({
    tosha: ORANGE.address,
    rewardPool: rewardPool,
    rewardId: ORANGE.symbol, // TBC
    rewardDecimals: getEDecimals(ORANGE.decimals),
    chain: 'metis',
    web3: web3,
  });
};
