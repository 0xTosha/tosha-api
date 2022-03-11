import Chain from '../../types/chain';
import { ConstInterface } from '../../types/const';
import { beefyfinance } from './platforms/beefyfinance';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';
import { netswap } from './platforms/netswap';
import { tethys } from './platforms/tethys';
import { tokens } from './tokens/tokens';
import { toshaio } from './platforms/Toshaio';

const _metis = {
  platforms: {
    beefyfinance,
    toshaio,
    netswap,
    tethys,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
} as const;

export const metis: ConstInterface<typeof _metis, Chain> = _metis;
