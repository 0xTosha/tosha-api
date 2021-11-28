import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';

const CELO = {
  chainId: 42220,
  address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
  decimals: 18,
  name: 'CELO',
  symbol: 'CELO',
  logoURI:
    'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png',
} as const;

const _tokens = {
  CELO,
  ALPHABETA: {
    chainId: 42220,
    address: '0x2c9f82812d44c3f996d56fb3cc8aad72b95576cf',
    decimals: 9,
    name: 'ALPHABETA',
    symbol: 'ALPHABETA',
    website: 'https://tosha/#/stake',
    description:
      'Wonderland is the first decentralized reserve currency protocol available on the Avalanche Network based on the TIME token. Each TIME token is backed by a basket of assets (e.g., MIM, TIME-AVAX LP Tokens etc etc) in the Wonderland treasury, giving it an intrinsic value that it cannot fall below. Wonderland also introduces economic and game-theoretic dynamics into the market through staking and bonding.',
    logoURI:
      'https://gblobscdn.gitbook.com/assets%2F-MhzA-YXhEZ1wM1iWJEo%2F-MiQzpjkumrqycMXcTj6%2F-MiR0TC116IqSmoKpkwX%2FTime%20Token.png?alt=media&token=9ba1004c-5e23-4e6e-b4f8-19f109c557d0',
  },
  MAI: {
    chainId: 43114,
    address: '0x3B55E45fD6bd7d4724F5c47E0d1bCaEdd059263e',
    decimals: 18,
    name: 'MiMatic',
    symbol: 'MAI',
    website: 'https://www.mai.finance/',
    description:
      "MAI is a stable coin collateralized by your MATIC holdings. It's powered by Qi Dao, a protocol that enables any cryptocurrency community to create stablecoins backed by their native tokens.",
    logoURI: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png',
  },
  aQI: {
    chainId: 43114,
    address: '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
    decimals: 18,
    name: 'BenQi',
    symbol: 'QI',
    website: 'https://app.benqi.fi/overview',
    description: 'BenQI is lending protocol on the Avalanche blockchain',
    logoURI:
      'https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5/logo.png',
  },
  BIFI: {
    chainId: 43114,
    address: '0xd6070ae98b8069de6B494332d1A1a81B6179D960',
    decimals: 18,
    name: 'Binance Smart Chain',
    symbol: 'BIFI',
    website: 'https://www.beefy.finance/',
    description:
      'Beefy Finance is a Decentralized, Multi-Chain Yield Optimizer platform that allows its users to earn compound interest on their crypto holdings.',
    logoURI:
      'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/images/single-assets/BIFI.png',
  },
  BNB: {
    chainId: 43114,
    address: '0x264c1383EA520f73dd837F915ef3a732e204a493',
    decimals: 18,
    name: 'Binance Smart Chain',
    symbol: 'BNB',
    website: 'https://www.binance.com/',
    description:
      'Binance Coin (BNB) is an exchange-based token created and issued by the cryptocurrency exchange Binance. Initially created on the Ethereum blockchain as an ERC-20 token in July 2017, BNB was migrated over to Binance Chain in February 2019 and became the native coin of the Binance Chain.',
    logoURI:
      'https://pancakeswap.finance/images/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png',
  },
  PNG: {
    chainId: 43114,
    address: '0x60781C2586D68229fde47564546784ab3fACA982',
    decimals: 18,
    name: 'Pangolin',
    symbol: 'PNG',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x60781C2586D68229fde47564546784ab3fACA982/logo.png',
  },
  
} as const;

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;
