`use strict`;

import CZFPools from '../../data/degens/CZFLpPools.json';
import alpacaLpPools from '../../data/alpacaLpPools.json';
import annexPools from '../../data/degens/annexLpPools.json';
import apePolyPools from '../../data/matic/apePolyLpPools.json';
import apePools from '../../data/degens/apeLpPools.json';
import arbiNyanPools from '../../data/arbitrum/arbiNyanLpPools.json';
import autoPools from '../../data/autoLpPools.json';
import babyPools from '../../data/degens/babyLpPools.json';
import bakeryPools from '../../data/bakeryLpPools.json';
import bdollarSbdoPools from '../../data/bdollarSbdoLpPools.json';
import bingoPools from '../../data/degens/bingoLpPools.json';
import bisonPools from '../../data/degens/bisonLpPools.json';
import biswapPools from '../../data/biswapLpPools.json';
import bitiPools from '../../data/degens/bitiLpPools.json';
import blizzPools from '../../data/avax/blizzLpPools.json';
import blizzardLpPools from '../../data/degens/blizzardLpPools.json';
import blockMinePools from '../../data/degens/blockMineLpPools.json';
import boltBtdPools from '../../data/boltBtdLpPools.json';
import boltBtsPools from '../../data/boltBtsLpPools.json';
import boneswapApePools from '../../data/matic/boneswapApeLpPools.json';
import boneswapQuickPools from '../../data/matic/boneswapQuickLpPools.json';
import boneswapSushiPools from '../../data/matic/boneswapSushiLpPools.json';
import burgerPools from '../../data/burgerLpPools.json';
import cafeBscPools from '../../data/degens/cafeLpPools.json';
import cafePolyPools from '../../data/matic/cafeLpPools.json';
import cafePools from '../../data/cafeLpPools.json';
import cakeLpPools from '../../data/cakeLpPools.json';
import cakeLpV1Pools from '../../data/cakeLpV1Pools.json';
import chargePools from '../../data/degens/chargeLpPools.json';
import charmPools from '../../data/fantom/charmLpPools.json';
import comAvaxPools from '../../data/avax/comAvaxLpPools.json';
import comBscPools from '../../data/comBscLpPools.json';
import comethMultiPools from '../../data/matic/comethMultiLpPools.json';
import comethPools from '../../data/matic/comethLpPools.json';
import cronaPools from '../../data/cronos/cronaLpPools.json';
import crowPools from '../../data/crowLpPools.json';
import dfynPools from '../../data/matic/dfynLpPools.json';
import dinoPools from '../../data/matic/dinoswapLpPools.json';
import dopplePools from '../../data/doppleLpPools.json';
import dumplingPools from '../../data/degens/dumplingLpPools.json';
import elkPools from '../../data/degens/elkLpPools.json';
import ellipsisPools from '../../data/ellipsisLpPools.json';
import esterPools from '../../data/fantom/esterLpPools.json';
import farmheroBscPools from '../../data/farmheroPools.json';
import farmheroPolygonPools from '../../data/matic/farmheroPools.json';
import { fetchAmmPrices } from '../../utils/fetchAmmPrices';
import { fetchCoinGeckoPrices } from '../../utils/fetchCoinGeckoPrices';
import { fetchDmmPrices } from '../../utils/fetchDmmPrices';
import { fetchMooPrices } from '../../utils/fetchMooPrices';
import finnLpPools from '../../data/moonriver/finnLpPools.json';
import froyoPools from '../../data/fantom/froyoLpPools.json';
import fruitPools from '../../data/degens/fruitLpPools.json';
import fusefiPools from '../../data/fuse/fusefiLpPools.json';
import garudaPools from '../../data/degens/garudaLpPools.json';
import geistPools from '../../data/fantom/geistLpPools.json';
import getNonAmmPrices from './getNonAmmPrices';
import goalPools from '../../data/degens/goalLpPools.json';
import gondolaPools from '../../data/avax/gondolaLpPools.json';
import grandPools from '../../data/grandLpPools.json';
import hfiPools from '../../data/heco/hfiLpPools.json';
import honeyPools from '../../data/degens/honeyFarmLpPools.json';
import hpsPools from '../../data/degens/hpsLpPools.json';
import icarusPools from '../../data/icarusLpPools.json';
import icarusV2Pools from '../../data/icarusV2LpPools.json';
import inchPools from '../../data/1inchLpPools.json';
import ironDndPools from '../../data/degens/ironDndLpPools.json';
import ironMaticPools from '../../data/matic/ironLpPools.json';
import ironPools from '../../data/degens/ironLpPools.json';
import ironQuickPools from '../../data/matic/ironQuickLpPools.json';
import ironSwapPools from '../../data/matic/ironSwapLpPools.json';
import ironTitanPools from '../../data/matic/ironTitanLpPools.json';
import jetswapFantomPools from '../../data/fantom/jetswapLpPools.json';
import jetswapPolyPools from '../../data/matic/jetswapLpPools.json';
import jetswapPools from '../../data/jetswapLpPools.json';
import joeDualLpPools from '../../data/avax/joeDualLpPools.json';
import joePools from '../../data/avax/joeLpPools.json';
import julPools from '../../data/julLpPools.json';
import kebabPools from '../../data/kebabLpPools.json';
import keeper50pools from '../../data/matic/50kLpPools.json';
import kingdefiPools from '../../data/degens/kingdefiLpPools.json';
import krillPools from '../../data/matic/krillLpPools.json';
import kyberPools from '../../data/matic/kyberLpPools.json';
import lavaPools from '../../data/heco/lavaLpPools.json';
import lendhubPools from '../../data/heco/lendhubLpPools.json';
import liquidusPools from '../../data/cronos/liquidusLpPools.json';
import longPools from '../../data/degens/longLpPools.json';
import lydPools from '../../data/avax/lydLpPools.json';
import maiAvaxLpPools from '../../data/avax/maiLpPools.json';
import maiPools from '../../data/matic/maiLpPools.json';
import marshPools from '../../data/degens/marshLpPools.json';
import mdexBscPools from '../../data/mdexBscLpPools.json';
import mdexPools from '../../data/heco/mdexLpPools.json';
import memePools from '../../data/degens/memeFarmLpPools.json';
import merlinPools from '../../data/merlinLpPools.json';
import monsterPools from '../../data/monsterLpPools.json';
import mooTokens from '../../data/mooTokens.json';
import narPools from '../../data/narLpPools.json';
import nautPools from '../../data/degens/nautLpPools.json';
import nutsPools from '../../data/degens/nutsLpPools.json';
import nyacashPools from '../../data/nyacashLpPools.json';
import oldDmmPools from '../../data/archive/oldDmmPools.json';
import oldPools from '../../data/archive/oldLpPools.json';
import olivePools from '../../data/avax/oliveLpPools.json';
import omnifarmPools from '../../data/degens/omnifarmLpPools.json';
import ooePools from '../../data/ooeLpPools.json';
import ora from '../../data/celo/orangePool.json';
import pacocaPools from '../../data/degens/pacocaLpPools.json';
import pangolinPools from '../../data/avax/pangolinLpPools.json';
import pantherPools from '../../data/degens/pantherLpPools.json';
import pearzapBscPools from '../../data/degens/pearzapLpPools.json';
import pearzapFantomPools from '../../data/fantom/pearzapLpPools.json';
import pearzapPools from '../../data/matic/pearzapLpPools.json';
import peraPools from '../../data/degens/peraLpPools.json';
import polyCrackerPools from '../../data/matic/polyCrackerLpPools.json';
import polyQuityPools from '../../data/matic/polyQuityLpPools.json';
import polySagePools from '../../data/matic/polysageLpPools.json';
import polyalphaPools from '../../data/matic/polyalphaLpPools.json';
import polycatDfynPool from '../../data/matic/polycatDfynLpPool.json';
import polycatQuickPool from '../../data/matic/polycatQuickLpPool.json';
import polycatSushiPool from '../../data/matic/polycatSushiLpPool.json';
import polygonFarmPools from '../../data/matic/polygonFarmLpPools.json';
import polypupBallLpPools from '../../data/matic/polypupBallLpPools.json';
import polypupLpPools from '../../data/matic/polypupLpPools.json';
import polywisePools from '../../data/matic/polywiseLpPools.json';
import polyyeldApeLpPools from '../../data/matic/polyyeldApeLpPools.json';
import polyyeldL2LpPools from '../../data/matic/polyyeldL2LpPools.json';
import polyyeldQuickLpPools from '../../data/matic/polyyeldQuickLpPools.json';
import polyyeldSushiLpPools from '../../data/matic/polyyeldSushiLpPools.json';
import polyzapPools from '../../data/matic/polyzapLpPools.json';
import popsicleFantomPools from '../../data/fantom/popsicleLpPools.json';
import popsiclePools from '../../data/popsicleLpPools.json';
import pswampPools from '../../data/matic/swampLpPools.json';
import pumpyPools from '../../data/pumpyLpPools.json';
import quickDualLpPools from '../../data/matic/quickDualLpPools.json';
import quickPools from '../../data/matic/quickLpPools.json';
import rabbitPools from '../../data/degens/rabbitLpPools.json';
import ramenPools from '../../data/ramenLpPools.json';
import saltPools from '../../data/degens/saltLpPools.json';
import sandmanPools from '../../data/matic/sandmanLpPools.json';
import satisPools from '../../data/degens/satisLpPools.json';
import satisXPools from '../../data/degens/satisXLpPools.json';
import singularAvaxPools from '../../data/avax/singularLpPools.json';
import singularBscPools from '../../data/degens/singularLpPools.json';
import singularFantomPools from '../../data/fantom/singularLpPools.json';
import singularPolyPools from '../../data/matic/singularLpPools.json';
import slimePools from '../../data/degens/slimeLpPools.json';
import snowballPools from '../../data/avax/snobLpPools.json';
import solarbeamDualLpPools from '../../data/moonriver/solarbeamDualLpPools.json';
import solarbeamDualLpV2Pools from '../../data/moonriver/solarbeamDualLpV2Pools.json';
import solarbeamPools from '../../data/moonriver/solarbeamLpPools.json';
import soupPools from '../../data/degens/soupLpPools.json';
import spacePools from '../../data/degens/spaceLpPools.json';
import spiritGauges from '../../data/fantom/spiritGauges.json';
import spiritPools from '../../data/fantom/spiritPools.json';
import spongePools from '../../data/spongeLpPools.json';
import spookyPools from '../../data/fantom/spookyLpPools.json';
import stablequantPools from '../../data/degens/stablequantLpPools.json';
import stakesteakLpPools from '../../data/fantom/stakesteakLpPools.json';
import steakhouseLpPools from '../../data/fantom/steakhouseLpPools.json';
import summitPools from '../../data/fantom/summitLpPools.json';
import sushiArbPools from '../../data/arbitrum/sushiLpPools.json';
import sushiCeloPools from '../../data/celo/sushiLpPools.json';
import sushiLpPools from '../../data/matic/sushiLpPools.json';
import sushiMimPools from '../../data/arbitrum/sushiLpMimPools.json';
import sushiMr from '../../data/moonriver/sushiLp.json';
import sushiMrPools from '../../data/moonriver/sushiLpPools.json';
import sushiOhmPools from '../../data/matic/sushiOhmLpPools.json';
import sushiOnePools from '../../data/one/sushiLpPools.json';
import sushiv2Celo from '../../data/celo/sushiv2LpPools.json';
import swampyPools from '../../data/degens/swampyLpPools.json';
import swipePools from '../../data/swipeLpPools.json';
import swirlPools from '../../data/swirlLpPools.json';
import telxchangePools from '../../data/matic/telxchangePools.json';
import tenfiPools from '../../data/tenfiLpPools.json';
import tetuPools from '../../data/matic/tetuLpPools.json';
import thugsPools from '../../data/thugsLpPools.json';
import thunderPools from '../../data/degens/thunderLpPools.json';
import tofyPools from '../../data/degens/tofyLpPools.json';
import tombPools from '../../data/fantom/tombLpPools.json';
import tosdisPools from '../../data/degens/tosdisLpPools.json';
import trisolarisLpPools from '../../data/aurora/trisolarisLpPools.json';
import typhPools from '../../data/typhLpPools.json';
import typhPoolsV1 from '../../data/typhLpPoolsV1.json';
import viralataLpPools from '../../data/degens/viralataLpPools.json';
import vvsPools from '../../data/cronos/vvsLpPools.json';
import waultPools from '../../data/waultLpPools.json';
import wexPolyPools from '../../data/matic/wexPolyLpPools.json';
import wsgPools from '../../data/degens/wsgLpPools.json';
import yelPools from '../../data/degens/yelLpPools.json';
import yieldBayPools from '../../data/degens/yieldBayLpPools.json';
import zefiPools from '../../data/degens/zefiLpPools.json';
import zefiV2Pools from '../../data/degens/zefiLpPoolsV2.json';

