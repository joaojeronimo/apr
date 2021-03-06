const limit = require('./limit');

/**
 * @kind function
 * @name series
 * @memberof some
 * @param {Array|Object|Iterable} input
 * @param {Function} iteratee
 * @returns {Promise}
 */
module.exports = (input, fn, opts) => limit(input, 1, fn, opts);
