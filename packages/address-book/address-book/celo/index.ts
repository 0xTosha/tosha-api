import Chain from '../../types/chain';
import { ConstInterface } from '../../types/const';
import { beefyfinance } from './platforms/beefyfinance';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';
import { sushiCelo } from './platforms/sushiCelo';
import { tokens } from './tokens/tokens';
import { toshafinance } from './platforms/toshafinance';

const _celo = {
  platforms: {
    beefyfinance,
    toshafinance,
    sushiCelo,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
} as const;

export const celo: ConstInterface<typeof _celo, Chain> = _celo;