const INIT_DELAY = 0 * 60 * 1000;
const REFRESH_INTERVAL = 5 * 60 * 1000;

// FIXME: if this list grows too big we might hit the ratelimit on initialization everytime
// Implement in case of emergency -> https://github.com/beefyfinance/beefy-api/issues/103
const pools = [
  // ...fusefiPools,
  // ...popsicleFantomPools,
  ...sushiv2Celo,
  // ...ora,
  // ...liquidusPools,
  // ...biswapPools,
  // ...solarbeamDualLpV2Pools,
  // ...charmPools,
  // ...chargePools,
  // ...blockMinePools,
  // ...oldPools,
  // ...finnLpPools,
  // ...bisonPools,
  // ...maiAvaxLpPools,
  // ...trisolarisLpPools,
  // ...solarbeamDualLpPools,
  // ...cronaPools,
  // ...vvsPools,
  // ...blizzPools,
  // ...sushiMrPools,
  // ...sushiMr,
  // ...solarbeamPools,
  // ...summitPools,
  // ...wsgPools,
  // ...pearzapFantomPools,
  ...sushiCeloPools,
  // ...quickDualLpPools,
  // ...babyPools,
  // ...cafePolyPools,
  // ...cafeBscPools,
  // ...geistPools,
  // ...singularPolyPools,
  // ...singularBscPools,
  // ...singularAvaxPools,
  // ...singularFantomPools,
  // ...jetswapFantomPools,
  // ...tetuPools,
  // ...polywisePools,
  // ...polySagePools,
  // ...pacocaPools,
  // ...annexPools,
  // ...sushiMimPools,
  // ...polyalphaPools,
  // ...sandmanPools,
  // ...pearzapBscPools,
  // ...CZFPools,
  // ...arbiNyanPools,
  // ...sushiArbPools,
  // ...longPools,
  // ...elkPools,
  // ...viralataLpPools,
  // ...joePools,
  // ...joeDualLpPools,
  // ...omnifarmPools,
  // ...tosdisPools,
  // ...yelPools,
  // ...pearzapPools,
  // ...polygonFarmPools,
  // ...steakhouseLpPools,
  // ...stakesteakLpPools,
  // ...honeyPools,
  // ...stablequantPools,
  // ...sushiOnePools,
  // ...peraPools,
  // ...polyCrackerPools,
  // ...pswampPools,
  // ...fruitPools,
  // ...dinoPools,
  // ...farmheroBscPools,
  // ...farmheroPolygonPools,
  // ...rabbitPools,
  // ...kingdefiPools,
  // ...telxchangePools,
  // ...ooePools,
  // ...ironSwapPools,
  // ...jetswapPolyPools,
  // ...maiPools,
  // ...boneswapApePools,
  // ...boneswapSushiPools,
  // ...boneswapQuickPools,
  // ...polycatDfynPool,
  // ...dfynPools,
  // ...keeper50pools,
  // ...polyQuityPools,
  // ...polypupBallLpPools,
  // ...polypupLpPools,
  // ...apePolyPools,
  // ...polyyeldL2LpPools,
  // ...polyyeldApeLpPools,
  // ...polyyeldQuickLpPools,
  // ...polyyeldSushiLpPools,
  // ...merlinPools,
  // ...icarusV2Pools,
  // ...spiritPools,
  // ...spiritGauges,
  // ...wexPolyPools,
  // ...tombPools,
  // ...burgerPools,
  // ...waultPools,
  // ...tenfiPools,
  // ...pantherPools,
  // ...lendhubPools,
  // ...polycatSushiPool,
  // ...polycatQuickPool,
  // ...ironQuickPools,
  // ...ironTitanPools,
  // ...ironMaticPools,
  // ...grandPools,
  // ...dumplingPools,
  // ...jetswapPools,
  // ...polyzapPools,
  // ...ironDndPools,
  // ...ironPools,
  // ...garudaPools,
  // ...dopplePools,
  // ...gondolaPools,
  // ...tofyPools,
  // ...goalPools,
  // ...comethMultiPools,
  // ...esterPools,
  // ...froyoPools,
  // ...spookyPools,
  // ...zefiV2Pools,
  // ...satisXPools,
  // ...satisPools,
  // ...krillPools,
  ...sushiLpPools,
  ...sushiOhmPools,
  ...quickPools,
  // ...lydPools,
  // ...icarusPools,
  // ...hfiPools,
  // ...comethPools,
  // ...popsiclePools,
  // ...lavaPools,
  // ...marshPools,
  // ...typhPools,
  // ...typhPoolsV1,
  // ...mdexBscPools,
  // ...bitiPools,
  // ...olivePools,
  // ...bingoPools,
  // ...yieldBayPools,
  // ...swampyPools,
  // ...swirlPools,
  // ...thunderPools,
  // ...zefiPools,
  // ...hpsPools,
  // ...ellipsisPools,
  // ...nautPools,
  // ...spacePools,
  // ...pumpyPools,
  // ...snowballPools,
  // ...comBscPools,
  // ...comAvaxPools,
  // ...pangolinPools,
  // ...swipePools,
  // ...slimePools,
  // ...blizzardLpPools,
  // ...nutsPools,
  // ...memePools,
  // ...julPools,
  // ...autoPools,
  // ...alpacaLpPools,
  // ...soupPools,
  // ...apePools,
  // ...saltPools,
  // ...inchPools,
  // ...crowPools,
  // ...ramenPools,
  // ...cafePools,
  // ...bdollarSbdoPools,
  // ...spongePools,
  // ...bakeryPools,
  // ...kebabPools,
  // ...boltBtdPools,
  // ...boltBtsPools,
  // ...mdexPools,
  // ...monsterPools,
  // ...narPools,
  // ...nyacashPools,
  // ...thugsPools,
  ...cakeLpV1Pools,
  ...cakeLpPools,
];

