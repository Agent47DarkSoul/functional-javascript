var common = require('./common');

exports.product = common.buildSequencer(function (val1, val2) { return val1 * val2; }, 1);
