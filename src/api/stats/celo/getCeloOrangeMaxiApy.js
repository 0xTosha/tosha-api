const { celoWeb3: web3 } = require('../../../utils/web3');

import { addressBook } from '../../../../packages/address-book/address-book';
import { getBifiMaxiApys } from '../common/getBifiMaxiApys';
import { getEDecimals } from '../../../utils/getEDecimals';
import { getORAMaxiApys } from '../common/getORAMaxiApys';

const {
  celo: {
    platforms: {
      toshafinance: { rewardPool },
    },
    tokens: { ORANGE, CELO },
  },
} = addressBook;

export const getCeloOrangeMaxiApy = () => {
  return getORAMaxiApys({
    orange: ORANGE.address,
    rewardPool: rewardPool,
    rewardId: ORANGE.symbol, // TBC
    rewardDecimals: getEDecimals(ORANGE.decimals),
    chain: 'celo',
    web3: web3,
  });
};
