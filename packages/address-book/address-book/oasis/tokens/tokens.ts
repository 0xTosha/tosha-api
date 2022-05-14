import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';

const ROSE = {
  name: 'Wrapped ROSE',
  address: '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733',
  symbol: 'wROSE',
  decimals: 18,
  chainId: 42262,
  website: 'https://www.oasisprotocol.org/',
  description:
    'METIS IS SOLVING ETHEREUMS SIX BIGGEST CHALLENGES. SIMPLICITY. SPEED. STORAGE. SCALABILITY. SECURITY. SAVINGS.',
  logoURI: '',
} as const;

const _tokens = {
  ROSE,
  ORANGE: {
    name: 'Tosha.io',
    symbol: 'TOSHA',
    address: '0x79801BFFA6699d2Be730f818e9A0ad49BBc65951',
    chainId: 42262,
    decimals: 18,
    website: 'https://tosha.io/',
    description:
      'Tosha.io is a Decentralized, Multi-Chain Yield Optimizer platform that allows its users to earn compound interest on their crypto holdings.',
    logoURI: 'https://raw.githubusercontent.com/0xTosha/tosha-app/blob/DEV/src/images/logot.png',
  },
  YUZU: {
    name: 'Yuzu',
    symbol: 'YUZU',
    address: '0xf02b3e437304892105992512539F769423a515Cb',
    chainId: 42262,
    decimals: 18,
    website:
      'https://app.yuzu-swap.com/#/swap?inputCurrency=YUZU&outputCurrency=0x79801BFFA6699d2Be730f818e9A0ad49BBc65951',
    description:
      'Tosha.io is a Decentralized, Multi-Chain Yield Optimizer platform that allows its users to earn compound interest on their crypto holdings.',
    logoURI: 'https://raw.githubusercontent.com/0xTosha/tosha-app/blob/DEV/src/images/logot.png',
  },
} as const;

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;
