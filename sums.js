var common = require('./common');

exports.sum = common.buildSequencer(function (a, b) { return a + b }, 0);
