var assert = require('assert');
var common = require('./common');

function sum (operation) {
  return function(from, to) {
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
}

var sumOfNumbers = sum(function (n) { return n; });
var numbersResult = sumOfNumbers(1, 3);
assert(numbersResult === 6, 'Sum of numbers failed: Expected 6, Got ' + numbersResult);

var sumOfCubes = sum(function (n) { return n * n * n; });
var cubesResult = sumOfCubes(1, 3);
assert(cubesResult === 36, 'Sum of cubes failed: Expected 36, Got ' + cubesResult);

var sumOfFactorials = sum(common.factorial);
var factorialsResult = sumOfFactorials(1, 3);
assert(factorialsResult === 9, 'Sum of factorials failed: Expected 9, Got ' + factorialsResult);
