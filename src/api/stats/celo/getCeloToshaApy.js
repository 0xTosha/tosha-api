const { celoWeb3: web3 } = require('../../../utils/web3');

import { addressBook } from '../../../../packages/address-book/address-book';
import { getBifiMaxiApys } from '../common/getBifiMaxiApys';
import { getEDecimals } from '../../../utils/getEDecimals';
import { getToshaApys } from '../common/getToshaApys';

const {
  celo: {
    platforms: {
      toshafinance: { rewardPool },
    },
    tokens: { TOSHA, CELO },
  },
} = addressBook;

export const getCeloToshaApy = () => {
  return getToshaApys({
    tosha: TOSHA.address,
    rewardPool: rewardPool,
    rewardId: TOSHA.symbol, // TBC
    rewardDecimals: getEDecimals(TOSHA.decimals),
    chain: 'celo',
    web3: web3,
  });
};