const dmmPools = [...kyberPools, ...oldDmmPools];

const coinGeckoCoins = [
  'stasis-eurs',
  'tether-eurt',
  'par-stablecoin',
  'jarvis-synthetic-euro',
  'jpyc',
];

const knownPrices = {
  BUSD: 1,
  USDT: 1,
  HUSD: 1,
  DAI: 1,
  USDC: 1,
  UST: 1,
  USDN: 1,
  cUSD: 1,
  asUSDC: 1,
};

let tokenPricesCache: Promise<any>;
let lpPricesCache: Promise<any>;

const updateAmmPrices = async () => {
  console.log('> updating amm prices');
  try {
    const coinGeckoPrices = fetchCoinGeckoPrices(coinGeckoCoins);
    const ammPrices = fetchAmmPrices(pools, knownPrices);
    const dmmPrices = fetchDmmPrices(dmmPools, knownPrices);

    const mooPrices = ammPrices.then(async ({ poolPrices, tokenPrices }) => {
      return await fetchMooPrices(mooTokens, tokenPrices, poolPrices);
    });

    const tokenPrices = ammPrices.then(async ({ _, tokenPrices }) => {
      const dmm = await dmmPrices;
      const mooTokenPrices = await mooPrices;
      return { ...tokenPrices, ...dmm.tokenPrices, ...mooTokenPrices, ...(await coinGeckoPrices) };
    });

    const lpPrices = ammPrices.then(async ({ poolPrices, _ }) => {
      const dmm = await dmmPrices;
      const nonAmmPrices = await getNonAmmPrices(await tokenPrices);
      return { ...poolPrices, ...dmm.poolPrices, ...nonAmmPrices };
    });

    await tokenPrices;
    await lpPrices;

    tokenPricesCache = tokenPrices;
    lpPricesCache = lpPrices;

    return {
      tokenPrices,
      lpPrices,
    };
  } catch (err) {
    console.error(err);
  } finally {
    setTimeout(updateAmmPrices, REFRESH_INTERVAL);
    console.log('> updated amm prices');
  }
};

export const getAmmTokensPrices = async () => {
  return await tokenPricesCache;
};

export const getAmmLpPrices = async () => {
  return await lpPricesCache;
};

export const getAmmTokenPrice = async tokenSymbol => {
  const tokenPrices = await getAmmTokensPrices();
  if (tokenPrices.hasOwnProperty(tokenSymbol)) {
    return tokenPrices[tokenSymbol];
  }
  console.error(`Unknown token '${tokenSymbol}'. Consider adding it to .json file`);
};

export const getAmmLpPrice = async lpName => {
  const lpPrices = await getAmmLpPrices();
  if (lpPrices.hasOwnProperty(lpName)) {
    return lpPrices[lpName];
  }
  console.error(`Unknown liquidity pair '${lpName}'. Consider adding it to .json file`);
};

const init =
  // Flexible delayed initialization used to work around ratelimits
  new Promise((resolve, reject) => {
    setTimeout(resolve, INIT_DELAY);
  }).then(updateAmmPrices);

tokenPricesCache = init.then(({ tokenPrices, lpPrices }) => tokenPrices);
lpPricesCache = init.then(({ tokenPrices, lpPrices }) => lpPrices);
