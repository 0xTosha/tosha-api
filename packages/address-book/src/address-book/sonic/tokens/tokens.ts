import type { Token } from '../../../types/token.js';

const S = {
  name: 'Wrapped S',
  address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
  symbol: 'wS',
  oracleId: 'wS',
  decimals: 18,
  chainId: 146,
  website: 'https://www.soniclabs.com/',
  description:
    'Wrapped S, (S) Sonic is an EVM layer-1 platform that offers developers attractive incentives and powerful infrastructure.',
  bridge: 'sonic-canonical',
  logoURI: '',
  documentation: 'https://www.soniclabs.com/developer-resources',
} as const satisfies Token;

export const tokens = {
  S,
  WS: S,
  WNATIVE: S,
  EQUAL: {
    name: 'Equalizer on Sonic',
    symbol: 'EQUAL',
    oracleId: 'EQUAL',
    address: '0xddF26B42C1d903De8962d3F79a74a501420d5F19',
    chainId: 146,
    decimals: 18,
    logoURI: '',
    website: 'https://sonic.equalizer.exchange/',
    description:
      'Equalizer Exchange is the fastest liquidity hub providing optimized trading and earning opportunities.',
    documentation: '',
    bridge: 'native',
  },
  USDCe: {
    name: 'Bridged USDC (Sonic Labs)',
    symbol: 'USDC.e',
    oracleId: 'sUSDCe',
    address: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
    chainId: 146,
    decimals: 6,
    logoURI: '',
    website: 'https://www.centre.io/',
    description:
      'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
    documentation: '',
    bridge: 'sonic-canonical',
  },
  WETH: {
    name: 'Wrapped Ether on Sonic',
    symbol: 'WETH',
    oracleId: 'WETH',
    address: '0x50c42dEAcD8Fc9773493ED674b675bE577f2634b',
    chainId: 146,
    decimals: 18,
    logoURI: '',
    website: 'https://weth.io/',
    description: 'Ether or ETH is the native currency built on the Ethereum blockchain.',
    bridge: 'sonic-canonical',
    documentation: 'https://ethereum.org/en/developers/docs/',
  },
  stS: {
    name: 'Beets Staked Sonic',
    symbol: 'stS',
    oracleId: 'stS',
    address: '0xE5DA20F15420aD15DE0fa650600aFc998bbE3955',
    chainId: 146,
    decimals: 18,
    logoURI: '',
    website: 'https://beets.fi/stake',
    description:
      'stS is a liquid-staked token that users receive when they stake $S on the Beets platform. The value of stS naturally appreciates in relation to $S thanks to native network staking rewards from validator delegation being automatically compounded within the token.',
    documentation: 'https://docs.beets.fi/',
    bridge: 'native',
  },
  scUSD: {
    name: 'Sonic USD',
    symbol: 'scUSD',
    oracleId: 'scUSD',
    address: '0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE',
    chainId: 146,
    decimals: 6,
    logoURI: '',
    website: 'https://rings.money/',
    description:
      'Rings is a meta-stablecoin for USD & ETH offering competitive yield for stakers, providing deep liquidity for Sonic DeFi, and funding Sonic DeFi projects via its lockers.',
    documentation: 'https://docs.rings.money/',
    bridge: 'layer-zero',
  },
  BRUSH: {
    name: 'PaintSwap',
    symbol: 'BRUSH',
    oracleId: 'BRUSH',
    address: '0xE51EE9868C1f0d6cd968A8B8C8376Dc2991BFE44',
    chainId: 146,
    decimals: 18,
    logoURI: '',
    website: 'https://paintswap.io/',
    description:
      'PaintSwap is a decentralized finance powerhouse, combining an open NFT marketplace with a dedicated financial NFT marketplace.',
    documentation: 'https://docs.paintswap.finance/tokenomics/brush',
    bridge: 'layer-zero',
  },
  LUDWIG: {
    name: 'LUDWIG',
    symbol: 'LUDWIG',
    oracleId: 'LUDWIG',
    address: '0xe6cc4D855B4fD4A9D02F46B9adae4C5EfB1764B5',
    chainId: 146,
    decimals: 18,
    logoURI: '',
    website: 'https://ludwigonsonic.com/',
    description:
      'Ludwig On Sonic (LUDWIG) is your meme gateway to exploring Balancer technology on the Sonic network. The phrase "High Speed, Perfect Beets" highlights the Sonic network’s lightning-fast performance, while "Beets" refers to the DEX where our primary pools and liquidity are hosted.',
    bridge: 'native',
  },
  BEETS: {
    name: 'BEETS',
    symbol: 'BEETS',
    oracleId: 'BEETS',
    address: '0x2D0E0814E62D80056181F5cd932274405966e4f0',
    chainId: 146,
    decimals: 18,
    logoURI: '',
    website: 'https://beets.fi/',
    bridge: 'native',
    description:
      'BEETS is the governance token for the Beethoven X protocol. Built on Balancer V2, Beethoven X is the first next-generation AMM protocol on Fantom.',
    documentation: 'https://docs.beets.fi/beets/tokenomics',
  },
  SHADOW: {
    name: 'SHADOW',
    symbol: 'SHADOW',
    oracleId: 'SHADOW',
    address: '0x3333b97138D4b086720b5aE8A7844b1345a33333',
    chainId: 146,
    decimals: 18,
    logoURI: '',
    website: 'https://www.shadow.so/',
    bridge: 'native',
    description:
      'SHADOW is the governance token for the Shadow Exchange. Shadow Exchange is a concentrated liquidity layer and exchange built on the Sonic network, powered by x(3,3) — a more fluid and accessible incentive model.',
    documentation: 'https://docs.shadow.so/',
    risks: ['LARGE_HOLDERS'],
  },
  SWPx: {
    name: 'SwapX',
    symbol: 'SWPx',
    oracleId: 'SWPx',
    address: '0xA04BC7140c26fc9BB1F36B1A604C7A5a88fb0E70',
    chainId: 146,
    decimals: 18,
    logoURI: '',
    website: 'https://swapx.fi/',
    bridge: 'native',
    description:
      'SWPx is the governance token for the SwapX. SwapX is a decentralized exchange (DEX) which aims to become the leading platform for native concentrated liquidity on Sonic Blockchain.',
    documentation: 'https://swapxfi.gitbook.io/swapx-docs',
    risks: ['NO_TIMELOCK'],
  },
  mooBIFI: {
    name: 'Bridged BIFI Vault Receipt',
    symbol: 'mooBIFI',
    oracleId: 'smooBIFI',
    address: '0xc55E93C62874D8100dBd2DfE307EDc1036ad5434',
    chainId: 146,
    decimals: 18,
    website: 'https://beefy.com',
    description:
      "The incentive-bearing Beefy Token (mooBIFI) applies the magic of Beefy's autocompounding technology to the BIFI token. It is the vault token for the BIFI Vault, which automatically claims and swaps governance incentives into more BIFI, and redeposits to unlock exponential growth. On chains other than Ethereum, mooBIFI is a bridged copy of the native Ethereum token, and cannot be returned to BIFI without first bridging back to Ethereum. mooBIFI holders on all chains retain their full voting power corresponding to the underlying amount of BIFI deposited and compounding on Ethereum.",
    logoURI: 'https://beefy.com/icons/128/mooBIFI.png',
    documentation: 'https://docs.beefy.finance/',
    bridge: 'beefy',
  },
  scETH: {
    name: 'Sonic ETH',
    symbol: 'scETH',
    oracleId: 'scETH',
    address: '0x3bcE5CB273F0F148010BbEa2470e7b5df84C7812',
    chainId: 146,
    decimals: 18,
    logoURI: '',
    website: 'https://rings.money/',
    description:
      'Rings is a meta-stablecoin for USD & ETH offering competitive yield for stakers, providing deep liquidity for Sonic DeFi, and funding Sonic DeFi projects via its lockers.',
    documentation: 'https://docs.rings.money/',
    bridge: 'layer-zero',
  },
} as const satisfies Record<string, Token>;
