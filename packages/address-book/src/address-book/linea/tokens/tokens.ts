import type { Token } from '../../../types/token.js';

const ETH = {
  name: 'Wrapped Ether',
  address: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
  symbol: 'WETH',
  oracleId: 'WETH',
  decimals: 18,
  chainId: 59144,
  website: 'https://weth.io/',
  description: 'Ether or ETH is the native currency built on the Ethereum blockchain.',
  bridge: 'linea-canonical',
  logoURI: 'https://arbiscan.io/token/images/weth_28.png',
  documentation: 'https://ethereum.org/en/developers/docs/',
} as const satisfies Token;

export const tokens = {
  ETH,
  WNATIVE: ETH,
  WETH: ETH,
  USDC: {
    name: 'USD Coin',
    symbol: 'USDC',
    oracleId: 'USDC',
    address: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
    chainId: 59144,
    decimals: 6,
    website: 'https://www.circle.com/usdc',
    documentation: 'https://developers.circle.com/docs',
    description:
      'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802.svg',
    bridge: 'linea-canonical',
  },
  USDT: {
    name: 'USDT',
    symbol: 'USDT',
    oracleId: 'USDT',
    address: '0xA219439258ca9da29E9Cc4cE5596924745e12B93',
    chainId: 59144,
    decimals: 6,
    website: 'https://tether.to/',
    documentation: 'https://tether.to/en/how-it-works',
    description:
      'Tether is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity like Gold. Tether is the first stablecoin to be created and it is the most popular stablecoin used in the ecosystem.',
    logoURI: 'https://hecoinfo.com/token/images/USDTHECO_32.png',
    bridge: 'linea-canonical',
  },
  DAI: {
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    oracleId: 'DAI',
    address: '0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5',
    chainId: 59144,
    decimals: 18,
    website: 'https://makerdao.com/',
    documentation: 'https://docs.makerdao.com/',
    description:
      'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    bridge: 'linea-canonical',
  },
  WBTC: {
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    oracleId: 'WBTC',
    address: '0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4',
    chainId: 59144,
    decimals: 8,
    website: 'https://wbtc.network/',
    description:
      'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    bridge: 'linea-canonical',
  },
  wstETH: {
    name: 'Lido Wrapped Staked ETH',
    symbol: 'wstETH',
    oracleId: 'wstETH',
    address: '0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F',
    chainId: 59144,
    decimals: 18,
    website: 'https://lido.fi/',
    documentation: 'https://docs.lido.fi/',
    description:
      'Lido is a liquid staking solution for ETH backed by industry-leading staking providers. Lido lets users stake their ETH - without locking assets or maintaining infrastructure - whilst participating in on-chain activities, e.g. lending. Lido attempts to solve the problems associated with initial ETH staking - illiquidity, immovability and accessibility - making staked ETH liquid and allowing for participation with any amount of ETH to improve security of the Ethereum network.',
    logoURI: '',
    bridge: 'linea-canonical',
  },
  MENDI: {
    name: 'MENDI',
    symbol: 'MENDI',
    oracleId: 'MENDI',
    address: '0x43E8809ea748EFf3204ee01F08872F063e44065f',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://mendi.finance/',
    description:
      'MENDI is the reward token of Mendi Finance, a lending/borrowing protocol on Linea forked from Compound V2.',
    documentation: 'https://docs.mendi.finance/',
    bridge: 'native',
  },
  LYNX: {
    name: 'Lynex Token',
    symbol: 'LYNX',
    oracleId: 'LYNX',
    address: '0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://www.lynex.fi/',
    description:
      'Lynex democratizes sophisticated liquidity strategies, seamlessly connecting everyday traders with expert-level capabilities. Our platform features a competitive ecosystem of Automated Liquidity Managers (ALMs) and strategists, all striving to optimize returns, minimize risks like impermanent loss, and boost overall efficiency for every user.',
    documentation: 'https://lynex.gitbook.io/lynex-docs/protocol-overview/about-lynex',
    bridge: 'native',
    risks: ['NO_TIMELOCK'],
  },
  oLYNX: {
    name: 'Option LYNX Token',
    symbol: 'oLYNX',
    oracleId: 'oLYNX',
    address: '0x63349BA5E1F71252eCD56E8F950D1A518B400b60',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://www.lynex.fi/',
    description:
      'Lynex democratizes sophisticated liquidity strategies, seamlessly connecting everyday traders with expert-level capabilities. Our platform features a competitive ecosystem of Automated Liquidity Managers (ALMs) and strategists, all striving to optimize returns, minimize risks like impermanent loss, and boost overall efficiency for every user.',
    documentation: 'https://lynex.gitbook.io/lynex-docs/protocol-overview/about-lynex',
    bridge: 'native',
  },
  MAI: {
    name: 'Mai Stablecoin',
    symbol: 'MAI',
    oracleId: 'lMAI',
    address: '0xf3B001D64C656e30a62fbaacA003B1336b4ce12A',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://www.mai.finance/',
    description:
      "MAI is a stablecoin collateralized by your crypto holdings. It's powered by Qi Dao, a protocol that enables any cryptocurrency community to create stablecoins backed by their native tokens.",
    documentation: 'https://docs.mai.finance/',
    bridge: 'native',
  },
  DUSD: {
    name: 'Davos.xyz USD',
    symbol: 'DUSD',
    oracleId: 'DUSD',
    address: '0xA88B54E6b76Fb97CdB8eCAE868f1458e18a953F4',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://davos.xyz/',
    description:
      'The Davos Protocol is an innovative collateralised debt position (CDP) protocol designed to facilitate the seamless minting of DUSD, an inflation-proof omnichain stablecoin, by leveraging Liquid Staking Tokens (LSTs). The protocol aims to address the challenges faced by traditional CDPs in decentralised finance (DeFi) by incorporating an unbiased monetary policy and fair borrowing rates, thereby enhancing user protection and promoting broader DeFi adoption. ',
    documentation: 'https://davos.xyz/assets/davos_whitepaper.pdf',
    bridge: 'native',
  },
  'USD+': {
    name: 'USD+',
    symbol: 'USD+',
    oracleId: 'lineaUSD+',
    address: '0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376',
    chainId: 59144,
    decimals: 6,
    logoURI: '',
    website: 'https://overnight.fi/',
    description:
      'USD+ is USDC that pays you yield daily via rebase.  It is 100% collateralized with assets immediately convertible into USDC.  Yield is generated via strategies such as lending and stable-to-stable pools. Initial strategies include Aave, Rubicon, and Pika.',
    bridge: 'native',
    documentation: 'https://docs.overnight.fi/',
  },
  'USDT+': {
    name: 'USDT+',
    symbol: 'USDT+',
    oracleId: 'lineaUSDT+',
    address: '0x1E1F509963A6D33e169D9497b11c7DbFe73B7F13',
    chainId: 59144,
    decimals: 6,
    logoURI: '',
    website: 'https://overnight.fi/',
    description:
      'USDT+ is USDT that pays you yield daily via rebase.  It is 100% collateralized with assets immediately convertible into USDT.  Yield is generated via strategies such as lending and stable-to-stable pools. Initial strategies include Aave, Rubicon, and Pika.',
    bridge: 'native',
    documentation: 'https://docs.overnight.fi/',
  },
  ezETH: {
    name: 'Renzo Restaked ETH Token',
    symbol: 'ezETH',
    oracleId: 'ezETH',
    address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://www.renzoprotocol.com/',
    description:
      'Renzo ezETH is a Liquid Restaking Token (LRT) and Strategy Manager for EigenLayer. It is the interface to the EigenLayer ecosystem securing Actively Validated Services (AVSs) and offering a higher yield than ETH staking.',
    documentation: 'https://docs.renzoprotocol.com/docs/',
    bridge: 'connext',
    risks: ['NO_TIMELOCK'],
  },
  STONE: {
    name: 'StakeStone Ether',
    symbol: 'STONE',
    oracleId: 'STONE',
    address: '0x93F4d0ab6a8B4271f4a28Db399b5E30612D21116',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://stakestone.io/',
    description:
      'StakeStone is an omni-chain LST (Liquid Staking Token) protocol aiming to bring native staking yields and liquidity to Layer 2s in a decentralized manner.',
    documentation: 'https://docs.stakestone.io/stakestone',
    bridge: 'layer-zero',
    risks: ['NO_TIMELOCK'],
  },
  NILE: {
    name: 'NILE Token',
    symbol: 'NILE',
    oracleId: 'NILE',
    address: '0xAAAac83751090C6ea42379626435f805DDF54DC8',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://www.thenile.exchange/swap',
    description:
      'NILE is a next-gen liquidity protocol optimizing for high-frequency LPs and Layer 2 cost structures, inheriting efficiency from RAMSES on Arbitrum.',
    documentation: 'https://docs.thenile.exchange/',
    bridge: 'native',
  },
  LUSD: {
    name: 'LUSD Stablecoin',
    symbol: 'LUSD',
    oracleId: 'LUSD',
    address: '0x63bA74893621d3d12F13CEc1e86517eC3d329837',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://www.liquity.org/',
    description:
      'Liquity is a decentralized borrowing protocol that allows you to draw interest-free loans against Ether used as collateral. Loans are paid out in LUSD (a USD pegged stablecoin) and need to maintain a minimum collateral ratio of 110%.',
    bridge: 'linea-canonical',
    documentation: 'https://docs.liquity.org/',
  },
  weETH: {
    name: 'Wrapped eETH',
    symbol: 'weETH',
    oracleId: 'weETH',
    address: '0x1Bf74C010E6320bab11e2e5A532b5AC15e0b8aA6',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://ether.fi/',
    description:
      'Stake ETH, get eETH - a natively restaked liquid staking token that fuels DeFi and decentralizes Ethereum.',
    bridge: 'stargate',
    documentation: 'https://etherfi.gitbook.io/etherfi',
    risks: ['NO_TIMELOCK'],
  },
  inETH: {
    name: 'Inception ETH',
    symbol: 'inETH',
    oracleId: 'lineainETH',
    address: '0x5A7a183B6B44Dc4EC2E3d2eF43F98C5152b1d76d',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://www.inceptionlrt.com/',
    description:
      'Inception ETH is a pioneering DeFi platform that provides a full solution for liquid restaking. Inception ETH is designed to streamline and improve the restaking process by combining Isolated and Native Liquid Restaking and a diverse array of Liquid Restaking Tokens.',
    bridge: 'inception',
    documentation: 'https://docs.inceptionlrt.com/',
    risks: ['NO_TIMELOCK'],
  },
  wrsETH: {
    name: 'rsETHWrapper',
    symbol: 'wrsETH',
    oracleId: 'wrsETH',
    address: '0xD2671165570f41BBB3B0097893300b6EB6101E6C',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://kelpdao.xyz/',
    description:
      'The rsETHWrapper contract serves as a standardized interface for rsETH tokens, which are Liquid Restaked Tokens (LRT) issued by Kelp DAO. Designed to offer liquidity to illiquid assets deposited into restaking platforms like EigenLayer, users can interact with these tokens seamlessly.',
    bridge: 'stargate',
    risks: ['NO_TIMELOCK'],
  },
  FOXY: {
    name: 'Foxy',
    symbol: 'FOXY',
    oracleId: 'FOXY',
    address: '0x5FBDF89403270a1846F5ae7D113A989F850d1566',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://www.welikethefox.io/',
    description:
      'Foxy is the mascot of the Linea blockchain. Every chain needs a champion, and we like the fox.',
    bridge: 'native',
    risks: ['NO_TIMELOCK', 'LARGE_HOLDERS'],
  },
} as const satisfies Record<string, Token>;
