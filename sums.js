var assert = require('assert');
var common = require('./common');

function sumOfOperation (from, to, operation) {
  function loop(current, accumulator) {
    if (current > to) { return accumulator; }
    else {
      // This changes for different problems
      var accumulation = accumulator + operation(current);

      // This will always be like this
      return loop(current + 1, accumulation)
    }
  }

  return loop(from, 0);
}

var sumOfNumbers = sumOfOperation(1, 3, function (n) { return n; });
assert(sumOfNumbers === 6, 'Sum of numbers failed: Expected 6, Got ' + sumOfNumbers);

var sumOfCubes = sumOfOperation(1, 3, function (n) { return n * n * n; });
assert(sumOfCubes === 36, 'Sum of cubes failed: Expected 36, Got ' + sumOfCubes);

var sumOfFactorials = sumOfOperation(1, 3, common.factorial);
assert(sumOfFactorials === 9, 'Sum of factorials failed: Expected 9, Got ' + sumOfFactorials);
