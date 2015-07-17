var assert = require('assert');
var common = require('./common');

function product (operation) {
  return function (from, to) {
    function loop (current_number, accumulator) {
      if (current_number > to) { return accumulator; }
      else {
        return loop(current_number + 1, operation(current_number) * accumulator);
      }
    }

    return loop(from, 1);
  }
}

var sumOfIntegers = product(function (n) { return n; })(1, 4);
assert(sumOfIntegers === 24, 'Product of integers failed: ' + sumOfIntegers);

var sumOfCubes = product(function (n) { return n * n * n; })(1, 3);
assert(sumOfCubes === 216, 'Product of cubes failed: ' + sumOfIntegers);

var sumOfFactorials = product(function (n) { return common.factorial(n); })(1, 3);
assert(sumOfFactorials === 12, 'Products of factorials failed: ' + sumOfFactorials);

function advancedFactorial (number) {
  var basicProduct = product(function (n) { return n; });
  return basicProduct(1, number);
}

var factorialResult = advancedFactorial(5);
assert(factorialResult === 120, 'Factorial using product failed: ' + factorialResult);
