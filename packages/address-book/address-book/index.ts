import Chain from '../types/chain';
import { ChainId } from '../types/chainid';
import { ConstRecord } from '../types/const';
import { arbitrum } from './arbitrum';
import { avax } from './avax';
import { bsc } from './bsc';
import { celo } from './celo';
import { fantom } from './fantom';
import { heco } from './heco';
import { one } from './one';
import { polygon } from './polygon';

export * from '../types/chainid';

const _addressBook = {
  polygon,
  bsc,
  avax,
  fantom,
  heco,
  one,
  arbitrum,
  celo,
} as const;

const _addressBookByChainId = {
  [ChainId.polygon]: polygon,
  [ChainId.bsc]: bsc,
  [ChainId.avax]: avax,
  [ChainId.fantom]: fantom,
  [ChainId.heco]: heco,
  [ChainId.one]: one,
  [ChainId.arbitrum]: arbitrum,
  [ChainId.celo]: celo,
} as const;

export const addressBook: ConstRecord<typeof _addressBook, Chain> = _addressBook;

export const addressBookByChainId: ConstRecord<typeof _addressBookByChainId, Chain> =
  _addressBookByChainId;
