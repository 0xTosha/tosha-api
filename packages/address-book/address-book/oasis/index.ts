import Chain from '../../types/chain';
import { ConstInterface } from '../../types/const';
import { beefyfinance } from './platforms/beefyfinance';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';
import { yuzuswap } from './platforms/yuzuswap';
import { tokens } from './tokens/tokens';
import { toshaio } from './platforms/toshaio';

const _oasis = {
  platforms: {
    beefyfinance,
    toshaio,
    yuzuswap,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
} as const;

export const oasis: ConstInterface<typeof _oasis, Chain> = _oasis;
