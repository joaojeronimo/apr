module.exports = {
  each: require('./forEach'),
  eachSeries: require('./forEach').series,
  eachLimit: require('./forEach').limit,
  forEach: require('./forEach'),
  forEachSeries: require('./forEach').series,
  forEachLimit: require('./forEach').limit,
  forEachOf: require('./forEach'),
  forEachOfSeries: require('./forEach').series,
  forEachOfLimit: require('./forEach').limit,
  eachOf: require('./forEach'),
  eachOfSeries: require('./forEach').series,
  eachOflimit: require('./forEach').limit,
  map: require('./map'),
  mapSeries: require('./map').series,
  mapLimit: require('./map').limit,
  mapOf: require('./map'),
  mapOfSeries: require('./map').series,
  mapOfLimit: require('./map').limit,
  reduce: require('./reduce'),
  reduceSeries: require('./reduce').series,
  reduceLimit: require('./reduce').limit,
  reduceOf: require('./reduce'),
  reduceOfSeries: require('./reduce').series,
  reduceOfLimit: require('./reduce').limit,
  parallel: require('./parallel'),
  concurrent: require('./parallel')
};
