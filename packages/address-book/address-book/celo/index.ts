import Chain from '../../types/chain';
import { ConstInterface } from '../../types/const';
import { beefyfinance } from './platforms/beefyfinance';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';
import { tokens } from './tokens/tokens';
import { tosha } from './platforms/tosha';

const _celo = {
  platforms: {
    tosha,
    beefyfinance,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export const celo: ConstInterface<typeof _celo, Chain> = _celo;
