const { getOasisToshaApy } = require('./getOasisToshaApy');
const { getOasisToshaGovApy } = require('./getOasisToshaGovApy');
const getYuzuswapApys = require('./getYuzuswapApys');

const getApys = [getYuzuswapApys, getOasisToshaApy];

const getOasisApys = async () => {
  let apys = {};
  let apyBreakdowns = {};

  let promises = [];
  getApys.forEach(getApy => promises.push(getApy()));
  const results = await Promise.allSettled(promises);
  console.log(results);

  for (const result of results) {
    if (result.status !== 'fulfilled') {
      console.warn('getOasisApys error', result.reason);
      console.warn(result);
      continue;
    }

    // Set default APY values
    let mappedApyValues = result.value;
    let mappedApyBreakdownValues = {};

    // Loop through key values and move default breakdown format
    // To require totalApy key
    for (const [key, value] of Object.entries(result.value)) {
      mappedApyBreakdownValues[key] = {
        totalApy: value,
      };
    }

    // Break out to apy and breakdowns if possible
    let hasApyBreakdowns = 'apyBreakdowns' in result.value;
    if (hasApyBreakdowns) {
      mappedApyValues = result.value.apys;
      mappedApyBreakdownValues = result.value.apyBreakdowns;
    }

    apys = { ...apys, ...mappedApyValues };

    apyBreakdowns = { ...apyBreakdowns, ...mappedApyBreakdownValues };
  }

  return {
    apys,
    apyBreakdowns,
  };
};

module.exports = { getOasisApys };
