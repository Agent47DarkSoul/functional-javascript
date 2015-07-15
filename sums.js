var assert = require('assert');
var common = require('./common');

function sumOfOperation (from, to, operation) {
  if (from > to) {
    return 0;
  } else {
    return operation(from) + sumOfOperation(from + 1, to, operation);
  }
}

var sumOfNumbers = sumOfOperation(1, 3, function (n) { return n; });
assert(sumOfNumbers === 6, 'Sum of numbers failed: Expected 6, Got ' + sumOfNumbers);

var sumOfCubes = sumOfOperation(1, 3, function (n) { return n * n * n; });
assert(sumOfCubes === 36, 'Sum of cubes failed: Expected 36, Got ' + sumOfCubes);

var sumOfFactorials = sumOfOperation(1, 3, common.factorial);
assert(sumOfFactorials === 9, 'Sum of factorials failed: Expected 9, Got ' + sumOfFactorials);
